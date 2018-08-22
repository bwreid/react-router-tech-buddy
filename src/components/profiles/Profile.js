import React from 'react'

const Profile = ({ profile }) => (
  <div>
    <p>{ profile.name }</p>
    <p>{ profile.username }</p>
    <p>{ profile.email }</p>
  </div>
)

export default Profile
