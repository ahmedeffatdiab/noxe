import React from 'react'
import image from '../../images/download2.png'; 
export default function NotFound() {
  return (
    <div className='my-5'>
      <div className="row">
        <div className="col-md-6">
        <h2 style={{fontSize:"50px"}}>404</h2>
      <h3 style={{fontSize:"70px"}}>Error In URL</h3>
      {/* <p style={{fontSize:"30px"}}>Sorry, Something went Wrong </p> */}
      <p className="text-success">Attemping to perform an unauthorized operation </p>
        </div>
        <div className="col-md-6">
        <img src={image} className='w-100 h-100'/>
        </div>
      </div>
      
    </div>
  )
}
