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
    .when("/alert", {
      templateUrl: "views/alert.html",
      controller: "AlertControler",
    })
    .when("/save/", {
      templateUrl: "views/add.html",
      controller: "AddControler",
    })
    
    .otherwise({ redirectTo: "/chart" });

    $locationProvider.hashPrefix('').html5Mode(true);

});
