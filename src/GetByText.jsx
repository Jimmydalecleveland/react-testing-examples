import React from 'react'

const GetByText = ({ loading }) => {
  return (
    <button>{loading ? 'Loading...' : 'Submit Now!'}</button>
  )
}

export default GetByText
