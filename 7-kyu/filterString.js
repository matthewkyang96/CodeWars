var filterString = function(value) {
    return + value.split('').filter(x => Number.isInteger(+x)).join('')
  }