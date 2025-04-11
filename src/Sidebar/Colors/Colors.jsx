import React from 'react'
import './Colors.css'

const Colors = () => {
  return (
    <div>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>All
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>Black
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>Blue
      </label>
      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>All
      </label>
    </div>
  )
}

export default Colors
