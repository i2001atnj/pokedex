import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className='Loader'>
        <div className="loading">
            <div className="loading-page">
                <div className="item">
                <div className="ball"></div>
                <div className="half-ball"></div>
                <div className="big-button"></div>
                <div className="small-button"></div>
                <div className="horizon"></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Loader