app.controller('chartControler', function($scope) {
    var chartConfig = {
      type: 'line',
      data: {
        labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
        datasets: [{
          label: ["Tareas Pendientes"],
          data: [1, 5, 15, 17, 8, 35],
          borderColor: "  #FF7518",
          backgroundColor: " #FF7518"
        },
        {
          label: ["Tareas Completadas"],
          data: [10, 20, 30, 40, 50, 60],
          borderColor: "#4682B4",
          backgroundColor: "#4682B4"
        },
      
      
      ]
      },
      options: {
    
      }
    };
  
    
    var ctx = document.getElementById("container").getContext("2d");
  
    
    $scope.chart = new Chart(ctx, chartConfig);
  });