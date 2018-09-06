import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import registerServiceWorker from './registerServiceWorker'
import RootComponent from './root.component'
import { storeInstance, history } from './Store'
import './index.less'

if (process.env.NODE_ENV === 'development') {
  // 开发环境这样处理
  ReactDOM.render(<RootComponent history={history} store={storeInstance} globalEventDistributor={storeInstance} />, document.getElementById('root'))
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (spa) => {
    return <RootComponent history={spa.customProps.store.history} store={spa.customProps.store.storeInstance} globalEventDistributor={spa.customProps.globalEventDistributor} />
  },
  domElementGetter: () => document.getElementById('root')
})

export const bootstrap = [
  reactLifecycles.bootstrap,
]

export const mount = [
  reactLifecycles.mount,
]

export const unmount = [
  reactLifecycles.unmount,
]

registerServiceWorker()
