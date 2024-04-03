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
    .when("/save", {
      templateUrl: "views/add.html",
      controller: "AddControler",
    })
    
    .when("/save/:id", {
      templateUrl: "views/add.html",
      controller: "AddControler",
    })

    .otherwise({ redirectTo: "/chart" });

    $locationProvider.hashPrefix('').html5Mode(true);

    
        

});
