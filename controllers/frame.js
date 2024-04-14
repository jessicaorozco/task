app.controller("FrameController", function ($scope, $location) {
    console.log('estoy en frame')

    $scope.returnToList = function () {
        $location.path("/qr");
      };
});