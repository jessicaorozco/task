app.controller("ResizeController", function ($scope, $location) {
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

    $scope.resizeVideo = function() {
         
        if ($scope.videoFile) {
          var reader = new FileReader();
          var progressElement = document.getElementById('progress-bar'); 
  
          reader.onprogress = function(event) {
            if (event.lengthComputable) {
              var progress = (event.loaded / event.total) * 100;
              progressElement.value = progress; 
            }
          };
          
  
          reader.onload = function(e) {
            var video = document.createElement('video');
            video.onloadedmetadata = function() {
 
              var isPortrait = video.videoHeight > video.videoWidth;
              var width = isPortrait ? video.videoWidth * 0.75 : video.videoWidth; 
              var height = isPortrait ? video.videoHeight * 0.75 : video.videoHeight;
  
      
              var scaleX = 1080 / width;
              var scaleY = 1920 / height;
              var scale = Math.min(scaleX, scaleY);
  
             
              var canvas = document.getElementById('outputCanvas');
              canvas.width = 1080; 
              canvas.height = 1920; 
              var ctx = canvas.getContext('2d');
  
        
              ctx.drawImage(video, 0, 0, width * scale, height * scale, 0, 0, 1080, 1920);
  
             
              var mimeType = 'video/mp4'; 
              var dataURL = canvas.toDataURL(mimeType);
              var blob = new Blob([dataURL], { type: mimeType });
  
            
              var link = document.createElement('a');
              link.href = window.URL.createObjectURL(blob);
              link.download = 'resized_video.mp4'; 
  
            
              link.click();
  
       
              window.URL.revokeObjectURL(link.href);
            };
            video.src = e.target.result;
          };
          reader.readAsDataURL($scope.videoFile);
        }
      };
});