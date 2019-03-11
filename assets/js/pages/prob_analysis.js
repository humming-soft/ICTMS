var ProbAnalysis = function() {
    var _componentMxMain = function(container, menuLabels) {

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

            function exportFile(format)
            {
                var bg = '#ffffff';
                var scale = 1;
                var b = 1;
                
                var imgExport = new mxImageExport();
                var bounds = editorUi.editor.graph.getGraphBounds();
                var vs = editorUi.editor.graph.view.scale;
                
                // New image export
                var xmlDoc = mxUtils.createXmlDocument();
                var root = xmlDoc.createElement('output');
                xmlDoc.appendChild(root);
                
                // Renders graph. Offset will be multiplied with state's scale when painting state.
                var xmlCanvas = new mxXmlCanvas2D(root);
                xmlCanvas.translate(Math.floor((b / scale - bounds.x) / vs), Math.floor((b / scale - bounds.y) / vs));
                xmlCanvas.scale(scale / vs);
                
                imgExport.drawState(editorUi.editor.graph.getView().getState(editorUi.editor.graph.model.root), xmlCanvas);
                // Puts request data together
                var w = Math.ceil(bounds.width * scale / vs + 2 * b);
                var h = Math.ceil(bounds.height * scale / vs + 2 * b);
                
                var xml = mxUtils.getXml(root);
                    
                if (bg != null)
                {
                    bg = '&bg=' + bg;
                }
                
                new mxXmlRequest('prob-analysis/export', 'format=' + format +
                    bg + '&w=' + w + '&h=' + h + '&xml=' + encodeURIComponent(xml)).
                    simulate(document, '_blank');
            }
            $('.export').click(function(){
                exportFile('png');
            });
        }, function()
        {
            document.body.innerHTML = '<center style="margin-top:10%;">Error loading resource files. Please check browser console.</center>';
        });
    };
    return {
        init: function() {
            _componentMxMain(document.getElementById('graphContainer'),['problem','causes','effects']);
        }

    }
}();