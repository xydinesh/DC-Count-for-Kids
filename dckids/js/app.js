/* Foundation v2.2 http://foundation.zurb.com */

//flot graph options
var options = {
    xaxis: {
        font: { "family": "Georgia" },
        tickColor: '#f4f4f4',
        tickSize: 1,
        tickDecimals: 0,
        show: false
    },
    yaxis: {
        font: { "family": "Georgia" },
        tickColor: '#FFF',
        autoscaleMargin: 0.1,
        show:true,
        position:"right"
    },
    series: {
        lines: {
            show: false,
            lineWidth: 0.5,
            fillColor: '#000000'
        },
        points: {
            show: false,
            fillColor: '#f69680',
            radius: 4,
            lineWidth: 2
        },
        bars: {
            show: true,
            lineWidth: 0,
            fillColor: '#cccccc'
        },
        shadowSize: 0
    },
    colors: ["#0064CD"],
    grid: {
        show: true,
        borderWidth: 0,
        hoverable: true,
        clickable: true
     }
};

jQuery(document).ready(function ($) {
	var mm = com.modestmaps;
	var url = 'http://a.tiles.mapbox.com/v3/newamerica.map-ndxwx9rp.jsonp';
	
    wax.tilejson(url, function(tilejson) {
        var tooltip = new wax.tooltip();
        var m = new mm.Map('mainMap', new wax.mm.connector(tilejson),
            new mm.Point(700,630));

        m.setCenterZoom(new mm.Location(
			38.92, //tilejson.center[1], 
			-77.01), //tilejson.center[0]),
            tilejson.center[2]);

        wax.mm.zoomer(m).appendTo(m.parent);
		//wax.mm.interaction(m, tilejson);

		wax.mm.interaction(m, tilejson, {
		  		callbacks:
					{	// Show a tooltip.
						over: function(feature, context) {
                            //tooltip.over(feature, context);
							if (feature){
								var featureItem = $(feature);
								console.log(featureItem);
								$('#school-name').html(featureItem[0]);
							}							
						},
						out: function(context) {
                            //tooltip.out(context);
							//graph.unhighlight();
						}
					}
				});
    });

	/* FLOT GRAPH BELOW */
	/*
var mobileArray =[[0,1.24],[1,1.77],[2,3.53],[3,5.57],[4,6.95],[5,7.03],[6,8.26],[7,8.91],[8,10.05],[9,13.72],[10,17.92],[11,18.64],[12,20.38],[13,22.25],[14,22.49],[15,23.83],[16,24.53],[17,24.78],[18,25.44],[19,27.84],[20,30.69],[21,30.88],[22,33.4],[23,34.09],[24,34.66],[25,37.23],[26,38.38],[27,38.46],[28,39.21],[29,39.34],[30,40.03],[31,40.07],[32,40.54],[33,40.69],[34,41.39],[35,41.62],[36,44.07],[37,45.48],[38,46.09],[39,46.17],[40,46.69],[41,46.8],[42,48.41],[43,52.18],[44,53.42],[45,54.32],[46,55.1],[47,57.01],[48,57.14],[49,57.65],[50,57.81],[51,61.25],[52,61.42],[53,61.63],[54,61.78],[55,61.97],[56,62.32],[57,63.42],[58,64.04],[59,64.56],[60,65.14],[61,65.14],[62,67.11],[63,67.21],[64,68],[65,70.66],[66,70.78],[67,70.89],[68,71.49],[69,72.3],[70,73.61],[71,74.31],[72,74.97],[73,75.78],[74,76.11],[75,76.13],[76,76.34],[77,77.18],[78,78.26],[79,79.34],[80,79.73],[81,79.94],[82,80.55],[83,81.09],[84,82.72],[85,83.22],[86,84.9],[87,85.53],[88,85.67],[89,86.37],[90,87.11],[91,88.02],[92,88.59],[93,89.58],[94,89.86],[95,91.09],[96,91.25],[97,91.43],[98,91.45],[99,91.67],[100,91.72],[101,91.73],[102,92.42],[103,93.7],[104,93.96],[105,95.39],[106,96.07],[107,96.2],[108,98.52],[109,98.9],[110,99.05],[111,100.09],[112,100.1],[113,100.13],[114,100.48],[115,100.66],[116,101.04],[117,102.18],[118,102.4],[119,102.59],[120,103.62],[121,104.1],[122,104.51],[123,104.55],[124,105.18],[125,105.36],[126,105.4],[127,106.04],[128,106.54],[129,106.94],[130,106.99],[131,107.69],[132,107.86],[133,108.22],[134,108.47],[135,109.07],[136,109.34],[137,111.99],[138,113.46],[139,114.19],[140,114.68],[141,114.92],[142,115.45],[143,115.68],[144,116],[145,116.05],[146,116.09],[147,116.71],[148,117.76],[149,118.64],[150,119.05],[151,119.22],[152,119.91],[153,120.32],[154,120.54],[155,121.07],[156,122.05],[157,122.62],[158,122.67],[159,123.24],[160,124.18],[161,124.3],[162,124.34],[163,124.73],[164,124.94],[165,125.01],[166,125.06],[167,125.57],[168,127.04],[169,128.07],[170,129.19],[171,130.76],[172,131.71],[173,132.43],[174,133.11],[175,135.82],[176,135.91],[177,136.1],[178,137.17],[179,141.21],[180,141.79],[181,141.93],[182,142.33],[183,143.27],[184,144.48],[185,145.18],[186,145.45],[187,145.84],[188,147.16],[189,149.63],[190,152.67],[191,155.8],[192,156.27],[193,156.4],[194,156.5],[195,160.78],[196,165.54],[197,166.26],[198,169.64],[199,171.52],[200,175.3],[201,177.65],[202,184.72],[203,185.28],[204,187.86],[205,189.35],[206,195.57],[207,206.43],[208,0]];

	// Div hosting the flot chart 
	var e = $('#flot-graph');
	//main graphing function
	var plot = $.plot(e, [mobileArray], options);
*/
});
