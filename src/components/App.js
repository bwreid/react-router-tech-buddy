import React, { Component } from 'react'
import Header from './shared/Header'
import Navigation from './shared/Navigation'
import ProfilesHome from './profiles/ProfilesHome'
import ProfilesShow from './profiles/ProfilesShow'
import { Switch, Route } from 'react-router-dom'
import profiles from '../db'

class App extends Component {
  constructor () {
    super()
    this.state = { profiles, isLoggedIn: false }
  }

  addNewProfile = ({ username, avatar, email }) => {
    this.setState({
      profiles: [
        { username, avatar, email },
        ...this.state.profiles
      ]
    })
  }

  render() {
    return (
      <main>
        <Header />
        <Navigation isLoggedIn={ this.state.isLogged } />
        <section className="container">
          <Switch>
            <Route exact path="/profiles" render={() => {
              return <ProfilesHome profiles={ this.state.profiles } addNewProfile={ this.addNewProfile }/>
            }}/>
            <Route exact path="/profiles/:username" render={({ match }) => {
              const user = this.state.profiles.find(element => element.username === match.params.username)
              return <ProfilesShow profile={ user } />
            }}/>
          </Switch>
        </section>
      </main>
    )
  }
}

export default App
