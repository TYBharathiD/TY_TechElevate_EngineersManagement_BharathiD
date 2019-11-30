
window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer1", {
	title:{
		text: 'Business Analytics (Yearly)'
	},
	axisY: {
		title: "Revenue",
		lineColor: "#7F6084",
		tickColor: "#7F6084",
		labelFontColor: "#7F6084",
		titleFontColor: "#7F6084",
		suffix: "k"
	},
	toolTip: {
		shared: true
	},
	legend: {
		cursor: "pointer",
		itemclick: toggleDataSeries
	},
	data: [{
		type: "line",
		name: "Total income",
		color: "#369EAD",
		showInLegend: true,
		axisYIndex: 1,
		dataPoints: [
			{ x: new Date(2010, 01, 01), y: 85.4 }, 
			{ x: new Date(2011, 01, 01), y: 92.7 },
			{ x: new Date(2012, 01, 01), y: 64.9 },
			{ x: new Date(2013, 01, 01), y: 58.0 },
			{ x: new Date(2014, 01, 01), y: 63.4 },
			{ x: new Date(2015, 01, 01), y: 69.9 },
			{ x: new Date(2016, 01, 01), y: 88.9 },
			{ x: new Date(2017, 01, 01), y: 66.3 },
			{ x: new Date(2018, 01, 01), y: 82.7 },
			{ x: new Date(2019, 01, 01), y: 60.2 }
		]
	},
	{
		type: "line",
		name: "Estimated Income",
		color: "#7F6084",
		axisYType: "secondary",
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2010, 01, 01), y: 42.5 }, 
			{ x: new Date(2011, 01, 01), y: 44.3 },
			{ x: new Date(2012, 01, 01), y: 28.7 },
			{ x: new Date(2013, 01, 01), y: 22.5 },
			{ x: new Date(2014, 01, 01), y: 25.6 },
			{ x: new Date(2015, 01, 01), y: 45.7 },
			{ x: new Date(2016, 01, 01), y: 54.6 },
			{ x: new Date(2017, 01, 01), y: 32.0 },
			{ x: new Date(2018, 01, 01), y: 43.9 },
			{ x: new Date(2019, 01, 01), y: 26.4 }
		]
	}]
});
chart.render();

function toggleDataSeries(e) {
	if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	e.chart.render();
}

}
