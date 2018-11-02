module.exports = {
  countKeyTotals(arr) {
    return arr.reduce(function(obj, b) {
      obj[b] = ++obj[b] || 1
      return obj
    }, {})
  },
  getMainKey(objArr){
    return objArr.map(array => array[0]['_'] ? array[0]['_'] : array[0])
  }

}
