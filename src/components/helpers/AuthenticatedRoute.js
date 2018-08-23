import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={ props =>
      rest.isLoggedIn ? (
        <Component { ...props } { ...rest } />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default AuthenticatedRoute
