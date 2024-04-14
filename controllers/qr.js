app.controller("QrController", function ($scope, $location, qrService) {
  var qrcode = new QRCode("qrcode");
  var elText = document.getElementById("text");

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
  $scope.resetForm = function () {
    resetObjectProperties($scope.qr, ["url"]);
  };

  function resetObjectProperties(obj, properties) {
    properties.forEach((prop) => (obj[prop] = ""));
  }

  $scope.returnToList = function () {
    $location.path("/task");
  };

  console.log(localStorage.getItem("qrs"));
  console.log($scope.qrs);
});
