var getHTML = require('../http-functions');

function printHTML (html) {
  console.log(html.split("").reverse().join(""));
}

var requestOptions = {
  host: 'syntantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML(requestOptions, printHTML);