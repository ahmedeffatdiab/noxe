import React, { useEffect, useState } from 'react'
// import MediaItem from '../MediaItem/MediaItem';
import PersonItems from '../PersonItems/PersonItems';
import axios from 'axios'

export default function Person() {
  let [dataAPi,setDataApi]=useState([]);
  async function getTvs(){
    let res=await axios.get('https://api.themoviedb.org/3/trending/person/week?api_key=52ef927bbeb21980cd91386a29403c78');
    setDataApi(res.data.results);
  }
  useEffect(()=>{
    getTvs();
  },[])
  return (
    <div>
      <div className='my-5'>
      <div className="container">
        <div className="row">
        <div className="col-md-4 d-flex align-align-items-center">
        <div>
        <div className="brdr w-25 mb-3"></div>
        <div className='h5'>Terending Person <br/>To Watch Right now</div>
        <p className='text-secondary  py-2'>Most watched Person to Right Now</p>
        <div className="brdr w-100 mt-3"></div>
        </div>
      </div>
      {dataAPi.length>=1?(dataAPi.map((ele,index)=>{
        return <PersonItems ele={ele} key={index} index={index}/>
      })):<div className='w-100'><i className='fas fa-spinner fa-sin position-absolute top-50 start-50 fa-4x'></i></div>}
        </div>
      </div>
      
    </div>
    </div>
  )
}
