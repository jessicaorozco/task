var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    
    .when("/task/chart", {
      templateUrl: "views/chart.html",
      controller: "chartControler",
    })
    .when("/task/task/task", {
      templateUrl: "views/task.html",
      controller: "TaskControler",
    })
    .otherwise({ redirectTo: "/task/" });

    $locationProvider.hashPrefix('').html5Mode(true);

});
