import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import { Checkbox, Alert, Icon, Form, Input, Button } from 'antd'
import styles from './Login.less'
const FormItem = Form.Item
@Form.create()
export default class LoginPage extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {

      }
    })
  }

  render() {
    const { submitting } = this.props
    const { getFieldDecorator } = this.props.form
    let login = {}
    return (
      <div className='main'>
        <Form onSubmit={this.handleSubmit} className='login-form'>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入你的账号' }],
            })(
              <Input size='large' prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='账号' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入你的密码' }],
            })(
              <Input size='large' prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='密码' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住账号</Checkbox>
            )}
            <a className='login-form-forgot' target='_blank' href='http://password.jcgroup.com.cn/'>忘记密码</a>
            <Button size='large' type='primary' htmlType='submit' className='login-form-button'>登录</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
