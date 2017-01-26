console.log("ColumnChart")

var ColumnChart = function(input){
  var text = input.name;
  var dataArray = input.data;
  var categoryList = input.labels;
  var mainContainer = document.querySelector('#column-chart');

  var container = document.createElement('div')


  var chart = new Highcharts.Chart({
    chart: {
      type: "column",
      renderTo: container
    },
    title: {
      text: text
    },
    series: dataArray,
    xAxis: {
      categories: categoryList
    }
  });
  mainContainer.appendChild(container);
}