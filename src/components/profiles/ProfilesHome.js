import React from 'react'
import ProfilesList from '../profiles/ProfilesList'
import ProfileForm from '../profiles/ProfileForm'

const ProfilesHome = ({ profiles, addNewProfile }) => {
  return (
    <div className="row">
      <div className="col">
        <ProfilesList profiles={ profiles } />
      </div>
      <div className="col-4">
        <ProfileForm addNewProfile={ addNewProfile } />
      </div>
    </div>
  )
}

export default ProfilesHome
