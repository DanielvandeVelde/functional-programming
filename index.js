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
  q: 'author:Stephen King',
  librarian: true,
  refine: true,
  facet: 'type(book)'
}, 'marc')
  .then(res => {
    data.response = helper.getMainKey(res)
    let response = sanitizeData(data.response);
    data.response = response;
    console.log("All done! I'm showing you the good stuff on localhost:3000")
  })
  .catch(err => {
    console.log("API overloaded, please try again later.")


//Grab the needed properties from the elements.
//sanatize them and convert to number if needed.
function sanitizeData(data){

  let cleanData = data
    .filter(element => element.df215 && element.df101 && element.df200)
    .map(element => {
      let newTitle = element.df200[0].df200[0]._
      if (newTitle.startsWith("\r\n")) {
        newTitle = newTitle.substr(4)
        newTitle = newTitle.trim()
        newTitle = ("Stephen King " + newTitle)
      }
      return {
      pageNumber: Number(element.df215[0].df215[0]._.match(/\[?(\d+)\]?[\w\s]*(?:p|pagina's|bladen)/)[1]),
      language: element.df101[0].df101[0]._.match(/\[(.*?)\]/)[1],
      title: newTitle
      }
    })

    return cleanData
}

const app = express()

app.get('/', (req, res) => res.send(data.response))

app.listen(port)
