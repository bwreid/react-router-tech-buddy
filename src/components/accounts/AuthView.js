import React, { Component } from 'react'
import auth from '../../lib/auth'
import { withRouter } from 'react-router-dom'

class AuthView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = async (event) => {
    event.preventDefault()
    const { username, password } = this.state
    try {
      const response = await auth.login(username, password)
      this.props.updateLoggedInStatus(response)
      console.log('LOGIN RESPONSE:', response)
    } catch (e) {
      console.error(e)
    }
  }

  render () {
    return (
      <section>
        <h1>Login</h1>
        <form onSubmit={ this.onSubmit } className="border rounded p-4">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              onChange={ this.onChange }
              value={ this.state.username }
              type="text"
              className="form-control"
              name="username"
              id="username"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={ this.onChange }
              value={ this.state.password }
              type="password"
              className="form-control"
              name="password"
              id="password"/>
          </div>
          <button type="submit" className="btn btn-info text-light">Submit</button>
        </form>
      </section>
    )
  }
}

export default withRouter(AuthView)
