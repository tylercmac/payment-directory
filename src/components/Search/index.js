import React from 'react'

export default function Search(props) {
  return (
    <div>
      <div className="form-inline my-2 my-lg-0 ml-5">
        <input name="search" className="form-control mr-sm-2" onChange={props.handleInputChange} type="search" placeholder="Search" aria-label="Search" />
      </div>
    </div>
  )
}

