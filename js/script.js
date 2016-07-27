$(document).ready(function(){

  var chartData = [{
    "country": "USA",
    "visits": 4252
  }, {
    "country": "China",
    "visits": 1882
  }, {
    "country": "Japan",
    "visits": 1809
  }, {
    "country": "Germany",
    "visits": 1322
  }, {
    "country": "UK",
    "visits": 1122
  }, {
    "country": "France",
    "visits": 1114
  }, {
    "country": "India",
    "visits": 984
  }, {
    "country": "Spain",
    "visits": 711
  }, {
    "country": "Netherlands",
    "visits": 665
  }, {
    "country": "Russia",
    "visits": 580
  }, {
    "country": "South Korea",
    "visits": 443
  }, {
    "country": "Canada",
    "visits": 441
  }, {
    "country": "Brazil",
    "visits": 395
  }, {
    "country": "Italy",
    "visits": 386
  }, {
    "country": "Australia",
    "visits": 384
  }, {
    "country": "Taiwan",
    "visits": 338
  }, {
    "country": "Poland",
    "visits": 328
  }];

  AmCharts.ready(function() {
    //Specifying a data source for our chart
    var chart = new AmCharts.AmSerialChart();
    chart.dataProvider = chartData;
    chart.categoryField = "country";

    //Initializing the graph and setting the type graph
    var graph = new AmCharts.AmGraph();
    graph.valueField = "visits";
    graph.type = "line";
    chart.addGraph(graph);

    //Changing the grid count to show all the data
    var categoryAxis = chart.categoryAxis;
    categoryAxis.autoGridCount  = false;
    categoryAxis.gridCount = chartData.length;
    categoryAxis.gridPosition = "start";

    //Rotating the category label
    categoryAxis.labelRotation = 90;

    //filling the coloumns
    graph.fillAlphas = 0.4;
    graph.fillColors = '#2e8ae0';
    graph.lineColor = '#2e8ae0';

    //Adding the 3d Effect 
    chart.angle = 30;
    chart.depth3D = 15;

    //Adding details in balloon text
    graph.balloonText = "[[category]]: <b>[[value]]</b>";


    //Rendering the chart on #chartdiv element
    chart.write('chartdiv');
  });

});