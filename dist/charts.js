
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "30 gun muddetindeki prjelerim"
	},
	axisX: {
		valueFormatString: "DD MMM,YY"
	},
	axisY: {
		title: "proje sayi",
		suffix: " proje"
	},
	legend:{
		cursor: "pointer",
		fontSize: 16,
		itemclick: toggleDataSeries
	},
	toolTip:{
		shared: true
	},
	data: [

	{
		name: "Dinamika",
		type: "spline",
		yValueFormatString: "",
		showInLegend: true,
		dataPoints: [
			{ x: new Date(2020,9,21), y: 6 },
			{ x: new Date(2020,9,23), y: 9 },
			{ x: new Date(2020,9,25), y: 11 },
			{ x: new Date(2020,9,27), y: 8 },
			{ x: new Date(2020,9,28), y: 1 },
			{ x: new Date(2020,9,29), y: 4 },
			{ x: new Date(2020,9,30), y: 5 }
		]
	}]
});
chart.render();

function toggleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else{
		e.dataSeries.visible = true;
	}
	chart.render();
}

}
