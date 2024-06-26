var app = angular.module("app", ["ngRoute", 'ngFileUpload']);

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

    .when("/qr", {
      templateUrl: "views/qr.html",
      controller: "QrController",
    })
    
    .when("/donate", {
      templateUrl: "views/donates.html",
      controller: "DonateController",
    })
    .when("/frame", {
      templateUrl: "views/frame.html",
      controller: "DonateController",
    })
    .when("/resize", {
      templateUrl: "views/resize.html",
      controller: "ResizeController",
    })
    
    .otherwise({ redirectTo: "/chart" });

    
    $locationProvider.hashPrefix('').html5Mode(true);


});

app.directive('clearInput', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      $(element).on('focus', function() {
        $('.clear-icon').show();
      });

      $(element).on('blur', function() {
        if ($(element).val() === '') {
          $('.clear-icon').hide(); 
        }
      });
    }
  }});
  
  