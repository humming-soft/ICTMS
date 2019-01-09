/*
Copyright 2017 Ziadin Givan

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

https://github.com/givan/VvvebJs
*/


// Simple JavaScript Templating
// John Resig - https://johnresig.com/ - MIT Licensed
(function () {
	var cache = {};

	this.tmpl = function tmpl(str, data) {
		// Figure out if we're getting a template, or if we need to
		// load the template - and be sure to cache the result.
		var fn = /^[-a-zA-Z0-9]+$/.test(str) ?
			cache[str] = cache[str] ||
			tmpl(document.getElementById(str).innerHTML) :

			// Generate a reusable function that will serve as a template
			// generator (and which will be cached).
			new Function("obj",
				"var p=[],print=function(){p.push.apply(p,arguments);};" +

				// Introduce the data as local variables using with(){}
				"with(obj){p.push('" +

				// Convert the template into pure JavaScript
				str
				.replace(/[\r\t\n]/g, " ")
				.split("{%").join("\t")
				.replace(/((^|%})[^\t]*)'/g, "$1\r")
				.replace(/\t=(.*?)%}/g, "',$1,'")
				.split("\t").join("');")
				.split("%}").join("p.push('")
				.split("\r").join("\\'") +
				"');}return p.join('');");
		// Provide some basic currying to the user
		return data ? fn(data) : fn;
	};
})();

var delay = (function () {
	var timer = 0;
	return function (callback, ms) {
		clearTimeout(timer);
		timer = setTimeout(callback, ms);
	};
})();

function getStyle(el, styleProp) {
	value = "";
	//var el = document.getElementById(el);
	if (el.style && el.style.length > 0 && el.style[styleProp]) //check inline
		var value = el.style[styleProp];
	else
	if (el.currentStyle) //check defined css
		var value = el.currentStyle[styleProp];
	else if (window.getComputedStyle) {
		var value = document.defaultView.getDefaultComputedStyle ?
			document.defaultView.getDefaultComputedStyle(el, null).getPropertyValue(styleProp) :
			window.getComputedStyle(el, null).getPropertyValue(styleProp);
	}

	return value;
}

function isElement(obj) {
	return (typeof obj === "object") &&
		(obj.nodeType === 1) && (typeof obj.style === "object") &&
		(typeof obj.ownerDocument === "object") /* && obj.tagName != "BODY"*/ ;
}


var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

if (Hmwks === undefined) var Hmwks = {};

Hmwks.defaultComponent = "_base";
Hmwks.preservePropertySections = true;
Hmwks.dragIcon = 'icon'; //icon = use component icon when dragging | html = use component html to create draggable element

Hmwks.baseUrl = document.currentScript ? document.currentScript.src.replace(/[^\/]*?\.js$/, '') : '';

Hmwks.ComponentsGroup = {};

Hmwks.Components = {

	_components: {},

	_nodesLookup: {},

	_attributesLookup: {},

	_classesLookup: {},

	_classesRegexLookup: {},

	init: function () {},

	get: function (type) {
		return this._components[type];
	},

	add: function (type, data) {
		data.type = type;

		this._components[type] = data;

		if (data.nodes) {
			for (var i in data.nodes) {
				this._nodesLookup[data.nodes[i]] = data;
			}
		}

		if (data.attributes) {
			if (data.attributes.constructor === Array) {
				for (var i in data.attributes) {
					this._attributesLookup[data.attributes[i]] = data;
				}
			} else {
				for (var i in data.attributes) {
					if (typeof this._attributesLookup[i] === 'undefined') {
						this._attributesLookup[i] = {};
					}

					if (typeof this._attributesLookup[i][data.attributes[i]] === 'undefined') {
						this._attributesLookup[i][data.attributes[i]] = {};
					}

					this._attributesLookup[i][data.attributes[i]] = data;
				}
			}
		}

		if (data.classes) {
			for (var i in data.classes) {
				this._classesLookup[data.classes[i]] = data;
			}
		}

		if (data.classesRegex) {
			for (var i in data.classesRegex) {
				this._classesRegexLookup[data.classesRegex[i]] = data;
			}
		}
	},

	extend: function (inheritType, type, data) {

		newData = data;

		if (inheritData = this._components[inheritType]) {
			newData = $.extend(true, {}, inheritData, data);
			newData.properties = $.merge($.merge([], inheritData.properties ? inheritData.properties : []), data.properties ? data.properties : []);
		}

		//sort by order
		newData.properties.sort(function (a, b) {
			if (typeof a.sort === "undefined") a.sort = 0;
			if (typeof b.sort === "undefined") b.sort = 0;

			if (a.sort < b.sort)
				return -1;
			if (a.sort > b.sort)
				return 1;
			return 0;
		});


		this.add(type, newData);
	},


	matchNode: function (node) {

		if (node.attributes.length) {
			//search for attributes
			for (var i in node.attributes) {
				if (node.attributes[i]) {
					attr = node.attributes[i].name;
					value = node.attributes[i].value;

					if (attr in this._attributesLookup) {
						component = this._attributesLookup[attr];

						//currently we check that is not a component by looking at name attribute
						//if we have a collection of objects it means that attribute value must be checked
						if (typeof component["name"] === "undefined") {
							if (value in component) {
								return component[value];
							}
						} else
							return component;
					}
				}
			}

			for (var i in node.attributes) {
				attr = node.attributes[i].name;
				value = node.attributes[i].value;

				//check for node classes
				if (attr == "class") {
					classes = value.split(" ");

					for (j in classes) {
						if (classes[j] in this._classesLookup)
							return this._classesLookup[classes[j]];
					}

					for (regex in this._classesRegexLookup) {
						regexObj = new RegExp(regex);
						if (regexObj.exec(value)) {
							return this._classesRegexLookup[regex];
						}
					}
				}
			}
		}

		tagName = node.tagName.toLowerCase();
		if (tagName in this._nodesLookup) return this._nodesLookup[tagName];

		return false;
	},

	render: function (type) {

		component = this._components[type];

		rightPanel = jQuery("#right-panel #component-properties");
		section = rightPanel.find('.section[data-section="default"]');

		if (!(Hmwks.preservePropertySections && section.length)) {
			rightPanel.html('').append(tmpl("hmwks-input-sectioninput", {
				key: "default",
				header: component.name
			}));
			section = rightPanel.find(".section");
		}

		rightPanel.find('[data-header="default"] span').html(component.name);
		section.html("")

		if (component.beforeInit) component.beforeInit(Hmwks.Builder.selectedEl.get(0));

		fn = function (component, property) {
			return property.input.on('propertyChange', function (event, value, input) {
				element = Hmwks.Builder.selectedEl;
				if (property.child) element = element.find(property.child);
				if (property.parent) element = element.parent(property.parent);

				if (property.onChange) {
					element = property.onChange(element, value, input, component);
				} /* else */
				if (property.htmlAttr) {
					oldValue = element.attr(property.htmlAttr);

					if (property.htmlAttr == "class" && property.validValues) {
						element.removeClass(property.validValues.join(" "));
						element = element.addClass(value);
					} else if (property.htmlAttr == "style") {
						element = element.css(property.key, value);
					} else {
						element = element.attr(property.htmlAttr, value);
					}

					Hmwks.Undo.addMutation({
						type: 'attributes',
						target: element.get(0),
						attributeName: property.htmlAttr,
						oldValue: oldValue,
						newValue: element.attr(property.htmlAttr)
					});
				}

				if (component.onChange) {
					element = component.onChange(element, property, value, input);
				}

				if (!property.child && !property.parent) Hmwks.Builder.selectNode(element);
			});
		};

		nodeElement = Hmwks.Builder.selectedEl;

		for (var i in component.properties) {
			property = component.properties[i];

			if (property.beforeInit) property.beforeInit(element.get(0))

			element = nodeElement;
			if (property.child) element = element.find(property.child);

			if (property.data) {
				property.data["key"] = property.key;
			} else {
				property.data = {
					"key": property.key
				};
			}

			if (typeof property.group === 'undefined') property.group = null;

			property.input = property.inputtype.init(property.data);

			if (property.init) {
				property.inputtype.setValue(property.init(element.get(0)));
			} else if (property.htmlAttr) {
				if (property.htmlAttr == "style") {
					//value = element.css(property.key);//jquery css returns computed style
					value = getStyle(element.get(0), property.key); //getStyle returns declared style
				} else {
					value = element.attr(property.htmlAttr);
				}

				//if attribute is class check if one of valid values is included as class to set the select
				if (value && property.htmlAttr == "class" && property.validValues) {
					value = value.split(" ").filter(function (el) {
						return property.validValues.indexOf(el) != -1
					});
				}

				property.inputtype.setValue(value);
			}

			fn(component, property);

			if (property.inputtype == SectionInput) {
				section = rightPanel.find('.section[data-section="' + property.key + '"]');

				if (Hmwks.preservePropertySections && section.length) {
					section.html("");
				} else {
					rightPanel.append(property.input);
					section = rightPanel.find('.section[data-section="' + property.key + '"]');
				}
			} else {
				row = $(tmpl('hmwks-property', property));
				row.find('.input').append(property.input);
				section.append(row);
			}

			if (property.inputtype.afterInit) {
				property.inputtype.afterInit(property.input);
			}

		}

		if (component.init) component.init(Hmwks.Builder.selectedEl.get(0));
	}
};



Hmwks.WysiwygEditor = {

	isActive: false,
	oldValue: '',
	doc: false,

	init: function (doc) {
		this.doc = doc;

		$("#bold-btn").on("click", function (e) {
			doc.execCommand('bold', false, null);
			e.preventDefault();
			return false;
		});

		$("#italic-btn").on("click", function (e) {
			doc.execCommand('italic', false, null);
			e.preventDefault();
			return false;
		});

		$("#underline-btn").on("click", function (e) {
			doc.execCommand('underline', false, null);
			e.preventDefault();
			return false;
		});

		$("#strike-btn").on("click", function (e) {
			doc.execCommand('strikeThrough', false, null);
			e.preventDefault();
			return false;
		});

		$("#link-btn").on("click", function (e) {
			doc.execCommand('createLink', false, "#");
			e.preventDefault();
			return false;
		});
	},

	undo: function (element) {
		this.doc.execCommand('undo', false, null);
	},

	redo: function (element) {
		this.doc.execCommand('redo', false, null);
	},

	edit: function (element) {
		element.attr({
			'contenteditable': true,
			'spellcheckker': false
		});
		$("#wysiwyg-editor").show();

		this.element = element;
		this.isActive = true;
		this.oldValue = element.html();
	},

	destroy: function (element) {
		element.removeAttr('contenteditable spellcheckker');
		$("#wysiwyg-editor").hide();
		this.isActive = false;


		node = this.element.get(0);
		Hmwks.Undo.addMutation({
			type: 'characterData',
			target: node,
			oldValue: this.oldValue,
			newValue: node.innerHTML
		});
	}
}

Hmwks.Builder = {

	dragMoveMutation: false,
	isPreview: false,
	runJsOnSetHtml: false,

	init: function (url, baseUrl, callback) {

		self = this;

		self.loadControlGroups(baseUrl);

		self.selectedEl = null;
		self.highlightEl = null;
		self.initCallback = callback;

		self.documentFrame = $("#iframe-wrapper > iframe");
		self.canvas = $("#canvas");

		self._loadIframe(url);

		self._initDragdrop();

		self.dragElement = null;
	},

	/* controls */
	loadControlGroups: function (baseUrl) {

		componentsList = $("#components-list");
		componentsList.empty();
		var item = {};

		for (group in Hmwks.ComponentsGroup) {
			componentsList.append('<li class="header" data-section="' + group + '"  data-search=""><label class="header d-flex" for="comphead_' + group + '">' + group + '  <div class="header-arrow"></div>\
								   </label><input class="header_check" type="checkbox" checked="true" id="comphead_' + group + '">  <ol></ol></li>');

			componentsSubList = componentsList.find('li[data-section="' + group + '"]  ol');

			components = Hmwks.ComponentsGroup[group];

			for (i in components) {
				componentType = components[i];
				component = Hmwks.Components.get(componentType);

				if (component) {
					item = $('<li data-section="' + group + '" data-type="' + componentType + '" data-search="' + component.name.toLowerCase() + '"><a href="#">' + component.name + "</a></li>");

					if (component.image) {

						item.css({
							backgroundImage: "url(" + baseUrl + 'assets/js/plugins/hmwksjs/libs/builder/' + component.image + ")",
							backgroundRepeat: "no-repeat"
						})
					}

					componentsSubList.append(item)
				}
			}
		}
	},

	loadUrl: function (url, callback) {
		jQuery("#select-box").hide();

		self.initCallback = callback;
		if (self.iframe.src != url) self.iframe.src = url;
	},

	/* iframe */
	_loadIframe: function (url) {

		self.iframe = this.documentFrame.get(0);
		self.iframe.src = url;

		return this.documentFrame.on("load", function () {
			window.FrameWindow = self.iframe.contentWindow;
			window.FrameDocument = self.iframe.contentWindow.document;

			$(window.FrameWindow).on("beforeunload", function (event) {
				var dialogText = "You have unsaved changes";
				event.returnValue = dialogText;
				return dialogText;
			});

			Hmwks.WysiwygEditor.init(window.FrameDocument);
			if (self.initCallback) self.initCallback();

			return self._frameLoaded();
		});

	},

	_frameLoaded: function () {

		self.frameDoc = $(window.FrameDocument);
		self.frameHtml = $(window.FrameDocument).find("html");
		self.frameBody = $(window.FrameDocument).find("body");

		this._initHighlight();
	},

	_getElementType: function (el) {

		//search for component attribute
		componentName = '';

		if (el.attributes)
			for (var j = 0; j < el.attributes.length; j++) {

				if (el.attributes[j].nodeName.indexOf('data-component') > -1) {
					componentName = el.attributes[j].nodeName.replace('data-component-', '');
				}
			}

		if (componentName != '') return componentName;

		if (el.attributes)
			for (var j = 0; j < el.attributes.length; j++) {

				if (el.attributes[j].nodeName.indexOf('data-component') > -1) {
					componentName = el.attributes[j].nodeName.replace('data-component-', '');
				}
			}

		if (componentName != '') return componentName;
		//if (className) return componentName;
		return el.tagName;
	},

	loadNodeComponent: function (node) {
		//Condition Added  By Sebin
		//if(!node.hasAttribute('edit-none')){
		data = Hmwks.Components.matchNode(node);
		var component;

		if (data)
			component = data.type;
		else
			component = Hmwks.defaultComponent;

		Hmwks.Components.render(component);
		//}

	},

	selectNode: function (node) {
		if (!node) {
			jQuery("#select-box").hide();
			return;
		}

		//Condition Added by Sebin
		//if(!node.hasAttribute('highlight-none')){
			if (self.texteditEl && self.selectedEl.get(0) != node) {
				Hmwks.WysiwygEditor.destroy(self.texteditEl);
				jQuery("#select-box").removeClass("text-edit").find("#select-actions").show();
				self.texteditEl = null;
			}

			self.selectedEl = target = jQuery(node);
			offset = target.offset();


			jQuery("#select-box").css({
				"top": offset.top - self.frameDoc.scrollTop(),
				"left": offset.left - self.frameDoc.scrollLeft(),
				"width": target.outerWidth(),
				"height": target.outerHeight(),
				"display": "block",
			});

			jQuery("#highlight-name").html(self._getElementType(node));

			//Added by Sebin
			//self._toggleControls('properties');
			//Added by Sebin	
		//}

	},

	/* iframe highlight */
	_initHighlight: function () {


		moveEvent = {
			target: null,
		};

		this.frameBody.on("mousemove touchmove", function (event) {


			if (event.target && isElement(event.target)) {
				//moveEvent = event;
				self.highlightEl = target = jQuery(event.target);
				offset = target.offset();
				height = target.outerHeight();
				halfHeight = Math.max(height / 2, 50);
				width = target.outerWidth();
				halfWidth = Math.max(width / 2, 50);

				//Condition Added By Sebin
				//if(!event.target.hasAttribute("highlight-none")){
				if (self.isDragging) {
					parent = self.highlightEl;
					//parentOffset = self.dragElement.offset();

					try {
						if (event.originalEvent) {
							if ((offset.top < (event.originalEvent.y - halfHeight)) || (offset.left < (event.originalEvent.x - halfWidth))) {
								if (isIE11)
									self.highlightEl.append(self.dragElement);
								else
									self.dragElement.appendTo(parent);
							} else {
								if (isIE11)
									self.highlightEl.prepend(self.dragElement);
								else
									self.dragElement.prependTo(parent);
							};
						}

					} catch (err) {
						console.log(err);
						return false;
					}

					if (event.originalEvent) self.iconDrag.css({
						'left': event.originalEvent.x - 30 /*left panel width*/ ,
						'top': event.originalEvent.y + 170
					});
				} // else //uncomment else to disable parent highlighting when dragging
				{

					jQuery("#highlight-box").css({
						"top": offset.top - self.frameDoc.scrollTop(),
						"left": offset.left - self.frameDoc.scrollLeft(),
						"width": width,
						"height": height,
						"display": event.target.hasAttribute('contenteditable') ? "none" : "block",
						"border": self.isDragging ? "1px dashed aqua" : "", //when dragging highlight parent with green
					});

					jQuery("#highlight-name").html(self._getElementType(event.target));
					if (self.isDragging) jQuery("#highlight-name").hide();
					else jQuery("#highlight-name").show(); //hide tag name when dragging
				}
				//}
			}

		});


		this.frameBody.on("mouseup touchend", function (event) {
			if (self.isDragging) {
				self.isDragging = false;
				if (self.iconDrag) self.iconDrag.remove();

				if (component.dragHtml) //if dragHtml is set for dragging then set real component html
				{
					newElement = $(component.html);
					self.dragElement.replaceWith(newElement);
					self.dragElement = newElement;
				}
				if (component.afterDrop) self.dragElement = component.afterDrop(self.dragElement);

				self.dragElement.css("border", "");

				node = self.dragElement.get(0);
				self.selectNode(node);
				self.loadNodeComponent(node);

				if (self.dragMoveMutation === false) {
					Hmwks.Undo.addMutation({
						type: 'childList',
						target: node.parentNode,
						addedNodes: [node],
						nextSibling: node.nextSibling
					});
				} else {
					self.dragMoveMutation.newParent = node.parentNode;
					self.dragMoveMutation.newNextSibling = node.nextSibling;

					Hmwks.Undo.addMutation(self.dragMoveMutation);
					self.dragMoveMutation = false;
				}
			}
		});

		this.frameBody.on("dblclick", function (event) {

			if (Hmwks.Builder.isPreview == false) {
				//Condition Added By Sebin
				//if (!event.target.hasAttribute("edit-none")) {
					self.texteditEl = target = jQuery(event.target);

					Hmwks.WysiwygEditor.edit(self.texteditEl);

					self.texteditEl.attr({
						'contenteditable': true,
						'spellcheckker': false
					});

					self.texteditEl.on("blur keyup paste input", function (event) {

						jQuery("#select-box").css({
							"width": self.texteditEl.outerWidth(),
							"height": self.texteditEl.outerHeight()
						});
					});

					jQuery("#select-box").addClass("text-edit").find("#select-actions").hide();
					jQuery("#highlight-box").hide();
				//}
			}
		});


		this.frameBody.on("click", function (event) {

			if (Hmwks.Builder.isPreview == false) {
				if (event.target) {
					self.selectNode(event.target);
					self.loadNodeComponent(event.target);

				}

				event.preventDefault();
				return false;
			}

		});

		$("#drag-box").on("mousedown", function (event) {
			jQuery("#select-box").hide();
			self.dragElement = self.selectedEl;
			self.isDragging = true;

			node = self.dragElement.get(0);


			self.dragMoveMutation = {
				type: 'move',
				target: node,
				oldParent: node.parentNode,
				oldNextSibling: node.nextSibling
			};

			//self.selectNode(false);
			event.preventDefault();
			return false;
		});

		$("#down-box").on("click", function (event) {
			jQuery("#select-box").hide();

			node = self.selectedEl.get(0);
			oldParent = node.parentNode;
			oldNextSibling = node.nextSibling;

			next = self.selectedEl.next();

			if (next.length > 0) {
				next.after(self.selectedEl);
			} else {
				self.selectedEl.parent().after(self.selectedEl);
			}

			newParent = node.parentNode;
			newNextSibling = node.nextSibling;

			Hmwks.Undo.addMutation({
				type: 'move',
				target: node,
				oldParent: oldParent,
				newParent: newParent,
				oldNextSibling: oldNextSibling,
				newNextSibling: newNextSibling
			});

			event.preventDefault();
			return false;
		});

		$("#up-box").on("click", function (event) {
			jQuery("#select-box").hide();

			node = self.selectedEl.get(0);
			oldParent = node.parentNode;
			oldNextSibling = node.nextSibling;

			next = self.selectedEl.prev();

			if (next.length > 0) {
				next.before(self.selectedEl);
			} else {
				self.selectedEl.parent().before(self.selectedEl);
			}

			newParent = node.parentNode;
			newNextSibling = node.nextSibling;

			Hmwks.Undo.addMutation({
				type: 'move',
				target: node,
				oldParent: oldParent,
				newParent: newParent,
				oldNextSibling: oldNextSibling,
				newNextSibling: newNextSibling
			});

			event.preventDefault();
			return false;
		});

		$("#clone-box").on("click", function (event) {
			clone = self.selectedEl.clone();

			self.selectedEl.after(clone);

			self.selectedEl = clone.click();

			node = clone.get(0);
			Hmwks.Undo.addMutation({
				type: 'childList',
				target: node.parentNode,
				addedNodes: [node],
				nextSibling: node.nextSibling
			});

			event.preventDefault();
			return false;
		});

		$("#parent-box").on("click", function (event) {

			node = self.selectedEl.parent().get(0);

			self.selectNode(node);
			self.loadNodeComponent(node);

			event.preventDefault();
			return false;
		});

		$("#delete-box").on("click", function (event) {
			_deleteElement(event);
		});

		_deleteElement = function (event) {
			jQuery("#select-box").hide();
			node = self.selectedEl.get(0);
			Hmwks.Undo.addMutation({
				type: 'childList',
				target: node.parentNode,
				removedNodes: [node],
				nextSibling: node.nextSibling
			});

			self.selectedEl.remove();
			self._toggleControls('visualization');
			event.preventDefault();
			return false;
		};

		this.frameBody.on("keydown", function (event) {
			if (event.keyCode == 46) {
				if (self.selectedEl) {
					_deleteElement(event);
				}
			}
		});

		jQuery(window.FrameWindow).on("scroll resize", function (event) {

			if (self.selectedEl) {
				offset = self.selectedEl.offset();

				jQuery("#select-box").css({
					"top": offset.top - self.frameDoc.scrollTop(),
					"left": offset.left - self.frameDoc.scrollLeft(),
					"width": self.selectedEl.outerWidth(),
					"height": self.selectedEl.outerHeight(),
					//"display": "block"
				});

			}

			if (self.highlightEl) {
				offset = self.highlightEl.offset();

				jQuery("#highlight-box").css({
					"top": offset.top - self.frameDoc.scrollTop(),
					"left": offset.left - self.frameDoc.scrollLeft(),
					"width": self.highlightEl.outerWidth(),
					"height": self.highlightEl.outerHeight(),
					//"display": "block"
				});
			}
		});

	},

	/* drag and drop */
	_initDragdrop: function () {

		self.isDragging = false;
		component = {};

		$('#components ul > li > ol > li').on("mousedown touchstart", function (event) {

			$this = jQuery(this);

			$("#component-clone").remove();


			component = Hmwks.Components.get($this.data("type"));

			if (component.dragHtml) {
				html = component.dragHtml;
			} else {
				html = component.html;
			}

			self.dragElement = $(html);
			self.dragElement.css("border", "1px dashed #ddd");

			if (component.dragStart) self.dragElement = component.dragStart(self.dragElement);

			self.isDragging = true;
			if (Hmwks.dragIcon == 'html')
				self.iconDrag = $(html).attr("id", "component-clone").css('position', 'absolute');
			else
				self.iconDrag = $('<img src=""/>').attr({
					"id": "component-clone",
					'src': $this.css("background-image").replace(/^url\(['"](.+)['"]\)/, '$1')
				}).
			css({
				'z-index': 100,
				'position': 'absolute',
				'width': '64px',
				'height': '64px',
				'top': event.originalEvent.y,
				'left': event.originalEvent.x
			});

			$('body').append(self.iconDrag);

			event.preventDefault();
			return false;
		});

		$('body').on('mouseup touchend', function (event) {
			if (self.iconDrag && self.isDragging == true) {
				self.isDragging = false;
				$("#component-clone").remove();
			}
		});

		$('body').on('mousemove touchmove', function (event) {
			if (self.iconDrag && self.isDragging == true) {
				self.iconDrag.css({
					'left': event.originalEvent.x,
					'top': event.originalEvent.y
				});

				elementMouseIsOver = document.elementFromPoint(event.clientX, event.clientY);

				//if drag elements hovers over iframe switch to iframe mouseover handler	
				if (elementMouseIsOver && elementMouseIsOver.tagName == 'IFRAME') {
					self.frameBody.trigger("mousemove", event);
					event.stopPropagation();
					self.selectNode(false);
				}
			}
		});

		$('#components ul > ol > li > li').on("mouseup touchend", function (event) {
			self.isDragging = false;
			$("#component-clone").remove();
		});

	},


	getHtml: function () {
		doc = window.FrameDocument;

		return "<!DOCTYPE " +
			doc.doctype.name +
			(doc.doctype.publicId ? ' PUBLIC "' + doc.doctype.publicId + '"' : '') +
			(!doc.doctype.publicId && doc.doctype.systemId ? ' SYSTEM' : '') +
			(doc.doctype.systemId ? ' "' + doc.doctype.systemId + '"' : '') +
			">\n" +
			doc.documentElement.innerHTML +
			"\n</html>";
	},


	getContent: function () {
		doc = window.FrameDocument;
		return doc.getElementById("_v55sf4s5_f4s5s8").innerHTML;
	},


	setHtml: function (html) {
		//update only body to avoid breaking iframe css/js relative paths
		start = html.indexOf("<body");
		end = html.indexOf("</body");

		if (start >= 0 && end >= 0) {
			body = html.slice(html.indexOf(">", start) + 1, end);
		} else {
			body = html
		}

		if (this.runJsOnSetHtml)
			self.frameBody.html(body);
		else
			window.FrameDocument.body.innerHTML = body;


		//below methods brake document relative css and js paths
		//return self.iframe.outerHTML = html;
		//return self.documentFrame.html(html);
		//return self.documentFrame.attr("srcdoc", html);
	},

	_toggleControls: function (el) {
		console.log("in");
		els = ["properties", "visualization", "datasources"];
		if (jQuery('body').hasClass('sidebar-' + el + '-hidden')) {
			jQuery('body').removeClass('sidebar-' + el + '-hidden');
			for (var i in els) {
				if (els[i] != el) {
					jQuery('body').addClass('sidebar-' + els[i] + '-hidden');
				}
			}

		}
	},


};

Hmwks.Config = {
	curl: '',
	csrf: {
		csrfToken: '',
		csrfName: ''
	},
	init: function (url) {
		this.curl = url;
		this.csrf.csrfName = $('meta[id="csrf_token"]').attr('name');
		this.csrf.csrfToken = $('meta[id="csrf_token"]').attr('content');
	},

	getUrl: function () {
		return this.curl;
	},

	setCsrf: function (token) {
		this.csrf.csrfToken = token;
		$('meta[id="csrf_token"]').attr('content', token)
	},

	getCsrf: function () {
		return this.csrf;
	}

}

Hmwks.CodeEditor = {

	isActive: false,
	oldValue: '',
	doc: false,

	init: function (doc) {
		$("#hmwks-code-editor textarea").val(Hmwks.Builder.getHtml());

		$("#hmwks-code-editor textarea").keyup(function () {
			delay(Hmwks.Builder.setHtml(this.value), 1000);
		});

		//load code on document changes
		Hmwks.Builder.frameBody.on("hmwks.undo.add hmwks.undo.restore", function (e) {
			Hmwks.CodeEditor.setValue();
		});
		//load code when a new url is loaded
		Hmwks.Builder.documentFrame.on("load", function (e) {
			Hmwks.CodeEditor.setValue();
		});

		this.isActive = true;
	},

	setValue: function (value) {
		if (this.isActive) {
			$("#hmwks-code-editor textarea").val(Hmwks.Builder.getHtml());
		}
	},

	destroy: function (element) {
		//this.isActive = false;
	},

	toggle: function () {
		if (this.isActive != true) {
			this.isActive = true;
			return this.init();
		}
		this.isActive = false;
		this.destroy();
	}
}

Hmwks.Gui = {

	init: function () {
		$("[data-hmwks-action]").each(function () {
			on = "click";
			if (this.dataset.hmwksOn) on = this.dataset.hmwksOn;

			$(this).on(on, Hmwks.Gui[this.dataset.hmwksAction]);
			if (this.dataset.hmwksShortcut) {
				$(document).bind('keydown', this.dataset.hmwksShortcut, Hmwks.Gui[this.dataset.hmwksAction]);
				$(window.FrameDocument, window.FrameWindow).bind('keydown', this.dataset.hmwksShortcut, Hmwks.Gui[this.dataset.hmwksAction]);
			}
		});
	},

	undo: function () {
		if (Hmwks.WysiwygEditor.isActive) {
			Hmwks.WysiwygEditor.undo();
		} else {
			Hmwks.Undo.undo();
		}
		Hmwks.Builder.selectNode();
	},

	redo: function () {
		if (Hmwks.WysiwygEditor.isActive) {
			Hmwks.WysiwygEditor.redo();
		} else {
			Hmwks.Undo.redo();
		}
		Hmwks.Builder.selectNode();
	},

	save: function () {
		var dataContent = Hmwks.Builder.getContent();
		var csrfinfo = Hmwks.Config.getCsrf();
		$.post(Hmwks.Config.getUrl(), {
			data: dataContent,
			[csrfinfo.csrfName]: csrfinfo.csrfToken
		}, function (d) {
			if (d.status == 1) {
				alert(d.msg);
			}
		}, 'json').always(function (d) {
			Hmwks.Config.setCsrf(d.token);
		});
	},

	download: function () {
		filename = /[^\/]+$/.exec(Hmwks.Builder.iframe.src)[0];
		uriContent = "data:application/octet-stream," + encodeURIComponent(Hmwks.Builder.getHtml());

		var link = document.createElement('a');
		if ('download' in link) {
			link.download = filename;
			link.href = uriContent;
			link.target = "_blank";

			document.body.appendChild(link);
			result = link.click();
			document.body.removeChild(link);
			link.remove();

		} else {
			location.href = uriContent;
		}
	},

	viewport: function () {
		$("#canvas").attr("class", this.dataset.view);
	},

	toggleEditor: function () {
		$("#hmwks-builder").toggleClass("bottom-panel-expand");
		$("#toggleEditorJsExecute").toggle();
		Hmwks.CodeEditor.toggle();
	},

	toggleEditorJsExecute: function () {
		Hmwks.Builder.runJsOnSetHtml = this.checked;
	},

	preview: function () {
		(Hmwks.Builder.isPreview == true) ? Hmwks.Builder.isPreview = false: Hmwks.Builder.isPreview = true;
		$("#iframe-layer").toggle();
		$("#hmwks-builder").toggleClass("preview");
	},

	fullscreen: function () {
		launchFullScreen(document); // the whole page
	},

	componentSearch: function () {
		searchText = this.value;

		$("#components-list li ol li").each(function () {
			$this = $(this);

			$this.hide();
			if ($this.data("search").indexOf(searchText) > -1) $this.show();
		});
	},

	clearComponentSearch: function () {
		$("#component-search").val("").keyup();
	}
}

// Toggle fullscreen
function launchFullScreen(document) {
	if (document.documentElement.requestFullScreen) {

		if (document.FullScreenElement)
			document.exitFullScreen();
		else
			document.documentElement.requestFullScreen();
		//mozilla		
	} else if (document.documentElement.mozRequestFullScreen) {

		if (document.mozFullScreenElement)
			document.mozCancelFullScreen();
		else
			document.documentElement.mozRequestFullScreen();
		//webkit	  
	} else if (document.documentElement.webkitRequestFullScreen) {

		if (document.webkitFullscreenElement)
			document.webkitExitFullscreen();
		else
			document.documentElement.webkitRequestFullScreen();
		//ie	  
	} else if (document.documentElement.msRequestFullscreen) {

		if (document.msFullScreenElement)
			document.msExitFullscreen();
		else
			document.documentElement.msRequestFullscreen();
	}
}