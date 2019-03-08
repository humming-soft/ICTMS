var ProbAnalysis = function() {
    var _componentMxMain = function(container) {
        // // Checks if the browser is supported
        // if (!mxClient.isBrowserSupported())
        // {
        //     mxUtils.error('Browser is not supported!', 200, false);
        // }
        // else
        // {
        //     // Creates the graph inside the given container
        //     var graph = new mxGraph(container);

        //     // Enables rubberband selection
        //     new mxRubberband(graph);

        //     // Gets the default parent for inserting new cells. This
        //     // is normally the first child of the root (ie. layer 0).
        //     var parent = graph.getDefaultParent();

        //     // Adds cells to the model in a single step
        //     graph.getModel().beginUpdate();
        //     try
        //     {
        //         var v1 = graph.insertVertex(parent, null,
        //                 'Hello,', 20, 20, 80, 30);
        //         var v2 = graph.insertVertex(parent, null,
        //                 'World!', 200, 150, 80, 30);
        //         var e1 = graph.insertEdge(parent, null, '', v1, v2);
        //     }
        //     finally
        //     {
        //         // Updates the display
        //         graph.getModel().endUpdate();
        //     }
        // }

        var editorUiInit = EditorUi.prototype.init;
			
        EditorUi.prototype.init = function()
        {
            editorUiInit.apply(this, arguments);
            this.actions.get('export').setEnabled(false);

            // Updates action states which require a backend
            if (!Editor.useLocalStorage)
            {
                mxUtils.post(OPEN_URL, '', mxUtils.bind(this, function(req)
                {
                    var enabled = req.getStatus() != 404;
                    this.actions.get('open').setEnabled(enabled || Graph.fileSupport);
                    this.actions.get('import').setEnabled(enabled || Graph.fileSupport);
                    this.actions.get('save').setEnabled(enabled);
                    this.actions.get('saveAs').setEnabled(enabled);
                    this.actions.get('export').setEnabled(enabled);
                }));
            }
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
            new EditorUi(new Editor(urlParams['chrome'] == '0', themes),container);
        }, function()
        {
            document.body.innerHTML = '<center style="margin-top:10%;">Error loading resource files. Please check browser console.</center>';
        });
    };
    return {
        init: function() {
            _componentMxMain(document.getElementById('graphContainer'));
        }

    }
}();