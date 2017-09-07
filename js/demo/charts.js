
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
            { y: 'พื้นที่ 1\n(ภาคกลาง)', a: 100 },
            { y: 'พื้นที่ 2\n(ภาคตะวันออกเฉียงเหนือ)', a: 75 },
            { y: 'พื้นที่ 3\n(ภาคเหนือ)', a: 20},
            { y: 'พื้นที่ 4\n(ภาคใต้)', a: 50 },
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Series A'],
        gridEnabled: false,
        gridLineColor: 'transparent',
        barColors: ['#2C82BE'],
        resize: true,
        hideHover: 'auto', 
        xLabelMargin: 5,
        gridTextSize : 9
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
            { y: 'พื้นที่ 1\n(ภาคกลาง)', a: 100 },
            { y: 'พื้นที่ 2\n(ภาคตะวันออกเฉียงเหนือ)', a: 75 },
            { y: 'พื้นที่ 3\n(ภาคเหนือ)', a: 20},
            { y: 'พื้นที่ 4\n(ภาคใต้)', a: 50 },
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Series A'],
        gridEnabled: false,
        gridLineColor: 'transparent',
        barColors: ['#2C82BE'],
        resize:true,
        hideHover: 'auto', 
        xLabelMargin: 5,
        gridTextSize : 9
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
            { y: 'พื้นที่ 1\n(ภาคกลาง)', a: 100 },
            { y: 'พื้นที่ 2\n(ภาคตะวันออกเฉียงเหนือ)', a: 75 },
            { y: 'พื้นที่ 3\n(ภาคเหนือ)', a: 20},
            { y: 'พื้นที่ 4\n(ภาคใต้)', a: 50 },
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Series A'],
        gridEnabled: false,
        gridLineColor: 'transparent',
        barColors: ['#4BCA81'],
        resize:true,
        hideHover: 'auto', 
        xLabelMargin: 5,
        gridTextSize : 9
    });
     
    Morris.Bar({
        element: 'demo-bar-04',
        data: [
            { y: 'พื้นที่ 1\n(ภาคกลาง)', a: 100 },
            { y: 'พื้นที่ 2\n(ภาคตะวันออกเฉียงเหนือ)', a: 75 },
            { y: 'พื้นที่ 3\n(ภาคเหนือ)', a: 20},
            { y: 'พื้นที่ 4\n(ภาคใต้)', a: 50 },
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Series A'],
        gridEnabled: false,
        gridLineColor: 'transparent',
        barColors: ['#F77962'],
        resize:true,
        hideHover: 'auto', 
        xLabelMargin: 5,
        gridTextSize : 9
    });
     
    Morris.Bar({
        element: 'demo-bar-05',
        data: [
            { y: 'พื้นที่ 1\n(ภาคกลาง)', a: 100 },
            { y: 'พื้นที่ 2\n(ภาคตะวันออกเฉียงเหนือ)', a: 75 },
            { y: 'พื้นที่ 3\n(ภาคเหนือ)', a: 20},
            { y: 'พื้นที่ 4\n(ภาคใต้)', a: 50 },
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Series A'],
        gridEnabled: false,
        gridLineColor: 'transparent',
        barColors: ['#86BEFF'],
        resize:true,
        hideHover: 'auto', 
        xLabelMargin: 5,
        gridTextSize : 9
    });
     
    Morris.Bar({
        element: 'demo-bar-06',
        data: [
            { y: 'พื้นที่ 1\n(ภาคกลาง)', a: 100 },
            { y: 'พื้นที่ 2\n(ภาคตะวันออกเฉียงเหนือ)', a: 75 },
            { y: 'พื้นที่ 3\n(ภาคเหนือ)', a: 20},
            { y: 'พื้นที่ 4\n(ภาคใต้)', a: 50 },
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Series A'],
        gridEnabled: false,
        gridLineColor: 'transparent',
        barColors: ['#FFE480'],
        resize:true,
        hideHover: 'auto', 
        xLabelMargin: 5,
        gridTextSize : 9
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
                     return '<div style="text-align:center; color:#fff; font-weight: bold;padding: 5px;">' + (point.percent.toFixed(2) + '%</div>');
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
