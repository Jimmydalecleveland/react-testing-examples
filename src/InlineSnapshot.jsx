import React from 'react'

const inlineSnapshot = () => {
  return (
    <div>
      <h1>Headline goes here</h1>
      {/* The following line will be auto-formatted by prettier in the snapshot, 
        with no snapshot invalidation. */}
      <p id="para1" className="large-paragraph" data-testid="para1">
        Inline snapshots also bring over html attributes
      </p>
    </div>
  )
}

export default inlineSnapshot
