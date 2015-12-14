$(function () {
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: 
        }
        
        xAxis: {
            categories: ['United States', 'China', 'India', 'South Korea', 'Taiwan', 'Indonesia'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: 'students'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },

        credits: {
            enabled: false
        },
        series: [{
            name: 'Fall 2015',
            data: [43602, 2522, 580, 522, 117, 100]
        }]
    });
});
		