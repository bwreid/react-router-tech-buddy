import React, { Component } from 'react'
import Header from './shared/Header'
import ProfilesHome from './containers/ProfilesHome'
import ProfilesShow from './containers/ProfilesShow'
import ProfileForm from './profiles/ProfileForm'
import Profile from './profiles/Profile'
import { Switch, Route } from 'react-router-dom'
import profiles from '../db'

class App extends Component {
  constructor () {
    super()
    this.state = { profiles }
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
