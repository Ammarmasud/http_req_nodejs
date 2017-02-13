var getHTML = require('../http-functions');

function printHTML (html) {
  console.log(html.toLowerCase());
}

var requestOptions = {
  host: 'syntantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML(requestOptions, printHTML);