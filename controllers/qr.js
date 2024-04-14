app.controller("QrController", function ($scope, $location) {
  var qrcode = new QRCode("qrcode");
  function makeCode() {
    var elText = document.getElementById("text");

    if (!elText.value) {
      alert("Por favor ingrese una url");
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
    resetObjectProperties($scope.qr, ["url"]);
  };

  function resetObjectProperties(obj, properties) {
    properties.forEach((prop) => (obj[prop] = ""));
  }

  $scope.returnToList = function () {
    $location.path("/task");
  };

  $scope.generatePdf = function () {
    var doc = new jsPDF();
    doc.html(document.body, {
      callback: function (doc) {
        doc.addPage();
        doc.save("qr-download.pdf");
      }
   });
    
  };
  console.log(localStorage.getItem("qrs"));
  console.log($scope.qrs);
});
