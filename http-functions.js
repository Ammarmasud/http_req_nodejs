var https = require('https');

module.exports = function getHTML (options, cb) {
  var buffer = "";

  https.get(options, function (response) {
    response.setEncoding('utf-8');

    response.on('data', function (data) {
      buffer += data;
    });

    response.on('end', function() {
      cb(buffer);
    });
  });
};

