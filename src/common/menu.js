import { isUrl } from '../utils/utils'
import appInfo from '../../package.json'
const NODE_ENV = process.env.NODE_ENV
const menuData = []
let originParentPath = '/'
function formatter(data, parentPath = originParentPath, parentAuthority) {
  data = data.sort((a, b) => a.rank - b.rank)
  return data.map(item => {
    let { path } = item
    if (!isUrl(path)) {
      path = parentPath + item.path
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    }
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority)
    }
    return result
  })
}

export const pushStore = (menu) => { menuData.push(menu) }
export const getMenuData = (menu) => { return formatter(menuData) }
