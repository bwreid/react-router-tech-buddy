import React, { Component } from 'react'
import Header from './shared/Header'
import ProfilesList from './profiles/ProfilesList'
import ProfileForm from './profiles/ProfileForm'
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
          <div className="row">
            <div className="col">
              <ProfilesList profiles={ this.state.profiles } />
            </div>
            <div className="col-4">
              <ProfileForm addNewProfile={ this.addNewProfile } />
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default App
