import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={ App } />
    </Switch>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker()
