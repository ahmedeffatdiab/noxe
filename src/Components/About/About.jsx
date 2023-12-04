import React from 'react'
import MyImage from '../../images/download (1).jpg';
export default function About() {
  return (
    <div classNameName='my-5'>
      <div className="card mb-3 my-5 py-5 bg-transparent text-white border-0">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={MyImage} className="img-fluid rounded-start w-100" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title fw-bolder">About Us...</h2>
        <p classNameName="card-text my-4 ">we are a team made this application for provide trending movies and trending persons, Tv and the user can search for a specific movie by letter or word and this application provide the information for every movie or person or tv. </p>
        <p className="card-text"><small className=""><i className="fa-solid fa-location-dot me-2"></i> Cairo,Egypt</small></p>
        <p><i className="fa-solid fa-phone-volume me-2"></i> 01201505063</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
