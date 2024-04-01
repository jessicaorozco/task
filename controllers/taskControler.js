app.controller('TaskControler', function($scope, $http, $location) {
  $scope.tasks = [
    {
      id: 1,
      title: "Tarea 1",
      description: "Descripción de la tarea 1",
      dateLimit: "05/04/2024",
      priority: 1
    },
    {
      id: 2,
      title: "Tarea 2",
      description: "Descripción de la tarea 2",
      dateLimit: "06/04/2024",
      priority: 1
    },
    {
      id: 3,
      title: "Tarea 3",
      description: "Descripción de la tarea 2",
      dateLimit: "07/04/2024",
      priority: 1
    }
  ];
  $scope.selected= [];
  $scope.selectAll = false;
  
  
  $scope.editTask = function(id) {
    $location.path('/task/save/'+ id); 
  };

  $scope.onTaskSelect = function(task) {
    let index = $scope.selected.indexOf(task);
    if (index !== -1) {
      $scope.selected.splice(index, 1);
    } else {
      $scope.selected.push(task);
    }

    console.log($scope.selected);
    console.log('Tarea seleccionada: ' + task.title);
  };

  $scope.getTasks = function() {
    return $http.get('/task/task') 
      .then(function(response) {
        return response.data;
      });
  };

    $scope.getEventValue = function($event) {
    return $event.target.value;
  };

  $scope.deleteData = function() {
    if (confirm('¿Estás seguro de que deseas eliminar la(s)  tarea(s) seleccionada(s)?')) {
      let filteredTasks = $scope.tasks.filter(function(task) {
        return !task.selected;
      });
      $scope.tasks = filteredTasks;
      $scope.selectAll = false;
      alert('Tareas eliminadas correctamente');    } else {
      alert('Eliminación de tareas cancelada');
    }
     
  };

  
});

