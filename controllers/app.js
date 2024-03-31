var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    
    .when("/chart/", {
      templateUrl: "views/chart.html",
      controller: "chartControler",
    })
    .when("/task/", {
      templateUrl: "views/task.html",
      controller: "TaskControler",
    })
    // .otherwise({ redirectTo: "/task/chart" });

    $locationProvider.hashPrefix('').html5Mode(true);

});
