app.controller('chartControler', function($scope) {
    var chartConfig = {
      type: 'line',
      data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
        datasets: [{
          label: "Chart",
          data: [10, 20, 30, 40, 50, 60],
          borderColor: "#337ab7",
          backgroundColor: "rgba(51, 122, 183, 0.2)"
        }]
      },
      options: {
    
      }
    };
  
    
    var ctx = document.getElementById("my-chart").getContext("2d");
  
    
    $scope.chart = new Chart(ctx, chartConfig);
  });