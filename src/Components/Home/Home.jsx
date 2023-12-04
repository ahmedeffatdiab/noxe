import React, { useEffect, useState } from 'react'
import { ApiContext } from '../../Context/ApiContext';
import { useContext } from 'react';
import MediaItem from '../MediaItem/MediaItem';
import Pagnation from '../Pagnation/Pagnation';
import faceImage from "../../images/face-thinking2.jpg"
import {Helmet} from "react-helmet";
export default function Home() {
  let  {dataApi,pageCount,getPage,searchByQuery}=useContext(ApiContext)
  let [isLoading,setIsLoading]=useState(false)
  function getTextInput(word){
    searchByQuery(word)
    setIsLoading(true)
}
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Movies</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="input-group mb-3 w-50 m-auto mt-4">
        <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></span>
        <input onChange={(e)=>{getTextInput(e.target.value)}} type="text" className="form-control" placeholder="Search Movie...." aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <div className='my-5'>
    <div className='row gy-3'>
    <div className="col-md-4 d-flex align-align-items-center">
        <div>
        <div className="brdr w-25 mb-3"></div>
        <div className='h5'>Terending Movies <br/>To Watch Right now</div>
        <p className='text-secondary  py-2'>Most watched Movies to Right Now</p>
        <div className="brdr w-100 mt-3"></div>
        </div>
      </div>
      {dataApi.length>0?
        dataApi.map((ele,index)=>{
          return <MediaItem ele={ele} key={index}/>
        })
      :isLoading==false
      ?<div className='w-100'>
          <i className='fas fa-spinner fa-spin fa-4x position-absolute top-50 start-50 '></i>
        </div>
      :<div className='w-100'>
        <div className='position-absolute top-50 start-50 text-center'>
          <i class="fa-solid fa-triangle-exclamation fa-3x" style={{color:'yellow'}}></i>
        <p>No Found Result ..</p></div></div>}
      {/* {dataApi.length>0?dataApi.map((ele,index)=>{
          return <MediaItem ele={ele} key={index}/>
      }):<div className='w-100'><i className='fas fa-spinner fa-spin fa-4x position-absolute top-50 start-50'></i></div>} */}
      


      {/* {dataApi.length>0?dataApi.map((ele,index)=>{
          return <MediaItem ele={ele} key={index}/>
      }):<div className='w-100'><i className='fas fa-spinner fa-spin fa-4x position-absolute top-50 start-50'></i></div>} */}
      {dataApi.length>1?(<Pagnation getPage={getPage} pageCount={pageCount} />):null}
    </div>
    </div>
    </div>
  )
}
