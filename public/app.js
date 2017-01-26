var countries = null;

window.onload = function(){
  var makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  }

  var makeCountryChart = function(){
    var countryPopData = []
    for (country of countries){
      countryPopData.push({name: country.name, data: [country.population]})
    }
    var countryPopObject = {
      name: "Population of European Countries",
      data: countryPopData,
      labels: ["Population"]
    };

    var countryAreaData = []
    for (country of countries){
      countryAreaData.push({name: country.name, data: [country.area]})
    }
    var countryAreaObject = {
      name: "Area of European Countries",
      data: countryAreaData,
      labels: ["Area"]
    };

    var myPopChart = new ColumnChart(countryPopObject);
    var myAreaChart = new ColumnChart(countryAreaObject);
  }

  var requestComplete = function(){
    console.log('Request complete');
    if (this.status !== 200) return;
    countries = JSON.parse(this.responseText);
    
    var europeanCountries = [];
    for (country of countries){
      if (country.region === "Europe" && country.name !== "Russia"){
        europeanCountries.push(country);
      }
    }
    countries = europeanCountries;
    console.log(countries);
    makeCountryChart();
    makeOtherCharts();
  }
  var url = "https://restcountries.eu/rest/v1/all";
  makeRequest(url, requestComplete);

  console.log("app");

  var makeOtherCharts = function(){
    var chartData = {
      name: "Our favourite languages",
      data: [
      {
        name: "Cohort 7",
        data: [8, 12, 3, 1],
        color: "orange"
      },
      {
        name: "Cohort 8",
        data: [9, 10, 1, 0]
      },
      {
        name: "Cohort 9",
        data: [5, 5, 5, 5]
      }
      ],
      labels: ["JavaScript", "Java", "Ruby", "Algol"]
    };

    var chartData2 = {
      name: "Number of times I have eaten a(n)",
      data: [
      {
        name: "Will",
        data: [10, 1],
        color: "orange"
      },
      {
        name: "Jordan",
        data: [34, 2]
      },
      ],
      labels: ["Apple pie", "Dog"]
    };

    var languageChart = new ColumnChart(chartData);
    var dodgyChart = new ColumnChart(chartData2);
    var thing = new PieChart();
  }
}