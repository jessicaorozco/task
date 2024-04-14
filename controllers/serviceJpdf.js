angular.module('app')  // Replace 'yourApp' with your actual module name
  .factory('qrService', function($q) {
    return {
      generatePdf: function(qrcodeElementId) {
        var deferred = $q.defer();
        var doc = new jsPDF();

        try {
          // Get QR code HTML content
          var elementHTML = document.getElementById(qrcodeElementId).innerHTML;

          // Add QR code image to PDF (assuming base64 encoded data)
          doc.addImage(20, 20, elementHTML, 50, 50, 'IMAGE');
          doc.addPage();
          doc.save("qr-download.pdf");

          deferred.resolve("PDF generated successfully");
        } catch (err) {
          deferred.reject(err);
        }

        return deferred.promise;
      }
    };
  });