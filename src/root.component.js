import React from 'react'
import { Provider } from 'react-redux'
import BasicLayout from './layouts/BasicLayout'
import UserLayout from './layouts/UserLayout'
import Authorized, { reloadAuthorized } from './utils/Authorized'
import { setAuthority } from './utils/authority'
import { getQueryString } from './utils/utils'
import { loginPage, logoutPage } from './utils/url'
import { Router, HashRouter, Route, hashHistory, Switch, Redirect } from 'react-router-dom'
import { post, get } from 'Util/request'
import { getRouterData } from './common/router'
import { pushStore } from './common/menu'
import _ from 'lodash'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()
const location = history.location
const { AuthorizedRoute } = Authorized
export default class RootComponent extends React.Component {
    state = {
      store: this.props.store,
      globalEventDistributor: this.props.globalEventDistributor,
      currentUser: { name: '' },
      isRender: true
    };

    componentDidCatch(error, info) {
      console.log(error, info)
    }
    setStore(store) {
      this.setState({ ...this.state, store: store })
    }

    setGlobalEventDistributor(globalEventDistributor) {
      this.setState({ ...this.state, globalEventDistributor: globalEventDistributor })
    }

    async componentWillMount() {
      this.initMenu()
      this.props.history.listen((location, action) => {
        if (action === 'PUSH') { this.props.globalEventDistributor.dispatch({ type: 'to', path: location.pathname, owner: 'base' }) }
      })
    }
    initMenu() {
      let store = this.state.globalEventDistributor.getState()
      let menu = []
      Object.keys(store).forEach((name) => {
        if (store[name].menu) {
          if (_.isArray(store[name].menu)) {
            store[name].menu.forEach((item) => {
              pushStore(item)
            })
          } else {
            pushStore(store[name].menu)
          }
        }
      })
    }

    render() {
      let ret = <div></div>
      const routerData = getRouterData()
      let customProps = { routerData: routerData, globalEventDistributor: this.state.globalEventDistributor }

      if (this.state.store && this.state.globalEventDistributor && this.state.isRender) {
        ret = <Provider store={this.state.store}>
          <Router history={this.props.history}>
            <Switch>
              <AuthorizedRoute
                path='/'
                render={props => <BasicLayout {...customProps} {...props} currentUser={this.state.currentUser} />}
              />
            </Switch>
          </Router>

        </Provider>
      }
      return ret
    }
}
