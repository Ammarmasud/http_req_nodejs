var https = require('https');

function getAndPrintHTMLChunks () {
  var requestOptions = {
    host: 'syntantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf-8');

    response.on('data', function (data) {
      console.log(data + '\n');
    });
  });
}

// function getAndPrintHTML () {
//   var requestOptions = {
//     host: 'syntantris.github.io',
//     path: '/http-examples/step2.html'
//   };
//   var buffer = "";

//   https.get(requestOptions, function (response) {
//     response.setEncoding('utf-8');

//     response.on('data', function (data) {
//       buffer += data;
//     });

//     response.on('end', function() {
//       console.log(buffer);
//     });
//   });

// }

function getAndPrintHTML (options) {

  var buffer = "";

  https.get(options, function (response) {
    response.setEncoding('utf-8');

    response.on('data', function (data) {
      buffer += data;
    });

    response.on('end', function() {
      console.log(buffer);
    });
  });
}

function getHTML (options, cb) {

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

}

function printHTML (html) {
  console.log(html);
}


var requestOptions = {
  host: 'syntantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);