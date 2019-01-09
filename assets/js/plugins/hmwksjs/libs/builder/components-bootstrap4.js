bgcolorClasses = ["bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info", "bg-light", "bg-dark", "bg-white"]

bgcolorSelectOptions = [{
        value: "Default",
        text: ""
    },
    {
        value: "bg-primary",
        text: "Primary"
    }, {
        value: "bg-secondary",
        text: "Secondary"
    }, {
        value: "bg-success",
        text: "Success"
    }, {
        value: "bg-danger",
        text: "Danger"
    }, {
        value: "bg-warning",
        text: "Warning"
    }, {
        value: "bg-info",
        text: "Info"
    }, {
        value: "bg-light",
        text: "Light"
    }, {
        value: "bg-dark",
        text: "Dark"
    }, {
        value: "bg-white",
        text: "White"
    }
];

function changeNodeName(node, newNodeName) {
    var newNode;
    newNode = document.createElement(newNodeName);
    attributes = node.get(0).attributes;

    for (i = 0, len = attributes.length; i < len; i++) {
        newNode.setAttribute(attributes[i].nodeName, attributes[i].nodeValue);
    }

    $(newNode).append($(node).contents());
    $(node).replaceWith(newNode);

    return newNode;
}

Hmwks.ComponentsGroup['Layout'] = ["html/gridrow", "html/portlet", "html/listgroup", "html/table", "html/heading", "html/hr"];


var base_sort = 100; //start sorting for base component from 100 to allow extended properties to be first   

Hmwks.Components.add("_base", {
    name: "Element",
	properties: [{
        key: "element_header",
        inputtype: SectionInput,
        name:false,
        sort:base_sort++,
        data: {header:"General"},
    }, {
        name: "Id",
        key: "id",
        htmlAttr: "id",
        sort: base_sort++,
        inline:true,
        col:6,
        inputtype: TextInput
    }, {
        name: "Class",
        key: "class",
        htmlAttr: "class",
        sort: base_sort++,
        inline:true,
        col:6,
        inputtype: TextInput
    }
   ]
}); 

//Typography
Hmwks.Components.extend("_base", "_base", {
    properties: [{
        key: "typography_header",
        inputtype: SectionInput,
        name: false,
        sort: base_sort++,
        data: {
            header: "Typography"
        },
    }, {
        name: "Font family",
        key: "font-family",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "Arial, Helvetica, sans-serif",
                text: "Arial"
            }, {
                value: 'Lucida Sans Unicode", "Lucida Grande", sans-serif',
                text: 'Lucida Grande'
            }, {
                value: 'Palatino Linotype", "Book Antiqua", Palatino, serif',
                text: 'Palatino Linotype'
            }, {
                value: '"Times New Roman", Times, serif',
                text: 'Times New Roman'
            }, {
                value: "Georgia, serif",
                text: "Georgia, serif"
            }, {
                value: "Tahoma, Geneva, sans-serif",
                text: "Tahoma"
            }, {
                value: 'Comic Sans MS, cursive, sans-serif',
                text: 'Comic Sans'
            }, {
                value: 'Verdana, Geneva, sans-serif',
                text: 'Verdana'
            }, {
                value: 'Impact, Charcoal, sans-serif',
                text: 'Impact'
            }, {
                value: 'Arial Black, Gadget, sans-serif',
                text: 'Arial Black'
            }, {
                value: 'Trebuchet MS, Helvetica, sans-serif',
                text: 'Trebuchet'
            }, {
                value: 'Courier New", Courier, monospace',
                text: 'Courier New", Courier, monospace'
            }, {
                value: 'Brush Script MT, sans-serif',
                text: 'Brush Script'
            }]
        }
    }, {
        name: "Font weight",
        key: "font-weight",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "100",
                text: "Thin"
            }, {
                value: "200",
                text: "Extra-Light"
            }, {
                value: "300",
                text: "Light"
            }, {
                value: "400",
                text: "Normal"
            }, {
                value: "500",
                text: "Medium"
            }, {
                value: "600",
                text: "Semi-Bold"
            }, {
                value: "700",
                text: "Bold"
            }, {
                value: "800",
                text: "Extra-Bold"
            }, {
                value: "900",
                text: "Ultra-Bold"
            }],
        }
    }, {
        name: "Text align",
        key: "text-align",
        htmlAttr: "style",
        sort: base_sort++,
        col: 12,
        inline: true,
        inputtype: RadioButtonInput,
        data: {
            extraclass: "btn-group-sm btn-group-fullwidth",
            options: [{
                value: "none",
                icon: "icon-cross",
                //text: "None",
                title: "None",
                checked: true,
            }, {
                value: "left",
                //text: "Left",
                title: "Left",
                icon: "icon-paragraph-left3",
                checked: false,
            }, {
                value: "center",
                //text: "Center",
                title: "Center",
                icon: "icon-paragraph-center3",
                checked: false,
            }, {
                value: "right",
                //text: "Right",
                title: "Right",
                icon: "icon-paragraph-right3",
                checked: false,
            }, {
                value: "justify",
                //text: "justify",
                title: "Justify",
                icon: "icon-paragraph-justify3",
                checked: false,
            }],
        },
    }, {
        name: "Line height",
        key: "line-height",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Letter spacing",
        key: "letter-spacing",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Text decoration",
        key: "text-decoration-line",
        htmlAttr: "style",
        sort: base_sort++,
        col: 12,
        inline: true,
        inputtype: RadioButtonInput,
        data: {
            extraclass: "btn-group-sm btn-group-fullwidth",
            options: [{
                value: "none",
                icon: "icon-cross",
                //text: "None",
                title: "None",
                checked: true,
            }, {
                value: "underline",
                //text: "Left",
                title: "Underline",
                icon: "icon-arrow-down7",
                checked: false,
            }, {
                value: "overline",
                //text: "Right",
                title: "Overline",
                icon: "icon-arrow-up7",
                checked: false,
            }, {
                value: "line-through",
                //text: "Right",
                title: "Line Through",
                icon: "icon-strikethrough2",
                checked: false,
            }, {
                value: "underline overline",
                //text: "justify",
                title: "Underline Overline",
                icon: "icon-arrow-resize8",
                checked: false,
            }],
        },
    }, {
        name: "Decoration Color",
        key: "text-decoration-color",
        sort: base_sort++,
        col: 6,
        inline: true,
        htmlAttr: "style",
        inputtype: ColorInput,
    }, {
        name: "Decoration style",
        key: "text-decoration-style",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "solid",
                text: "Solid"
            }, {
                value: "wavy",
                text: "Wavy"
            }, {
                value: "dotted",
                text: "Dotted"
            }, {
                value: "dashed",
                text: "Dashed"
            }, {
                value: "double",
                text: "Double"
            }],
        }
    }]
})

//Size
Hmwks.Components.extend("_base", "_base", {
    properties: [{
        key: "size_header",
        inputtype: SectionInput,
        name: false,
        sort: base_sort++,
        data: {
            header: "Size",
            expanded: false
        },
    }, {
        name: "Width",
        key: "width",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Height",
        key: "height",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Min Width",
        key: "min-width",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Min Height",
        key: "min-height",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Max Width",
        key: "max-width",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Max Height",
        key: "max-height",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }]
});

//Margin
Hmwks.Components.extend("_base", "_base", {
    properties: [{
        key: "margins_header",
        inputtype: SectionInput,
        name: false,
        sort: base_sort++,
        data: {
            header: "Margin",
            expanded: false
        },
    }, {
        name: "Top",
        key: "margin-top",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Right",
        key: "margin-right",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Bottom",
        key: "margin-bottom",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Left",
        key: "margin-Left",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }]
});

//Padding
Hmwks.Components.extend("_base", "_base", {
    properties: [{
        key: "paddings_header",
        inputtype: SectionInput,
        name: false,
        sort: base_sort++,
        data: {
            header: "Padding",
            expanded: false
        },
    }, {
        name: "Top",
        key: "padding-top",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Right",
        key: "padding-right",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Bottom",
        key: "padding-bottom",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Left",
        key: "padding-Left",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }]
});


//Border
Hmwks.Components.extend("_base", "_base", {
    properties: [{
        key: "border_header",
        inputtype: SectionInput,
        name: false,
        sort: base_sort++,
        data: {
            header: "Border",
            expanded: false
        },
    }, {
        name: "Style",
        key: "border-style",
        htmlAttr: "style",
        sort: base_sort++,
        col: 12,
        inline: true,
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "solid",
                text: "Solid"
            }, {
                value: "dotted",
                text: "Dotted"
            }, {
                value: "dashed",
                text: "Dashed"
            }],
        }
    }, {
        name: "Width",
        key: "border-width",
        htmlAttr: "style",
        sort: base_sort++,
        col: 6,
        inline: true,
        inputtype: CssUnitInput
    }, {
        name: "Color",
        key: "border-color",
        sort: base_sort++,
        col: 6,
        inline: true,
        htmlAttr: "style",
        inputtype: ColorInput,
    }]
});

//Background image
Hmwks.Components.extend("_base", "_base", {
    properties: [{
        key: "background_image_header",
        inputtype: SectionInput,
        name: false,
        sort: base_sort++,
        data: {
            header: "Background Image",
            expanded: false
        },
    }, {
        name: "Image",
        key: "Image",
        sort: base_sort++,
        //htmlAttr: "style",
        inputtype: ImageInput,
        onChange: function (node, value) {

            $(node).css('background-image', 'url(' + value + ')');

            return node;
        }

    }, {
        name: "Repeat",
        key: "background-repeat",
        sort: base_sort++,
        htmlAttr: "style",
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "repeat-x",
                text: "repeat-x"
            }, {
                value: "repeat-y",
                text: "repeat-y"
            }, {
                value: "no-repeat",
                text: "no-repeat"
            }],
        }
    }, {
        name: "Size",
        key: "background-size",
        sort: base_sort++,
        htmlAttr: "style",
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "contain",
                text: "contain"
            }, {
                value: "cover",
                text: "cover"
            }],
        }
    }, {
        name: "Position x",
        key: "background-position-x",
        sort: base_sort++,
        htmlAttr: "style",
        col: 6,
        inline: true,
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "center",
                text: "center"
            }, {
                value: "right",
                text: "right"
            }, {
                value: "left",
                text: "left"
            }],
        }
    }, {
        name: "Position y",
        key: "background-position-y",
        sort: base_sort++,
        htmlAttr: "style",
        col: 6,
        inline: true,
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "center",
                text: "center"
            }, {
                value: "top",
                text: "top"
            }, {
                value: "bottom",
                text: "bottom"
            }],
        }
    }]
});

Hmwks.Components.extend("_base", "html/container", {
    classes: ["container", "container-fluid"],
    image: "icons/container.svg",
    html: '<div class="container"><div class="m-5">Container</div></div>',
    name: "Container",
    properties: [{
            name: "Type",
            key: "type",
            htmlAttr: "class",
            inputtype: SelectInput,
            validValues: ["container", "container-fluid"],
            data: {
                options: [{
                    value: "container",
                    text: "Default"
                }, {
                    value: "container-fluid",
                    text: "Fluid"
                }]
            }
        },
        {
            name: "Background",
            key: "background",
            htmlAttr: "class",
            validValues: bgcolorClasses,
            inputtype: SelectInput,
            data: {
                options: bgcolorSelectOptions
            }
        },
        {
            name: "Background Color",
            key: "background-color",
            htmlAttr: "style",
            inputtype: ColorInput,
        },
        {
            name: "Text Color",
            key: "color",
            htmlAttr: "style",
            inputtype: ColorInput,
        }
    ],
});

Hmwks.Components.extend("_base", "html/heading", {
    image: "icons/heading.svg",
    name: "Heading",
    nodes: ["h1", "h2", "h3", "h4", "h5", "h6"],
    html: "<h1>Heading</h1>",

    properties: [{
        name: "Size",
        key: "id",
        htmlAttr: "id",
        inputtype: SelectInput,
        onChange: function (node, value) {
            return changeNodeName(node, "h" + value);
        },
        init: function (node) {
            var regex;
            regex = /H(\d)/.exec(node.nodeName);
            if (regex && regex[1]) {
                return regex[1]
            }
            return 1
        },

        data: {
            options: [{
                value: "1",
                text: "H1"
            }, {
                value: "2",
                text: "H2"
            }, {
                value: "3",
                text: "H3"
            }, {
                value: "4",
                text: "H4"
            }, {
                value: "5",
                text: "H5"
            }, {
                value: "6",
                text: "H6"
            }]
        },
    }]
});
Hmwks.Components.extend("_base", "html/link", {
    nodes: ["a"],
    name: "Link",
    image: "icons/link.svg",
    properties: [{
        name: "Url",
        key: "href",
        htmlAttr: "href",
        inputtype: LinkInput
    }, {
        name: "Target",
        key: "target",
        htmlAttr: "target",
        inputtype: TextInput
    }]
});
Hmwks.Components.extend("_base", "html/image", {
    nodes: ["img"],
    name: "Image",
    html: '<img src="' + Hmwks.baseUrl + 'icons/image.svg" height="128" width="128">',
    /*
    afterDrop: function (node)
	{
		node.attr("src", '');
		return node;
	},*/
    image: "icons/image.svg",
    properties: [{
        name: "Image",
        key: "src",
        htmlAttr: "src",
        inputtype: ImageInput
    }, {
        name: "Width",
        key: "width",
        htmlAttr: "width",
        inputtype: TextInput
    }, {
        name: "Height",
        key: "height",
        htmlAttr: "height",
        inputtype: TextInput
    }, {
        name: "Alt",
        key: "alt",
        htmlAttr: "alt",
        inputtype: TextInput
    }]
});
Hmwks.Components.add("html/hr", {
    image: "icons/hr.svg",
    nodes: ["hr"],
    name: "Horizontal Rule",
    html: "<hr>"
});
Hmwks.Components.extend("_base", "html/label", {
    name: "Label",
    nodes: ["label"],
    html: '<label for="">Label</label>',
    properties: [{
        name: "For id",
        htmlAttr: "for",
        key: "for",
        inputtype: TextInput
    }]
});
Hmwks.Components.extend("_base", "html/button", {
    classes: ["btn", "btn-link"],
    name: "Button",
    image: "icons/button.svg",
    html: '<button type="button" class="btn btn-primary">Primary</button>',
    properties: [{
        name: "Link To",
        key: "href",
        htmlAttr: "href",
        inputtype: LinkInput
    }, {
        name: "Type",
        key: "type",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["btn-default", "btn-primary", "btn-info", "btn-success", "btn-warning", "btn-info", "btn-light", "btn-dark", "btn-outline-primary", "btn-outline-info", "btn-outline-success", "btn-outline-warning", "btn-outline-info", "btn-outline-light", "btn-outline-dark", "btn-link"],
        data: {
            options: [{
                value: "btn-default",
                text: "Default"
            }, {
                value: "btn-primary",
                text: "Primary"
            }, {
                value: "btn btn-info",
                text: "Info"
            }, {
                value: "btn-success",
                text: "Success"
            }, {
                value: "btn-warning",
                text: "Warning"
            }, {
                value: "btn-info",
                text: "Info"
            }, {
                value: "btn-light",
                text: "Light"
            }, {
                value: "btn-dark",
                text: "Dark"
            }, {
                value: "btn-outline-primary",
                text: "Primary outline"
            }, {
                value: "btn btn-outline-info",
                text: "Info outline"
            }, {
                value: "btn-outline-success",
                text: "Success outline"
            }, {
                value: "btn-outline-warning",
                text: "Warning outline"
            }, {
                value: "btn-outline-info",
                text: "Info outline"
            }, {
                value: "btn-outline-light",
                text: "Light outline"
            }, {
                value: "btn-outline-dark",
                text: "Dark outline"
            }, {
                value: "btn-link",
                text: "Link"
            }]
        }
    }, {
        name: "Size",
        key: "size",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["btn-lg", "btn-sm"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-lg",
                text: "Large"
            }, {
                value: "btn-sm",
                text: "Small"
            }]
        }
    }, {
        name: "Target",
        key: "target",
        htmlAttr: "target",
        inputtype: TextInput
    }, {
        name: "Disabled",
        key: "disabled",
        htmlAttr: "class",
        inputtype: ToggleInput,
        validValues: ["disabled"],
        data: {
            on: "disabled",
            off: ""
        }
    }]
});
Hmwks.Components.extend("_base", "html/buttongroup", {
    classes: ["btn-group"],
    name: "Button Group",
    image: "icons/button_group.svg",
    html: '<div class="btn-group" role="group" aria-label="Basic example"><button type="button" class="btn btn-secondary">Left</button><button type="button" class="btn btn-secondary">Middle</button> <button type="button" class="btn btn-secondary">Right</button></div>',
    properties: [{
        name: "Size",
        key: "size",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["btn-group-lg", "btn-group-sm"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-group-lg",
                text: "Large"
            }, {
                value: "btn-group-sm",
                text: "Small"
            }]
        }
    }, {
        name: "Alignment",
        key: "alignment",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["btn-group", "btn-group-vertical"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-group",
                text: "Horizontal"
            }, {
                value: "btn-group-vertical",
                text: "Vertical"
            }]
        }
    }]
});
Hmwks.Components.extend("_base", "html/buttontoolbar", {
    classes: ["btn-toolbar"],
    name: "Button Toolbar",
    image: "icons/button_toolbar.svg",
    html: '<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">\
		  <div class="btn-group mr-2" role="group" aria-label="First group">\
			<button type="button" class="btn btn-secondary">1</button>\
			<button type="button" class="btn btn-secondary">2</button>\
			<button type="button" class="btn btn-secondary">3</button>\
			<button type="button" class="btn btn-secondary">4</button>\
		  </div>\
		  <div class="btn-group mr-2" role="group" aria-label="Second group">\
			<button type="button" class="btn btn-secondary">5</button>\
			<button type="button" class="btn btn-secondary">6</button>\
			<button type="button" class="btn btn-secondary">7</button>\
		  </div>\
		  <div class="btn-group" role="group" aria-label="Third group">\
			<button type="button" class="btn btn-secondary">8</button>\
		  </div>\
		</div>'
});
Hmwks.Components.extend("_base", "html/alert", {
    classes: ["alert"],
    name: "Alert",
    image: "icons/alert.svg",
    html: '<div class="alert alert-warning alert-dismissible fade show" role="alert">\
		  <button type="button" class="close" data-dismiss="alert" aria-label="Close">\
			<span aria-hidden="true">&times;</span>\
		  </button>\
		  <strong>Holy guacamole!</strong> You should check in on some of those fields below.\
		</div>',
    properties: [{
        name: "Type",
        key: "type",
        htmlAttr: "class",
        validValues: ["alert-primary", "alert-secondary", "alert-success", "alert-danger", "alert-warning", "alert-info", "alert-light", "alert-dark"],
        inputtype: SelectInput,
        data: {
            options: [{
                value: "alert-primary",
                text: "Default"
            }, {
                value: "alert-secondary",
                text: "Secondary"
            }, {
                value: "alert-success",
                text: "Success"
            }, {
                value: "alert-danger",
                text: "Danger"
            }, {
                value: "alert-warning",
                text: "Warning"
            }, {
                value: "alert-info",
                text: "Info"
            }, {
                value: "alert-light",
                text: "Light"
            }, {
                value: "alert-dark",
                text: "Dark"
            }]
        }
    }]
});
Hmwks.Components.extend("_base", "html/badge", {
    classes: ["badge"],
    image: "icons/badge.svg",
    name: "Badge",
    html: '<span class="badge badge-primary">Primary badge</span>',
    properties: [{
        name: "Color",
        key: "color",
        htmlAttr: "class",
        validValues: ["badge-primary", "badge-secondary", "badge-success", "badge-danger", "badge-warning", "badge-info", "badge-light", "badge-dark"],
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "badge-primary",
                text: "Primary"
            }, {
                value: "badge-secondary",
                text: "Secondary"
            }, {
                value: "badge-success",
                text: "Success"
            }, {
                value: "badge-warning",
                text: "Warning"
            }, {
                value: "badge-danger",
                text: "Danger"
            }, {
                value: "badge-info",
                text: "Info"
            }, {
                value: "badge-light",
                text: "Light"
            }, {
                value: "badge-dark",
                text: "Dark"
            }]
        }
    }]
});

Hmwks.Components.extend("_base", "html/card", {
    classes: ["card"],
    image: "icons/panel.svg",
    name: "Portlet",
    html: '<div class="card">\
            <div class="card-header header-elements-inline bg-white" data-highlight="none"><h6 class="card-title"><i class="icon-cog3 mr-2"></i>Portlet Header </h6>\
                <div class="header-elements" data-highlight="none"><div class="list-icons" data-highlight="none">\
				    <a class="list-icons-item" data-action="collapse" data-highlight="none"></a><a class="list-icons-item" data-highlight="none" data-action="reload"></a>\
			</div></div></div>\
            <div class="card-body" data-highlight="none">\
                <p class="card-text">Some quick example text to build on the Portlet title and make up the bulk of the Portlets\'s content.</p>\
            </div>\
		</div>'
});

Hmwks.Components.extend("_base", "html/portlet", {
    classes: ["portletItem"],
    image: "icons/panel.svg",
    name: "Portlet",
    html: '<div class="portletItem"><div class="portletHeader" edit-none highlight-none action-none>\
            <div class="portletLogo" edit-none highlight-none action-none><i class="portlet-icon icon-stats-growth" action-none highlight-none edit-none></i></div>\
            <div class="portletTitle" edit-none highlight-none action-none><h2 action-none>Portlet Header</h2>\
            </div></div><div class="portletContent" edit-none action-none></div></div>',
    properties: [{
        name: "Portlet Icon",
        key: "class",
        htmlAttr: "class",
        col: 12,
        inline: true,
        child: ".portlet-icon",
        inputtype: IconInput,
        data: {
            options: ["graph", "pie-chart", "pie-chart2", "pie-chart3", "pie-chart4", "pie5", "pie-chart5", "pie-chart6", "pie-chart7",
                "stats-dots", "stats-bars", "pie-chart8", "stats-bars2", "stats-bars3", "stats-bars4", "chart", "stats-growth", "stats-decline", "stats-growth2",
                "stats-decline2", "home5", "office", "city", "newspaper", "magazine", "design", "pencil3", "pencil5",
                "image2", "images2", "camera", "shutter", "headphones", "headset", "music", "album", "play", "clapboard-play", "dice",
                "new", "connection", "station", "satellite-dish2", "feed", "mic2", "mic-off2", "book", "book3", "books", "archive", "library2",
                "graduation2", "profile", "file-stats2", "file-presentation2", "stack3", "folder", "certificate", "price-tags",
                "theater", "store", "cart5", "basket", "bag", "percent", "coins", "coin-dollar", "wallet", "cash2", "cash3", "credit-card2",
                "calculator4", "calculator3", "chip", "lifebuoy", "phone", "phone2", "phone-wave", "phone-hang-up", "address-book2", "notebook",
                "envelop4", "mailbox", "pushpin", "location4", "compass4", "map", "reset", "history", "watch", "bell3", "calendar2", "printer2",
                "shredder", "mouse", "keyboard", "typewriter", "display", "tablet", "mobile", "radio", "cabinet", "drawer", "box", "download",
                "upload", "database", "bubbles5", "bubble-dots4", "user", "users4", "collaboration", "user-tie", "user-block", "vcard", "enlarge3",
                "enlarge5", "enlarge", "shrink", "key", "lock", "unlocked", "equalizer3", "cogs", "cog2", "hammer-wrench", "hammer", "bug2", "construction",
                "pulse2", "traffic-cone", "traffic-lights", "stairs-up", "stairs-down", "rating", "rating2", "rating3", "podium", "stars", "medal-star", "medal", "trophy2", "trophy3", "trophy4",
                "cup2", "rocket", "meter2", "balance", "fire", "bin", "airplane2", "car2", "earth", "plus3", "minus3", "make-group", "ungroup", "vector", "vector2",
                "people", "bars-alt", "inbox", "task", "statistics", "switch2", "list-ordered", "unfold", "versions", "mirror"
            ]
        }
    }]
});
Hmwks.Components.extend("_base", "html/listgroup", {
    name: "List Group",
    image: "icons/list_group.svg",
    classes: ["list-group"],
    html: '<ul class="list-group">\n  <li class="list-group-item font-weight-semibold">List header</li><li class="list-group-item">\n    <span class="badge badge-pill badge-primary mr-2">09</span>\n    Cras justo odio\n  </li>\n  <li class="list-group-item">\n    <span class="badge badge-pill badge-primary mr-2">73</span>\n    Dapibus ac facilisis in\n  </li>\n  <li class="list-group-item">\n    <span class="badge badge-pill badge-primary mr-2">21</span>\n    Morbi leo risus\n  </li>\n</ul>'
});
Hmwks.Components.extend("_base", "html/listitem", {
    name: "List Item",
    classes: ["list-group-item"],
    html: '<li class="list-group-item"><span class="badge">14</span> Cras justo odio</li>'
});
Hmwks.Components.extend("_base", "html/breadcrumbs", {
    classes: ["breadcrumb"],
    name: "Breadcrumbs",
    image: "icons/breadcrumbs.svg",
    html: '<ol class="breadcrumb">\
		  <li class="breadcrumb-item active"><a href="#">Home</a></li>\
		  <li class="breadcrumb-item active"><a href="#">Library</a></li>\
		  <li class="breadcrumb-item active">Data 3</li>\
		</ol>'
});
Hmwks.Components.extend("_base", "html/breadcrumbitem", {
    classes: ["breadcrumb-item"],
    name: "Breadcrumb Item",
    html: '<li class="breadcrumb-item"><a href="#">Library</a></li>',
    properties: [{
        name: "Active",
        key: "active",
        htmlAttr: "class",
        validValues: ["", "active"],
        inputtype: ToggleInput,
        data: {
            on: "active",
            off: ""
        }
    }]
});
Hmwks.Components.extend("_base", "html/pagination", {
    classes: ["pagination"],
    name: "Pagination",
    image: "icons/pagination.svg",
    html: '<nav aria-label="Page navigation example">\
	  <ul class="pagination">\
		<li class="page-item"><a class="page-link" href="#">Previous</a></li>\
		<li class="page-item"><a class="page-link" href="#">1</a></li>\
		<li class="page-item"><a class="page-link" href="#">2</a></li>\
		<li class="page-item"><a class="page-link" href="#">3</a></li>\
		<li class="page-item"><a class="page-link" href="#">Next</a></li>\
	  </ul>\
	</nav>',

    properties: [{
        name: "Size",
        key: "size",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["btn-lg", "btn-sm"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "btn-lg",
                text: "Large"
            }, {
                value: "btn-sm",
                text: "Small"
            }]
        }
    }, {
        name: "Alignment",
        key: "alignment",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["justify-content-center", "justify-content-end"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "justify-content-center",
                text: "Center"
            }, {
                value: "justify-content-end",
                text: "Right"
            }]
        }
    }]
});
Hmwks.Components.extend("_base", "html/pageitem", {
    classes: ["page-item"],
    html: '<li class="page-item"><a class="page-link" href="#">1</a></li>',
    name: "Pagination Item",
    properties: [{
        name: "Link To",
        key: "href",
        htmlAttr: "href",
        child: ".page-link",
        inputtype: TextInput
    }, {
        name: "Disabled",
        key: "disabled",
        htmlAttr: "class",
        validValues: ["disabled"],
        inputtype: ToggleInput,
        data: {
            on: "disabled",
            off: ""
        }
    }]
});
Hmwks.Components.extend("_base", "html/progress", {
    classes: ["progress"],
    name: "Progress Bar",
    image: "icons/progressbar.svg",
    html: '<div class="progress"><div class="progress-bar w-25"></div></div>',
    properties: [{
            name: "Background",
            key: "background",
            htmlAttr: "class",
            validValues: bgcolorClasses,
            inputtype: SelectInput,
            data: {
                options: bgcolorSelectOptions
            }
        },
        {
            name: "Progress",
            key: "background",
            child: ".progress-bar",
            htmlAttr: "class",
            validValues: ["", "w-25", "w-50", "w-75", "w-100"],
            inputtype: SelectInput,
            data: {
                options: [{
                    value: "",
                    text: "None"
                }, {
                    value: "w-25",
                    text: "25%"
                }, {
                    value: "w-50",
                    text: "50%"
                }, {
                    value: "w-75",
                    text: "75%"
                }, {
                    value: "w-100",
                    text: "100%"
                }]
            }
        },
        {
            name: "Progress background",
            key: "background",
            child: ".progress-bar",
            htmlAttr: "class",
            validValues: bgcolorClasses,
            inputtype: SelectInput,
            data: {
                options: bgcolorSelectOptions
            }
        }, {
            name: "Striped",
            key: "striped",
            child: ".progress-bar",
            htmlAttr: "class",
            validValues: ["", "progress-bar-striped"],
            inputtype: ToggleInput,
            data: {
                on: "progress-bar-striped",
                off: "",
            }
        }, {
            name: "Animated",
            key: "animated",
            child: ".progress-bar",
            htmlAttr: "class",
            validValues: ["", "progress-bar-animated"],
            inputtype: ToggleInput,
            data: {
                on: "progress-bar-animated",
                off: "",
            }
        }
    ]
});
Hmwks.Components.extend("_base", "html/jumbotron", {
    classes: ["jumbotron"],
    image: "icons/jumbotron.svg",
    name: "Jumbotron",
    html: '<div class="jumbotron">\
		  <h1 class="display-3">Hello, world!</h1>\
		  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\
		  <hr class="my-4">\
		  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\
		  <p class="lead">\
			<a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>\
		  </p>\
		</div>'
});
Hmwks.Components.extend("_base", "html/navbar", {
    classes: ["navbar"],
    image: "icons/navbar.svg",
    name: "Nav Bar",
    html: '<nav class="navbar navbar-expand-lg navbar-light bg-light">\
		  <a class="navbar-brand" href="#">Navbar</a>\
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
			<span class="navbar-toggler-icon"></span>\
		  </button>\
		\
		  <div class="collapse navbar-collapse" id="navbarSupportedContent">\
			<ul class="navbar-nav mr-auto">\
			  <li class="nav-item active">\
				<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\
			  </li>\
			  <li class="nav-item">\
				<a class="nav-link" href="#">Link</a>\
			  </li>\
			  <li class="nav-item">\
				<a class="nav-link disabled" href="#">Disabled</a>\
			  </li>\
			</ul>\
			<form class="form-inline my-2 my-lg-0">\
			  <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">\
			  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>\
			</form>\
		  </div>\
		</nav>',

    properties: [{
        name: "Color theme",
        key: "color",
        htmlAttr: "class",
        validValues: ["navbar-light", "navbar-dark"],
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "navbar-light",
                text: "Light"
            }, {
                value: "navbar-dark",
                text: "Dark"
            }]
        }
    }, {
        name: "Background color",
        key: "background",
        htmlAttr: "class",
        validValues: bgcolorClasses,
        inputtype: SelectInput,
        data: {
            options: bgcolorSelectOptions
        }
    }, {
        name: "Placement",
        key: "placement",
        htmlAttr: "class",
        validValues: ["fixed-top", "fixed-bottom", "sticky-top"],
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "fixed-top",
                text: "Fixed Top"
            }, {
                value: "fixed-bottom",
                text: "Fixed Bottom"
            }, {
                value: "sticky-top",
                text: "Sticky top"
            }]
        }
    }]
});

Hmwks.Components.extend("_base", "html/form", {
    nodes: ["form"],
    image: "icons/form.svg",
    name: "Form",
    html: '<form><div class="form-group"><label>Text</label><input type="text" class="form-control"></div></div></form>',
    properties: [{
        name: "Style",
        key: "style",
        htmlAttr: "class",
        validValues: ["", "form-search", "form-inline", "form-horizontal"],
        inputtype: SelectInput,
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "form-search",
                text: "Search"
            }, {
                value: "form-inline",
                text: "Inline"
            }, {
                value: "form-horizontal",
                text: "Horizontal"
            }]
        }
    }, {
        name: "Action",
        key: "action",
        htmlAttr: "action",
        inputtype: TextInput
    }, {
        name: "Method",
        key: "method",
        htmlAttr: "method",
        inputtype: TextInput
    }]
});

Hmwks.Components.extend("_base", "html/textinput", {
    name: "Text Input",
    attributes: {
        "type": "text"
    },
    image: "icons/text_input.svg",
    html: '<div class="form-group"><label>Text</label><input type="text" class="form-control"></div></div>',
    properties: [{
        name: "Value",
        key: "value",
        htmlAttr: "value",
        inputtype: TextInput
    }, {
        name: "Placeholder",
        key: "placeholder",
        htmlAttr: "placeholder",
        inputtype: TextInput
    }]
});

Hmwks.Components.extend("_base", "html/selectinput", {
    nodes: ["select"],
    name: "Select Input",
    image: "icons/select_input.svg",
    html: '<div class="form-group"><label>Choose an option </label><select class="form-control"><option value="value1">Text 1</option><option value="value2">Text 2</option><option value="value3">Text 3</option></select></div>',

    beforeInit: function (node) {
        properties = [];
        var i = 0;

        $(node).find('option').each(function () {

            data = {
                "value": this.value,
                "text": this.text
            };

            i++;
            properties.push({
                name: "Option " + i,
                key: "option" + i,
                //index: i - 1,
                optionNode: this,
                inputtype: TextValueInput,
                data: data,
                onChange: function (node, value, input) {

                    option = $(this.optionNode);

                    //if remove button is clicked remove option and render row properties
                    if (input.nodeName == 'BUTTON') {
                        option.remove();
                        Hmwks.Components.render("html/selectinput");
                        return node;
                    }

                    if (input.name == "value") option.attr("value", value);
                    else if (input.name == "text") option.text(value);

                    return node;
                },
            });
        });

        //remove all option properties
        this.properties = this.properties.filter(function (item) {
            return item.key.indexOf("option") === -1;
        });

        //add remaining properties to generated column properties
        properties.push(this.properties[0]);

        this.properties = properties;
        return node;
    },

    properties: [{
        name: "Option",
        key: "option1",
        inputtype: TextValueInput
    }, {
        name: "Option",
        key: "option2",
        inputtype: TextValueInput
    }, {
        name: "",
        key: "addChild",
        inputtype: ButtonInput,
        data: {
            text: "Add option"
        },
        onChange: function (node) {
            $(node).append('<option value="value">Text</option>');

            //render component properties again to include the new column inputs
            Hmwks.Components.render("html/selectinput");

            return node;
        }
    }]
});
Hmwks.Components.extend("_base", "html/textareainput", {
    name: "Text Area",
    image: "icons/text_area.svg",
    html: '<div class="form-group"><label>Your response:</label><textarea class="form-control"></textarea></div>'
});
Hmwks.Components.extend("_base", "html/radiobutton", {
    name: "Radio Button",
    attributes: {
        "type": "radio"
    },
    image: "icons/radio.svg",
    html: '<label class="radio"><input type="radio"> Radio</label>',
    properties: [{
        name: "Name",
        key: "name",
        htmlAttr: "name",
        inputtype: TextInput
    }]
});
Hmwks.Components.extend("_base", "html/checkbox", {
    name: "Checkbox",
    attributes: {
        "type": "checkbox"
    },
    image: "icons/checkbox.svg",
    html: '<label class="checkbox"><input type="checkbox"> Checkbox</label>',
    properties: [{
        name: "Name",
        key: "name",
        htmlAttr: "name",
        inputtype: TextInput
    }]
});
Hmwks.Components.extend("_base", "html/fileinput", {
    name: "Input group",
    attributes: {
        "type": "file"
    },
    image: "icons/text_input.svg",
    html: '<div class="form-group">\
			  <input type="file" class="form-control">\
			</div>'
});
Hmwks.Components.extend("_base", "html/table", {
    nodes: ["table"],
    classes: ["table"],
    image: "icons/table.svg",
    name: "Table",
    html: '<table class="table">\
		  <thead>\
			<tr>\
			  <th>#</th>\
			  <th>First Name</th>\
			  <th>Last Name</th>\
			  <th>Username</th>\
			</tr>\
		  </thead>\
		  <tbody>\
			<tr>\
			  <th scope="row">1</th>\
			  <td>Mark</td>\
			  <td>Otto</td>\
			  <td>@mdo</td>\
			</tr>\
			<tr>\
			  <th scope="row">2</th>\
			  <td>Jacob</td>\
			  <td>Thornton</td>\
			  <td>@fat</td>\
			</tr>\
			<tr>\
			  <th scope="row">3</th>\
			  <td>Larry</td>\
			  <td>the Bird</td>\
			  <td>@twitter</td>\
			</tr>\
		  </tbody>\
		</table>',
    properties: [{
            name: "Type",
            key: "type",
            htmlAttr: "class",
            validValues: ["table-primary", "table-secondary", "table-success", "table-danger", "table-warning", "table-info", "table-light", "table-dark", "table-white"],
            inputtype: SelectInput,
            data: {
                options: [{
                    value: "Default",
                    text: ""
                }, {
                    value: "table-primary",
                    text: "Primary"
                }, {
                    value: "table-secondary",
                    text: "Secondary"
                }, {
                    value: "table-success",
                    text: "Success"
                }, {
                    value: "table-danger",
                    text: "Danger"
                }, {
                    value: "table-warning",
                    text: "Warning"
                }, {
                    value: "table-info",
                    text: "Info"
                }, {
                    value: "table-light",
                    text: "Light"
                }, {
                    value: "table-dark",
                    text: "Dark"
                }, {
                    value: "table-white",
                    text: "White"
                }]
            }
        },
        {
            name: "Responsive",
            key: "responsive",
            htmlAttr: "class",
            validValues: ["table-responsive"],
            inputtype: ToggleInput,
            data: {
                on: "table-responsive",
                off: ""
            }
        },
        {
            name: "Small",
            key: "small",
            htmlAttr: "class",
            validValues: ["table-sm"],
            inputtype: ToggleInput,
            data: {
                on: "table-sm",
                off: ""
            }
        },
        {
            name: "Hover",
            key: "hover",
            htmlAttr: "class",
            validValues: ["table-hover"],
            inputtype: ToggleInput,
            data: {
                on: "table-hover",
                off: ""
            }
        },
        {
            name: "Bordered",
            key: "bordered",
            htmlAttr: "class",
            validValues: ["table-bordered"],
            inputtype: ToggleInput,
            data: {
                on: "table-bordered",
                off: ""
            }
        },
        {
            name: "Striped",
            key: "striped",
            htmlAttr: "class",
            validValues: ["table-striped"],
            inputtype: ToggleInput,
            data: {
                on: "table-striped",
                off: ""
            }
        },
        {
            name: "Inverse",
            key: "inverse",
            htmlAttr: "class",
            validValues: ["table-inverse"],
            inputtype: ToggleInput,
            data: {
                on: "table-inverse",
                off: ""
            }
        },
        {
            name: "Head options",
            key: "head",
            htmlAttr: "class",
            child: "thead",
            inputtype: SelectInput,
            validValues: ["", "thead-inverse", "thead-default"],
            data: {
                options: [{
                    value: "",
                    text: "None"
                }, {
                    value: "thead-default",
                    text: "Default"
                }, {
                    value: "thead-inverse",
                    text: "Inverse"
                }]
            }
        }
    ]
});
Hmwks.Components.extend("_base", "html/tablerow", {
    nodes: ["tr"],
    name: "Table Row",
    html: "<tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td></tr>",
    properties: [{
        name: "Type",
        key: "type",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["", "success", "danger", "warning", "active"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "success",
                text: "Success"
            }, {
                value: "error",
                text: "Error"
            }, {
                value: "warning",
                text: "Warning"
            }, {
                value: "active",
                text: "Active"
            }]
        }
    }]
});
Hmwks.Components.extend("_base", "html/tablecell", {
    nodes: ["td"],
    name: "Table Cell",
    html: "<td>Cell</td>"
});
Hmwks.Components.extend("_base", "html/tableheadercell", {
    nodes: ["th"],
    name: "Table Header Cell",
    html: "<th>Head</th>"
});
Hmwks.Components.extend("_base", "html/tablehead", {
    nodes: ["thead"],
    name: "Table Head",
    html: "<thead><tr><th>Head 1</th><th>Head 2</th><th>Head 3</th></tr></thead>",
    properties: [{
        name: "Type",
        key: "type",
        htmlAttr: "class",
        inputtype: SelectInput,
        validValues: ["", "success", "danger", "warning", "info"],
        data: {
            options: [{
                value: "",
                text: "Default"
            }, {
                value: "success",
                text: "Success"
            }, {
                value: "anger",
                text: "Error"
            }, {
                value: "warning",
                text: "Warning"
            }, {
                value: "info",
                text: "Info"
            }]
        }
    }]
});
Hmwks.Components.extend("_base", "html/tablebody", {
    nodes: ["tbody"],
    name: "Table Body",
    html: "<tbody><tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td></tr></tbody>"
});

Hmwks.Components.add("html/gridcolumn", {
    name: "&ensp;Grid Column",
    image: "icons/grid_row.svg",
    classesRegex: ["col-"],
    html: '<div class="col-sm-4"><h3>col-sm-4</h3></div>',
    properties: [{
        name: "Column",
        key: "column",
        inputtype: GridInput,
        data: {
            hide_remove: true
        },

        beforeInit: function (node) {
            _class = $(node).attr("class");

            var reg = /col-([^-\$ ]*)?-?(\d+)/g;
            var match;

            while ((match = reg.exec(_class)) != null) {
                this.data["col" + ((match[1] != undefined) ? "_" + match[1] : "")] = match[2];
            }
        },

        onChange: function (node, value, input) {
            _class = node.attr("class");

            //remove previous breakpoint column size
            _class = _class.replace(new RegExp(input.name + '-\\d+?'), '');
            //add new column size
            if (value) _class += ' ' + input.name + '-' + value;
            node.attr("class", _class);

            return node;
        },
    }]
});
Hmwks.Components.add("html/gridrow", {
    name: "Grid Row",
    image: "icons/grid_row.svg",
    classes: ["row"],
    html: '<div class="row hmin-50"><div class="col-sm-12 col-lg-4 col-md-4 col-xs-12 hmin-50"><h3>column 1/3</h3></div><div class="col-sm-12 col-lg-4 col-md-4 col-xs-12 hmin-50"><h3>column 1/3</h3></div><div class="col-sm-12 col-lg-4 col-md-4 col-xs-12 hmin-50"><h3>column 1/3</h3></div></div>',

    beforeInit: function (node) {
        properties = [];
        var i = 0;
        var j = 0;

        $(node).find('[class*="col-"]').each(function () {
            _class = $(this).attr("class");

            var reg = /col-([^-\$ ]*)?-?(\d+)/g;
            var match;
            data = {};

            while ((match = reg.exec(_class)) != null) {
                data["col" + ((match[1] != undefined) ? "_" + match[1] : "")] = match[2];
            }

            i++;
            properties.push({
                name: "Column " + i,
                key: "column" + i,
                //index: i - 1,
                columnNode: this,
                inline: true,
                inputtype: GridInput,
                data: data,
                onChange: function (node, value, input) {

                    //column = $('[class*="col-"]:eq(' + this.index + ')', node);
                    column = $(this.columnNode);

                    //if remove button is clicked remove column and render row properties
                    if (input.nodeName == 'BUTTON') {
                        column.remove();
                        Hmwks.Components.render("html/gridrow");
                        return node;
                    }

                    //if select input then change column class
                    _class = column.attr("class");

                    //remove previous breakpoint column size
                    _class = _class.replace(new RegExp(input.name + '-\\d+?'), '');
                    //add new column size
                    if (value) _class += ' ' + input.name + '-' + value;
                    column.attr("class", _class);

                    //console.log(this, node, value, input, input.name);

                    return node;
                },
            });
        });

        //remove all column properties
        this.properties = this.properties.filter(function (item) {
            return item.key.indexOf("column") === -1;
        });

        //add remaining properties to generated column properties
        properties.push(this.properties[0]);

        this.properties = properties;
        return node;
    },

    properties: [{
        name: "Column",
        key: "column1",
        inputtype: GridInput
    }, {
        name: "Column",
        key: "column1",
        inline: true,
        col: 12,
        inputtype: GridInput
    }, {
        name: "",
        key: "addChild",
        inputtype: ButtonInput,
        data: {
            text: "Add column"
        },
        onChange: function (node) {
            $(node).append('<div class="col-3">Col-3</div>');

            //render component properties again to include the new column inputs
            Hmwks.Components.render("html/gridrow");

            return node;
        }
    }]
});