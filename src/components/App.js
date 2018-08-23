import React, { Component } from 'react'
import Header from './shared/Header'
import Navigation from './shared/Navigation'
import ProfilesHome from './profiles/ProfilesHome'
import ProfilesShow from './profiles/ProfilesShow'
import AuthView from './accounts/AuthView'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthenticatedRoute from './helpers/AuthenticatedRoute'
import auth from '../lib/auth'
import profiles from '../db'

class App extends Component {
  constructor () {
    super()
    this.state = { profiles, isLoggedIn: false }
  }

  componentDidMount = async () => {
    const isLoggedIn = await auth.verify()
    this.setState({ isLoggedIn })
  }

  addNewProfile = ({ username, avatar, email }) => {
    this.setState({
      profiles: [
        { username, avatar, email },
        ...this.state.profiles
      ]
    })
  }

  updateLoggedInStatus = (isLoggedIn) => {
    this.setState({ isLoggedIn })
  }

  logout = () => {
    auth.logout()
    this.updateLoggedInStatus(false)
  }

  render() {
    return (
      <main>
        <Header />
        <Navigation isLoggedIn={ this.state.isLoggedIn } logout={ this.logout } />
        <section className="container">
          <Switch>
            <AuthenticatedRoute
              exact
              path="/profiles"
              { ...this.state }
              addNewProfile={ this.addNewProfile }
              component={ ProfilesHome } />
            <AuthenticatedRoute
              exact
              path="/profiles/:username"
              { ...this.state }
              component={ ProfilesShow } />
            <Route exact path="/login" render={ () => {
              if (this.state.isLoggedIn) return <Redirect to="/profiles"/>
              return <AuthView updateLoggedInStatus={ this.updateLoggedInStatus } />
            } } />
            <Redirect to="/login" />
          </Switch>
        </section>
      </main>
    )
  }
}

export default App
