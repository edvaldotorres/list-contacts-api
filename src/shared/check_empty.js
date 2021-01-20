function checkEmpty(paramether) {
  if(paramether === '' || paramether === undefined) {
    return true
  }

  return false
}

module.exports = {
  checkEmpty
}