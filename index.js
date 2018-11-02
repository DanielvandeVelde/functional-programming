const OBA = require('./oba-api.js')
const helper = require('./helpers.js')
const express = require('express')

require('dotenv').config()

const port = 3000
const data = {
  response: 'Loading results please check terminal for when to refresh, or just wait few seconds :^)'
}
const oba = new OBA({
  key: process.env.PUBLIC
})

console.log("Hello there! I'm going to grab data from this website:")
oba.getAll('search', {
  q: 'groenten',
  sort: 'title',
  librarian: true,
  refine: true,
  facet: 'type(book)&facet=language(dut)'
}, 'df215')
  .then(console.log("Data found! Let me do all of my amazing calculations..."))
  .then(res => {
    data.response = helper.getMainKey(res)
    let response = letsGetThisPartyStarted(data);
    data.response = "<h1>De pagina pagina</h1>"
    data.response += response;
  })
  .catch(err => {
    if (data.response) {
      data.response = `${err.response.status} ${err.response.statusText}. See terminal for more details.`
      console.log(err, err.response.status, err.response.statusText)
    } else {
      data.response = 'Error: check terminal for details'
      console.log(err)
    }
  })

function letsGetThisPartyStarted(data){
  let oddElements = getOddElements(data.response);
  let pageNumbers = parsePageNumbers(oddElements);
  let averagePages = getStats(pageNumbers);
  let summary =
  "<p> Er zijn " + oddElements.length + " boeken die jouw zoekwoord bevatten!</p>" +
  "<p>Het boek met het minste aantal pagina's heeft er " + averagePages.min + ".</p>" +
  "<p>Het gemiddelde aantal pagina's per boek is " + averagePages.average + ".</p>" +
  "<p>Het boek met het meeste aantal pagina's heeft er " + averagePages.max + ".</p>"
  ;

  console.log("All done! I'm showing you the good stuff on localhost:3000")
  return summary
}

function getOddElements(data) {
  let odd = new Array;

  //Omdat elementen dubbel staan pakken we alleen de oneven
  data.forEach((x, i) => {
    if(i % 2 == 0) {
      return
    } else {
      odd.push(x);
    }
  });

  return odd
}

function parsePageNumbers(data) {
  let numbers = new Array;
  let fail = 0;

  data.forEach((x, i) => {
    let number = x.substr(0, x.indexOf(' p'));
    number = Number(number.split(" ").splice(-1)[0]);

    if (isNaN(number) || number == 0) {
      fail++
    }else{
      numbers.push(number);
    }
  });

  if (fail) {console.log("I messed up the pagenumber for " + fail + " result(s) :^(")}
  return numbers
}

function getStats(data) {
  let sum = data.reduce((acc, cur) => cur += acc);
  let average = sum / data.length;

  return {
    average: average.toFixed(2),
    max: Math.max(...data),
    min: Math.min(...data)
  }
}

const app = express()

app.get('/', (req, res) => res.send(data.response))

app.listen(port)
