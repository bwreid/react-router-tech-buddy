import React from 'react'
import { Link } from 'react-router-dom'

const ProfilesList = ({ profiles }) => {
  const cards = profiles.map(profile => {
    return (
      <div key={ profile.username } className="card m-2 border" style={{ minWidth: '14rem', maxWidth: '14rem' }}>
        <img className="card-img-top" src={ profile.avatar } alt={ profile.username } />
        <div className="card-body">
          <h5 className="card-title">{ profile.username }</h5>
          <Link to={ `/profiles/${profile.username}` } className="btn btn-primary">View</Link>
        </div>
      </div>
    )
  })

  return <section className="card-group">{ cards }</section>
}

export default ProfilesList
