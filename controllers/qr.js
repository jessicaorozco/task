app.controller("QrController", function ($scope, $location, qrService) {
  var qrcode = new QRCode("qrcode");
  var elText = document.getElementById("text");
  $scope.inputValue = '';

    function makeCode() {
    qrcode.makeCode(elText.value);
  }

  makeCode();

  $("#text")
    .on("blur", function () {
      makeCode();
    })
    .on("keydown", function (e) {
      if (e.keyCode == 13) {
        makeCode();
      }
    });

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

    // $scope.generatePdf = function () {
    //   var dataURL = qrcode.toDataURL('image/png');
    //   var doc = new jsPDF();
    //   doc.addImage(qrcode, 'PNG', 10, 10);
    //   var pdfBlob = new Blob([doc.output('blob')], { type: 'application/pdf' });
    //   saveAs(pdfBlob, 'my-qr-code')
    //   let blob = new Blob([qrcode.makeCode(elText.value)], {type: 'application/pdf'});
    //   const fileURL = URL.createObjectURL(blob);
    //    window.open(fileURL);
    // };
    $scope.clearInput = function() {
      $scope.inputValue = ''; // Clear the input value
      $('.clear-icon').hide(); // Hide the "X" icon
    };

  $scope.resetForm = function () {
    resetObjectProperties($scope.qr, ["url"]);
  };

  function resetObjectProperties(obj, properties) {
    properties.forEach((prop) => (obj[prop] = ""));
  }

  $scope.returnToList = function () {
    $location.path("/task");
  };

  $scope.pay = function () {
    $location.path("https://www.paypal.com/donate/?hosted_button_id=LFDKPAPWX4NW2");
  };
  
  
});

