
 $(document).ready(function() {



    // MORRIS BAR CHART
    // =================================================================
    // Require MorrisJS Chart
    // -----------------------------------------------------------------
    // http://morrisjs.github.io/morris.js/
    // =================================================================
    Morris.Bar({
        element: 'demo-bar-01',
        data: [
            { y: 'ภาค 1', a: 100 },
            { y: 'ภาค 2', a: 75 },
            { y: 'ภาค 3', a: 20},
            { y: 'ภาค 4', a: 50 },
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Series A'],
        gridEnabled: false,
        gridLineColor: 'transparent',
        barColors: ['#2C82BE'],
        resize:true,
        hideHover: 'auto'
    });
    
    // MORRIS BAR CHART
    // =================================================================
    // Require MorrisJS Chart
    // -----------------------------------------------------------------
    // http://morrisjs.github.io/morris.js/
    // =================================================================
    Morris.Bar({
        element: 'demo-bar-02',
        data: [
            { y: 'ภาค 1', a: 100 },
            { y: 'ภาค 2', a: 75 },
            { y: 'ภาค 3', a: 20},
            { y: 'ภาค 4', a: 50 },
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Series A'],
        gridEnabled: false,
        gridLineColor: 'transparent',
        barColors: ['#2C82BE'],
        resize:true,
        hideHover: 'auto'
    });
     
     // MORRIS BAR CHART
    // =================================================================
    // Require MorrisJS Chart
    // -----------------------------------------------------------------
    // http://morrisjs.github.io/morris.js/
    // =================================================================
    Morris.Bar({
        element: 'demo-bar-03',
        data: [
            { y: 'ภาค 1', a: 100 },
            { y: 'ภาค 2', a: 75 },
            { y: 'ภาค 3', a: 20},
            { y: 'ภาค 4', a: 50 },
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Series A'],
        gridEnabled: false,
        gridLineColor: 'transparent',
        barColors: ['#4BCA81'],
        resize:true,
        hideHover: 'auto'
    });
     
    Morris.Bar({
        element: 'demo-bar-04',
        data: [
            { y: 'ภาค 1', a: 100 },
            { y: 'ภาค 2', a: 75 },
            { y: 'ภาค 3', a: 20},
            { y: 'ภาค 4', a: 50 },
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Series A'],
        gridEnabled: false,
        gridLineColor: 'transparent',
        barColors: ['#F77962'],
        resize:true,
        hideHover: 'auto'
    });
     
    Morris.Bar({
        element: 'demo-bar-05',
        data: [
            { y: 'ภาค 1', a: 100 },
            { y: 'ภาค 2', a: 75 },
            { y: 'ภาค 3', a: 20},
            { y: 'ภาค 4', a: 50 },
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Series A'],
        gridEnabled: false,
        gridLineColor: 'transparent',
        barColors: ['#86BEFF'],
        resize:true,
        hideHover: 'auto'
    });
     
    // FLOT PIE CHART
    // =================================================================
    // Require Flot Charts
    // -----------------------------------------------------------------
    // http://www.flotcharts.org/
    // =================================================================
    var dataSet = [
        { label: "ศูนย์เรียนรู้เศรษฐกิจพอเพียง", data: 80, color: "#FFE480" },
        { label: "ศูนย์เรียนรู้ตามแนวพระราชดำริฯ", data: 120, color: "#2C82BE" },
        { label: "ศูนย์เรียนรู้ต่างๆ", data: 70, color: "#F77962" },
        { label: "ศูนย์ศึกษาการพัฒนาฯ", data: 50, color: "#4BCA81" }
    ];

    $.plot('#demo-pie-01', dataSet, {
        series: {
            pie: {
                show: true,
            label: {
                show: true,
                radius: 1,
                formatter: function(label,point){
                     return '<div style="text-align:center; color:#fff; font-weight: bold;padding-left: 15px;">' + (point.percent.toFixed(2) + '%</div>');
                },
                background: {
                    opacity: 0.8,
                    color: '#485465'
                }
            }
            }
        },
        legend: {
            show: true
        }
    });
    

});
