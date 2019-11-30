// Create the chart
Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Non-Billable Technology Wised Paid and Un-paid Engineers Strength'
    },
    subtitle: {
        // text: 'Based On experience'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total Percentage Of Employees'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
    },

    series: [
        {
            name: "Category",
            colorByPoint: true,
            data: [
                {
                    name: "Paid",
                    y: 62.00,
                    color: 'green',
                    drilldown: "Paid"
                },
                {
                    name: "Unpaid",
                    y: 38.00,
                    drilldown: "Unpaid"
                }
            ]
        }
    ],
    drilldown: {
        series: [
            {
                name: "Paid",
                id: "Paid",
                type: 'column',
                data: [
                    {
                        name: "JAVAFULLSTACK",
                        y: 8,
                        events: {
                            click: function () {
                                window.location.href = "./tablepaid.html"
                            }
                        }
                    },
                    {
                        name: "MEANSTACK",
                        y: 12,
                        events: {
                            click: function () {
                                window.location.href = "./tablepaid.html"
                            }
                        }
                    },
                    {
                        name: "DATA SCIENCE",
                        y: 21,
                        events: {
                            click: function () {
                                window.location.href = "./tablepaid.html"
                            }
                        }
                    },
                    {
                        name: "DOT-NET",
                        y: 13,
                        events: {
                            click: function () {
                                window.location.href = "./tablepaid.html"
                            }
                        }
                    },
                    {
                        name: "PYTHON",
                        y: 6,
                        events: {
                            click: function () {
                                window.location.href = "./tablepaid.html"
                            }
                        }
                    }
                ]
            },
            {
                name: "Unpaid",
                id: "Unpaid",
                type: "column",
                data: [
                    {
                        name: "JAVAFULLSTACK",
                        y: 10,
                        events: {
                            click: function () {
                                window.location.href = "./tableunpaid.html"
                            }
                        }
                    },
                    {
                        name: "MEANSTACK",
                        y: 20,
                        events: {
                            click: function () {
                                window.location.href = "./tableunpaid.html"
                            }
                        }
                    },
                    {
                        name: "DATA SCIENCE",
                        y: 5,
                        events: {
                            click: function () {
                                window.location.href = "./tableunpaid.html"
                            }
                        }
                    },
                    {
                        name: "DOT-NET",
                        y: 12,
                        events: {
                            click: function () {
                                window.location.href = "./tableunpaid.html"
                            }
                        }
                    },
                    {
                        name: "PYTHON",
                        y: 8,
                        events: {
                            click: function () {
                                window.location.href = "./tableunpaid.html"
                            }
                        }
                    }
                ]
            },
        ]
    }
});