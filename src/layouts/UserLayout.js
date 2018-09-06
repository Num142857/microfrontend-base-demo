import React, { Fragment } from 'react'
import { Link, Redirect, Switch, Route } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import { Icon } from 'antd'
import './UserLayout.less'
import { getRoutes } from '../utils/utils'

class UserLayout extends React.PureComponent {
  getPageTitle() {
    const { routerData, location } = this.props
    const { pathname } = location
    let title = '微前端Demo'
    if (routerData[pathname] && routerData[pathname].name) {
      title = `${routerData[pathname].name} - 微前端Demo`
    }
    return title
  }
  render() {
    const { routerData, match } = this.props
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className='container user-layout'>
          <div className='content'>
            <div className='top'>
              <div className='header'>
                <Link to='/'>
                  {/* <img alt='logo' className={logo} src={logo} /> */}
                  <span className='title'>微前端Demo</span>
                </Link>
              </div>
              <div className='desc'></div>
            </div>
            <Switch>
              {getRoutes(match.path, routerData).map(item => (
                <Route
                  key={item.key}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                />
              ))}
              <Redirect exact from='/user' to='/user/login' />
            </Switch>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default UserLayout
