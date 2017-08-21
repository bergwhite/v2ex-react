function isMobile() {
  const checkList = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  const result = checkList.filter((e) => {
    return navigator.userAgent.indexOf(e) !== -1
  })
  return result.length !== 0
}


export default isMobile;