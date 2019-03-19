var Milestones = function() {

     var _wbs = function() {
        gantt.config.columns = [
            {name: "text", tree: true, width: 300, resize: true},
            {name: "start_date", align: "center", width: 100, resize: true},
            {name: "end_date", align: "center",label: "End time",width: 100, resize: true},
    
            {name: "duration", width: 58, align: "center"},
            {name: "add", width: 30}
        ];
    
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
        // gantt.config.row_height = 40;
        // gantt.config.task_height = 30;
        gantt.config.autosize = "y";
        // ganttModules.zoom.setZoom(4);
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