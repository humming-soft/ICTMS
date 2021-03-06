/***
 Please do not update handsontable js file without knowing what to do! We need the editor manager object exposed from it to enable feature like rightmost sticky column (remark)
 ***/

numValidator = function (value, callback) {
    if (isNaN(value)){
        callback(false);
    }else{
        callback(true);
    }
};
var columns_meta = {
    text: {},
    date: {type: 'date', dateFormat: 'DD-MMM-YYYY', correctFormat: true},
    percentround2: {type: 'numeric', numericFormat: {pattern: '0'}, validator: numValidator, renderer: 'percentageround2Renderer'},
    price_myr: {type: 'numeric',  numericFormat: {pattern: '$ 0,0.00', culture: 'ms-MY'}, validator: numValidator},
    numeric: {type: 'numeric', numericFormat: {pattern: '0,0'}, validator: numValidator, renderer: 'customNumericRightAlignRenderer'},
    decimal2: {type: 'numeric', numericFormat: {pattern: '0,0.00'}, validator: numValidator, renderer: 'customDecimalRightAlignRenderer2'},
    formula: {type: 'formula', renderer: 'customFormulaRenderer'},
    lookup: {},
    progressive_link: {renderer: 'disabledRenderer', designReadOnly: true},
    non_progressive_link: {renderer: 'disabledRenderer', designReadOnly: true}
};

var sheetclip = new SheetClip();
var clipboardCache = '';

function cols_to_config_no(raw_config) {
    var r = {};
    for (var i = 0; i < raw_config.length; i++) {
        r[i] = $.grep(raw_config, function(o){ return (o.order == i) })[0]['config_no'];
    }
    return r;
}

addLookupCode = function(code, descriptionarr, valuearr) {
    var dv = {};
    var vd = {};
    for (var i = 0; i < descriptionarr.length; i++) {
        dv[descriptionarr[i]] = valuearr[i];
        vd[valuearr[i]] = descriptionarr[i];
    }
    columns_meta["lookup"][code] = {
        "editor": "select",
        "selectOptions": descriptionarr,
        "value": valuearr,
        "getValueFromDesc" : function(d){ return dv[d]; },
        "getDescFromValue" : function(v){ return vd[v]; }
    }
};

bulkLookupDV = function(code, descriptionarr) {
    if (typeof descriptionarr == "undefined") return [];
    var r = [];
    var c = columns_meta["lookup"][code];
    for (var i = 0; i < descriptionarr.length; i++) r.push(c.getValueFromDesc(descriptionarr[i]));
    return r;
};

bulkLookupVD = function(code, valuearr) {
    if (typeof valuearr == "undefined") return [];
    var r = [];
    var c = columns_meta["lookup"][code];
    for (var i = 0; i < valuearr.length; i++) r.push(c.getDescFromValue(valuearr[i]));
    return r;
};

isColumnLookup = function(c) {
    return ((typeof c["editor"] != "undefined") && (c["editor"] == "select"))
};
// HOT Renderers
// Header row renderer
firstRowRenderer = function(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    // Add styles to the table cell
    td.style.fontWeight = '500';
    td.style.color = '#1B5E20';
    td.style.background = '#E8F5E9';
    return td;
};

percentageround2Renderer = function(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    value = parseFloat(value).toFixed(2);
    if (isNaN(value)) return;
    td.innerHTML = value+"%";
    return td;
};

customNumericRightAlignRenderer = function(instance, td, row, col, prop, value, cellProperties) {
    cellProperties.format = "0,0";
    Handsontable.renderers.NumericRenderer.apply(this, arguments);
    td.style.textAlign = "right";
    if (isNaN(value)) return;
    return td;
};

customDecimalRightAlignRenderer2 = function(instance, td, row, col, prop, value, cellProperties) {
    cellProperties.format = "0,0.00";
    Handsontable.renderers.NumericRenderer.apply(this, arguments);
    td.style.textAlign = "right";
    if (isNaN(value)) return;
    return td;
};

customFormulaRenderer = function(instance, TD, row, col, prop, value, cellProperties) {
    if (true) {
        var cellId = instance.plugin.utils.translateCellCoords({
                row: row,
                col: col
            }),
            prevFormula = null,
            formula = null,
            needUpdate = false,
            error, result;
        if (!cellId) {
            return;
        }
        var item = instance.plugin.matrix.getItem(cellId);
        if (item) {
            needUpdate = !! item.needUpdate;
            if (item.error) {
                prevFormula = item.formula;
                error = item.error;
                if (needUpdate) {
                    error = null;
                }
            }
        }
        // check if typed formula or cell value should be recalculated
        if ((value && value[0] === '=') || needUpdate) {
            formula = value.substr(1).toUpperCase();
            if (!error || formula !== prevFormula) {
                var currentItem = item;
                if (!currentItem) {
                    // define item to rulesJS matrix if not exists
                    item = {
                        id: cellId,
                        formula: formula
                    };
                    // add item to matrix
                    currentItem = instance.plugin.matrix.addItem(item);
                }
                // parse formula
                var newValue = instance.plugin.parse(formula, {
                    row: row,
                    col: col,
                    id: cellId
                });
                // check if update needed
                needUpdate = (newValue.error === '#NEED_UPDATE');
                // update item value and error
                instance.plugin.matrix.updateItem(currentItem, {
                    formula: formula,
                    value: newValue.result,
                    error: newValue.error,
                    needUpdate: needUpdate
                });
                error = newValue.error;
                result = newValue.result;
                // update cell value in hot
                value = error || result;
            }
        }
        if (error) {
            // clear cell value
            if (!value) {
                // reset error
                error = null;
            } else {
                // show error
                value = error;
            }
        }
        // change background color
        if (instance.plugin.utils.isSet(error)) {
            Handsontable.Dom.addClass(TD, 'formula-error');
        } else if (instance.plugin.utils.isSet(result)) {
            Handsontable.Dom.removeClass(TD, 'formula-error');
            Handsontable.Dom.addClass(TD, 'formula');
        }
    }

    // apply changes
    //console.log(typeof value);
    //if (cellProperties.type === 'numeric') {
    if (typeof value == 'number') {
        customDecimalRightAlignRenderer2.apply(this, [instance, TD, row, col, prop, value, cellProperties]);
    } else {
        Handsontable.renderers.TextRenderer.apply(this, [instance, TD, row, col, prop, value, cellProperties]);
    }
};

disabledRenderer = function(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    td.style.backgroundColor = 'rgb(235, 235, 228)';
    return td;
};

// HOT object
function HOT(Handsontable, raw_config, data, type, pre_data) {
    this.hot_initialized = false;
    this.raw_config = [];
    this.araw_config = {};
    this.hot_config = [];
    this.type = "";
    this.hot_instance = null;
    this.data = [];
    this.pre_data = [];
    this.comments = [];
    this.acomments = {};
    this.Handsontable = Handsontable;
    this.callbacks = {};

    this.initialize = function(raw_config, data, type, pre_data) {
        raw_config = this.hot_set_raw_config(raw_config);
        this.data = data;
        this.type = type;
        this.pre_data=pre_data;

        var container = document.getElementById("hottable_container");
        var lastChange = null;
        var c = {};
        for (var i = 0; i < raw_config.length; i++) { this.araw_config[raw_config[i]['header']] = this.raw_config[i]; }
        this.hot_config = this.hot_finalize_config(this.raw_config, type);

        var _thisproxy = this;

        c['data'] = this.hot_parse_data(data);
        c['colHeaders'] = this.hot_config["colHeaders"];
        c['rowHeaders'] = true;
        c['colWidths'] = this.hot_config["colWidths"];
        c['columns'] = this.hot_config["columns"];
        c['beforeChange'] = function (changes, source) {
            lastChange = changes;
        };
        /* Requires a hack to expose editor manager */
        c['afterSelectionEnd'] = function(r, c, r2, c2) {
            var coltype = _thisproxy.raw_config[c];
            if ((typeof coltype == "undefined") || (typeof coltype.type == "undefined") || (coltype.type != "lookup")) return;
            a = this.getEditorManager();
            a.openEditor(null);
        };

        c['wordWrap'] = true;
        c['stretchH'] = 'all';
        c['columnSorting'] = true;
        c['manualColumnResize'] = true;
        c['sortIndicator'] = true;
        c['autoRowSize'] = true;
        c['manualColumnMove'] = true;
        c['manualRowMove'] = true;
        c['afterSelectionEnd'] = function(row,col) {
            _thisproxy.hot_instance.setCellMeta(row,col,'wordWrap',true);
            _thisproxy.hot_instance.render();
        };

        c['afterDeselect'] = function() {
            _thisproxy.hot_instance.updateSettings({})
        };
        switch (this.type) {
            case "design":
                c['contextMenu'] = {
                    callback: function (key, options) {
                        if (key === 'removecolumncustom') {
                            var that = this;
                            bootbox.confirm({
                                title: '<i class="icon-file-check mr-1"></i> Remove Column',
                                message: 'All data associated with this column will be removed.Continue?',
                                buttons: {
                                    confirm: {
                                        label: '<i class="icon-checkmark3"></i> Remove',
                                        className: 'btn-success'
                                    },
                                    cancel: {
                                        label: '<i class="icon-cross3"></i> Cancel',
                                        className: 'btn-light'
                                    }
                                },
                                callback: function (result) {
                                    if(!result) {
                                        return;
                                    }
                                    var col = options.end.col;
                                    var header = that.getColHeader(col);
                                    _thisproxy.hot_delete_column(header);
                                    _thisproxy.hot_rebuild_columns();
                                }
                            }).find('.modal-dialog').addClass('modal-dialog-centered');
                        } else if (key == 'edit_column') {
                            var cb = _thisproxy.callbacks['edit_column_callback'];
                            if (typeof cb == 'undefined') { console.log('Edit callback is not registered'); return false; }
                            var col = options.end.col;
                            var header = this.getColHeader(col);
                            cb(_thisproxy.araw_config[header]);
                        }
                    },
                    items: {
                        "removecolumncustom": {
                            name: 'Remove this column',
                            disabled: function () {
                            }
                        },
                        "remove_row": {
                            name: 'Remove this row',
                            disabled: function () {
                            }
                        },
                        "edit_column": {
                            name: 'Edit this column'
                        }
                    }
                };
                c['minSpareRows'] = 1;
                c['manualColumnResize'] = true;
                c['manualColumnMove'] = true;
                c['afterColumnResize'] = function(c,size){
                    var header = this.getColHeader(c);
                    _thisproxy.araw_config[header].width = size;
                };
                c['afterColumnMove'] = function(old, n) {
                    for (var i = 0; i < this.countCols(); i++) {
                        var header = this.getColHeader(i);
                        _thisproxy.araw_config[header].order = i;
                    }
                    // Resort data to follow column
                    var temp = transpose(_thisproxy.data);
                    var t = temp.splice(old,1);
                    temp.splice(n,0,t[0]);
                    _thisproxy.data = transpose(temp);
                };
                break;
            case "dataentry":
                c['contextMenu'] = {
                    items: {
                        "row_above": {
                            disabled: function () {
                                return  _thisproxy.hot_instance.getSelected()[0] === 0;
                            }
                        },
                        "row_below": {},
                        "hsep1": "---------",
                        "remove_row": {
                            disabled: function () {
                            }
                        },
                        "hsep2": "---------",
                        'copy': {},
                        'cut': {},
                        "paste": {
                            name: 'Paste',
                            disabled: function() {
                                return clipboardCache.length === 0;
                            },
                            callback: function() {
                                var plugin = this.getPlugin('copyPaste');
                                this.listen();
                                plugin.paste(clipboardCache);
                            }
                        }
                    }
                };
                c['afterCopy'] = function(changes) {
                    clipboardCache = sheetclip.stringify(changes);
                };

                c['afterCut'] = function(changes) {
                    clipboardCache = sheetclip.stringify(changes);
                };

                c['afterPaste'] = function(changes) {
                    clipboardCache = sheetclip.stringify(changes);
                };
                c['minSpareRows'] = 1;
                c['comments'] = true;
                break;

            case "validate":
                c['comments'] = true;
                c['contextMenu'] =false;
                break;

            case "audit":
                c['comments'] = false;
                c['contextMenu'] =false;
                break;
        }

        c['formulas'] = true;
        c['afterChange'] = function(changes, source) {
            var rerender = false;
            if (source == 'paste') {
                rerender = true;
            }
            if (changes != null) {
                // Refresh the formula at the rows
                for (var i = 0; i < changes.length; i++) {
                    var row = changes[i][0];
                    var col_changed = changes[i][1];
                    if (_thisproxy.raw_config[col_changed].type == 'formula') {
                        return;
                    }
                    if (!_thisproxy.hot_instance.isEmptyRow(row)) {
                        // Row not empty, check for formulas existance
                        $.each(_thisproxy.raw_config, function(col, j){
                            if (j.type == 'formula') {
                                if (_thisproxy.hot_instance.getDataAtCell(row,col) == null) {
                                    // Update formula to reflect the new row
                                    var newFormula = _thisproxy.hot_instance.plugin.utils.updateFormula(j.formula,'down',row);
                                    _thisproxy.hot_instance.setDataAtCell(row,col,newFormula);
                                }
                            }
                        });
                    }
                }
            }
            if (rerender) {
                this.render();
            }
        };

        c['afterCreateRow'] = function(index, amount, auto){
        };

        c['afterRemoveRow'] = function(index, amount, auto){
            _thisproxy.refresh_formulae(index);
        };

        c['afterRemoveCol'] = function(index, amount){
        };

        c['beforeRender'] = function(){
        };

        c['afterRender'] = function(){
            renderColor(this);
        };
        function renderColor(_this){
            try {
                if (typeof this.pre_data != 'undefined') {
                    if(this.pre_data.length>0) {
                        for (var i = 0; i < _this.countRows(); i++) {
                            for (var p = 0; p < _this.countCols(); p++) {
                                cell_color = "#B2EACB";
                                font_color = "#000";
                                // console.log(i+"->"+p+":"+_this.getDataAtCell(i, p));
                                if (typeof this.pre_data[i] != 'undefined') {
                                    if (_this.getDataAtCell(i, p) != this.pre_data[i][p]) {
                                        if ((_this.getDataAtCell(i, p) != "") && (typeof this.pre_data[i][p] != 'undefined')) {
                                            $(_this.getCell(i, p)).css({"color": font_color,"background-color": cell_color})
                                            if(this.pre_data[i][p]!='') {
                                                $(_this.getCell(i, p)).attr('title', 'Previous Data: ' + this.pre_data[i][p]);
                                            }else{
                                                $(_this.getCell(i, p)).attr('title', 'Previous Data: [Empty]');
                                            }
                                        }else if((_this.getDataAtCell(i, p) == "") && (typeof this.pre_data[i][p] != 'undefined')){
                                            $(_this.getCell(i, p)).css({"color": font_color,"background-color": cell_color})
                                            if(this.pre_data[i][p]!='') {
                                                $(_this.getCell(i, p)).attr('title', 'Previous Data: ' + this.pre_data[i][p]);
                                            }else{
                                                $(_this.getCell(i, p)).attr('title', 'Previous Data: [Empty]');
                                            }
                                        }
                                    }
                                } else {
                                    $(_this.getCell(i, p)).css({"color": font_color, "background-color": cell_color})
                                    $(_this.getCell(i, p)).attr('title', 'Newly added row');
                                }
                            }
                        }
                    }
                }
            }catch(e){console.log("error in color fun"+e)}
        }

        this.hot_instance = new this.Handsontable(container, c);
        this.hot_initialized = true;

        var maxHeight = (screen.height - (parseInt($('.page-header').css('height')) + parseInt($('.navbar').css('height')) + parseInt($('#after_header > .row:first').css('height')) + 50 ));
        var detectedHeight = parseInt($(".ht_master > .wtHolder > .wtHider").css('height'));
        //Note : Uncomment to  set static height for the Handsontable
        if (detectedHeight > maxHeight) {
            container.parentElement.style.height = maxHeight+"px";
            $(".ht_master > .wtHolder").css('height',maxHeight);
        }
        //Ends Here
        this.hot_instance.forceFullRender = true;
        this.hot_instance.render();
        this.refresh_formulae();
        return this;
    }

    this.refresh_formulae = function(startRow, startCol) {
        // If HOT is not initialized, no need to refresh.
        if (typeof startRow == 'undefined') startRow = 0;
        if (typeof startCol == 'undefined') startCol = 0;
        var _thisproxy = this;
        window.dontRenderYet = true;

        var start = new Date().getTime();
        if (!_thisproxy.hot_initialized) return;
        for (var i = startRow; i < _thisproxy.data.length; i++) {
            var row = i;
            if (!_thisproxy.hot_instance.isEmptyRow(row)) {
                // Row not empty, check for formulas existance
                $.each(_thisproxy.raw_config, function(col, j){
                    if (col < startCol) return;
                    if (j.type == 'formula') {
                        // Update formula to reflect the new row
                        var newFormula = _thisproxy.hot_instance.plugin.utils.updateFormula(j.formula,'down',row);
                        _thisproxy.hot_instance.setDataAtCell(row,col,newFormula);
                    }
                });
            } else {
            }
        }
        var end = new Date().getTime();
        var time = end - start;
        window.dontRenderYet = false;
    };

    this.hot_parse_data = function(data) {
        // Transform dropdown data into its respective values
        var tempd = transpose(data);
        for (var i = 0; i < this.hot_config.columns.length; i++) {
            var hc = this.hot_config.columns[i];
            // If undefined, replace with empty array
            if (typeof tempd[i] == "undefined") tempd[i] = [];
            if (isColumnLookup(hc)) {
                tempd[i] = (bulkLookupVD(raw_config[i]["lookup_id"], tempd[i]));
            }
        }
        this.data = transpose(tempd);
        return this.data;
    };

    this.hot_load_config = function(raw_config) {
        this.raw_config = this.hot_set_raw_config(raw_config);
        this.data = data;
        this.type = type;
        var container = document.getElementById("hottable_container");
        var lastChange = null;
        var c = {};
        for (var i = 0; i < this.raw_config.length; i++) { this.araw_config[raw_config[i]['header']] = this.raw_config[i]; }
        this.hot_config = this.hot_finalize_config(this.raw_config, type);
        this.hot_rebuild_columns();
    };

    // Parse data, turn
    this.hot_load_data = function(data) {
        this.hot_parse_data(data);
        this.hot_instance.loadData(this.data);
    };

    // Standardize raw config & fill in default values
    this.hot_set_raw_config = function(config) {
        for (var i = 0; i < config.length; i++) {
            if (typeof config[i]["readonly"] == "undefined") config[i]["readonly"] = false;
            else if (config[i]["readonly"] == "0") config[i]["readonly"] = false;
            else if (config[i]["readonly"] == "1") config[i]["readonly"] = true;

            config[i]["order"] = parseInt(config[i]["order"]);
        }
        // Reset orders so that it does not skip any value
        config.sort(function(a,b){
            return a['order'] - b['order'];
        });
        for (var i = 0; i < config.length; i++) {
            config[i]["order"] = i;
        }
        this.raw_config = config;
        return this.raw_config;
    };


    this.hot_finalize_config = function() {
        switch (this.type) {
            case "dataentry":
                this.hot_config = this.hot_build_config(this.raw_config);
                break;
            case "design":
                this.hot_config = this.hot_build_custom_config(this.raw_config);
                break;
            case "lock":
            case "validate":
            case "audit":
                this.hot_config = this.hot_build_custom_config(this.raw_config, {contextMenu:null});
                break;
        }

        return this.hot_config;
    };

    this.hot_build_config  = function(){
        var config = this.raw_config;
        var result = {
            colHeaders: [],
            colWidths: [],
            columns: []
        };
        for (var i = 0; i < config.length; i++) {
            var type = config[i]['type'];
            var columnmeta = clone((type == "lookup") ? columns_meta["lookup"][config[i]["lookup_id"]] : columns_meta[type]); // Clone is required here.
            columnmeta['readOnly'] = config[i]['readonly'];
            result['colHeaders'].push(config[i]['header']);
            result['colWidths'].push(config[i]['width']);
            result['columns'].push(columnmeta);
        }
        return result;
    };

    this.hot_build_custom_config = function(c, custom) {
        var config = this.hot_build_config();
        for (var i = 0; i < config.columns.length; i++) {
            // For design readonly is swapped!
            if (this.type == "design") {
                if (typeof config.columns[i]["designReadOnly"] != "undefined") {
                    if (!config.columns[i]["designReadOnly"]) config.columns[i]["readOnly"] = false; else config.columns[i]["readOnly"] = true;
                } else {
                    config.columns[i]["readOnly"] = false;
                }
            } else { config.columns[i]['readOnly'] = true; }
        }
        if (typeof custom == "object") {
            for (var k in custom) {
                if (typeof custom[k] !== 'function') {
                    config[k] = custom[k];
                }
            }
        }
        return config;
    };

    this.hot_rebuild_columns = function() {
        this.raw_config.sort(function(a,b){
            return a['order'] - b['order'];
        });


        for (var i = 0; i < this.raw_config.length; i++) {
            this.raw_config[i]["order"] = i;
        }
        this.hot_instance.updateSettings(this.hot_finalize_config(this.raw_config, this.type));
        var headers = this.hot_instance.getColHeader();
        this.hot_rebuild_data();
        for (var i = 0; i < headers.length; i++) {
            this.araw_config[headers[i]].order = i;
        }
    };

    this.hot_rebuild_data = function() {
        this.hot_instance.loadData(this.data);
    };

    this.hot_delete_column = function(header) {
        delete this.araw_config[header];
        var index = 0;
        for (var i = 0; i < this.raw_config.length; i++) {
            if (this.raw_config[i]['header'] == header) { this.raw_config.splice(i,1); index = i; }
        }
        var d = transpose(this.data);
        d.splice(index,1);
        this.data = transpose(d);
    };


    this.add_new_column = function(title,type,uom,extra) {
        if (typeof this.araw_config[title] == "undefined") {
            var d = {header: title, type:type, uom:uom, width:200, order:raw_config.length, lookup_id:null, progressive_link:null, non_progressive_link: null}
            d["readonly"] = false;
            if (typeof extra != "undefined") {
                if ((type == "lookup") && (typeof extra["lookup_id"] != "undefined")) {d["lookup_id"] = extra["lookup_id"]}
                if ((type == "progressive_link") && (typeof extra["progressive_link"] != "undefined")) {d["progressive_link"] = extra["progressive_link"]}
                if ((type == "non_progressive_link") && (typeof extra["non_progressive_link"] != "undefined")) {d["non_progressive_link"] = extra["non_progressive_link"]}
                if ((type == "formula") && (typeof extra["formula"] != "undefined")) {d["formula"] = extra["formula"]}
                d["readonly"] = ((typeof extra["readonly"] != "undefined") && (extra["readonly"] == "1"));
            }
            this.raw_config.push(d);
            this.araw_config[title] = this.raw_config[this.raw_config.length-1];
        }
        this.hot_rebuild_columns();
        this.refresh_formulae();
    };

    this.edit_column = function(originaltitle,title,type,uom,extra) {
        if (typeof this.araw_config[originaltitle] != "undefined") {
            var obj = this.araw_config[originaltitle];
            if (originaltitle == title) {
                //No need to clone, just edit the object.
            } else {
                //Cloning required
                obj = clone(obj);
            }
            obj.header = title;
            obj.type = type;
            obj.uom = uom;
            obj["readonly"] = false;
            if (typeof extra != "undefined") {
                if ((type == "lookup") && (typeof extra["lookup_id"] != "undefined")) {obj["lookup_id"] = extra["lookup_id"]}
                if ((type == "progressive_link") && (typeof extra["progressive_link"] != "undefined")) {obj["progressive_link"] = extra["progressive_link"]}
                if ((type == "non_progressive_link") && (typeof extra["non_progressive_link"] != "undefined")) {obj["non_progressive_link"] = extra["non_progressive_link"]}
                if ((type == "formula") && (typeof extra["formula"] != "undefined")) {obj["formula"] = extra["formula"]}
                obj["readonly"] = ((typeof extra["readonly"] != "undefined") && (extra["readonly"] == "1"));
            }
            if (originaltitle == title) {

            } else {
                //this.raw_config.push(obj);
                var index = 0;
                for (var i = 0; i < this.raw_config.length; i++) {
                    if (this.raw_config[i]['header'] == originaltitle) { index = i; this.raw_config.splice(i,1,obj); break; }
                }
                this.araw_config[title] = obj;
                delete this.araw_config[originaltitle];
            }
            this.hot_rebuild_columns();
            if (type == 'formula') {
                this.refresh_formulae();
            }
        }
    };

    this.get_config_by_column_header = function(header) {
        return this.araw_config[header];
    };


    this.lock_table = function() {
        this.type = "lock";
        this.hot_config = this.hot_finalize_config();
        this.hot_instance.updateSettings(this.hot_config);
    };


    this.hot_serialize_data = function() {
        var d = [];
        var collength = this.hot_instance.countCols()

        // Transpose to rows
        for (var i = 0; i < collength; i++) {
            var coldata = this.hot_instance.getDataAtCol(i);
            d.push(coldata);
        }
        var rowdata = transpose(d);
        var resultd = [];
        // Remove empty rows
        for (var i = 0; i < rowdata.length; i++) {
            var skip = true;
            for (var j = 0; j < rowdata[i].length; j++) {
                var jd = rowdata[i][j];
                if ((typeof jd == "number") ||
                    ((typeof jd != "undefined") && (jd != "") && (jd != null) && (jd.length > 0))) { skip = false; break; }
            }
            if (!skip) { resultd.push(rowdata[i]); }
        }

        d = transpose(resultd);

        // Transform dropdown data into its respective values
        for (var i = 0; i < this.hot_config.columns.length; i++) {
            var c = this.hot_config.columns[i];
            if (isColumnLookup(c)) {
                d[i] = (bulkLookupDV(this.raw_config[i]["lookup_id"], d[i]));
            }
            // Parse formula so it is saved as data
            if (typeof d[i] != 'undefined') {
                for (var j = 0; j < d[i].length; j++) {
                    if (typeof d[i][j] == 'string') {
                        if (d[i][j].indexOf('=') > -1) {
                            d[i][j] = this.hot_instance.plugin.parse(d[i][j].replace('=',''),{}).result;
                        }
                    }
                }
            }
        }
        return d;
    };

    this.hot_add_comment = function(row, col, text, render) {
        var k = row+","+col;
        var c = this.acomments[k]
        this.acomments[k] = text;
        if ((typeof render != "undefined") && (render)) this.hot_render_comment();
    };

    this.hot_render_comment = function() {
        this.comments = this.hot_serialize_comment();
        this.hot_instance.updateSettings({'cell':this.comments});
        // Hack to disable editing in the comment box
        var a = document.getElementsByClassName("htCommentTextArea");
        for (var i = 0; i < a.length; i++) { a[i].setAttribute("disabled","disabled") };
    };

    this.hot_serialize_comment = function() {
        var cmts = this.acomments;
        var cells = [];
        for (k in cmts) {
            if (!cmts.hasOwnProperty(k)) continue;
            var key = k.split(",");
            var row = key[0];
            var col = key[1];
            cells.push({row: row, col: col, comment: cmts[k]});
        }
        return cells;
    };

    this.register_callback = function(id, cb) {
        if (typeof cb != 'function') { return false; }
        this.callbacks[id] = cb;
    };

    this.register_edit_callback = function(cb) {
        this.register_callback('edit_column_callback', cb);
    };

    this.fill_column = function (col, data) {
        // If current data exist, push into existing one.
        if (typeof this.data[0].length != "undefined") {
            var tempdata = transpose(this.data);

            if (col == tempdata.length) {
                tempdata.push(data);
            } else {
                if (tempdata.length <= col) {
                    for (var i = 0; i < col-tempdata.length; i++) {
                        tempdata.push([]);
                    }
                    tempdata.push(data);
                } else {
                    tempdata.splice(col,1,data);
                }
            }
            var result = transpose(tempdata);
            this.data = result;
            this.hot_rebuild_data();
        } else {
            // Data does not exist, create new.
            this.data = transpose([data]);
            this.hot_rebuild_data();
        }
    };

    this.Handsontable.renderers.registerRenderer("percentageround2Renderer",percentageround2Renderer);
    this.Handsontable.renderers.registerRenderer("disabledRenderer",disabledRenderer);
    this.Handsontable.renderers.registerRenderer("customNumericRightAlignRenderer",customNumericRightAlignRenderer);
    this.Handsontable.renderers.registerRenderer("customDecimalRightAlignRenderer2",customDecimalRightAlignRenderer2);
    this.Handsontable.renderers.registerRenderer("customFormulaRenderer",customFormulaRenderer);
    this.initialize(raw_config, data, type);
    this.initialized = true;
    return this;
}


// Some shared functions

function synchronize_comments(comments, isValidation) {
    var commentmaxwidth = 260;
    var $tbodymaster = $('.ht_master .htCore tbody');
    var $tbody = $('.ht_clone_right.handsontable .htCore tbody');
    var mastertds = $tbodymaster.children();
    var mastertdslen = mastertds.map(function(i,idx){return $(this).children('td').length});
    var tdlengthori = hot_object.hot_config.columns.length;
    var lefttds = $('.ht_clone_left .htCore tbody tr th');
    var rowcount =  hot_object.hot_instance.countRows();
    $tbody.empty();
    for (var i = 0; i < rowcount; i++) {
        var fulltext = "";
        if (typeof comments[i] != "undefined") {
            fulltext = comments[i];
        }

        var isMasterCreated = (mastertdslen[i] == (tdlengthori+2));
        if (!isMasterCreated) {
            $(mastertds[i]).append("<td class='remarkdontremove'></td><td class='remarkdontremove'><div>"+fulltext+"</div></td>");
        } else {
            $(mastertds[i]).children('td:last-child').children('div').text(fulltext);
        }

        var $mastertd = $(mastertds[i]).children("td:last-child");
        var masterHeight = $mastertd.css('height');

        // Create that TRs and TDs for clone right
        if (isValidation) {
            $mastertd.children('div').css('max-width',commentmaxwidth+'px').css('float','left');
            $tbody.append("<tr><td style='border: 0px;border-left: 1px solid #ccc;border-right: 1px solid #ccc;'></td><td><div style='float:left;max-width:"+commentmaxwidth+"px;' class='comment_text' data-comment=''><span>"+fulltext+"</span></div><div style='text-align:right'><button type='button' class='btn' style='height:20px;height: 17px;padding: 1px 5px;font-size: 10px;' onclick='show_comment(this)'> <span class='glyphicon glyphicon-comment'></span></button></div>"+"</td></tr>");
        } else {
            $tbody.append("<tr><td style='border: 0px;border-left: 1px solid #ccc;border-right: 1px solid #ccc;'></td><td><div><span>"+fulltext+"</span></div></td></tr>");
        }

        // To sync height of left clone table
        $(lefttds[i]).css('height',masterHeight);

        hot_object.hot_instance.render();


    }
}


function draw_comments(comments,view) {
    if (typeof comments == "undefined") comments = [];
    if (typeof view == "undefined") view = "validation";

    var isValidation = (view == "validation");

    var padwidth = 10;
    var commentwidth = 300;
    var exists = ($('.ht_clone_right.handsontable').length > 0)

    var wtwidth = parseInt($('.ht_clone_top').css('width'));
    var left = parseInt($('.ht_master .wtHider').css('width'));

    var leftfrom = left+commentwidth+padwidth;
    if (leftfrom > wtwidth) {
        leftfrom = wtwidth-commentwidth-padwidth;
    } else {
        leftfrom = left;
    }
    leftfrom = leftfrom+'px';
    var rowcount =  hot_object.hot_instance.countRows();

    if (!exists) {
        $colgroup = $('.ht_master .htCore colgroup');
        $thead = $('.ht_master .htCore thead tr');
        $tbodymaster = $('.ht_master .htCore tbody');

        $colgroup.append('<col style="width: '+padwidth+'px">');
        $colgroup.append('<col style="width: '+commentwidth+'px">');
        $thead.append('<th></th>');
        $thead.append('<th>Remarks</th>');
        $tbodymaster.children().each(function(){$(this).append('<td class="remarkdontremove"></td><td class="remarkdontremove"><div></div></td>');});


        $c_colgroup = $('.ht_clone_top .htCore colgroup');
        $c_thead = $('.ht_clone_top .htCore thead tr');
        //$c_tbody = $('.ht_clone_top .htCore tbody tr');

        $c_colgroup.append('<col style="width: '+padwidth+'px">');
        $c_colgroup.append('<col style="width: '+commentwidth+'px">');
        $c_thead.append('<th></th>');
        $c_thead.append('<th>Remarks</th>');

        $right = $('<div class="ht_clone_right handsontable" style="position:absolute; overflow:hidden;top:0px; left:'+leftfrom+';width:'+(commentwidth+padwidth)+'px;z-index:101">');
        $wtholder = $('<div class="wtHolder">');
        $wthider = $('<div class="wtHider">');
        $wtspreader = $('<div class="wtSpreader">');

        $tbody = $('<tbody></tbody>');

        $htcore = $('<table class="htCore"><colgroup><col style="width:'+padwidth+'px;"><col style="width:'+commentwidth+'px"></colgroup><thead><th style="border: 0px;background: white;border-left: 1px solid #ccc;border-right: 1px solid #ccc;">&nbsp</th><th style="height:25px">Remarks</th></thead></table>');
        $htcore.append($tbody);
        $right.append($wtholder.append($wthider.append($wtspreader.append($htcore))));
        $('#hottable_container').append($right);

        hot_object.hot_instance.updateSettings({
            'afterRender': function(isforced){
                // Synchronize scrollbar
                var wtwidth = parseInt($('.ht_clone_top').css('width'));
                var left = parseInt($('.ht_master .wtHider').css('width'));

                var leftfrom = left+commentwidth+padwidth;
                if (leftfrom > wtwidth) {
                    leftfrom = wtwidth-commentwidth-padwidth;
                } else {
                    leftfrom = left;
                }
                leftfrom = leftfrom+'px';
                $('.ht_clone_right.handsontable').css('left',leftfrom);

                // Synchronize tr heights (from master to cloned right)
                var clonerighttr = $tbody.children();

                $tbodymaster.children().each(function(idx,i){
                    if (typeof clonerighttr[idx] == "undefined") return;
                    clonerighttr[idx].style.height = $(i).css('height');
                })
            }
        });

    } else {
        $tbody = $('.ht_clone_right.handsontable .htCore tbody');
        $tbody.empty();
    }

    synchronize_comments(comments, isValidation);

}





/* Utilities */

function transpose(m){
    return zeroFill(m.reduce(function(m,r)
    {
        //return Math.max(m,r.length);
        return Math.max(m,typeof(r.length)== 'undefined' ? 0 : r.length)
    },0)).map(function(r,i)
    {
        return zeroFill(m.length).map(function(c,j)
        {
            return m[j][i]
        })
    })
}
function zeroFill(n){
    return new Array(n+1).join("0").split("").map(Number)
}


// http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-clone-an-object/5344074#5344074
function clone(obj) {
    if(obj === null || typeof(obj) !== 'object' || 'isActiveClone' in obj)
        return obj;

    var temp = obj.constructor(); // changed

    for(var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
            obj['isActiveClone'] = null;
            temp[key] = clone(obj[key]);
            delete obj['isActiveClone'];
        }
    }
    return temp;
}



// From http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-clone-an-object
// extends 'from' object with members from 'to'. If 'to' is null, a deep clone of 'from' is returned
function clone(from, to)
{
    if (from == null || typeof from != "object") return from;
    if (from.constructor != Object && from.constructor != Array) return from;
    if (from.constructor == Date || from.constructor == RegExp || from.constructor == Function ||
        from.constructor == String || from.constructor == Number || from.constructor == Boolean)
        return new from.constructor(from);

    to = to || new from.constructor();

    for (var name in from)
    {
        to[name] = typeof to[name] == "undefined" ? clone(from[name], null) : to[name];
    }

    return to;
}

// From https://gist.github.com/ChrisCinelli/5688048
function truncText (text, maxLength, ellipseText){
    ellipseText = ellipseText || '&hellip;';

    if (text.length < maxLength)
        return text;

    //Find the last piece of string that contain a series of not A-Za-z0-9_ followed by A-Za-z0-9_ starting from maxLength
    var m = text.substr(0, maxLength).match(/([^A-Za-z0-9_]*)[A-Za-z0-9_]*$/);
    if(!m) return ellipseText;

    //Position of last output character
    var lastCharPosition = maxLength-m[0].length;

    //If it is a space or "[" or "(" or "{" then stop one before.
    if(/[\s\(\[\{]/.test(text[lastCharPosition])) lastCharPosition--;

    //Make sure we do not just return a letter..
    return (lastCharPosition ? text.substr(0, lastCharPosition+1) : '') + ellipseText;
}

// From http://stackoverflow.com/a/4011635/4216956
function swapArrayElements(array_object, index_a, index_b) {
    var temp = array_object[index_a];
    array_object[index_a] = array_object[index_b];
    array_object[index_b] = temp;
}