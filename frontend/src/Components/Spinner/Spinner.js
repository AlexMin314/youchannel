import React from 'react'

import './Spinner.css'

const Spinner = ({ isFetching }) => {
  return (
    <div className="cssload-container">
      {isFetching ? (
          <span className="cssload-loading"></span>
      ) : null}
    </div>
  )
}

export default Spinner
