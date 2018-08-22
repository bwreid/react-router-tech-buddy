import React from 'react'
import Profile from '../profiles/Profile'

const ProfilesHome = ({ profile }) => {
  return (
    <div className="row">
      <div className="col">
        <Profile profile={ profile } />
      </div>
      <div className="col-4">
        <img src={ profile.avatar } alt={ profile.username } />
      </div>
    </div>
  )
}

export default ProfilesHome
