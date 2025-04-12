import React from 'react'
import './Recommended.css'
import "../../index.css"
import Buttons from '../components/Buttons'

const Recommended = ({handleClick}) => {
  return <>
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <button onClick={handleClick} className="btns" title="All Products" value="">All Products</button>
        <Buttons onClickHandler={handleClick} className="btns" title="Nike" value="Nike" />
        <Buttons onClickHandler={handleClick} className="btns" title="Adidas" value="Adidas" />
        <Buttons onClickHandler={handleClick} className="btns" title="Puma" value="Puma" />
        <Buttons onClickHandler={handleClick} className="btns" title="Vans" value="Vans" />
      </div>
    </div>
  </>
}

export default Recommended
