app.controller('TaskControler', function($scope, $http, $location) {
   if($scope.tasks != undefined) {

   }
  $scope.tasks = JSON.parse(localStorage.getItem("tasks")); 
  console.log($scope.tasks);
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
      localStorage.setItem('tasks', $scope.tasks)
      $scope.selectAll = false;
      alert('Tareas eliminadas');    } else {
      alert('Eliminación de tareas cancelada');
    }
     
  };

});

