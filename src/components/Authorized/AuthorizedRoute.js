import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Authorized from './Authorized'
import { isUrl } from 'Util/utils'

class AuthorizedRoute extends React.Component {
  state={}
  redirect() {
    const { redirectPath } = this.props

    if (isUrl(redirectPath)) {
      location.href = redirectPath
      return null
    }
    return <Redirect to={{ pathname: redirectPath }} />
  }
  render() {
    const { component: Component, render, authority, redirectPath, ...rest } = this.props
    return (
      <Authorized
        authority={authority}
        noMatch={<Route {...rest} render={this.redirect.bind(this)} />}
      >
        <Route {...rest} render={props => (Component ? <Component {...props} /> : render(props))} />
      </Authorized>
    )
  }
}

export default AuthorizedRoute
