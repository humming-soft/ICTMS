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

https://github.com/givanz/HmwksJs
*/

Hmwks.ComponentsGroup['Visualization'] = ["widgets/googlemaps", "widgets/barChart", "widgets/columnChart",
                     "widgets/lineChart","widgets/areaChart", "widgets/pieChart", "widgets/scatterChart", "widgets/bubbleChart", 
                     "widgets/heatChart", "widgets/treeChart"];

Hmwks.Components.extend("_base", "widgets/googlemaps", {
    name: "Google Maps",
    attributes: ["data-component-maps"],
    image: "icons/map.svg",
    dragHtml: '<img src="' + Hmwks.baseUrl + 'icons/maps.png">',
    html: '<div data-component-maps style="min-height:240px;min-width:240px;position:relative"><iframe frameborder="0" src="https://maps.google.com/maps?&z=1&t=q&output=embed" width="100" height="100" style="width:100%;height:100%;position:absolute;left:0px;pointer-events:none"></iframe></div>',
    
    
    //url parameters
    z:3, //zoom
    q:'Paris',//location
    t: 'q', //map type q = roadmap, w = satellite
    
    onChange: function (node, property, value)
    {
		map_iframe = jQuery('iframe', node);
		
		this[property.key] = value;
		
		mapurl = 'https://maps.google.com/maps?&q=' + this.q + '&z=' + this.z + '&t=' + this.t + '&output=embed';
		
		map_iframe.attr("src",mapurl);
		
		return node;
	},

    properties: [{
        name: "Address",
        key: "q",
        inputtype: TextInput
    }, 
	{
        name: "Map type",
        key: "t",
        inputtype: SelectInput,
        data:{
			options: [{
                value: "q",
                text: "Roadmap"
            }, {
                value: "w",
                text: "Satellite"
            }]
       },
    },
    {
        name: "Zoom",
        key: "z",
        inputtype: RangeInput,
        data:{
			max: 20, //max zoom level
			min:1,
			step:1
       },
	}]
});
Hmwks.Components.extend("_base", "widgets/barChart", {
    name: "Bar Chart",
    attributes: ["data-component-highcharts-bar"],
    image: "icons/charts/bar.svg",
    dragHtml: '<img src="' + Hmwks.baseUrl + 'icons/charts/bar.svg">',
    html: '<div data-component-highcharts-bar class="highcharts" data-data=\'{\
        "chart":{ "type": "bar" },\
        "series": [{"name": "Tokyo", "data": [49.9]\
                },{"name": "New York", "data": [83.6]\
                },{"name": "London","data": [48.9]\
                },{"name": "Berlin","data": [42.4]\
                }]}\' style="min-height:240px;width:100%;height:100%;position:relative">\
        </div>',
    config:{},
    chart: null,
    ctx: null,
    node: null,
    dragStart: function (node){
		//check if chartjs is included and if not add it when drag starts to allow the script to load
		body = Hmwks.Builder.frameBody;
		if ($("#high-script", body).length == 0)
		{
			$(body).append('<script id="high-script" type="text/javascript">\
				$(document).ready(function() {\
					$(".highcharts").each(function () {\
						ctx = $(this);\
						config = JSON.parse(this.dataset.chart);\
						chart = new Highcharts.Chart(ctx, config);\
					});\
				\});\
			  </script>');
		}
		
		return node;
    },
    drawChart: function ()
	{
		if (this.chart != null) this.chart.destroy();
		this.node.dataset.chart = JSON.stringify(this.config);
		config = Object.assign({}, this.config);//avoid passing by reference to avoid chartjs to fill the object
		this.chart = new Highcharts.Chart(this.ctx, config);
	},
	
	init: function (node)
	{
		this.node = node;
		this.ctx = node;
		this.config = JSON.parse(node.dataset.data);
		this.drawChart();
		return node;
    },
    
	beforeInit: function (node)
	{
		return node;
	}
});
Hmwks.Components.extend("_base", "widgets/columnChart", {
    name: "Column Chart",
    attributes: ["data-component-highcharts-column"],
    image: "icons/charts/column.svg",
	dragHtml: '<img src="' + Hmwks.baseUrl + 'icons/charts/column.svg">',
});
Hmwks.Components.extend("_base", "widgets/lineChart", {
    name: "Line Chart",
    attributes: ["data-component-highcharts-line"],
    image: "icons/charts/line.svg",
	dragHtml: '<img src="' + Hmwks.baseUrl + 'icons/charts/line.svg">',
});
Hmwks.Components.extend("_base", "widgets/areaChart", {
    name: "Area Chart",
    attributes: ["data-component-highcharts-area"],
    image: "icons/charts/area.svg",
	dragHtml: '<img src="' + Hmwks.baseUrl + 'icons/charts/area.svg">',
});
Hmwks.Components.extend("_base", "widgets/pieChart", {
    name: "Pie Chart",
    attributes: ["data-component-highcharts-pie"],
    image: "icons/charts/pie.svg",
	dragHtml: '<img src="' + Hmwks.baseUrl + 'icons/charts/pie.svg">',
});
Hmwks.Components.extend("_base", "widgets/scatterChart", {
    name: "Scatter Chart",
    attributes: ["data-component-highcharts-scatter"],
    image: "icons/charts/scatter.svg",
	dragHtml: '<img src="' + Hmwks.baseUrl + 'icons/charts/scatter.svg">',
});
Hmwks.Components.extend("_base", "widgets/bubbleChart", {
    name: "Bubble Chart",
    attributes: ["data-component-highcharts-bubble"],
    image: "icons/charts/bubble.svg",
	dragHtml: '<img src="' + Hmwks.baseUrl + 'icons/charts/bubble.svg">',
});
Hmwks.Components.extend("_base", "widgets/heatChart", {
    name: "Heat Map",
    attributes: ["data-component-highcharts-heat"],
    image: "icons/chart.svg",
	dragHtml: '<img src="' + Hmwks.baseUrl + 'icons/chart.svg">',
});
Hmwks.Components.extend("_base", "widgets/treeChart", {
    name: "Tree Map",
    attributes: ["data-component-highcharts-tree"],
    image: "icons/chart.svg",
	dragHtml: '<img src="' + Hmwks.baseUrl + 'icons/chart.svg">',
});
    
Hmwks.Components.extend("_base", "widgets/chartjs", {
    name: "Chart.js",
    attributes: ["data-component-chartjs"],
    image: "icons/chart.svg",
	dragHtml: '<img src="' + Hmwks.baseUrl + 'icons/chart.svg">',
    html: '<div data-component-chartjs class="chartjs" data-chart=\'{\
			"type": "line",\
			"data": {\
				"labels": ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],\
				"datasets": [{\
					"data": [12, 19, 3, 5, 2, 3],\
					"fill": false,\
					"borderColor":"rgba(255, 99, 132, 0.2)"\
				}, {\
					"fill": false,\
					"data": [3, 15, 7, 4, 19, 12],\
					"borderColor": "rgba(54, 162, 235, 0.2)"\
				}]\
			}}\' style="min-height:240px;min-width:240px;width:100%;height:100%;position:relative">\
			  <canvas></canvas>\
			</div>',
	chartjs: null,
	ctx: null,
	node: null,

	config: {/*
			type: 'line',
			data: {
				labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
				datasets: [{
					data: [12, 19, 3, 5, 2, 3],
					fill: false,
					borderColor:'rgba(255, 99, 132, 0.2)',
				}, {
					fill: false,
					data: [3, 15, 7, 4, 19, 12],
					borderColor: 'rgba(54, 162, 235, 0.2)',
				}]
			},*/
	},		

	dragStart: function (node)
	{
		//check if chartjs is included and if not add it when drag starts to allow the script to load
		body = Hmwks.Builder.frameBody;
		
		if ($("#chartjs-script", body).length == 0)
		{
			$(body).append('<script id="chartjs-script" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js"></script>');
			$(body).append('<script>\
				$(document).ready(function() {\
					$(".chartjs").each(function () {\
						ctx = $("canvas", this).get(0).getContext("2d");\
						config = JSON.parse(this.dataset.chart);\
						chartjs = new Chart(ctx, config);\
					});\
				\});\
			  </script>');
		}
		
		return node;
	},
	

	drawChart: function ()
	{
		if (this.chartjs != null) this.chartjs.destroy();
		this.node.dataset.chart = JSON.stringify(this.config);
		
		config = Object.assign({}, this.config);//avoid passing by reference to avoid chartjs to fill the object
		this.chartjs = new Chart(this.ctx, config);
	},
	
	init: function (node)
	{
		this.node = node;
		this.ctx = $("canvas", node).get(0).getContext("2d");
		this.config = JSON.parse(node.dataset.chart);
		this.drawChart();

		return node;
	},
  
  
	beforeInit: function (node)
	{
		
		return node;
	},
    
    properties: [
	{
        name: "Type",
        key: "type",
        inputtype: SelectInput,
        data:{
			options: [{
                text: "Line",
                value: "line"
            }, {
                text: "Bar",
                value: "bar"
            }, {
                text: "Pie",
                value: "pie"
            }, {
                text: "Doughnut",
                value: "doughnut"
            }, {
                text: "Polar Area",
                value: "polarArea"
            }, {
                text: "Bubble",
                value: "bubble"
            }, {
                text: "Scatter",
                value: "scatter"
            },{
                text: "Radar",
                value: "radar"
            }]
       },
		init: function(node) {
			return JSON.parse(node.dataset.chart).type;
		},
       onChange: function(node, value, input, component) {
		   component.config.type = value;
		   component.drawChart();
		   
		   return node;
		}
	 }]
});
