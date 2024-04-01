// var app = angular.module('app');

app.controller('TaskControler', function($scope, $http) {
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
      dateLimit: "07/04/2024",
      priority: 1
    }
  ];
  $scope.selected= [];


  $scope.createTask = function() {
    $http.post('/tasks/task', $scope.newTask).then(function(response) {
      $scope.tasks.push(response.data);
      $scope.newTask = {};
    });
  };

  
  $scope.editTask = function(task) {
    $scope.task = task;
    $scope.editTaskModal = true;
  };

  
  $scope.updateTask = function() {
    $http.put('/tasks/task/' + $scope.task.id, $scope.task).then(function(response) {
      $scope.editTaskModal = false;
      console.log('data actualizada', response)
    });
  };

  
  $scope.deleteTask = function(task) {
    $http.delete('/tasks/task/' + task.id).then(function(response) {
      var index = $scope.tasks.indexOf(task);
      $scope.tasks.splice(index, 1);
      console.log('data eliminada', response)
    });
  };

    $scope.closeEditTaskModal = function() {
    $scope.editTaskModal = false;
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

  
  // $scope.refreshData();


  
});

