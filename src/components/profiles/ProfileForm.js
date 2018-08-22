import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ProfileForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      avatar: '',
      email: ''
    }
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = async (event) => {
    event.preventDefault()
    this.props.addNewProfile(this.state)
    this.props.history.push(`/profiles/${this.state.username}`)
    this.setState({
      username: '',
      avatar: '',
      email: ''
    })
  }

  render () {
    return (
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
          <label htmlFor="avatar">Avatar</label>
          <input
            onChange={ this.onChange }
            value={ this.state.avatar }
            type="text"
            className="form-control"
            name="avatar"
            id="avatar"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            onChange={ this.onChange }
            value={ this.state.email }
            type="text"
            className="form-control"
            name="email"
            id="email"/>
        </div>
        <button type="submit" className="btn btn-info text-light">Submit</button>
      </form>
    )
  }
}

export default withRouter(ProfileForm)
