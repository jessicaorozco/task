app.controller("ResizeController", function ($scope, $location, $http, $timeout, FileUploader) {
    console.log('estoy en resize')
    PayPal.Donation.Button({
        env: 'production',
        business: 'jessicaorozco@gmail.com',
        
        image: {
            src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
            title: 'PayPal - The safer, easier way to pay online!',
            alt: 'Donate with PayPal button'
        },
        onComplete: function (params) {
          $location.path("/donate");
        },
    }).render('#paypal-button-container');

    $scope.videoFile = null;
    $scope.resizedVideoUrl = null;
    $scope.progress = 0;

    var uploader = new FileUploader({
      url: '/resize-video',
      headers: {
        'Content-Type': undefined
      }
    });

    uploader.onProgress = function(file, progress) {
      $scope.progress = progress;
    };

    uploader.onSuccess = function(file, response, status, headers) {
      $scope.progress = 100;
      $scope.resizedVideoUrl = response.resizedVideoUrl;
    };

    $scope.resizeVideo = function() {
      if ($scope.videoFile) {
        uploader.addFile($scope.videoFile);
        uploader.startUpload();
      }
    };
});