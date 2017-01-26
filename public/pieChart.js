console.log("pieChart")

var PieChart = function(){
  var mainContainer = document.querySelector('#column-chart');
  var container = document.createElement('div')
  mainContainer.appendChild(container);

  var chart = new Highcharts.Chart({
    chart: {
      type: "pie",
      renderTo: container
    },
    title: {
      text: "Pokemon Types I've Caught"
    },
    plotOptions: {
                series: {
                    dataLabels: {
                        enabled: true,
                        borderRadius: 5,
                        backgroundColor: 'rgba(252, 255, 197, 0.7)',
                        borderWidth: 1,
                        borderColor: '#AAA',
                        y: -6
                    }
                }
            },
    series: [
    {
      name: "Type",
      data: [
        {
          name: "Fire",
          y: 54,
          color: "#ffac33"
        },
        {
          name: "Water",
          y: 14,
          color: "#73b7ff"
        },
        {
          name: "Grass",
          y: 1,
          color: "#00ba2f"
        },
        {
          name: "Air-cured pork",
          y: 11,
          color: "crimson"
        },
        {
          name: "Hoi-sin Pikachu",
          y: 20,
          color: "brown",
          sliced: true
        }
      ]
    }
    ]
  });
}