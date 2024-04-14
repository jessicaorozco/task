app.controller("QrController", function ($scope, $location) {
  // $scope.url = '';
  // const urlRegex = /^(https?:\/\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
  // $scope.validateURL = function() {
  //   $scope.buttonDisabled = !urlRegex.test($scope.url);
  // };

  // $scope.qr = {
  //   url: "",
  //   image: null,
  // };
  // var qrcode = new QRCode("qrcode");
  // $scope.qrs = [];

  // $scope.qr.generateQr = function () {
  //   var elText = document.getElementById("text");

  // if (!elText.value) {
  //   alert("Input a text");
  //   elText.focus();
  //   return;
  // }
  //   qrcode.makeCode(elText.value);
  //     // const qrGen = new QRCodeGenerator({ text: $scope.qr.url });
  //   // const qrCode = qrGen.generate();
  //   // const qrImage = new Image();
  //   // qrImage.src = qrCode.toDataURL("image/png");
  //   // qrImage.alt = "QR Code";
  //   $scope.qrs.push({ image: qrImage, url: $scope.qr.url });
  //   localStorage.setItem("qrs", JSON.stringify($scope.qrs));
  //   console.log(localStorage.getItem("qrs"));
  //   console.log($scope.qrs);
  //   console.log($scope.qr.url);
  //   console.log($scope.qr.image);
  //   $scope.resetForm();
  // };
  var qrcode = new QRCode("qrcode");
  function makeCode() {
    var elText = document.getElementById("text");

    if (!elText.value) {
      alert("Input a text");
      elText.focus();
      return;
    }

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

    $scope.resetForm = function () {
      resetObjectProperties($scope.task, [
        "url",
        "image"
      ]);
    };
  
    function resetObjectProperties(obj, properties) {
      properties.forEach((prop) => (obj[prop] = ""));
    }
  
  $scope.returnToList = function () {
    $location.path("task/chart");
  };
  console.log(localStorage.getItem("qrs"));
  console.log($scope.qrs);
  console.log($scope.qr.url);
  console.log($scope.qr.image);
});
