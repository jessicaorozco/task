app.controller("QrController", function ($scope, $location, qrService) {
  var qrcode = new QRCode("qrcode");
  var elText = document.getElementById("text");

    function makeCode() {
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
    var elementHTML = $('#qrcode').html();
    var specialElementHandlers = {
        '#elementH': function (element, renderer) {
            return true;
        }
    };
    doc.fromHTML(elementHTML, 15, 15, {
        'width': 170,
        'elementHandlers': specialElementHandlers
    });
    doc.addImage(20, 20, elementHTML, 50, 50, elText.value)
    // doc.text(20, 20, "Qr de:" +  document.getElementById("text"));
    doc.addPage();
    doc.save("qr-download.pdf");
  };
  console.log(localStorage.getItem("qrs"));
  console.log($scope.qrs);
});
