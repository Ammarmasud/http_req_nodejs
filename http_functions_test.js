var getHTML = require('./http-functions');

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'syntantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);