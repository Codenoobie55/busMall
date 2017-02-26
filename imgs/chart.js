"use strict";
function chartWorkPlease(){
  var ctx = document.getElementById('click-chart').getContext('2d');
  var pct = document.getElementById('percent-chart').getContext('2d');

  var clickData = [];
  var labelNames = [];
  var percentageData = [];
  var chartColors = [];

  function pushChartArrs() {
    for (var i = 0; i < imgs.length; i++) {
      labelNames.push(imgs[i].name);
      clickData.push(imgs[i].numClicked);
      percentageData.push(imgs[i].percentage);
    }
  }
  pushChartArrs();
  var clickChart = {
    type: 'bar',
    data: {
      labels: labelNames,
      datasets: [{
        label: 'Number of clicks',
        data: clickData,
        backgroundColor: 'red'
      }],
    },
    options: {
      legend: {labels:{fontColor:'#fff'}},
      scales: {
        yAxes: [{
          ticks: {
            fontColor:'#fff',
            beginAtZero:true
          }
        }],
        xAxes:[{
          ticks: {
            fontColor:'#fff'
          }
        }]
      }
    }
  };
