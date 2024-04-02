app.controller('TaskControler', function($scope, $http, $location) {
  $scope.tasks = [
    {
      id: 1,
      title: "Crear Formulario",
      description: "para angularJS",
      dateLimit: "2024-04-02T22:00:00.000Z",
      priority: "Baja"
    },
    {
      id: 2,
      title: "Crear Menu",
      description: "Sidebar",
      dateLimit: "2024-04-07T22:00:00.000Z",
      priority: "Media"
    },
    {
      id: 3,
      title: "Crear Modal",
      description: "Modal de componente Registro",
      dateLimit: "2024-04-02T22:00:00.000Z",
      priority: "Alta"
    }
  ];

  $scope.selected= [];
  $scope.selectAll = false;
  
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

  $scope.selectAllTasks = function() {
    angular.forEach($scope.tasks, function(task) {
      task.selected = $scope.selectAll;
    });
  };

  // $scope.getTasks = function() {
  //   return $http.get('/task/task') 
  //     .then(function(response) {
  //       const item = localStorage.getItem('tasks');
  //       return item ? JSON.parse(item) : response.data;
  //     });
  // };

  $scope.editTask = function(id) {
    $location.path('/save/'+ id);  
  };

  $scope.saveTask = function() {
    $location.path('/save/');  
  };

    $scope.getEventValue = function($event) {
    return $event.target.value;
  };

  $scope.deleteData = function() {
    if (confirm('¿Estás seguro de que deseas eliminar la(s)  tarea(s)?')) {
      let filteredTasks = $scope.tasks.filter(function(task) {
        return !task.selected;
      });
      $scope.tasks = filteredTasks;
      $scope.selectAll = false;
      alert('Tareas eliminadas');    } else {
      alert('Eliminación de tareas cancelada');
    }
     
  };

    $scope.getTasks = function() {

  return $http.get('/task/task')
    .then(function(response) {
      try {
        const item = localStorage.getItem('tasks');
        return item ? JSON.parse(item) : response.data;
      } catch (error) {
        console.error('Error retrieving tasks:', error);
        // Return an empty array or a default value here
        return []; // Example: Return an empty array on error
      }
    });
  }  
});

