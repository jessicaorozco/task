var app = angular.module('app');

app.controller('TaskControler', function($scope, $http) {
  $scope.tasks = [];
  $scope.selected= [];

  // Crear una nueva tarea
  $scope.createTask = function() {
    $http.post('/tasks/task/task', $scope.newTask).then(function(response) {
      $scope.tasks.push(response.data);
      $scope.newTask = {};
    });
  };

  // Editar una tarea
  $scope.editTask = function(task) {
    $scope.task = task;
    $scope.editTaskModal = true;
  };

  // Actualizar una tarea
  $scope.updateTask = function() {
    $http.put('/tasks/task/task/' + $scope.task.id, $scope.task).then(function(response) {
      $scope.editTaskModal = false;
      console.log('data actualizada', response)
    });
  };

  // Eliminar una tarea
  $scope.deleteTask = function(task) {
    $http.delete('/tasks/task/task/' + task.id).then(function(response) {
      var index = $scope.tasks.indexOf(task);
      $scope.tasks.splice(index, 1);
      console.log('data eliminada', response)
    });
  };

  // Cerrar modal de editar tarea
  $scope.closeEditTaskModal = function() {
    $scope.editTaskModal = false;
  };

  $scope.refreshData = function() {
    DataService.getData().then(function(data) {
      // Update your data model in $scope with the fetched data
      $scope.data = data;
    });
  };

  // Get event value
  $scope.getEventValue = function($event) {
    return $event.target.value;
  };

  // Call refresh data on initialization (optional)
  $scope.refreshData();


  
});
