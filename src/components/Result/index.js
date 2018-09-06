import React from 'react'
import classNames from 'classnames'
import { Icon } from 'antd'
import styles from './index.less'

export default function Result({
  className,
  type,
  title,
  description,
  extra,
  actions,
  ...restProps
}) {
  const iconMap = {
    error: <Icon className='error' type='close-circle' />,
    success: <Icon className='success' type='check-circle' />,
  }
  const clsString = classNames('result', className)
  return (
    <div className={clsString} {...restProps}>
      <div className='icon'>{iconMap[type]}</div>
      <div className='title'>{title}</div>
      {description && <div className='description'>{description}</div>}
      {extra && <div className='extra'>{extra}</div>}
      {actions && <div className='actions'>{actions}</div>}
    </div>
  )
}
