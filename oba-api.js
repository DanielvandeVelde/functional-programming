const axios = require('axios')
const convert = require('xml-to-json-promise').xmlDataToJSON
const jp = require('jsonpath')
// Based on the oba api by rijkvanzanten

class API {
  constructor(options) {
    // set authentication key dependent on options passed in new OBA instance
    this.key = options.key
  }
  // parameters will be passed to API.get as an object, so we need to turn the object into a query string
  stringify(object) {
    const keys = Object.keys(object)
    const values = Object.values(object)
    return keys.map((key, i) => `&${key}=${values[i]}`).join('')
  }
  // possible endpoints: search (needs a 'q' parameter) | details (needs a 'frabl' parameter) | availability (needs a 'frabl' parameter) | holdings/root (no parameters) | refine (needs a 'rctx' parameter) / index/x (where x = facet type)
  // params: query parameters in object, check api docs for possibilities
  getAll(endpoint, params = {}, key) {
    const url = `https://zoeken.oba.nl/api/v1/${endpoint}/?authorization=${this.key}${this.stringify(params)}`
    console.log(url);
    return this.getRequestFunctions(url)
      .then(requests => {
        return axios.all(requests)
          .then(axios.spread((...responses) => {
            const json = responses.map((res) => convert(res.data))
            return Promise.all(json)
          }))
          .then(res => res.map(obj => obj.aquabrowser.results[0].result))
          .then(res => [].concat(...res))
          .then(res => key ? jp.query(res, '$..' + key) : res)
      })
  }
  get(endpoint, params = {}, key) {
    const url = `https://zoeken.oba.nl/api/v1/${endpoint}/?authorization=${this.key}${this.stringify(params)}`
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(res => convert(res.data))
        .then(res => key ? jp.query(res, '$..' + key) : res)
        .then(res => resolve(res))
    })
  }
  getAmountOfRequests(url) {
    return axios.get(url)
      .then(res => convert(res.data))
      .then(res => (Math.ceil(res.aquabrowser.meta[0].count[0] / 20) + 1))
  }
  getRequestFunctions(url) {
    return this.getAmountOfRequests(url).then(amount => {
      const promises = []
      for (let i = 1; i < amount; i++) {
        promises.push(axios.get(`${url}&page=${i}`))
      }
      return promises
    })
  }
}
module.exports = API
