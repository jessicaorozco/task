app.controller("AddControler", function ($scope, $http, $location, $routeParams) {
  $scope.tasks = JSON.parse(localStorage.getItem("tasks"));
  const id = $routeParams.id;
  if(id != undefined){
    $scope.getById(id);
  }
  
  $scope.createTask = function () {
    var tasks = [];
    const task = $scope.task;
    task.id = uuid.v4();
    console.log(task.id);
    tasks.push(task);  
    $scope.tasks.push(task);   
    localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    console.log(localStorage.getItem('tasks'));
    $scope.resetForm();
    alert('Registro creado');
    // $scope.returnToList()

  };

  $scope.getById = function (id) {
     var taskFound = $scope.tasks.find(task => task.id === id);
     console.log(taskFound);
  } 

  $scope.updateTask = function () {
    $http
      .put("/task/save/" + $scope.task.id, $scope.form.value)
      .then(function (response) {
        console.log("data actualizada", response);
      });
  };

      $scope.priorities = ['Baja', 'Media', 'Alta'];
    $scope.selectedPriority = $scope.priorities[0];

  $scope.save = function () {
    if ($scope.id > 0) {
      $scope.updateTask();
    } else {
      $scope.createTask();
    }
  };
  
  $scope.returnToList = function () {
    $location.path("/task");
  };

  $scope.findById = function () {
    for (const task of $scope.tasks) {
      if (task.id === id) {
        return task;
      }
    }
    return null;
  };

  $scope.resetForm = function() {
    resetObjectProperties($scope.task, ['id', 'title', 'description', 'dateLimit', 'priority']);
  };
  
  function resetObjectProperties(obj, properties) {
    properties.forEach(prop => obj[prop] = '');
  }

  

});
