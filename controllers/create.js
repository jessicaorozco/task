app.controller(
  "AddControler",
  function ($scope, $http, $location, $routeParams) {
    const storedTasks = localStorage.getItem("tasks");
    try {
      $scope.tasks = JSON.parse(storedTasks) || [];
    } catch (error) {
      console.error("Error parsing tasks:", error);
      $scope.tasks = [];
    }

    
    if ($routeParams.id) {
      const task = $scope.tasks.find(function(task) {
        return task.id === $routeParams.id; 
      });
      $scope.task = task
      $scope.task.title = task.title ;
      $scope.task.description = task.description ;
      $scope.task.priority = task.priority ;
      const dateString = task.dateLimit ;
      const parsedDate = new Date(dateString);
      $scope.task.dateLimit = parsedDate;
      console.log($scope.task.dateLimit); 
    }

    $scope.createTask = function () {
      var tasks = [];
      const task = $scope.task;
      task.id = uuid.v4();
      tasks.push(task);
      console.log(task);
      console.log(localStorage.getItem("tasks"));
      $scope.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify($scope.tasks));
      $scope.resetForm();
      alert("Registro creado");
    };

    $scope.updateTask = function () {
      const index = $scope.tasks.findIndex((item) => item.id === $routeParams.id);
      if (index === -1) {
        console.error(`Elemento con ID ${id} no encontrado`);
        return;
      }
      
      const elemento = $scope.tasks[index];
      $scope.task.title = elemento.title;
      $scope.task.description = elemento.description;
      $scope.task.priority = elemento.priority;
      const dateString = elemento.dateLimit;
      const parsedDate = new Date(dateString);
      $scope.task.dateLimit = parsedDate;
      console.log($scope.task.dateLimit);
      console.log(elemento);
      $routeParams.id = '';
      $scope.task = {};
      alert("Registro actualizado");
      $scope.updateLocalStorage();
    };

    $scope.updateLocalStorage = function () {
      const updatedHeroesJson = JSON.stringify($scope.tasks);
      localStorage.setItem("tasks", updatedHeroesJson);
      $scope.returnToList();
    };

    $scope.priorities = ["Baja", "Media", "Alta"];
    $scope.selectedPriority = $scope.priorities[0];

    $scope.save = function () {
      if ($routeParams.id) {
        $scope.updateTask();
      } else {
        $scope.createTask();
      }
    };

    $scope.returnToList = function () {
      $location.path("/task");
    };

    $scope.resetForm = function () {
      resetObjectProperties($scope.task, [
        "id",
        "title",
        "description",
        "dateLimit",
        "priority",
      ]);
    };

    function resetObjectProperties(obj, properties) {
      properties.forEach((prop) => (obj[prop] = ""));
    }
  }
);
