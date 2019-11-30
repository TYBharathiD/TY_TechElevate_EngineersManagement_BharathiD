Highcharts.setOptions({
  chart: {
    inverted: true,
    marginLeft: 135,
    type: 'bullet'
  },
  title: {
    text: null
  },
  legend: {
    enabled: false
  },
  yAxis: {
    gridLineWidth: 0
  },
  plotOptions: {
    series: {
      pointPadding: 0.25,
      borderWidth: 0,
      color: '#000',
      targetOptions: {
        width: '200%'
      }
    }
  },
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  }
});

Highcharts.chart('container1', {
  chart: {
    marginTop: 40
  },
  title: {
    text: '2019 TY'
  },
  xAxis: {
    categories: ['<span class="hc-cat-title">Revenue</span><br/> Millions']
  },
  yAxis: {
    plotBands: [{
      from: 0,
      to: 150,
      color: '#666'
    }, {
      from: 150,
      to: 225,
      color: '#999'
    }, {
      from: 225,
      to: 9e9,
      color: '#bbb'
    }],
    title: null
  },
  series: [{
    data: [{
      y: 275,
      target: 250
    }]
  }],
  tooltip: {
    pointFormat: '<b>{point.y}</b> (with target at {point.target})'
  }
});

Highcharts.chart('container2', {
  xAxis: {
    categories: ['<span class="hc-cat-title">Profit</span><br/>%']
  },
  yAxis: {
    plotBands: [{
      from: 0,
      to: 20,
      color: '#666'
    }, {
      from: 20,
      to: 25,
      color: '#999'
    }, {
      from: 25,
      to: 100,
      color: '#bbb'
    }],
    labels: {
      format: '{value}%'
    },
    title: null
  },
  series: [{
    data: [{
      y: 22,
      target: 27
    }]
  }],
  tooltip: {
    pointFormat: '<b>{point.y}</b> (with target at {point.target})'
  }
});

































am4core.ready(function () {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // create chart
  var chart = am4core.create("chartdiv", am4charts.GaugeChart);
  chart.innerRadius = am4core.percent(82);

  /**
   * Normal axis
   */

  var axis = chart.xAxes.push(new am4charts.ValueAxis());
  axis.min = 0;
  axis.max = 100;
  axis.strictMinMax = true;
  axis.renderer.radius = am4core.percent(80);
  axis.renderer.inside = true;
  axis.renderer.line.strokeOpacity = 1;
  axis.renderer.ticks.template.disabled = false
  axis.renderer.ticks.template.strokeOpacity = 1;
  axis.renderer.ticks.template.length = 10;
  axis.renderer.grid.template.disabled = true;
  axis.renderer.labels.template.radius = 40;
  axis.renderer.labels.template.adapter.add("text", function (text) {
    return text + "";
  })

  /**
   * Axis for ranges
   */

  var colorSet = new am4core.ColorSet();

  var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
  axis2.min = 0;
  axis2.max = 100;
  axis2.renderer.innerRadius = 10
  axis2.strictMinMax = true;
  axis2.renderer.labels.template.disabled = true;
  axis2.renderer.ticks.template.disabled = true;
  axis2.renderer.grid.template.disabled = true;

  var range0 = axis2.axisRanges.create();
  range0.value = 0;
  range0.endValue = 100;
  range0.axisFill.fillOpacity = 1;
  range0.axisFill.fill = colorSet.getIndex(0);

  var range1 = axis2.axisRanges.create();
  range1.value = 50;
  range1.endValue = 100;
  range1.axisFill.fillOpacity = 1;
  range1.axisFill.fill = colorSet.getIndex(2);

  /**
   * Label
   */

  var label = chart.radarContainer.createChild(am4core.Label);
  label.isMeasured = false;
  label.fontSize = 45;
  label.x = am4core.percent(50);
  label.y = am4core.percent(100);
  label.horizontalCenter = "middle";
  label.verticalCenter = "bottom";
  label.text = "50%";


  /**
   * Hand
   */

  var hand = chart.hands.push(new am4charts.ClockHand());
  hand.axis = axis2;
  hand.innerRadius = am4core.percent(20);
  hand.startWidth = 10;
  hand.pin.disabled = true;
  hand.value = 50;

  hand.events.on("propertychanged", function (ev) {
    range0.endValue = ev.target.value;
    range1.value = ev.target.value;
    axis2.invalidate();
  });

  setInterval(function () {
    var value = Math.round(Math.random() * 10); //pointer movement
    label.text = value + "%";
    var animation = new am4core.Animation(hand, {
      property: "value",
      to: value
    }, 1000, am4core.ease.cubicOut).start();
  }, 2000);

});























am4core.ready(function () {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  var chart = am4core.create("chartdiv1", am4charts.XYChart);

  // Add data
  chart.data = [{
    "year": "2011",
    "value": 600000
  }, {
    "year": "2012",
    "value": 900000
  }, {
    "year": "2013",
    "value": 180000
  }, {
    "year": "2014",
    "value": 600000
  }, {
    "year": "2015",
    "value": 350000
  }, {
    "year": "2016",
    "value": 600000
  }, {
    "year": "2017",
    "value": 670000
  }];

  // Populate data
  for (var i = 0; i < (chart.data.length - 1); i++) {
    chart.data[i].valueNext = chart.data[i + 1].value;
  }

  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 30;

  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;

  // Create series
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = "value";
  series.dataFields.categoryX = "year";

  // Add series for showing variance arrows
  var series2 = chart.series.push(new am4charts.ColumnSeries());
  series2.dataFields.valueY = "valueNext";
  series2.dataFields.openValueY = "value";
  series2.dataFields.categoryX = "year";
  series2.columns.template.width = 1;
  series2.fill = am4core.color("#555");
  series2.stroke = am4core.color("#555");

  // Add a triangle for arrow tip
  var arrow = series2.bullets.push(new am4core.Triangle);
  arrow.width = 10;
  arrow.height = 10;
  arrow.horizontalCenter = "middle";
  arrow.verticalCenter = "top";
  arrow.dy = -1;

  // Set up a rotation adapter which would rotate the triangle if its a negative change
  arrow.adapter.add("rotation", function (rotation, target) {
    return getVariancePercent(target.dataItem) < 0 ? 180 : rotation;
  });

  // Set up a rotation adapter which adjusts Y position
  arrow.adapter.add("dy", function (dy, target) {
    return getVariancePercent(target.dataItem) < 0 ? 1 : dy;
  });

  // Add a label
  var label = series2.bullets.push(new am4core.Label);
  label.padding(10, 10, 10, 10);
  label.text = "";
  label.fill = am4core.color("#0c0");
  label.strokeWidth = 0;
  label.horizontalCenter = "middle";
  label.verticalCenter = "bottom";
  label.fontWeight = "bolder";

  // Adapter for label text which calculates change in percent
  label.adapter.add("textOutput", function (text, target) {
    var percent = getVariancePercent(target.dataItem);
    return percent ? percent + "%" : text;
  });

  // Adapter which shifts the label if it's below the variance column
  label.adapter.add("verticalCenter", function (center, target) {
    return getVariancePercent(target.dataItem) < 0 ? "top" : center;
  });

  // Adapter which changes color of label to red
  label.adapter.add("fill", function (fill, target) {
    return getVariancePercent(target.dataItem) < 0 ? am4core.color("#c00") : fill;
  });

  function getVariancePercent(dataItem) {
    if (dataItem) {
      var value = dataItem.valueY;
      var openValue = dataItem.openValueY;
      var change = value - openValue;
      return Math.round(change / openValue * 100);
    }
    return 0;
  }
});
