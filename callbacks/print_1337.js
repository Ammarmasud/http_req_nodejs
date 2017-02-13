var getHTML = require('../http-functions');

function printHTML (html) {
  singleChar = {a : '4', e : '3', l : '1', o : '0', s : '5', t : '7'}
  multiChar = {'ck' : 'x', 'er' : '0r', 'you' : 'j00'}

  for (var substitute in multiChar) {
    var re = new RegExp(substitute,"g")
    html = html.replace(re,multiChar[substitute]);
  }

  for (var substitute in singleChar) {
    var re = new RegExp(substitute,"g")
    html = html.replace(re,singleChar[substitute]);
  }

  console.log(html);
}

var requestOptions = {
  host: 'syntantris.github.io',
  path: '/http-examples/step6/1337.html'
};

getHTML(requestOptions, printHTML);