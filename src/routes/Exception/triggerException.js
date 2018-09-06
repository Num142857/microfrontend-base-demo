import React, { PureComponent } from 'react'
import { Button, Spin, Card } from 'antd'
import './style.less'
import { Link } from 'react-router-dom'

export default class TriggerException extends PureComponent {
  state = {
    isloading: false,
  };
  triggerError = code => {
    this.setState({
      isloading: true,
    })
    this.props.history.push(`/exception/${code}`)
  };
  render() {
    return (
      <Card>
        <Spin spinning={this.state.isloading} wrapperClassName='trigger'>
          <Button type='danger' onClick={() => this.triggerError(401)}>
            触发401
          </Button>
          <Button type='danger' onClick={() => this.triggerError(403)}>
            触发403
          </Button>
          <Button type='danger' onClick={() => this.triggerError(500)}>
            触发500
          </Button>
          <Button type='danger' onClick={() => this.triggerError(404)}>
            触发404
          </Button>
        </Spin>
      </Card>
    )
  }
}
