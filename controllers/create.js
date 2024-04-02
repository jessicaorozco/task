app.controller(
  "AddControler",
  function ($scope, $http, $location, $routeParams) {
    $scope.tasks = JSON.parse(localStorage.getItem("tasks"));
    const id = $routeParams.id;

    if (id != undefined) {
      $scope.getById = function (id) {
        const foundItem = $scope.items.find((item) => item.id === id);
        console.log(foundItem);
        return foundItem;
      };
    }

    $scope.createTask = function () {
      var tasks = [];
      const task = $scope.task;
      task.id = uuid.v4();
      tasks.push(task);
      console.log(task.id);
      $scope.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify($scope.tasks));
      console.log(localStorage.getItem("tasks"));
      $scope.resetForm();
      alert("Registro creado");
    };

    // $scope.updateTask = function () {
    //   $http
    //     .put("/task/save/" + $scope.task.id, $scope.form.value)
    //     .then(function (response) {
    //       console.log("data actualizada", response);
    //     });
    // };

    $scope.updateTask = function (id, datosActualizados) {
      const index = $scope.tasks.findIndex((item) => item.id === id);
      if (index === -1) {
        console.error(`Elemento con ID ${id} no encontrado`);
        return;
      }

      const elemento = $scope.tasks[index];
      elemento.title = datosActualizados.title;
      elemento.description = datosActualizados.description;
      elemento.dateLimit = datosActualizados.dateLimit;
      elemento.priority = datosActualizados.priority;

      console.log(elemento);
      $scope.updateLocalStorage();
    };

    $scope.updateLocalStorage = function () {
      const updatedHeroesJson = JSON.stringify($scope.task);
      localStorage.setItem("tasks", updatedHeroesJson);
    };

    $scope.priorities = ["Baja", "Media", "Alta"];
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
