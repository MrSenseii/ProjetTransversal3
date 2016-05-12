/**
 * Created by Erwana on 12/05/2016.
 */

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            borderColor: "blue",
            label: '# of Votes',
            fill: false,
            data: [12, 19, 3, 5, 2, 3]
        }, {
            borderColor: "green",
            label: '# of Votes',
            fill: false,
            data: [18, 2, 5, 8 ,14 ,0]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
