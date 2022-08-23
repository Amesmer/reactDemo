import React, { FC } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Container from '@/pages/container'
import Login from '@/pages/login'
// '/'路由首先渲染了  container组件 组件中的hook拦截了没有token 的情况
const App: FC = () => (
  <Router>
    <Route exact path="/login" component={Login} />
    <Route
      path="/"
      key="container"
      render={(props: unknown) => <Container {...props} />}
    />
  </Router>
)

export default App
