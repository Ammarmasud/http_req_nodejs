var getHTML = require('../http-functions');

function printHTML (html) {
  console.log(html.toUpperCase());
}

var requestOptions = {
  host: 'syntantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

getHTML(requestOptions, printHTML);