let loginPage = 'http://xx.xx.xx.xx/login'
let logoutPage = '/xxx/xxx/xxx.json'

if (process.env.NODE_ENV === 'production') {
  loginPage = 'http://xx.xx.xx.xx/login'
  logoutPage = '/xxx/xxx/xxx.json'
  if (DEV) {
    console.log('in DEV')
    loginPage = 'http://xx.xx.xx.xx/login'
    logoutPage = '/xxx/xxx/xxx.json'
  }
  if (TEST) {
    console.log('in TEST')
    loginPage = 'http://xx.xx.xx.xx/login'
    logoutPage = '/xxx/xxx/xxx.json'
  }
  if (PRE) {
    console.log('in PRE')
    loginPage = 'http://xx.xx.xx.xx/login'
    logoutPage = '/xxx/xxx/xxx.json'
  }
}
export { loginPage, logoutPage }
