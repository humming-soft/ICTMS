var ObjAnalysis = function() {
    var _readXml = function(container){
        if (mxClient.isBrowserSupported())
        {                
                
            var xml = mxUtils.getTextContent(container)
            var xmlDocument = mxUtils.parseXml(xml);
            if (xmlDocument.documentElement != null && xmlDocument.documentElement.nodeName == 'mxGraphModel')
            { 
                var decoder = new mxCodec(xmlDocument);
                var node = xmlDocument.documentElement;

                container.innerHTML = '';
                container.style.display = "block"

                var graph = new mxGraph(container);
                graph.centerZoom = false;
                graph.setTooltips(false);
                graph.htmlLabels = true;
                graph.setEnabled(false);
                
                // Changes the default style for edges "in-place"
                var style = graph.getStylesheet().getDefaultEdgeStyle();
                style[mxConstants.STYLE_EDGE] = mxEdgeStyle.ElbowConnector;
                
                // Enables panning with left mouse button
                graph.panningHandler.useLeftButtonForPanning = true;
                graph.panningHandler.ignoreCell = true;
                graph.container.style.cursor = 'move';
                graph.setPanning(true);
                
                if (container.style.width == '' && container.style.height == '')
                {
                    graph.resizeContainer = true;
                }
                else
                {
                    // Adds border for fixed size boxes
                    graph.border = 20;
                }
                
                decoder.decode(node, graph.getModel());
                graph.resizeContainer = false;
                
                // Adds zoom buttons in top, left corner
                var buttons = document.createElement('div');
                buttons.style.position = 'absolute';
                buttons.style.overflow = 'visible';

                var bs = graph.getBorderSizes();
                buttons.style.top = (container.offsetTop + bs.y) + 'px';
                buttons.style.left = (container.offsetLeft + bs.x) + 'px';
                
                var left = 0;
                var bw = 42;
                var bh = 32 ;
                
                if (mxClient.IS_QUIRKS)
                {
                    bw -= 1;
                    bh -= 1;
                }
                
                function addButton(label, funct)
                {
                    var btn = document.createElement('button');
                    mxUtils.write(btn, '');
                    btn.className = 'btn btn-light';
                    btn.style.position = 'absolute';
                    // btn.style.backgroundColor = 'transparent';
                    // btn.style.border = '1px solid gray';
                    btn.style.textAlign = 'center';
                    btn.style.fontSize = '10px';
                    btn.style.cursor = 'hand';
                    btn.style.width = bw + 'px';
                    btn.style.height = bh + 'px';
                    btn.style.left = left + 'px';
                    btn.style.top = '0px';
                    var icon = document.createElement('i')
                    icon.className = label;
                    btn.appendChild(icon);
                    
                    mxEvent.addListener(btn, 'click', function(evt)
                    {
                        funct();
                        mxEvent.consume(evt);
                    });
                    
                    left += bw;
                    
                    buttons.appendChild(btn);
                };
                
                addButton('icon-plus2', function()
                {
                    graph.zoomIn();
                });
                
                addButton('icon-minus2', function()
                {
                    graph.zoomOut();
                });
                
                if (container.nextSibling != null)
                {
                    container.parentNode.insertBefore(buttons, container.nextSibling);
                }
                else
                {
                    container.appendChild(buttons);
                }
            }
                    
        }
    };
    var _componentMxMain = function(container,menuLabels) {

        var editorUiInit = EditorUi.prototype.init;
			
        EditorUi.prototype.init = function()
        {
            editorUiInit.apply(this, arguments);
            this.actions.get('export').setEnabled(true);
        };
        // Adds required resources (disables loading of fallback properties, this can only
        // be used if we know that all keys are defined in the language specific file)
        mxResources.loadDefaultBundle = false;
        var bundle = mxResources.getDefaultBundle(RESOURCE_BASE, mxLanguage) ||
            mxResources.getSpecialBundle(RESOURCE_BASE, mxLanguage);

        // Fixes possible asynchronous requests
        mxUtils.getAll([bundle, STYLE_PATH + '/default.xml'], function(xhr)
        {
            // Adds bundle text to resources
            mxResources.parse(xhr[0].getText());
            
            // Configures the default graph theme
            var themes = new Object();
            themes[Graph.prototype.defaultThemeName] = xhr[1].getDocumentElement(); 
            
            // Main
            var editorUi = new EditorUi(new Editor(urlParams['chrome'] == '0', themes),container,null,menuLabels);
            editorUi.setPageFormat(mxConstants.PAGE_FORMAT_LETTER_LANDSCAPE);
            mxUtils.post(OPEN_URL, '', mxUtils.bind(this, function(req)
            {
                if (req.request.response.length > 0) {
                    editorUi.editor.graph.model.beginUpdate();
                    try {
                        var xmlElem = mxUtils.parseXml(req.request.response).documentElement;
                        editorUi.editor.setGraphXml(xmlElem);
    
                    }
                    catch (e) {
                        console.error(e);
                    }
                    finally {
                        editorUi.editor.graph.model.endUpdate();
                    }
                }
            }));
            $('.gx_save').click(function(){
                    var xml = mxUtils.getXml(editorUi.editor.getGraphXml());
                    $.ajax({
                        url: SAVE_URL, data: xml, type: 'POST', contentType:"text/xml", dataType: "xml",
                        success : function(r){
                            $xml = $(r);
                            if($xml.find("status").text()==1){
                                // alert($xml.find("msg").text())
                            }else{
                                // alert($xml.find("msg").text())
                            }
                        }, error : function (xhr, ajaxOptions, thrownError){
                            alert($xml.find("msg").text())
                        } 
                    }); 
            });
        }, function()
        {
            document.body.innerHTML = '<center style="margin-top:10%;">Error loading resource files. Please check browser console.</center>';
        });
    };
    return {
        init: function() {
            // _componentMxMain(document.getElementById('graphContainer'),['problem','causes','effects']);
            _readXml(document.getElementById('graphContainer'));
            _componentMxMain(document.getElementById('graphContainer2'),['objective','means','ends']);
        }

    }
}();