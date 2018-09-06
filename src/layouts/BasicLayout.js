import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Layout, Icon, message, Menu } from 'antd'
import { BrowserRouter, Route, hashHistory, Switch, Redirect, Link } from 'react-router-dom'
import { ContainerQuery } from 'react-container-query'
import DocumentTitle from 'react-document-title'
import classNames from 'classnames'
import NotFound from '../routes/Exception/404'
import SubModule from '../routes/SubModule'
import { getRoutes } from '../utils/utils'
import { logoutPage, loginPage } from '../utils/url'
import { getMenuData } from '../common/menu'
import SiderMenu from 'Components/SiderMenu/'
import GlobalHeader from 'Components/GlobalHeader'
import { enquireScreen, unenquireScreen } from 'enquire-js'
import './BasicLayout.less'
import logo from '../assets/logo.svg'
import { post, get } from '../utils/request'
const { Header, Sider, Content } = Layout
import Authorized from '../utils/Authorized'
const { AuthorizedRoute, check } = Authorized
const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
}

/**
 * 根据菜单取得重定向地址.
 */
const redirectData = []
const getRedirect = item => {
  if (item && item.children) {
    if (item.children[0] && item.children[0].path) {
      redirectData.push({
        from: `${item.path}`,
        to: `${item.children[0].path}`,
      })
      item.children.forEach(children => {
        getRedirect(children)
      })
    }
  }
}
getMenuData().forEach(getRedirect)

/**
 * 获取面包屑映射
 * @param {Object} menuData 菜单配置
 * @param {Object} routerData 路由配置
 */
const getBreadcrumbNameMap = (menuData, routerData) => {
  const result = {}
  const childResult = {}
  for (const i of menuData) {
    if (!routerData[i.path]) {
      result[i.path] = i
    }
    if (i.children) {
      Object.assign(childResult, getBreadcrumbNameMap(i.children, routerData))
    }
  }
  return Object.assign({}, routerData, result, childResult)
}

export default class BasicLayout extends React.PureComponent {
    state = {
      collapsed: true,
      isMobile: false,
    };
    static childContextTypes = {
      location: PropTypes.object,
      breadcrumbNameMap: PropTypes.object,
    };
    getChildContext() {
      const { location, routerData } = this.props
      return {
        location,
        breadcrumbNameMap: getBreadcrumbNameMap(getMenuData(), routerData),
      }
    }

    componentDidMount() {
      this.enquireHandler = enquireScreen(mobile => {
        this.setState({
          isMobile: mobile,
        })
      })
    }
    componentWillUnmount() {
      // 判断是否为手机
      unenquireScreen(this.enquireHandler)
    }
    componentWillMount() {

    }
    getPageTitle() {
      const { routerData, location } = this.props
      const { pathname } = location
      let title = '微前端Demo'
      if (routerData[pathname] && routerData[pathname].name) {
        title = `${routerData[pathname].name} - 微前端Demo`
      }
      return title
    }

    getBashRedirect = () => {
      // 这里是重定向的,重定向到 url 的 redirect 参数所示地址
      const urlParams = new URL(window.location.href)

      const redirect = urlParams.searchParams.get('redirect')
      // Remove the parameters in the url
      if (redirect) {
        urlParams.searchParams.delete('redirect')
        window.history.replaceState(null, 'redirect', urlParams.href)
      } else {
        const { routerData } = this.props
        // 检查权限,当前权限还未细化,暂不使用
        const authorizedPath = Object.keys(routerData).find(
          item => check(routerData[item].authority, item) && item !== '/'
        )
        // return authorizedPath
        return '/'
      }
      return redirect
    };
    handleMenuCollapse = collapsed => {
      this.setState({
        collapsed: !this.state.collapsed,
      })
    };
    handleNoticeClear = type => {
      message.success(`清空了${type}`)
    //   this.props.history.push('/user/login')
    };
     handleMenuClick = async ({ key }) => {
       if (key === 'logout') {
         // 点击退出
       }
     };
    handleNoticeVisibleChange = visible => {
    };

    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      })
    }
    render() {
      const {
        fetchingNotices,
        notices,
        routerData,
        match,
        location,
        currentUser
      } = this.props

      const { collapsed } = this.state
      const menus = getMenuData()
      const bashRedirect = this.getBashRedirect()
      const layout = (
        <Layout>
          <Header style={{ padding: 0 }}>
            <GlobalHeader
              logo={logo}
              currentUser={currentUser}
              fetchingNotices={fetchingNotices}
              notices={notices}
              collapsed={collapsed}
              isMobile={this.state.isMobile}
              onNoticeClear={this.handleNoticeClear}
              onCollapse={this.handleMenuCollapse}
              onMenuClick={this.handleMenuClick}
              onNoticeVisibleChange={this.handleNoticeVisibleChange}
            />
          </Header>

          <Layout >
            <SiderMenu
            // logo={logo}
            // 不带Authorized参数的情况下如果没有权限,会强制跳到403界面
            // If you do not have the Authorized parameter
            // you will be forced to jump to the 403 interface without permission

              menuData={getMenuData()}
              collapsed={collapsed}
              location={location}
              onCollapse={this.handleMenuCollapse}
            />

            <Content style={{ margin: '0 16px', minHeight: '100vh' }}>
              <Switch>
                {getRoutes(match.path, routerData).map(item => (
                  <Route key={item.key}
                    path={item.path}
                    component={item.component}
                    exact={item.exact}
                  />
                ))}
                <Redirect exact from='/' to={bashRedirect} />
                <Route render={SubModule} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      )

      return (
        <DocumentTitle title={this.getPageTitle()}>
          <ContainerQuery query={query}>
            {params => {
              return <div className={classNames(params)}>{layout}</div>
            }}
          </ContainerQuery>
        </DocumentTitle>
      )
    }
}
