const projectConfig = require('../public/project.json')
module.exports = {
  port: '22',
  host: 'xx.xx.xx.xx',
  username: 'xxxx',
  password: 'xxxxx',
  local: './build/',
  path: `/root/micro-demo/${projectConfig.name}/`,
}
