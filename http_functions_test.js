var getHTML = require('./http-functions');

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'syntantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printHTML);