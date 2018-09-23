import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import paths from './configs/paths'
import PageCssStyling from './components/PageCSSStyling'
import PageTemplate from './containers/PageTemplate'
import PageLayout from './components/PageLayout'
import store from './store'

const App = () => (
  <Provider store={store}>
    <Router>
      <PageLayout>
        <Switch>
          <Route exact path={paths.cssStyling} component={PageCssStyling} />
          <Route path={paths.template} component={PageTemplate} />
          <Route component={PageCssStyling} />
        </Switch>
      </PageLayout>
    </Router>
  </Provider>
)

export default App
