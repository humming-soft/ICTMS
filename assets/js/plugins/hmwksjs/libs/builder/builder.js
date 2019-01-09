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

https://github.com/givan/hmwksJs
*/


// Simple JavaScript Templating
// John Resig - https://johnresig.com/ - MIT Licensed
(function(){
  var cache = {};
  
  this.tmpl = function tmpl(str, data){
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
          .split("\r").join("\\'")
      + "');}return p.join('');");
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

function getStyle(el,styleProp)
{
	value = "";
	//var el = document.getElementById(el);
	if (el.style && el.style.length > 0 && el.style[styleProp])//check inline
		var value = el.style[styleProp];
	else
	if (el.currentStyle)	//check defined css
		var value = el.currentStyle[styleProp];
	else if (window.getComputedStyle)
	{
		var value = document.defaultView.getDefaultComputedStyle ? 
						document.defaultView.getDefaultComputedStyle(el,null).getPropertyValue(styleProp) : 
						window.getComputedStyle(el,null).getPropertyValue(styleProp);
	}
	
	return value;
}

function isElement(obj){
   return (typeof obj==="object") &&
      (obj.nodeType===1) && (typeof obj.style === "object") &&
      (typeof obj.ownerDocument ==="object")/* && obj.tagName != "BODY"*/;
}


var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

if (Hmwks === undefined) var Hmwks = {};

Hmwks.defaultComponent = "_base";
Hmwks.preservePropertySections = true;
Hmwks.dragIcon = 'icon';//icon = use component icon when dragging | html = use component html to create draggable element

Hmwks.baseUrl =  document.currentScript?document.currentScript.src.replace(/[^\/]*?\.js$/,''):'';

Hmwks.ComponentsGroup = {};

Hmwks.Components = {
	
	_components: {},
	
	_nodesLookup: {},
	
	_attributesLookup: {},

	_classesLookup: {},
	
	_classesRegexLookup: {},
	
	init: function(url) {
	},

	get: function(type) {
		return this._components[type];
	},

	add: function(type, data) {
		data.type = type;
		
		this._components[type] = data;
		
		if (data.nodes) 
		{
			for (var i in data.nodes)
			{	
				this._nodesLookup[ data.nodes[i] ] = data;
			}
		}
		
		if (data.attributes) 
		{
			if (data.attributes.constructor === Array)
			{
				for (var i in data.attributes)
				{	
					this._attributesLookup[ data.attributes[i] ] = data;
				}
			} else
			{
				for (var i in data.attributes)
				{	
					if (typeof this._attributesLookup[i] === 'undefined')
					{
						this._attributesLookup[i] = {};
					}

					if (typeof this._attributesLookup[i][ data.attributes[i] ] === 'undefined')
					{
						this._attributesLookup[i][ data.attributes[i] ] = {};
					}

					this._attributesLookup[i][ data.attributes[i] ] = data;
				}
			}
		}
		
		if (data.classes) 
		{
			for (var i in data.classes)
			{	
				this._classesLookup[ data.classes[i] ] = data;
			}
		}
		
		if (data.classesRegex) 
		{
			for (var i in data.classesRegex)
			{	
				this._classesRegexLookup[ data.classesRegex[i] ] = data;
			}
		}
	},
	
	extend: function(inheritType, type, data) {
		 
		 newData = data;
		 
		 if (inheritData = this._components[inheritType])
		 {
			newData = $.extend(true,{}, inheritData, data);
			newData.properties = $.merge( $.merge([], inheritData.properties?inheritData.properties:[]), data.properties?data.properties:[]);
		 }
		 
		 //sort by order
		 newData.properties.sort(function (a,b) 
			{
				if (typeof a.sort  === "undefined") a.sort = 0;
				if (typeof b.sort  === "undefined") b.sort = 0;

				if (a.sort < b.sort)
					return -1;
				if (a.sort > b.sort)
					return 1;
				return 0;
			});
		 
		
		this.add(type, newData);
	},
	
	
	matchNode: function(node) {
		
		if (node.attributes.length)
		{
			//search for attributes
			for (var i in node.attributes)
			{
				if (node.attributes[i])
				{
				attr = node.attributes[i].name;
				value = node.attributes[i].value;

				if (attr in this._attributesLookup) 
				{
					component = this._attributesLookup[ attr ];
					
					//currently we check that is not a component by looking at name attribute
					//if we have a collection of objects it means that attribute value must be checked
					if (typeof component["name"] === "undefined")
					{
						if (value in component)
						{
							return component[value];
						}
					} else 
					return component;
				}
			}
			}
				
			for (var i in node.attributes)
			{
				attr = node.attributes[i].name;
				value = node.attributes[i].value;
				
				//check for node classes
				if (attr == "class")
				{
					classes = value.split(" ");
					
					for (j in classes) 
					{
						if (classes[j] in this._classesLookup)
						return this._classesLookup[ classes[j] ];	
					}
					
					for (regex in this._classesRegexLookup) 
					{
						regexObj = new RegExp(regex);
						if (regexObj.exec(value)) 
						{
							return this._classesRegexLookup[ regex ];	
						}
					}
				}
			}
		}

		tagName = node.tagName.toLowerCase();
		if (tagName in this._nodesLookup) return this._nodesLookup[ tagName ];
	
		return false;
		//return false;
	},
	
	render: function(type) {

		component = this._components[type];
		
		rightPanel = jQuery("#right-panel #component-properties");
		section = rightPanel.find('.section[data-section="default"]');
		
		if (!(Hmwks.preservePropertySections && section.length))
		{
			rightPanel.html('').append(tmpl("hmwks-input-sectioninput", {key:"default", header:component.name}));
			section = rightPanel.find(".section");
		}

		rightPanel.find('[data-header="default"] span').html(component.name);
		section.html("")	
	
		if (component.beforeInit) component.beforeInit(Hmwks.Builder.selectedEl.get(0));
		
		fn = function(component, property) {
			return property.input.on('propertyChange', function (event, value, input) {
					element = Hmwks.Builder.selectedEl;
					if (property.child) element = element.find(property.child);
					if (property.parent) element = element.parent(property.parent);
					
					if (property.onChange)
					{
						element = property.onChange(element, value, input, component);
					}/* else */
					if (property.htmlAttr)
					{
						oldValue = element.attr(property.htmlAttr);
						
						if (property.htmlAttr == "class" && property.validValues) 
						{
							element.removeClass(property.validValues.join(" "));
							element = element.addClass(value);
						}
						else if (property.htmlAttr == "style") 
						{
							element = element.css(property.key, value);
						}
						else
						{
							element = element.attr(property.htmlAttr, value);
						}
						
						Hmwks.Undo.addMutation({type: 'attributes', 
												target: element.get(0), 
												attributeName: property.htmlAttr, 
												oldValue: oldValue, 
												newValue: element.attr(property.htmlAttr)});
					}

					if (component.onChange) 
					{
						element = component.onChange(element, property, value, input);
					}
					
					if (!property.child && !property.parent) Hmwks.Builder.selectNode(element);
			});				
		};			
	
		nodeElement = Hmwks.Builder.selectedEl;

		for (var i in component.properties)
		{
			property = component.properties[i];
			
			if (property.beforeInit) property.beforeInit(element.get(0)) 
			
			element = nodeElement;
			if (property.child) element = element.find(property.child);
			
			if (property.data) {
				property.data["key"] = property.key;
			} else
			{
				property.data = {"key" : property.key};
			}

			if (typeof property.group  === 'undefined') property.group = null;

			property.input = property.inputtype.init(property.data);
			
			if (property.init)
			{
				property.inputtype.setValue(property.init(element.get(0)));
			} else if (property.htmlAttr)
			{
				if (property.htmlAttr == "style")
				{
					//value = element.css(property.key);//jquery css returns computed style
					value = getStyle(element.get(0), property.key);//getStyle returns declared style
				} else
				{
					value = element.attr(property.htmlAttr);
				}

				//if attribute is class check if one of valid values is included as class to set the select
				if (value && property.htmlAttr == "class" && property.validValues)
				{
					value = value.split(" ").filter(function(el) {
						return property.validValues.indexOf(el) != -1
					});
				} 

				property.inputtype.setValue(value);
			}
			
			fn(component, property);

			if (property.inputtype == SectionInput)
			{
				section = rightPanel.find('.section[data-section="' + property.key + '"]');
				
				if (Hmwks.preservePropertySections && section.length)
				{
					section.html("");
				} else 
				{
					rightPanel.append(property.input);
					section = rightPanel.find('.section[data-section="' + property.key + '"]');
				}
			}
			else
			{
				row = $(tmpl('hmwks-property', property)); 
				row.find('.input').append(property.input);
				section.append(row);
			}
			
			if (property.inputtype.afterInit)
			{
				property.inputtype.afterInit(property.input);
			}

		}
		
		if (component.init) component.init(Hmwks.Builder.selectedEl.get(0));
	}
};	



Hmwks.WysiwygEditor = {
	
	isActive: false,
	oldValue: '',
	doc:false,
	
	init: function(doc) {
		this.doc = doc;
		
		$("#bold-btn").on("click", function (e) {
				doc.execCommand('bold',false,null);
				e.preventDefault();
				return false;
		});

		$("#italic-btn").on("click", function (e) {
				doc.execCommand('italic',false,null);
				e.preventDefault();
				return false;
		});

		$("#underline-btn").on("click", function (e) {
				doc.execCommand('underline',false,null);
				e.preventDefault();
				return false;
		});
		
		$("#strike-btn").on("click", function (e) {
				doc.execCommand('strikeThrough',false,null);
				e.preventDefault();
				return false;
		});

		$("#link-btn").on("click", function (e) {
				doc.execCommand('createLink',false,"#");
				e.preventDefault();
				return false;
		});
	},
	
	undo: function(element) {
		this.doc.execCommand('undo',false,null);
	},

	redo: function(element) {
		this.doc.execCommand('redo',false,null);
	},
	
	edit: function(element) {
		element.attr({'contenteditable':true, 'spellcheckker':false});
		$("#wysiwyg-editor").show();

		this.element = element;
		this.isActive = true;
		this.oldValue = element.html();
	},

	destroy: function(element) {
		element.removeAttr('contenteditable spellcheckker');
		$("#wysiwyg-editor").hide();
		this.isActive = false;

	
		node = this.element.get(0);
		Hmwks.Undo.addMutation({type:'characterData', 
								target: node, 
								oldValue: this.oldValue, 
								newValue: node.innerHTML});
	}
}
	
Hmwks.Builder = {

	dragMoveMutation : false,
	isPreview : false,
	runJsOnSetHtml : false,
	
	init: function(config, callback) {

		_self = this;
		
		_self.loadControlGroups(config.baseUrl);
		
		_self.selectedEl = null;
		_self.highlightEl = null;
		_self.initCallback = callback;
		
        _self.documentFrame = $("#iframe-wrapper > iframe");
        _self.canvas = $("#canvas");

		_self._loadIframe(config.url);
		
		_self._initDragdrop();

		_self.dragElement = null;

		Hmwks.Config.init(config.uploadUrl);
	},
	
/* controls */    	
	loadControlGroups : function(baseUrl) {	

		componentsList = $("#components-list");
		componentsList.empty();
		var item = {};
		
		for (group in Hmwks.ComponentsGroup)	
		{
			componentsList.append('<li class="header" data-section="' + group + '"  data-search=""><label class="header" for="comphead_' + group + '">' + group + '  <div class="header-arrow"></div>\
								   </label><input class="header_check" type="checkbox" checked="true" id="comphead_' + group + '">  <ol></ol></li>');

			componentsSubList = componentsList.find('li[data-section="' + group + '"]  ol');
			
			components = Hmwks.ComponentsGroup[ group ];
			
			for (i in components)
			{
				componentType = components[i];
				component = Hmwks.Components.get(componentType);
				
				if (component)
				{
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
	
	loadUrl : function(url, callback) {	
		jQuery("#select-box").hide();
		
		_self.initCallback = callback;
		if (_self.iframe.src != url)	_self.iframe.src = url;
	},
	
/* iframe */
	_loadIframe : function(url) {	
	
		_self.iframe = this.documentFrame.get(0);
		_self.iframe.src = url;

	    return this.documentFrame.on("load", function() 
        {
				window.FrameWindow = _self.iframe.contentWindow;
				window.FrameDocument = _self.iframe.contentWindow.document;

				$(window.FrameWindow).on( "beforeunload", function(event) {
					var dialogText = "You have unsaved changes";
					event.returnValue = dialogText;
					return dialogText;
				});
			
				Hmwks.WysiwygEditor.init(window.FrameDocument);
				if (_self.initCallback) _self.initCallback();

                return _self._frameLoaded();
        });		
        
	},	
    
    _frameLoaded : function() {
		
		_self.frameDoc = $(window.FrameDocument);
		_self.frameHtml = $(window.FrameDocument).find("html");
		_self.frameBody = $(window.FrameDocument).find("body");

		this._initHighlight();
    },	
    
    _getElementType: function(el) {
		
		//search for component attribute
		componentName = '';  
		   
		if (el.attributes)
		for (var j = 0; j < el.attributes.length; j++){
			
		  if (el.attributes[j].nodeName.indexOf('data-component') > -1)	
		  {
			componentName = el.attributes[j].nodeName.replace('data-component-', '');	
		  }
		}
		
		if (componentName != '') return componentName;
		
		if (el.attributes)
		for (var j = 0; j < el.attributes.length; j++){
			
		  if (el.attributes[j].nodeName.indexOf('data-component') > -1)	
		  {
			componentName = el.attributes[j].nodeName.replace('data-component-', '');	
		  }
		}
		
		if (componentName != '') return componentName;
		//if (className) return componentName;
		return el.tagName;
	},
	
	loadNodeComponent:  function(node) {
		isHighlighted = _self._canNodeHighlight(node);
		if(isHighlighted){
			data = Hmwks.Components.matchNode(node);
			var component;
			
			if (data) 
				component = data.type;
			else 
				component = Hmwks.defaultComponent;
				
			Hmwks.Components.render(component);
		}

	},
	
	selectNode:  function(node) {
		
		if (!node)
		{
			jQuery("#select-box").hide();
			return;
		}

		isActionable = _self._canNodeActions(node);
		isHighlighted = _self._canNodeHighlight(node);

		if(isHighlighted){
			if (_self.texteditEl && _self.selectedEl.get(0) != node) 
			{
				Hmwks.WysiwygEditor.destroy(_self.texteditEl);
				jQuery("#select-box").removeClass("text-edit");
				if(isActionable){
					jQuery("#select-box").find("#select-actions").show();
				}
				_self.texteditEl = null;
			}

			if(isActionable){
				jQuery("#select-box").find("#select-actions").show();
				_self._buildActionBox(node);
			}else{
				
				jQuery("#select-box").find("#select-actions").hide();
			}
			
			if(isHighlighted){
				_self.selectedEl = target = jQuery(node);
				offset = target.offset();
				jQuery("#select-box").css(
					{"top": offset.top - _self.frameDoc.scrollTop() , 
					"left": offset.left - _self.frameDoc.scrollLeft() , 
					"width" : target.outerWidth(), 
					"height": target.outerHeight(),
					"display": "block",
					});	
				jQuery("#highlight-name").html(_self._getElementType(node));
			}else{
				jQuery("#select-box").css({"display": "none"});
			}

			//if(isActionable && isHighlighted){
				_self._toggleControls('properties');
			//}
		}else{
			pel = node;
			while(true){
				if(this._canNodeHighlight(pel)){
					_self.selectNode(pel);
					_self.loadNodeComponent(pel);
					break;
				}
				if(pel.parentElement == "body"){
					break;
				}
				pel = pel.parentElement;
			}
		}
	},

	_buildActionBox: function(node){
		$el = jQuery("#select-box").find("#select-actions");
		if(node.parentElement == "body"){
			if(this._canNodeHighlight(node.parentElement)){
				$el.find("#parent-box").hide();
			}else{
				$el.find("#parent-box").show();
			}
		}
	},

/* iframe highlight */    
    _initHighlight: function() {
		
		
		moveEvent = {target:null, };
		
		this.frameBody.on("mousemove touchmove", function(event) {
			
			if (event.target && isElement(event.target))
			{
				//moveEvent = event;
				_self.highlightEl = target = jQuery(event.target);
				offset = target.offset();
				height = target.outerHeight();
				halfHeight = Math.max(height / 2, 50);
				width = target.outerWidth();
				halfWidth = Math.max(width / 2, 50);
				
				if (_self.isDragging)
				{
					parent = _self.highlightEl;
					//parentOffset = _self.dragElement.offset();

					try {
						if (event.originalEvent)
						{
							if ((offset.top  < (event.originalEvent.y - halfHeight)) || (offset.left  < (event.originalEvent.x - halfWidth)))
							{
								 if (isIE11) 
								 _self.highlightEl.append(_self.dragElement); 
								 else 
									_self.dragElement.appendTo(parent);
							} else
							{
								if (isIE11) 
								 _self.highlightEl.prepend(_self.dragElement); 
								else 
									_self.dragElement.prependTo(parent);
							};
						}
						
					} catch(err) {
						console.log(err);
						return false;
					}
					
					if (event.originalEvent) _self.iconDrag.css({'left': event.originalEvent.x/*left panel width*/, 'top':event.originalEvent.y + 100 });					
				}// else //uncomment else to disable parent highlighting when dragging
				{
					isHighlightable = _self._canNodeHighlight(event.target);
					if(isHighlightable){
						jQuery("#highlight-box").css(
							{"top": offset.top - _self.frameDoc.scrollTop() , 
							"left": offset.left - _self.frameDoc.scrollLeft() , 
							"width" : width, 
							"height": height,
							"display" : event.target.hasAttribute('contenteditable')?"none":"block",
							"border":_self.isDragging? "2px dashed #ddd":"",//when dragging highlight parent with green
							});
						 
							jQuery("#highlight-name").html(_self._getElementType(event.target));
					}
					if(_self.isDragging){
						jQuery("#highlight-name").hide(); 
					}else{ 
						if(isHighlightable){
							jQuery("#highlight-name").show();//hide tag name when dragging
						}
					}
				}
			}	
			
		});
		
		
		this.frameBody.on("mouseup touchend", function(event) {
			if (_self.isDragging)
			{
				_self.isDragging = false;
				if (_self.iconDrag) _self.iconDrag.remove();
				
				if (component.dragHtml) //if dragHtml is set for dragging then set real component html
				{
					newElement = $(component.html);
					_self.dragElement.replaceWith(newElement);
					_self.dragElement = newElement;
				}
				if (component.afterDrop) _self.dragElement = component.afterDrop(_self.dragElement);
				
				_self.dragElement.css("border", "");
				
				node = _self.dragElement.get(0);
				_self.selectNode(node);
				_self.loadNodeComponent(node);

				if (_self.dragMoveMutation === false)
				{
					Hmwks.Undo.addMutation({type: 'childList', 
											target: node.parentNode, 
											addedNodes: [node], 
											nextSibling: node.nextSibling});
				} else
				{
					_self.dragMoveMutation.newParent = node.parentNode;
					_self.dragMoveMutation.newNextSibling = node.nextSibling;
					
					Hmwks.Undo.addMutation(_self.dragMoveMutation);
					_self.dragMoveMutation = false;
				}
			}
		});

		this.frameBody.on("dblclick", function(event) {
			
			if (Hmwks.Builder.isPreview == false)
			{
				if(_self._canNodeEdit(event.target)){
					_self.texteditEl = target = jQuery(event.target);

					Hmwks.WysiwygEditor.edit(_self.texteditEl);
					
					_self.texteditEl.attr({'contenteditable':true, 'spellcheckker':false});
					
					_self.texteditEl.on("blur keyup paste input", function(event) {

						jQuery("#select-box").css({
								"width" : _self.texteditEl.outerWidth(), 
								"height": _self.texteditEl.outerHeight()
							});
					});		
					
					jQuery("#select-box").addClass("text-edit").find("#select-actions").hide();
					jQuery("#highlight-box").hide();
				}
			}
		});
		
		
		this.frameBody.on("click", function(event) {
			
			if (Hmwks.Builder.isPreview == false)
			{
				if (event.target)
				{					
					_self.selectNode(event.target);
					_self.loadNodeComponent(event.target);
				}
				
				event.preventDefault();
				return false;
			}	
			
		});
		
		$("#drag-box").on("mousedown", function(event) {
			jQuery("#select-box").hide();
			_self.dragElement = _self.selectedEl;
			_self.isDragging = true;
			
			node = _self.dragElement.get(0);
			

			_self.dragMoveMutation = {type: 'move', 
								target: node,
								oldParent: node.parentNode,
								oldNextSibling: node.nextSibling};
				
			_self.selectNode(false);
			event.preventDefault();
			return false;
		});
		
		$("#down-box").on("click", function(event) {
			jQuery("#select-box").hide();

			node = _self.selectedEl.get(0);
			oldParent = node.parentNode;
			oldNextSibling = node.nextSibling;

			next = _self.selectedEl.next();
			
			if (next.length > 0)
			{
				next.after(_self.selectedEl);
			} else
			{
				_self.selectedEl.parent().after(_self.selectedEl);
			}
			
			newParent = node.parentNode;
			newNextSibling = node.nextSibling;
			
			Hmwks.Undo.addMutation({type: 'move', 
									target: node,
									oldParent: oldParent,
									newParent: newParent,
									oldNextSibling: oldNextSibling,
									newNextSibling: newNextSibling});

			event.preventDefault();
			return false;
		});
		
		$("#up-box").on("click", function(event) {
			jQuery("#select-box").hide();

			node = _self.selectedEl.get(0);
			oldParent = node.parentNode;
			oldNextSibling = node.nextSibling;

			next = _self.selectedEl.prev();
			
			if (next.length > 0)
			{
				next.before(_self.selectedEl);
			} else
			{
				_self.selectedEl.parent().before(_self.selectedEl);
			}

			newParent = node.parentNode;
			newNextSibling = node.nextSibling;
			
			Hmwks.Undo.addMutation({type: 'move', 
									target: node,
									oldParent: oldParent,
									newParent: newParent,
									oldNextSibling: oldNextSibling,
									newNextSibling: newNextSibling});

			event.preventDefault();
			return false;
		});
		
		$("#clone-box").on("click", function(event) {
			clone = _self.selectedEl.clone();
			
			_self.selectedEl.after(clone);
			
			_self.selectedEl = clone.click();
			
			node = clone.get(0);
			Hmwks.Undo.addMutation({type: 'childList', 
									target: node.parentNode, 
									addedNodes: [node],
									nextSibling: node.nextSibling});
			
			event.preventDefault();
			return false;
		});
		
		$("#parent-box").on("click", function(event) {
			
			node = _self.selectedEl.parent().get(0);			
			_self.selectNode(node);
			_self.loadNodeComponent(node);
			
			event.preventDefault();
			return false;
		});

		$("#delete-box").on("click", function (event) {
			_deleteElement(event);
		});

		_deleteElement = function (event) {
			jQuery("#select-box").hide();
			
			node = _self.selectedEl.get(0);
			parentNode = _self.selectedEl.parent().get(0);
		
			Hmwks.Undo.addMutation({type: 'childList', 
									target: node.parentNode, 
									removedNodes: [node],
									nextSibling: node.nextSibling});
			_self.selectedEl.remove();
			// Select the parent of the removed element - Starts Here
			if(_self.selectedEl.parent().attr("highlight-none") != undefined){
				_self.selectNode(parentNode);
				_self.loadNodeComponent(parentNode);
			}
			//Ends here
			//Toggle Control Box to Visualization - Starts Here
			_self._toggleControls('visualization');
			//End Here
			event.preventDefault();
			return false;
		};

		this.frameBody.on("keydown", function (event) {
			if (event.keyCode == 46) {
				if (_self.selectedEl) {
					_deleteElement(event);
				}
			}
		});

		jQuery(window.FrameWindow).on("scroll resize", function(event) {
				
				if (_self.selectedEl)
				{
					offset = _self.selectedEl.offset();
					
					jQuery("#select-box").css(
						{"top": offset.top - _self.frameDoc.scrollTop() , 
						 "left": offset.left - _self.frameDoc.scrollLeft() , 
						 "width" : _self.selectedEl.outerWidth(), 
						 "height": _self.selectedEl.outerHeight(),
						 //"display": "block"
						 });			
						 
				}
				
				if (_self.highlightEl)
				{
					offset = _self.highlightEl.offset();
					
					jQuery("#highlight-box").css(
						{"top": offset.top - _self.frameDoc.scrollTop() , 
						 "left": offset.left - _self.frameDoc.scrollLeft() , 
						 "width" : _self.highlightEl.outerWidth(), 
						 "height": _self.highlightEl.outerHeight(),
						 //"display": "block"
						 });			
				}
		});
		
	},	

/* drag and drop */
	_initDragdrop : function() {
	
		_self.isDragging = false;	
		component = {};
		
		$('#components ul > li > ol > li').on("mousedown touchstart", function(event) {
			
			$this = jQuery(this);
			
			$("#component-clone").remove();
			
			
			component = Hmwks.Components.get($this.data("type"));
			
			if (component.dragHtml)
			{
				html = component.dragHtml;
			} else
			{
				html = component.html;
			}
			
			_self.dragElement = $(html);
			_self.dragElement.css("border", "2px dashed #4285f4");
			
			if (component.dragStart) _self.dragElement = component.dragStart(_self.dragElement);

			_self.isDragging = true;
			if (Hmwks.dragIcon == 'html')
				_self.iconDrag = $(html).attr("id", "component-clone").css('position', 'absolute');
			else
				_self.iconDrag = $('<img src=""/>').attr({"id": "component-clone", 'src': $this.css("background-image").replace(/^url\(['"](.+)['"]\)/, '$1')}).
				css({'z-index':100, 'position':'absolute', 'width':'64px', 'height':'64px', 'top': event.originalEvent.y, 'left': event.originalEvent.x});
				
			$('body').append(_self.iconDrag);
			
			event.preventDefault();
			return false;
		});
		
		$('body').on('mouseup touchend', function(event) {
			if (_self.iconDrag && _self.isDragging == true)
			{
				_self.isDragging = false;
				$("#component-clone").remove();
			}
		});
		
		$('body').on('mousemove touchmove', function(event) {
			if (_self.iconDrag && _self.isDragging == true)
			{
				_self.iconDrag.css({'left': event.originalEvent.x, 'top':event.originalEvent.y});
				
				elementMouseIsOver = document.elementFromPoint(event.clientX, event.clientY);
				
				//if drag elements hovers over iframe switch to iframe mouseover handler	
				if (elementMouseIsOver && elementMouseIsOver.tagName == 'IFRAME')
				{
					_self.frameBody.trigger("mousemove", event);
					event.stopPropagation();
					_self.selectNode(false);
				}
			}
		});
		
		$('#components ul > ol > li > li').on("mouseup touchend", function(event) {
			_self.isDragging = false;
			$("#component-clone").remove();
		});
			
	},

	
	getHtml: function() 
	{
		doc = window.FrameDocument;
		
		return "<!DOCTYPE "
         + doc.doctype.name
         + (doc.doctype.publicId ? ' PUBLIC "' + doc.doctype.publicId + '"' : '')
         + (!doc.doctype.publicId && doc.doctype.systemId ? ' SYSTEM' : '') 
         + (doc.doctype.systemId ? ' "' + doc.doctype.systemId + '"' : '')
         + ">\n" 
         + doc.documentElement.innerHTML
         + "\n</html>";
	},

	getContent: function () {
		doc = window.FrameDocument;
		return doc.getElementById("_v55sf4s5_f4s5s8").innerHTML;
	},
	
	setHtml: function(html) 
	{
		//update only body to avoid breaking iframe css/js relative paths
		start = html.indexOf("<body");
        end = html.indexOf("</body");		

        if (start >= 0 && end >= 0) {
            body = html.slice(html.indexOf(">", start) + 1, end);
        } else {
            body = html
        }
        
        if (this.runJsOnSetHtml)
			_self.frameBody.html(body);
		else
			window.FrameDocument.body.innerHTML = body;
        
		
		//below methods brake document relative css and js paths
		//return _self.iframe.outerHTML = html;
		//return _self.documentFrame.html(html);
		//return _self.documentFrame.attr("srcdoc", html);
	},

	_toggleControls: function (el) {
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

	_canNodeHighlight: function(el){
		if(el.hasAttribute("highlight-none")){
			return false;
		}
		return true;
	},

	_canNodeEdit: function(el){
		if(el.hasAttribute("edit-none")){
			return false;
		}
		return true;
	},

	_canNodeActions: function(el){
		if(el.hasAttribute("action-none")){
			return false;
		}
		return true;
	}
};

Hmwks.CodeEditor = {
	
	isActive: false,
	oldValue: '',
	doc:false,
	
	init: function(doc) {
		$("#Hmwks-code-editor textarea").val(Hmwks.Builder.getHtml());

		$("#Hmwks-code-editor textarea").keyup(function () 
		{
			delay(Hmwks.Builder.setHtml(this.value), 1000);
		});

		//load code on document changes
		Hmwks.Builder.frameBody.on("Hmwks.undo.add Hmwks.undo.restore", function (e) { Hmwks.CodeEditor.setValue();});
		//load code when a new url is loaded
		Hmwks.Builder.documentFrame.on("load", function (e) { Hmwks.CodeEditor.setValue();});

		this.isActive = true;
	},

	setValue: function(value) {
		if (this.isActive)
		{
			$("#Hmwks-code-editor textarea").val(Hmwks.Builder.getHtml());
		}
	},

	destroy: function(element) {
		//this.isActive = false;
	},

	toggle: function() {
		if (this.isActive != true)
		{
			this.isActive = true;
			return this.init();
		}
		this.isActive = false;
		this.destroy();
	}
}

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

Hmwks.Gui = {
	
	init: function() {
		$("[data-hmwks-action]").each(function () {
			on = "click";
			if (this.dataset.hmwksOn) on = this.dataset.hmwksOn;
			
			$(this).on(on, Hmwks.Gui[this.dataset.hmwksAction]);
			if (this.dataset.hmwksShortcut)
			{
				$(document).bind('keydown', this.dataset.hmwksShortcut, Hmwks.Gui[this.dataset.hmwksAction]);
				$(window.FrameDocument, window.FrameWindow).bind('keydown', this.dataset.hmwksShortcut, Hmwks.Gui[this.dataset.hmwksAction]);
			}
		});
	},
	
	undo : function () {
		if (Hmwks.WysiwygEditor.isActive) 
		{
			Hmwks.WysiwygEditor.undo();
		} else
		{
			Hmwks.Undo.undo();
		}
		Hmwks.Builder.selectNode();
	},
	
	redo : function () {
		if (Hmwks.WysiwygEditor.isActive) 
		{
			Hmwks.WysiwygEditor.redo();
		} else
		{
			Hmwks.Undo.redo();
		}
		Hmwks.Builder.selectNode();
	},
	
	save : function () {
		// $('#textarea-modal textarea').val(Hmwks.Builder.getHtml());
		// $('#textarea-modal').modal();
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
	
	download : function () {
		filename = /[^\/]+$/.exec(Hmwks.Builder.iframe.src)[0];
		uriContent = "data:application/octet-stream,"  + encodeURIComponent(Hmwks.Builder.getHtml());

		var link = document.createElement('a');
		if ('download' in link)
		{
			link.download = filename;
			link.href = uriContent;
			link.target = "_blank";
			
			document.body.appendChild(link);
			result = link.click();
			document.body.removeChild(link);
			link.remove();
			
		} else
		{
			location.href = uriContent;
		}
	},
	
	viewport : function () {
		$("#canvas").attr("class", this.dataset.view);
	},
	
	toggleEditor : function () {
		$("#hmwks-builder").toggleClass("bottom-panel-expand");
		$("#toggleEditorJsExecute").toggle();
		Hmwks.CodeEditor.toggle();
	},
	
	toggleEditorJsExecute : function () {
		Hmwks.Builder.runJsOnSetHtml = this.checked;
	},
	
	preview : function () {
		(Hmwks.Builder.isPreview == true)?Hmwks.Builder.isPreview = false:Hmwks.Builder.isPreview = true;
		$("#iframe-layer").toggle();
		$("#hmwks-builder").toggleClass("preview");
	},
	
	fullscreen : function () {
		launchFullScreen(document); // the whole page
	},
	
	componentSearch : function () {
		searchText = this.value;
		
		$("#components-list li ol li").each(function () {
			$this = $(this);
			
			$this.hide();
			if ($this.data("search").indexOf(searchText) > -1) $this.show();
		});
	},
	
	clearComponentSearch : function () {
		$("#component-search").val("").keyup();
	}
}

Hmwks.FileManager = {
	tree:false,
	pages:{},
	currentPage: false,
	
	init: function() {
		this.tree = $("#filemanager .tree > ol").html("");
		
		$(this.tree).on("click", "a", function (e) {
			e.preventDefault();
			return false;
		});
		
		$(this.tree).on("click", "li[data-page] label", function (e) {
			var page = $(this.parentNode).data("page");
			
			if (page) Hmwks.FileManager.loadPage(page);
			return false;			
		})
		
		$(this.tree).on("click", "li[data-component] label ", function (e) {
			node = $(e.currentTarget.parentNode).data("node");
			
			Hmwks.Builder.frameHtml.animate({
				scrollTop: $(node).offset().top
			}, 1000);

			Hmwks.Builder.selectNode(node);
			Hmwks.Builder.loadNodeComponent(node);
			
			//e.preventDefault();
			//return false;
		}).on("mouseenter", "li[data-component] label", function (e) {

			node = $(e.currentTarget).data("node");
			$(node).trigger("mousemove");
			
		});
	},
	
	addPage: function(name, title, url) {
		
		this.pages[name] = {title:title, url:url};
		
		this.tree.append(
			tmpl("hmwks-filemanager-page", {name:name, title:title, url:url}));
	},
	
	addPages: function(pages) {
		for (page in pages)
		{
			this.addPage(pages[page]['name'], pages[page]['title'], pages[page]['url']);
		}
	},
	
	addComponent: function(name, url, title, page) {
		$("[data-page='" + page + "'] > ol", this.tree).append(
			tmpl("hmwks-filemanager-component", {name:name, url:url, title:title}));
	},
	
	getComponents: function() {

			var tree = [];
			function getNodeTree (node, parent) {
				if (node.hasChildNodes()) {
					for (var j = 0; j < node.childNodes.length; j++) {
						child = node.childNodes[j];
						
						if (child && child["attributes"] != undefined && 
							(matchChild = Hmwks.Components.matchNode(child))) 
						{
							element = {
								name: matchChild.name,
								image: matchChild.image,
								type: matchChild.type,
								node: child,
								children: []
							};
							element.children = [];
							parent.push(element);
							element = getNodeTree(child, element.children);
						} else
						{
							element = getNodeTree(child, parent);	
						}
					}
				}

				return false;
			}
		
		getNodeTree(window.FrameDocument.body, tree);
		
		return tree;
	},
	
	loadComponents: function() {

		tree = this.getComponents();
		html = drawComponentsTree(tree);

		/*
		function drawComponentsTree(tree)
		{
			var html = "";
			j++;
			for (i in tree)
			{
				var node = tree[i];
				
				if (tree[i].children.length > 0) 
					html += '<li data-component="' + node.name + '" data-node="' + node.node + '">\
					<label for="id' + j + '" style="background-image:url(libs/builder/' + node.image + ')"><span>' + node.name + '</span></label> <input type="checkbox" id="id' + j + '" />\
					<ol>' + drawComponentsTree(node.children) + '</ol></li>';		
				else 
					html +='<li data-component="' + node.name + '" class="file"  data-node="' + node.node + '">\
							<a href="#" style="background-image:url(libs/builder/' + node.image + ')"><span>' + node.name + '</span></a></li>';
			}
			
			return html;
		}
		
		 $("[data-page='" + this.currentPage + "'] > ol", this.tree).html(html);
		*/		
		
		function drawComponentsTree(tree)
		{
			var html = $("<ol></ol>");
			j++;
			for (i in tree)
			{
				var node = tree[i];
				
				if (tree[i].children.length > 0) 
				{
					var li = $('<li data-component="' + node.name + '">\
					<label for="id' + j + '" style="background-image:url(libs/builder/' + node.image + ')"><span>' + node.name + '</span></label>\
					<input type="checkbox" id="id' + j + '">\
					</li>');		
					li.data("node", node.node);
					li.append(drawComponentsTree(node.children));
					html.append(li);
				}
				else 
				{
					var li =$('<li data-component="' + node.name + '" class="file">\
							<label for="id' + j + '" style="background-image:url(libs/builder/' + node.image + ')"><span>' + node.name + '</span></label>\
							<input type="checkbox" id="id' + j + '"></li>');
					li.data("node", node.node);							
					html.append(li);
				}
			}
			
			return html;
		}
		
		$("[data-page='" + this.currentPage + "'] > ol", this.tree).replaceWith(html);
	},
	
	loadPage: function(name) {
		$("[data-page]", this.tree).removeClass("active");
		$("[data-page='" + name + "']", this.tree).addClass("active");
		
		this.currentPage = name;

		Hmwks.Builder.loadUrl(this.pages[name]['url'], 
			function () { 
				Hmwks.FileManager.loadComponents(); 
			});
	},

}

// Toggle fullscreen
function launchFullScreen(document) {
  if(document.documentElement.requestFullScreen) {
    
		if (document.FullScreenElement)
			document.exitFullScreen();
		else
			document.documentElement.requestFullScreen();
//mozilla		
  } else if(document.documentElement.mozRequestFullScreen) {

		if (document.mozFullScreenElement)
			document.mozCancelFullScreen();
		else
			document.documentElement.mozRequestFullScreen();
//webkit	  
  } else if(document.documentElement.webkitRequestFullScreen) {

		if (document.webkitFullscreenElement)
			document.webkitExitFullscreen();
		else
			document.documentElement.webkitRequestFullScreen();
//ie	  
  } else if(document.documentElement.msRequestFullscreen) {

		if (document.msFullScreenElement)
			document.msExitFullscreen();
		else
			document.documentElement.msRequestFullscreen();
  }
}
