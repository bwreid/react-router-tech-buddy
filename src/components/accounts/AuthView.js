import React, { Component } from 'react'
import auth from '../../lib/auth'
import { withRouter } from 'react-router-dom'

class AuthView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLogin: true,
      username: '',
      password: ''
    }
  }

  toggleView = () => {
    this.setState({ isLogin: !this.state.isLogin })
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
      await auth.login(username, password)
      await this.props.loginToApp()
      this.props.history.push('/profiles')
    } catch (e) {
      console.error(e)
    }
  }

  render () {
    const currentView = this.state.isLogin ? 'Login' : 'Signup'
    const otherView = !this.state.isLogin ? 'Login' : 'Signup'

    return (
      <section>
        <h1>{ currentView }</h1>
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
          <button onClick={ this.toggleView } className="btn btn-light ml-4">{ otherView }</button>
        </form>
      </section>
    )
  }
}

export default withRouter(AuthView)
