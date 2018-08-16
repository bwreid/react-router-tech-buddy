import React from 'react'

const Errors = ({ errors }) => {
  const items = errors.map((error, i) => <p className="my-2" key={ i }>{ error }</p>)
  return <div className="alert alert-danger mt-4">{ items }</div>
}

export default Errors
