var Milestones = function() {

     var _wbs = function() {
        gantt.config.columns = [
            {name: "text", tree: true, width: 170, resize: true},
            {name: "start_date", align: "center", width: 100, resize: true},
            {name: "end_date", align: "center",label: "End time",width: 100, resize: true},
            {name: "owner", align: "center", width: 160, label: "Resources", template: function (task) {
                if (task.type == gantt.config.types.project) {
                    return "";
                }
    
                var result = "";
                var store = gantt.getDatastore("resource");
                var owners = task[gantt.config.resource_property];
    
                if (!owners || !owners.length) {
                    return "Unassigned";
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
            }, resize: true
            },
    
            {name: "duration", width: 58, align: "center"},
            {name: "cost", align: "center", width: 120, label: "Cost", template: function (task) {
                if (task.type == gantt.config.types.project) {
                    return "";
                }
    
                var result = "";
                var store = gantt.getDatastore("resource");
                var owners = task[gantt.config.resource_property];
                if (!owners || !owners.length) {
                    return "Unassigned";
                }
                    var cost1 = 0;
                  var durations;
    
                if(owners.length == 1){
                    durations = task.duration;
    
    
                   /* alert(owners[0].duration);*/
                    if(owners[0] == 6){
                        cost1=  ( parseInt(42000) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 7){
                        cost1=  ( parseInt(37000) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 8){
                        cost1=  ( parseInt(26000) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 9){
                        cost1=  ( parseInt(26000) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 10){
                        cost1=  ( parseInt(26000) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 11){
                        cost1=  ( parseInt(10000) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 12){
                        cost1=  ( parseInt(14000) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 13){
                        cost1=  ( parseInt(8500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 14){
                        cost1=  ( parseInt(8500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 15) {
                        cost1 = ( parseInt(7500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 16){
                        cost1=  ( parseInt(6500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 17){
                        cost1=  ( parseInt(5000) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 18){
                        cost1=  ( parseInt(7500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 19){
                        cost1=  ( parseInt(6500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 20){
                        cost1=  ( parseInt(6500) / parseInt(20) ) * parseInt(durations);
                    }
    
                    else if(owners[0] == 22){
                        cost1=  ( parseInt(32000) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 23){
                        cost1=  ( parseInt(23000) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 24){
                        cost1=  ( parseInt(16000) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 25){
                        cost1=  ( parseInt(16000) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 26){
                        cost1=  ( parseInt(9500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 27){
                        cost1=  ( parseInt(13500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 28){
                        cost1=  ( parseInt(9500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 29){
                        cost1=  ( parseInt(8500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 30){
                        cost1=  ( parseInt(10500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 31){
                        cost1=  ( parseInt(10500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 32){
                        cost1=  ( parseInt(9000) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 33){
                        cost1=  ( parseInt(7500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 34){
                        cost1=  ( parseInt(7500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 35){
                        cost1=  ( parseInt(6300) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 36){
                        cost1=  ( parseInt(5800) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 37){
                        cost1=  ( parseInt(5300) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 38){
                        cost1=  ( parseInt(6300) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 39){
                        cost1=  ( parseInt(7500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 40){
                        cost1=  ( parseInt(4800) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 41){
                        cost1=  ( parseInt(15500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 42){
                        cost1=  ( parseInt(15500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 43){
                        cost1=  ( parseInt(15500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 44){
                        cost1=  ( parseInt(12500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 45){
                        cost1=  ( parseInt(10500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 46){
                        cost1=  ( parseInt(8500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 47){
                        cost1=  ( parseInt(9500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 48){
                        cost1=  ( parseInt(8500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 49){
                        cost1=  ( parseInt(8500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 50){
                        cost1=  ( parseInt(8500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 51){
                        cost1=  ( parseInt(8500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 52){
                        cost1=  ( parseInt(8500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 53){
                        cost1=  ( parseInt(6300) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 54){
                        cost1=  ( parseInt(6300) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 55){
                        cost1=  ( parseInt(8000) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 56){
                        cost1=  ( parseInt(6500) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 57){
                        cost1=  ( parseInt(6300) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 58){
                        cost1=  ( parseInt(5800) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 59){
                        cost1=  ( parseInt(8400) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 60){
                        cost1=  ( parseInt(5800) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 61){
                        cost1=  ( parseInt(4700) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 62){
                        cost1=  ( parseInt(5700) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 63){
                        cost1=  ( parseInt(4700) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 64){
                        cost1=  ( parseInt(4200) / parseInt(20) ) * parseInt(durations);
                    }
                    else if(owners[0] == 65){
                        cost1= 4000;
                    }
                    else if(owners[0] == 66){
                        cost1= 2000;
                    }
                    else if(owners[0] == 67){
                        cost1= 10000;
                    }
                    else if(owners[0] == 68){
                        cost1=  1000;
                    }
                    else if(owners[0] == 69){
                        cost1=  7000;
                    }
                    else if(owners[0] == 70){
                        cost1= 5000;
                    }
                    else if(owners[0] == 71){
                        cost1= 5500;
                    }
                    else if(owners[0] == 72){
                        cost1=  7933;
                    }
                    else if(owners[0] == 73){
                        cost1= 400;
                    }
                    else if(owners[0] == 74){
                        cost1=  300
                    }
                    else if(owners[0] == 75){
                        cost1= 800
                    }
                    else{
                        cost1= parseInt(cost1) + parseInt(0);
                    }
                    const formatter = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2
                    });
                    return  formatter.format(cost1 );
                }
                var cost= 0;
                var cost2 = 0;
                var duration;
                var perhour = 0;
                duration = task.duration;
           /*     {id: 6, text: "Chief Information Officer", parent:1},
                {id: 7, text: "Program Director", parent:2},
                {id: 8, text: "Project Director", parent:2},
                {id: 9, text: "Service Delivery Director", parent:3},
                {id: 10, text: "Sales Director", parent:3},
                {id: 11, text: "Insides Sales Manager", parent:1},
                {id: 12, text: "Project Manager", parent:2},
                {id: 13, text: "Business Development Manager", parent:2},
                {id: 14, text: "IT Supply Chain Manager", parent:3},
                {id: 15, text: "Account Manager", parent:3},*/
                perhour = parseInt(duration);
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
                        cost= parseInt(cost) + ( parseInt(0) / parseInt(0) ) ;
                    }
                });
                var result1= ( parseInt(cost) *  parseInt(perhour) ) +  parseInt(cost2);
                const formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2
                });
                /*    var result2 = result1.formatCurrency();*/
                result = formatter.format(result1) ;
                return result;
            }, resize: true
            },
            {name: "add", width: 30}
        ];
    
        // var resourceConfig = {
        //     columns: [
        //         {
        //             name: "name", label: "Name", tree:true, template: function (resource) {
        //             return resource.text;
        //         }
        //         },
        //         {
        //             name: "workload", label: "Workload", template: function (resource) {
        //             var tasks;
        //             var store = gantt.getDatastore(gantt.config.resource_store),
        //                 field = gantt.config.resource_property;
    
        //             if(store.hasChild(resource.id)){
        //                 tasks = gantt.getTaskBy(field, store.getChildren(resource.id));
        //             }else{
        //                 tasks = gantt.getTaskBy(field, resource.id);
        //             }
    
        //             var totalDuration = 0;
        //             for (var i = 0; i < tasks.length; i++) {
        //                 totalDuration += tasks[i].duration;
        //             }
    
        //             return (totalDuration || 0) * 8 + "h";
        //         }
        //         }
        //     ]
        // };
    
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
    
        gantt.locale.labels.section_owner = "Resources";
        gantt.config.lightbox.sections = [
            {name: "description", height: 38, map_to: "text", type: "textarea", focus: true},
            //{name: "owner", height: 22, map_to: "owner_id", type: "select", options: gantt.serverList("people")},
            {name:"owner",height:60, type:"multiselect", options:gantt.serverList("people"), map_to:"owner_id", unassigned_value:5 },
            {name: "time", type: "duration", map_to: "auto"}
        ];
    
        gantt.config.resource_store = "resource";
        gantt.config.resource_property = "owner_id";
        gantt.config.order_branch = true;
        gantt.config.open_tree_initially = true;
        
        gantt.config.order_branch = true;
        gantt.config.order_branch_free = true;
        gantt.config.grid_resize = true;
        gantt.config.static_background = true;
        gantt.config.auto_scheduling_strict = true;

        gantt.config.layout = {
            css: "gantt_container",
            rows: [
                {
                    cols: [
                        {view: "grid", group:"grids", scrollY: "scrollVer"},
                        {resizer: true, width: 1},
                        {view: "timeline", scrollX: "scrollHor", scrollY: "scrollVer"},
                        {view: "scrollbar", id: "scrollVer", group:"vertical"}
                    ],
                    gravity:2
                },
                {resizer: true, width: 1},
                // {
                //     config: resourceConfig,
                //     cols: [
                //         {view: "resourceGrid", group:"grids", width: 435, scrollY: "resourceVScroll" },
                //         {resizer: true, width: 1},
                //         {view: "resourceTimeline", scrollX: "scrollHor", scrollY: "resourceVScroll"},
                //         {view: "scrollbar", id: "resourceVScroll", group:"vertical"}
                //     ],
                //     gravity:1
                // },
                {view: "scrollbar", id: "scrollHor"}
            ]
        };
    
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
        gantt.config.scale_unit = "month";
        gantt.config.date_scale = "%m - %Y";
        gantt.config.date_grid = "%d-%M-%Y";
        ganttModules.zoom.setZoom(4);
        gantt.init("wbs_milestones");
        gantt.load(base_url+"assets/js/pages/resource_project_multiple_owners.json");
    
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
    
        resourcesStore.parse([
            {id: 1, text: "HUMAN RESOURCES", parent:null},
            {id: 2, text: "HARDWARE RESOURCES", parent:null},
            {id: 3, text: "OFFICE REQUIREMENTS", parent:null},
            {id: 4, text: "SOFTWARE REQUIREMENTS", parent:null},
            {id: 6, text: "Chief Information Officer", parent:1},
            {id: 7, text: "Program Director", parent:1},
            {id: 8, text: "Project Director", parent:1},
            {id: 9, text: "Service Delivery Director", parent:1},
            {id: 10, text: "Sales Director", parent:1},
            {id: 11, text: "Insides Sales Manager", parent:1},
            {id: 12, text: "Project Manager", parent:1},
            {id: 13, text: "Business Development Manager", parent:1},
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
    
            {id: 57, text: "Technical Consultant", parent:1},
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
    
            {id: 69, text: "Appery.io", parent:4},
            {id: 70, text: "Mobile Roadie", parent:4},
            {id: 71, text: "TheAppBuilder", parent:4},
            {id: 72, text: "AppMachine", parent:4},
    
            {id: 73, text: "Bookcases", parent:3},
            {id: 74, text: "File cabinets", parent:3},
            {id: 75, text: "Wall whiteboard and markers", parent:3}
        ]);
    
    };

    var _wbs2 = function(){
        var date_to_str = gantt.date.date_to_str(gantt.config.task_date);
        var today = new Date(2016, 9, 5);
        gantt.addMarker({
            start_date: today,
            css: "today",
            text: "Today",
            title:"Today: "+ date_to_str(today)
        });
    
        var start = new Date(2016, 9, 28);
        gantt.addMarker({
            start_date: start,
            css: "status_line",
            text: "Start project",
            title:"Start project: "+ date_to_str(start)
        });
    
    
        gantt.config.lightbox.sections = [
            {name: "description", height: 70, map_to: "text", type: "textarea", focus: true},
            {name: "type", type: "typeselect", map_to: "type", filter: function(name, value){
                return !!(value != gantt.config.types.project);
            }},
            {name: "time", type: "duration", map_to: "auto"}
        ];
        gantt.config.lightbox.project_sections = [
            {name: "description", height: 70, map_to: "text", type: "textarea", focus: true},
    
            {name: "time", type: "duration", readonly:true, map_to: "auto"}
        ];
        gantt.config.lightbox.milestone_sections = [
            {name: "description", height: 70, map_to: "text", type: "textarea", focus: true},
            {name: "type", type: "typeselect", map_to: "type", filter: function(name, value){
                return !!(value != gantt.config.types.project);
            }},
            {name: "time", type: "duration", map_to: "auto"}
        ];
    
        gantt.config.columns = [
            {"name":"","width":15,"resize":false, template: function(task){return "<span class='gantt_grid_wbs'>" + ganttModules.wbs.getTaskPath(task.id) + "</span>"}},
            {"name":"text","tree":true,"width":156,"resize":true},
            {"name":"start_date","align":"center","resize":true,"width":90},
            {"name":"duration","align":"center","width":70},
            {"name":"add","width":44}
        ];
    
        //Make resize marker for two columns
        gantt.attachEvent("onColumnResizeStart", function(ind, column) {
            if(!column.tree || ind == 0) return;
    
            setTimeout(function() {
                var marker = document.querySelector(".gantt_grid_resize_area");
                if(!marker) return;
                var cols = gantt.getGridColumns();
                var delta = cols[ind - 1].width || 0;
                if(!delta) return;
    
                marker.style.boxSizing = "content-box";
                marker.style.marginLeft = -delta + "px";
                marker.style.paddingRight = delta + "px";
            },1);
        });
    
        gantt.attachEvent("onCollapse", function() {
            var el = document.querySelector(".dhx-navigation");
            el.removeAttribute("style");
    
            var chatapp = document.getElementById("chat-application");
            chatapp.style.visibility = "visible";
        });
    
        gantt.attachEvent("onExpand", function() {
            var el = document.querySelector(".dhx-navigation");
            el.style.position = "static";
    
            var chatapp = document.getElementById("chat-application");
            chatapp.style.visibility = "hidden";
        });
    
    
        gantt.config.xml_date = "%Y-%m-%d %H:%i:%s";
        gantt.config.duration_unit = "hour";
    
        gantt.config.row_height = 23;
        gantt.config.order_branch = true;
        gantt.config.order_branch_free = true;
        gantt.config.grid_resize = true;
        gantt.config.static_background = true;
        gantt.config.auto_scheduling_strict = true;
        ganttModules.zoom.setZoom(4);
        gantt.init("wbs_milestones");    
        // ganttModules.menu.setup();
        gantt.load(base_url+"assets/js/pages/resource_project_multiple_owners.json");
    
    };

    return {
        init: function() {
            _wbs();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Milestones.init();
});