var Milestones = function() {

    var _wbs = function(d_data) {
      
       // gantt.templates.scale_cell_class = function (date) {
       //     if (date.getDay() == 0 || date.getDay() == 6) {
       //         return "weekend";
       //     }
       // };
       // gantt.templates.task_cell_class = function (item, date) {
       //     if (date.getDay() == 0 || date.getDay() == 6) {
       //         return "weekend"
       //     }
       // };

       var _scale_cell_class_weekend = function (date, cell_class) {
           if (date.getDay() == 0 || date.getDay() == 6) {
               return cell_class;
           }
       };
       var _task_cell_class_weekend = function (item, date, cell_class) {
           if (date.getDay() == 0 || date.getDay() == 6) {
               return cell_class;
           }
       };

       

        //Progress Text - START
        gantt.templates.progress_text = function (start, end, task) {
            return "<span style='text-align:left;'>" + Math.round(task.progress * 100) + "% </span>";
        };    
       //Progress Text - ENDS
   
       gantt.templates.rightside_text = function (start, end, task) {
           if (task.type == gantt.config.types.milestone) {
               return task.text;
           }
           return "";
       };

       gantt.templates.task_class = function (start, end, task) {
            if (task.type == gantt.config.types.project)
                return "hide_project_progress_drag";
        };


        // (function dynamicTaskType() {
        //     var delTaskParent;
    
        //     function checkParents(id) {
        //         setTaskType(id);
        //         var parent = gantt.getParent(id);
        //         if (parent != gantt.config.root_id) {
        //             checkParents(parent);
        //         }
        //     }
    
        //     function setTaskType(id) {
        //         id = id.id ? id.id : id;
        //         var task = gantt.getTask(id);
        //         var type = gantt.hasChild(task.id) ? gantt.config.types.project : gantt.config.types.task;
        //         if (type != task.type) {
        //             task.type = type;
        //             gantt.updateTask(id);
        //         }
        //     }
    
        //     gantt.attachEvent("onParse", function () {
        //         gantt.eachTask(function (task) {
        //             setTaskType(task);
        //         });
        //     });
    
        //     gantt.attachEvent("onAfterTaskAdd", function onAfterTaskAdd(id) {
        //         gantt.batchUpdate(checkParents(id));
        //     });
    
        //     gantt.attachEvent("onBeforeTaskDelete", function onBeforeTaskDelete(id, task) {
        //         delTaskParent = gantt.getParent(id);
        //         return true;
        //     });
    
        //     gantt.attachEvent("onAfterTaskDelete", function onAfterTaskDelete(id, task) {
        //         if (delTaskParent != gantt.config.root_id) {
        //             gantt.batchUpdate(checkParents(delTaskParent));
        //         }
        //     });
    
        // })();


        // recalculate progress of summary tasks when the progress of subtasks changes
        (function dynamicProgress() {

            function calculateSummaryProgress(task) {
                if (task.type != gantt.config.types.project)
                    return task.progress;
                var totalToDo = 0;
                var totalDone = 0;
                gantt.eachTask(function (child) {
                    if (child.type != gantt.config.types.project) {
                        totalToDo += child.duration;
                        totalDone += (child.progress || 0) * child.duration;
                    }
                }, task.id);
                if (!totalToDo) return 0;
                else return totalDone / totalToDo;
            }

            function calculateSummaryCost(task) {              
                if (task.type != gantt.config.types.project)
                    return task._6;
                var totalCost = 0;
                // console.log(task);
                gantt.eachTask(function (child) {
                    //console.log(child);
                    if (child.type != gantt.config.types.project) {
                        if(child._6 != "-"){
                            totalCost += parseInt((child._6).replace(",","").replace("$",""));
                        }
                    }else{
                        totalCost += calculateSummaryCost(child);
                    }
                }, task.id);


                if (!totalCost) return 0;
                else return totalCost;
            }
    
            function refreshSummaryProgress(id, submit) {
                if (!gantt.isTaskExists(id))
                    return;
    
                var task = gantt.getTask(id);
                task.progress = calculateSummaryProgress(task);    
                //task._6 = calculateSummaryCost(task);           
    
                if (!submit) {
                    gantt.refreshTask(id);
                } else {
                    gantt.updateTask(id);
                    
                }
    
                if (!submit && gantt.getParent(id) !== gantt.config.root_id) {
                    refreshSummaryProgress(gantt.getParent(id), submit);
                }
            }
    
            // gantt.attachEvent("onBeforeParse", function(){ 
            //     gantt.eachTask(function (task) {
            //         task._6 = "calculateSummaryCost(task)";
            //     });
            // });
            gantt.attachEvent("onParse", function () {
                gantt.eachTask(function (task) {
                    task.progress = calculateSummaryProgress(task);
                    const formatter = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2
                    });
                    task._6 = formatter.format(calculateSummaryCost(task));
                    
                });
            });

    
            gantt.attachEvent("onAfterTaskUpdate", function (id) {
                refreshSummaryProgress(gantt.getParent(id), true);
            });
    
            gantt.attachEvent("onTaskDrag", function (id) {
                refreshSummaryProgress(gantt.getParent(id), false);
            });
            gantt.attachEvent("onAfterTaskAdd", function (id) {
                refreshSummaryProgress(gantt.getParent(id), true);
            });
    
    
            (function () {
                var idParentBeforeDeleteTask = 0;
                gantt.attachEvent("onBeforeTaskDelete", function (id) {
                    idParentBeforeDeleteTask = gantt.getParent(id);
                });
                gantt.attachEvent("onAfterTaskDelete", function () {
                    refreshSummaryProgress(idParentBeforeDeleteTask, true);
                });
            })();
        })();

       gantt.config.editor_types.custom_editor = {
           show: function (id, column, config, placeholder) {
             // called when input is displayed, put html markup of the editor into placeholder 
             // and initialize your editor if needed:
                 var html = "<div><input type='text' name='" + column.name + "'></div>";
                 placeholder.innerHTML = html;
           },
           hide: function () {
             // called when input is hidden 
             // destroy any complex editors or detach event listeners from here
           },
          
           set_value: function (value, id, column, node) {
             // set input value
           },
          
           get_value: function (id, column, node) {
             // return input value
           },
          
           is_changed: function (value, id, column, node) {
             // called before save/close. Return true if new value differs from the original one
             // returning true will trigger saving changes, returning false will skip saving 
           },
          
           is_valid: function (value, id, column, node) {
             // validate, changes will be discarded if the method returns false
             return true/false;
           },
          
           save: function (id, column, node) {
              // only for inputs with map_to:auto. complex save behavior goes here
           },
           focus: function (node) {
           }
         }
       var textEditor = { type: "custom_editor", map_to: "text_comment"};
   
       gantt.config.columns = [
           {name: "wbs", label: "Activity ID", width: 80, template: gantt.getWBSCode, resize: true},
           {name: "text", tree: true, width: 360, label: "Activity Name", resize: true, template: highlightProject},
           {name: "start_date", align: "center", label: "Start Date", width: 100, resize: true},
           {name: "end_date", align: "center",label: "End Date",width: 100, resize: true},
           {name: "owner", align: "center", width: 160, label: "Resources", template: function (task) {
                   if (task.type == gantt.config.types.project) {
                       return "";
                   }
       
                   var result = "";
                   var store = gantt.getDatastore("resource");
                   var owners = task[gantt.config.resource_property];
       
                   if (!owners || !owners.length) {
                       return "-";
                   }
       
                   if(owners.length == 1){
                       return store.getItem(owners[0]).text;
                   }
       
                   owners.forEach(function(ownerId) {
                       var owner = store.getItem(ownerId);
                       if (!owner)
                           return;
                       result += "<div class='owner-label' title='" + owner.text + "'>" + owner.text.substr(0, 1) + "</div>";
       
                   });
       
                   return result;
               }, resize: true, hide: true
           },
   
           {name: "duration", width: 58, align: "center", resize: true},
           {name: "cost", align: "center", width: 120, label: "Cost", template: function (task) {
                const formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2
                });
                var owners = task[gantt.config.resource_property];
                var duration = task.duration;
                if (task.type == gantt.config.types.project) {
                        return task._6;
                        // var totalCost = 0;
                        // gantt.eachTask(function (child) {
                        //     console.log(child);
                        //     var owners2 = task[gantt.config.resource_property];
                        //     if (child.type != gantt.config.types.project) {
                        //         totalCost += getTaskCost(owners2,duration);
                        //     }
                        // }, task.id);
                        // if (!totalCost) return 0;
                        // else return formatter.format(totalCost);
                }
            
                return formatter.format(getTaskCost(owners,duration));
           }, resize: true, hide: true
           },
           {name: "text_comment", label: "Comment", tree: false, width: 70, resize: true, hide: true, editor: textEditor, template: function (task) {
                   return "-";
               }
           },
           {name: "add", width: 30}
       ];

       function highlightProject(task){
            if(task.type == gantt.config.types.project)
                return "<div class='gantt_tree_content font-weight-bold'>"+task.text+"</div>";
            return "<div class='gantt_tree_content'>"+task.text+"</div>";
        };

       function getTaskCost(owners,duration){
            if (!owners || !owners.length) {
                return 0;
            }
            var cost= 0;
            var cost2 = 0;
            var perhour = 0;
            perhour = parseInt(duration);
            var store = gantt.getDatastore("resource");
            owners.forEach(function(ownerId) {
                var owner = store.getItem(ownerId);
                if (!owner)
                    return;

                if(owner.id == 6){
                    cost= parseInt(cost) + ( parseInt(42000) / parseInt(20) );
                }
                else if(owner.id == 7){
                    cost =  parseInt(cost) + ( parseInt(37000) / parseInt(20) );
                }
                else if(owner.id == 8){
                    cost =  parseInt(cost) + ( parseInt(26000) / parseInt(20) );
                }
                else if(owner.id == 9){
                    cost =  parseInt(cost) + ( parseInt(26000) / parseInt(20) );
                }
                else if(owner.id == 10){
                    cost =  parseInt(cost) + ( parseInt(26000)/ parseInt(20) );
                }
                else if(owner.id == 11){
                    cost =  parseInt(cost) + ( parseInt(10000) / parseInt(20) );
                }
                else if(owner.id == 12){
                    cost=  parseInt(cost) + ( parseInt(14000) / parseInt(20) );
                }
                else if(owner.id == 13){
                    cost= parseInt(cost) + ( parseInt(8500) / parseInt(20) );
                }
                else if(owner.id == 14){
                    cost= parseInt(cost) + ( parseInt(8500) / parseInt(20) ) ;
                }
                else if(owner.id == 15) {
                    cost = parseInt(cost) + ( parseInt(7500) / parseInt(20) ) ;
                }
                else if(owner.id == 16){
                    cost= parseInt(cost) + ( parseInt(6500) / parseInt(20) );
                }
                else if(owner.id == 17){
                    cost= parseInt(cost) + ( parseInt(5000) / parseInt(20) ) ;
                }
                else if(owner.id == 18){
                    cost= parseInt(cost) + ( parseInt(7500) / parseInt(20) ) ;
                }
                else if(owner.id == 19){
                    cost= parseInt(cost) + ( parseInt(6500) / parseInt(20) ) ;
                }
                else if(owner.id == 20){
                    cost= parseInt(cost) + ( parseInt(6500) / parseInt(20) ) ;
                }
                else if(owner.id == 22){
                    cost= parseInt(cost) + ( parseInt(32000) / parseInt(20) ) ;
                }
                else if(owner.id == 23){
                    cost= parseInt(cost) + ( parseInt(23000) / parseInt(20) ) ;
                }
                else if(owner.id == 24){
                    cost= parseInt(cost) + ( parseInt(16000) / parseInt(20) ) ;
                }
                else if(owner.id == 25){
                    cost= parseInt(cost) + ( parseInt(16000) / parseInt(20) ) ;
                }
                else if(owner.id == 26){
                    cost= parseInt(cost) + ( parseInt(9500) / parseInt(20) ) ;
                }
                else if(owner.id == 27){
                    cost= parseInt(cost) + ( parseInt(13500) / parseInt(20) ) ;
                }
                else if(owner.id == 28){
                    cost=  parseInt(cost) +( parseInt(9500) / parseInt(20) ) ;
                }
                else if(owner.id == 29){
                    cost= parseInt(cost) + ( parseInt(8500) / parseInt(20) ) ;
                }
                else if(owner.id == 30){
                    cost= parseInt(cost) + ( parseInt(10500) / parseInt(20) );
                }
                else if(owner.id == 31){
                    cost= parseInt(cost) + ( parseInt(10500) / parseInt(20) ) ;
                }
                else if(owner.id == 32){
                    cost= parseInt(cost) + ( parseInt(9000) / parseInt(20) ) ;
                }
                else if(owner.id == 33){
                    cost= parseInt(cost) + ( parseInt(7500) / parseInt(20) ) ;
                }
                else if(owner.id == 34){
                    cost= parseInt(cost) + ( parseInt(7500) / parseInt(20) ) ;
                }
                else if(owner.id == 35){
                    cost= parseInt(cost) + ( parseInt(6300) / parseInt(20) ) ;
                }
                else if(owner.id == 36){
                    cost= parseInt(cost) + ( parseInt(5800) / parseInt(20) ) ;
                }
                else if(owner.id == 37){
                    cost= parseInt(cost) + ( parseInt(5300) / parseInt(20) ) ;
                }
                else if(owner.id == 38){
                    cost= parseInt(cost) + ( parseInt(6300) / parseInt(20) ) ;
                }
                else if(owner.id == 39){
                    cost= parseInt(cost) + ( parseInt(7500) / parseInt(20) ) ;
                }
                else if(owner.id == 40){
                    cost= parseInt(cost) + ( parseInt(4800) / parseInt(20) ) ;
                }
                else if(owner.id == 41){
                    cost= parseInt(cost) + ( parseInt(15500) / parseInt(20) ) ;
                }
                else if(owner.id == 42){
                    cost= parseInt(cost) + ( parseInt(15500) / parseInt(20) ) ;
                }
                else if(owner.id== 43){
                    cost=  parseInt(cost) + ( parseInt(15500) / parseInt(20) ) ;
                }
                else if(owner.id == 44){
                    cost=  parseInt(cost) + ( parseInt(12500) / parseInt(20) ) ;
                }
                else if(owner.id == 45){
                    cost=  parseInt(cost) + ( parseInt(10500) / parseInt(20) );
                }
                else if(owner.id == 46){
                    cost= parseInt(cost) + ( parseInt(8500) / parseInt(20) ) ;
                }
                else if(owner.id == 47){
                    cost=  parseInt(cost) + ( parseInt(9500) / parseInt(20) ) ;
                }
                else if(owner.id == 48){
                    cost= parseInt(cost) + ( parseInt(8500) / parseInt(20) ) ;
                }
                else if(owner.id == 49){
                    cost= parseInt(cost) + ( parseInt(8500) / parseInt(20) );
                }
                else if(owner.id == 50){
                    cost= parseInt(cost) + ( parseInt(8500) / parseInt(20) ) ;
                }
                else if(owner.id == 51){
                    cost= parseInt(cost) + ( parseInt(8500) / parseInt(20) );
                }
                else if(owner.id == 52){
                    cost= parseInt(cost) + ( parseInt(8500) / parseInt(20) );
                }
                else if(owner.id == 53){
                    cost= parseInt(cost) + ( parseInt(6300) / parseInt(20) ) ;
                }
                else if(owner.id == 54){
                    cost= parseInt(cost) + ( parseInt(6300) / parseInt(20) ) ;
                }
                else if(owner.id == 55){
                    cost= parseInt(cost) + ( parseInt(8000) / parseInt(20) );
                }
                else if(owner.id == 56){
                    cost= parseInt(cost) + ( parseInt(6500) / parseInt(20) ) ;
                }
                else if(owner.id== 57){
                    cost= parseInt(cost) + ( parseInt(6300) / parseInt(20) ) ;
                }
                else if(owner.id == 58){
                    cost= parseInt(cost) + ( parseInt(5800) / parseInt(20) ) ;
                }
                else if(owner.id== 59){
                    cost=  parseInt(cost) + ( parseInt(8400) / parseInt(20) ) ;
                }
                else if(owner.id == 60){
                    cost= parseInt(cost) + ( parseInt(5800) / parseInt(20) );
                }
                else if(owner.id == 61){
                    cost= parseInt(cost) + ( parseInt(4700) / parseInt(20) ) ;
                }
                else if(owner.id == 62){
                    cost= parseInt(cost) + ( parseInt(5700) / parseInt(20) ) ;
                }
                else if(owner.id == 63){
                    cost= parseInt(cost) + ( parseInt(4700) / parseInt(20) ) ;
                }
                else if(owner.id == 64){
                    cost= parseInt(cost) + ( parseInt(4200) / parseInt(20) ) ;
                }
                else if(owner.id  == 65){
                    cost2=  parseInt(cost2) + 4000;
                }
                else if(owner.id == 66){
                    cost2= parseInt(cost2) + 2000;
                }
                else if(owner.id  == 67){
                    cost2=  parseInt(cost2) + 10000;
                }
                else if(owner.id == 68){
                    cost2=   parseInt(cost2) + 1000;
                }
                else if(owner.id == 69){
                    cost2=   parseInt(cost2) + 7000;
                }
                else if(owner.id == 70){
                    cost2=  parseInt(cost2) + 5000;
                }
                else if(owner.id== 71){
                    cost2= parseInt(cost2) +  5500;
                }
                else if(owner.id == 72){
                    cost2=  parseInt(cost2) + 7933;
                }
                else if(owner.id  == 73){
                    cost2=  parseInt(cost2) + 400;
                }
                else if(owner.id  == 74){
                    cost2=  parseInt(cost2) + 300;
                }
                else if(owner.id  == 75){
                    cost2=  parseInt(cost2) + 800;
                }
                else{
                    cost= parseInt(cost) + 4000;
                }
            });
            return ( parseInt(cost) *  parseInt(perhour) ) +  parseInt(cost2);
       }
       var date_to_str = gantt.date.date_to_str(gantt.config.task_date);
       var today = new Date();
       gantt.addMarker({ start_date: today, css: "today", text: "Today",  title:date_to_str( today)});
       var start = new Date(2017,08, 25);
       gantt.addMarker({
           start_date: start,
           css: "status_line",
           text: "Start Project",
           title:"Start project: "+ date_to_str(start)
       });


       var _setScaleConfig = function(value) {
           switch (value) {
                case 1:
                   gantt.config.scale_unit = "day";
                   gantt.config.step = 1;
                   gantt.config.date_scale = "%d %M";
                   gantt.config.subscales = [];
                   gantt.config.scale_height = 27;
                   gantt.templates.date_scale = null;
                   gantt.templates.scale_cell_class = function (date){ return _scale_cell_class_weekend(date, "weekend") };
                   gantt.templates.task_cell_class = function (item, date){ return _task_cell_class_weekend(item, date, "weekend") };
                break;
                case 2:
                   var weekScaleTemplate = function (date) {
                       var dateToStr = gantt.date.date_to_str("%d %M");
                       var startDate = gantt.date.week_start(new Date(date));
                       var endDate = gantt.date.add(gantt.date.add(startDate, 1, "week"), -1, "day");
                       return dateToStr(startDate) + " - " + dateToStr(endDate);
                   };
   
                   gantt.config.scale_unit = "week";
                   gantt.config.step = 1;
                   gantt.templates.date_scale = weekScaleTemplate;
                   gantt.templates.scale_cell_class = function (date){ return _scale_cell_class_weekend(date, "weekend") };
                   gantt.templates.task_cell_class = function (item, date){ return _task_cell_class_weekend(item, date, "weekend") };
                   gantt.config.subscales = [
                       {unit: "day", step: 1, date: "%D"}
                   ];
                   gantt.config.scale_height = 50;
                break;
                case 3:
                   gantt.config.scale_unit = "month";
                   gantt.config.date_scale = "%F, %Y";
                   gantt.config.subscales = [
                       {unit: "day", step: 1, date: "%j, %D"}
                   ];
                   gantt.config.scale_height = 50;
                   gantt.templates.date_scale = null;
                   gantt.templates.scale_cell_class = function (date){ return _scale_cell_class_weekend(date, "weekend") };
                   gantt.templates.task_cell_class = function (item, date){ return _task_cell_class_weekend(item, date, "weekend") };
                break;
                case 4:
                   gantt.config.scale_unit = "year";
                   gantt.config.step = 1;
                   gantt.config.date_scale = "%Y";
                   gantt.config.min_column_width = 50;
                   gantt.config.scale_height = 90;
                   gantt.templates.scale_cell_class = function (date){ return _scale_cell_class_weekend(date, "") };
                   gantt.templates.task_cell_class = function (item, date){ return _task_cell_class_weekend(item, date, "") };
                   gantt.templates.date_scale = null;
   
                   var quarterLabel = function(date) {
                       var month = date.getMonth();
                       var q_num;
               
                       if (month >= 9) {
                           q_num = 4;
                       } else if (month >= 6) {
                           q_num = 3;
                       } else if (month >= 3) {
                           q_num = 2;
                       } else {
                           q_num = 1;
                       }
               
                       return "Q" + q_num;
                   };
   
                   gantt.config.subscales = [
                       {unit: "quarter", step: 1, template: quarterLabel},
                       {unit: "month", step: 1, date: "%M"}
                   ];
                break;
                case 5:
                   gantt.config.scale_unit = "year";
                   gantt.config.step = 1;
                   gantt.config.date_scale = "%Y";
                   gantt.config.min_column_width = 50;
                   gantt.config.scale_height = 90;
                   gantt.templates.date_scale = null;
                   gantt.templates.scale_cell_class = function (date){ return _scale_cell_class_weekend(date, "") };
                   gantt.templates.task_cell_class = function (item, date){ return _task_cell_class_weekend(item, date, "") };
                   gantt.config.subscales = [
                       {unit: "month", step: 1, date: "%M"}
                   ];
                break;
           }
       };
   
       /* CUSTOM LIGHTBOX : START */

       var taskId = null;

       gantt.showLightbox = function(id) {
           taskId = id;
           var task = gantt.getTask(id);
       
        //    console.log(task);

           var form = getForm();
           var tname = form.querySelector("[name='description']");
           var s_date = form.querySelector("[name='start_date']");
           var e_date = form.querySelector("[name='end_date']");
           tname.focus();
           tname.value = task.text;
           var formatFunc = gantt.date.date_to_str("%d-%M-%Y");
           s_date.value = formatFunc(task.start_date);
           // _componentPikaday(s_date, formatFunc(task.start_date));
           e_date.value = formatFunc(task.end_date);
           // _componentPikaday(e_date,formatFunc(task.end_date));
           // getBody().className = "modal-open";
           //form.style.display = "block"; 
           $("#gantt-lb").modal("show");
           if(!task.$new){
               // $('.multiselect').multiselect('deselect_all');
               // $('.multiselect').multiselect("select",task.resource);
               $('.multiselect').val(task.resource);
               //$('.multiselect').trigger("change");
               // $('.multiselect').multiselect('refresh');
           }
           //getBody().innerHTML += '<div class="modal-backdrop show"></div>';
       
           form.querySelector("[name='save']").onclick = taskSave;
           form.querySelector("[name='close']").onclick = taskCancel;
           form.querySelector("[name='delete']").onclick = taskRemove;
       };


       
       gantt.hideLightbox = function(){
           // getBody().className="";
           // getForm().style.display = ""; 
           $("#gantt-lb").modal("hide");
           taskId = null;
       };
       
       function getBody() { 
           return document.getElementsByTagName("body")[0]; 
       }; 
       
       function getForm() { 
           return document.getElementById("gantt-lb"); 
       }; 
       
       var taskSave = function() {
           var task = gantt.getTask(taskId);
           var form = getForm();
           task.text = form.querySelector("[name='description']").value;
           var formatFunc = gantt.date.str_to_date("%d-%M-%Y");
           task.start_date = formatFunc(form.querySelector("[name='start_date']").value);
           task.end_date = formatFunc(form.querySelector("[name='end_date']").value);
   
           if(task.$new){
               gantt.addTask(task,task.parent);
           }else{
               gantt.updateTask(task.id);
           }
       
           gantt.hideLightbox();
       };
       
       var taskCancel = function() {
           var task = gantt.getTask(taskId);
       
           if(task.$new)
           gantt.deleteTask(task.id);
           gantt.hideLightbox();
       };
       
       var taskRemove = function() {
           gantt.deleteTask(taskId);
           gantt.hideLightbox();
       };

       gantt.attachEvent("onBeforeLightbox", function(id) {
           var task = gantt.getTask(id);
           if(task.$new){
               dhtmlx.confirm({
                   text:"Create task?",
                   callback: function(res){
                       if(res){
                           //..apply values
                           gantt.addTask(task);
                       }else{
                           gantt.deleteTask(task.id);
                       }
                   }
               });
               return false;
           }
           return true;
       });


       /* CUSTOM LIGHTBOX : END */

   
       

       var resourceConfig = {
           columns: [
               {
                   name: "name", label: "Name", tree:true, template: function (resource) {
                   return resource.text;
               }
               },
               {
                   name: "workload", label: "Workload", template: function (resource) {
                   var tasks;
                   var store = gantt.getDatastore(gantt.config.resource_store),
                       field = gantt.config.resource_property;
   
                   if(store.hasChild(resource.id)){
                       tasks = gantt.getTaskBy(field, store.getChildren(resource.id));
                   }else{
                       tasks = gantt.getTaskBy(field, resource.id);
                   }
   
                   var totalDuration = 0;
                   for (var i = 0; i < tasks.length; i++) {
                       totalDuration += tasks[i].duration;
                   }
   
                   return (totalDuration || 0) * 8 + "h";
               }
               }
           ]
       };
   
       gantt.templates.resource_cell_class = function(start_date, end_date, resource, tasks){
           var css = [];
           css.push("resource_marker");
           if (tasks.length <= 1) {
               css.push("workday_ok");
           } else {
               css.push("workday_over");
           }
           return css.join(" ");
       };
   
       gantt.templates.resource_cell_value = function(start_date, end_date, resource, tasks){
           return "<div>" + tasks.length * 8 + "</div>";
       };

        gantt.templates.task_text = function(start,end,task){
            return "";
        };

        gantt.templates.rightside_text = function(start, end, task){
            if(task.type == gantt.config.types.project)
                return "<b>"+task.text+"</b>";
            return task.text;
        };

   
       // gantt.locale.labels.section_owner = "Resources";
       // gantt.config.lightbox.sections = [
       //     {name: "description", height: 38, map_to: "text", type: "textarea", focus: true},
       //     //{name: "owner", height: 22, map_to: "resource", type: "select", options: gantt.serverList("people")},
       //     {name:"owner",height:60, type:"multiselect", options:gantt.serverList("people"), map_to:"resource", unassigned_value:5 },
       //     {name: "time", type: "duration", map_to: "auto"}
       // ];
   
       // gantt.config.resource_store = "resource";
       // gantt.config.resource_property = "resource";
       // gantt.config.order_branch = true;
       // gantt.config.open_tree_initially = true;
       // gantt.config.layout = {
       //     css: "gantt_container",
       //     rows: [
       //         {
       //             cols: [
       //                 {view: "grid", group:"grids", scrollY: "scrollVer"},
       //                 {resizer: true, width: 1},
       //                 {view: "timeline", scrollX: "scrollHor", scrollY: "scrollVer"},
       //                 {view: "scrollbar", id: "scrollVer", group:"vertical"}
       //             ],
       //             gravity:2
       //         },
       //         {resizer: true, width: 1},
       //         {
       //             config: resourceConfig,
       //             cols: [
       //                 {view: "resourceGrid", group:"grids", width: 435, scrollY: "resourceVScroll" },
       //                 {resizer: true, width: 1},
       //                 {view: "resourceTimeline", scrollX: "scrollHor", scrollY: "resourceVScroll"},
       //                 {view: "scrollbar", id: "resourceVScroll", group:"vertical"}
       //             ],
       //             gravity:1
       //         },
       //         {view: "scrollbar", id: "scrollHor"}
       //     ]
       // };

       gantt.locale.labels.section_owner = "Owner";
       // gantt.config.lightbox.sections = [
       //     {name: "description", height: 38, map_to: "text", type: "textarea", focus: true},
       //     {name: "owner", height: 22, map_to: "resource", type: "select", options: gantt.serverList("people")},
       //     {name: "time", type: "duration", map_to: "auto"}
       // ];
        gantt.config.auto_scheduling = true;
        gantt.config.auto_scheduling_strict = true;
        gantt.config.autosize = true;
        gantt.config.auto_types = true;
        gantt.config.resource_store = "resource";
        gantt.config.resource_property = "resource";
        gantt.config.order_branch = true;
        gantt.config.open_tree_initially = true;
        gantt.config.xml_date = "%Y-%m-%d %H:%i";
        
        // gantt.config.layout = {
        //     css: "gantt_container",
        //     cols: [
        //         {
        //             width:400,
        //             min_width: 300,
        //             rows:[
        //                 {view: "grid", scrollX: "gridScroll", scrollable: true, scrollY: "scrollVer"},
        //                 {view: "scrollbar", id: "gridScroll", group:"horizontal"}
        //             ]
        //         },
        //         {resizer: true, width: 1},
        //         {
        //             rows:[
        //                 {view: "timeline", scrollX: "scrollHor", scrollY: "scrollVer"},
        //                 {view: "scrollbar", id: "scrollHor", group:"horizontal"}
        //             ]
        //         },
        //         {view: "scrollbar", id: "scrollVer"}
        //     ]
        // };

   
       var resourcesStore = gantt.createDatastore({
           name: gantt.config.resource_store,
           type: "treeDatastore",
           initItem: function (item) {
               item.parent = item.parent || gantt.config.root_id;
               item[gantt.config.resource_property] = item.parent;
               item.open = true;
               return item;
           }
       });
       gantt.attachEvent("onGanttReady", function(){
           var tooltips = gantt.ext.tooltips;
           tooltips.tooltip.setViewport(gantt.$task_data);
       });
        gantt.config.row_height = 20;
        gantt.config.link_line_width = 1;
       gantt.init("wbs_milestones");
       gantt.clearAll();
       gantt.serialize();
       gantt.parse(d_data);
       //gantt.load(base_url+"assets/js/pages/resource_project_multiple_owners.json");
   
       resourcesStore.attachEvent("onParse", function(){
           var people = [];
           resourcesStore.eachItem(function(res){
               if(!resourcesStore.hasChild(res.id)){
                   var copy = gantt.copy(res);
                   copy.key = res.id;
                   copy.label = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + res.text;
                   people.push(copy);
               }
               if(resourcesStore.hasChild(res.id)){
                   var copy = gantt.copy(res);
                   copy.key = res.id;
                   copy.label = res.text;
                   people.push(copy);
               }
           });
           gantt.updateCollection("people", people);

         
       });

       var currentScale = 4;
       _setScaleConfig(currentScale);
       $(".gantt-control").on("click",function(){
           switch ($(this).data('control')) {
               case 'undo' :
                   gantt.undo();
               break;
               case 'redo' :
                   gantt.redo();
               break;
               case 'save' :
               gantt.exportToJSON({
                    server: base_url+"projects/02849/gantt/save",
                    callback: function(res){
                        $(".alert").show().find(".message").html(res.message);
                    }
                });
               break;
               case "critical-path" :
                   if(!$(this).hasClass("active")){
                       $(this).addClass("active");
                       gantt.config.highlight_critical_path = true;
                       $(this).find(".cp-label").text("Hide Critical Path");
                   } else{
                       $(this).removeClass("active");
                       gantt.config.highlight_critical_path = false;
                       $(this).find(".cp-label").text("Show Critical Path");
                   }
                   gantt.render();
               break;
               case 'fullscreen' :
                   gantt.expand();
               break;
               case 'column-view' :
                   var isVisible = $(this).hasClass("active");
                   var column = $(this).data('column');
                   if(isVisible){
                       $(this).removeClass("active")
                       gantt.getGridColumn(column).hide = true;
                   }else{
                       $(this).addClass("active")
                       gantt.getGridColumn(column).hide = false;
                   }    
                   gantt.render();
               break;
               case 'zoom-out' :
                   if(currentScale < 5 && currentScale >= 1){
                       $(this).next().removeClass("disabled");
                       _setScaleConfig(++currentScale);
                       gantt.render();
                   }else{
                       $(this).addClass("disabled")
                   }
               break;
               case 'zoom-in' :
                   if(currentScale <= 5 && currentScale > 1){
                       $(this).prev().removeClass("disabled");
                       $(this).removeClass("disabled");
                       _setScaleConfig(--currentScale);
                       gantt.render();
                   }else{
                       $(this).addClass("disabled")
                   }
               break;
           }
       })
   
       resourcesStore.parse([
           {id: 1, text: "HUMAN RESOURCES", parent:null},
           {id: 2, text: "HARDWARE RESOURCES", parent:null},
           {id: 3, text: "OFFICE REQUIREMENTS", parent:null},
           {id: 4, text: "SOFTWARE REQUIREMENTS", parent:null},
           {id: 6, text: "Chief Information Officer", parent:1},
           {id: 116, text: "Chief Technology Officer", parent:1},
           {id: 7, text: "Program Director", parent:1},
           {id: 8, text: "Project Director", parent:1},
           {id: 9, text: "Service Delivery Director", parent:1},
           {id: 10, text: "Sales Director", parent:1},
           {id: 11, text: "Insides Sales Manager", parent:1},
           {id: 12, text: "Project Manager", parent:1},
           {id: 13, text: "Business Development Manager", parent:1},
           {id: 113, text: "Business Analyst", parent:1},
           {id: 114, text: "Assistant Business Analyst", parent:1},
           {id: 14, text: "IT Supply Chain Manager", parent:1},
           {id: 15, text: "Account Manager", parent:1},
   
           {id: 16, text: "IT Procurement Specialist", parent:1},
           {id: 17, text: "IT Marketing Communications Executive", parent:1},
           {id: 18, text: "IT Trainer", parent:1},
           {id: 19, text: "Channel Sales Specialist", parent:1},
           {id: 20, text: "Inside Sales Specialist", parent:1},
           {id: 22, text: "SAP Team Lead", parent:1},
           {id: 23, text: "Software Development Manager", parent:1},
           {id: 24, text: "Senior Solutions Architect", parent:1},
           {id: 25, text: "Lead Software Developer", parent:1},
           {id: 125, text: "Extraction Developer", parent:1},
           {id: 126, text: "Transformation Developer", parent:1},
           {id: 127, text: "Business Intelligence Developer", parent:1},
           {id: 26, text: "Business Consultant", parent:1},
   
           {id: 27, text: "SAP Consultant", parent:1},
           {id: 28, text: "Software Sales manager", parent:1},
           {id: 29, text: "ETL Developers", parent:1},
           {id: 30, text: "Websphere Application Developers", parent:1},
           {id: 31, text: "BI Consultant", parent:1},
           {id: 32, text: "System Analyst", parent:1},
           {id: 33, text: "QA Specialist", parent:1},
           {id: 34, text: "Junior Solutions Architect", parent:1},
           {id: 35, text: "Software Engineer", parent:1},
           {id: 36, text: "Software Programmer", parent:1},
   
           {id: 37, text: "Web Designer", parent:1},
           {id: 38, text: "Analyst Programmer", parent:1},
           {id: 138, text: "Test Manager", parent:1},
           {id: 39, text: "Java Developer", parent:1},
           {id: 40, text: "Programmer", parent:1},
           {id: 41, text: "Billing System Specialist", parent:1},
           {id: 42, text: "Implementation & Technical Support Manager", parent:1},
           {id: 43, text: "Information Security Manager", parent:1},
           {id: 44, text: "UNIX Specialist", parent:1},
           {id: 45, text: "Service Delivery Manager", parent:1},
           {id: 46, text: "Senior System Engineer", parent:1},
   
           {id: 47, text: "Wintel Specialist", parent:1},
           {id: 48, text: "IT Manager", parent:1},
           {id: 49, text: "Problem & change Management Specialist", parent:1},
           {id: 50, text: "Security Analyst", parent:1},
           {id: 51, text: "Technical Writer", parent:1},
           {id: 52, text: "Unix & linux OS Engineer", parent:1},
           {id: 53, text: "Pre-Sales Engineer", parent:1},
           {id: 54, text: "Billing System Engineer", parent:1},
           {id: 55, text: "Database Administrator", parent:1},
           {id: 56, text: "System Engineer", parent:1},
           {id: 156, text: "Public Transportation Subject Matter Expert", parent:1},
   
           {id: 57, text: "Technical Consultant", parent:1},
           {id: 158, text: "Network Engineer", parent:1},
           {id: 58, text: "Network Administrator", parent:1},
           {id: 58, text: "Helpdesk Tech Support(Foreign Language Expertise)", parent:1},
           {id: 60, text: "Help Desk Analyst", parent:1},
           {id: 61, text: "IT Executive", parent:1},
           {id: 62, text: "Automation Support Engineer", parent:1},
           {id: 63, text: "Technician", parent:1},
           {id: 64, text: "IT Administrator", parent:1},
   
           {id: 65, text: "Hard Drive: Minimum 32 GB", parent:2},
           {id: 66, text: "Ethernet connection (LAN) OR a wireless adapter (Wi-Fi)", parent:2},
           {id: 67, text: "Processor", parent:2},
           {id: 68, text: "Memory (RAM): Minimum 1 GB", parent:2},
           {id: 168, text: "Servers", parent:2},

   
           {id: 69, text: "Appery.io", parent:4},
           {id: 70, text: "Mobile Roadie", parent:4},
           {id: 71, text: "TheAppBuilder", parent:4},
           {id: 72, text: "AppMachine", parent:4},
           {id: 171, text: "ETL Tools", parent:4},
           {id: 172, text: "Analytic Tools", parent:4},
   
           {id: 73, text: "Bookcases", parent:3},
           {id: 74, text: "File cabinets", parent:3},
           {id: 75, text: "Wall whiteboard and markers", parent:3}
       ]);  
       
       
       function defineMultiselect(gantt) {
           gantt.form_blocks["multiselect"] = {
               render: function (sns) {
                   var height = (sns.height || "23") + "px";
                   var html = "<div class='gantt_cal_ltext gantt_cal_chosen gantt_cal_multiselect' style='height:" + height + ";'><select data-placeholder='...' class='chosen-select' multiple>";
                   if (sns.options) {
                       for (var i = 0; i < sns.options.length; i++) {
                           if(sns.unassigned_value !== undefined && sns.options[i].key == sns.unassigned_value){
                               continue;
                           }
                           html += "<option value='" + sns.options[i].key + "'>" + sns.options[i].label + "</option>";
                       }
                   }
                   html += "</select></div>";
                   return html;
               },
       
               set_value: function (node, value, ev, sns) {
                   node.style.overflow = "visible";
                   node.parentNode.style.overflow = "visible";
                   node.style.display = "inline-block";
                   var select = $(node.firstChild);
       
                   if (value) {
                       value = (value + "").split(",");
                       select.val(value);
                   }
                   else {
                       select.val([]);
                   }
       
                   select.chosen();
                   if(sns.onchange){
                       select.change(function(){
                           sns.onchange.call(this);
                       })
                   }
                   select.trigger('chosen:updated');
                   select.trigger("change");
               },
       
               get_value: function (node, ev) {
                   var value = $(node.firstChild).val();
                   return value;
               },
       
               focus: function (node) {
                   $(node.firstChild).focus();
               }
           };
   
       }
   
       if(window.Gantt){
           window.Gantt.plugin(defineMultiselect);
       }else{
           defineMultiselect(window.gantt);
       }

    //    var fileDnD = fileDragAndDrop();
    //    fileDnD.init(gantt.$container);

       function sendFile(file) {
            // fileDnD.showUpload();
            upload(file, function () {
                $('#gantt-import-mp-m').modal('hide');
                $('.splash').fadeOut('slow');
            })
        }

        function upload(file, callback) {
            gantt.importFromMSProject({
                data: file,
                callback: function (project) {
                    if (project) {
                        gantt.clearAll();
    
                        if (project.config.duration_unit) {
                            gantt.config.duration_unit = project.config.duration_unit;
                        }
    
                        gantt.parse(project.data);
                    }
    
                    if (callback)
                        callback(project);
                }
            });
        }

    //    fileDnD.onDrop(sendFile);
       var form = document.getElementById("mspImport");
       form.onsubmit = function (event) {
           event.preventDefault();
           var fileInput = document.getElementById("mspFile");
           if (fileInput.files[0])
               sendFile(fileInput.files[0]);
       };
   
   };

   var _componentPikaday = function (s) {
       if (typeof Pikaday == 'undefined') {
           console.warn('Warning - Pikaday.js is not loaded.');
           return;
       }
       p_date = new Pikaday({
           field: s,
           // minDate: md,
           format: 'DD-MMM-YYYY'
           // onSelect: function() {
           //     end_date.setMinDate(this.getDate());
           // }
       });
   };

   var _componentMultiselect = function() {
       if (!$().multiselect) {
           console.warn('Warning - bootstrap-multiselect.js is not loaded.');
           return;
       }
       $('.multiselect').multiselect({
           nonSelectedText: 'Please Select Resources..',
           enableFiltering: true,
           enableCaseInsensitiveFiltering: true
       });
   };

   var _componentUniform = function() {
    if (!$().uniform) {
        console.warn('Warning - uniform.min.js is not loaded.');
        return;
    }

    // Initialize
    $('.form-input-styled').uniform({
        fileButtonClass: 'action btn bg-success-400',
        fileButtonHtml: '<i class="icon-plus2"></i>'
    });
    };
   return {
       init: function(data) {
           _wbs(data);
           _componentPikaday($("#start_date")[0]);
           _componentPikaday($("#end_date")[0]);
           _componentMultiselect();
           _componentUniform();
       }
   }
}();