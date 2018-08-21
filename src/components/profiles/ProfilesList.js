import React from 'react'
const ProfilesList = ({ profiles }) => {
  const cards = profiles.map(profile => {
    return (
      <div key={ profile.username } className="card m-2 border" style={{ minWidth: '14rem', maxWidth: '14rem' }}>
        <img className="card-img-top" src={ profile.avatar } alt={ profile.username } />
        <div className="card-body">
          <h5 className="card-title">{ profile.username }</h5>
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    )
  })

  return <section className="card-group">{ cards }</section>
}

export default ProfilesList
