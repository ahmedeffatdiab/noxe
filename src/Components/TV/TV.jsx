import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem';
import TvItems from "../TvItems/TvItems"
export default function TV() {
  let [dataAPi,setDataApi]=useState([]);
  async function getTvs(){
    let res=await axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=52ef927bbeb21980cd91386a29403c78');
    setDataApi(res.data.results);
  }
  useEffect(()=>{
    getTvs();
  },[])
  return (
    <div className='my-5'>
      <div className="row">
        <div className="col-md-4 d-flex align-align-items-center">
          <div>
          <div className="brdr w-25 mb-3"></div>
          <div className='h5'>Terending Tv <br/>To Watch Right now</div>
          <p className='text-secondary  py-2'>Most watched Tv to Right Now</p>
          <div className="brdr w-100 mt-3"></div>
          </div>
        </div>
        {dataAPi.length>1?(dataAPi.map((ele,index)=><TvItems key={index} ele={ele} index={index}/>)):<div className='w-100'><i className='fas fa-spinner fa-spin fa-4x position-absolute top-50 start-50'></i></div>}
        {dataAPi.map((ele,index)=><TvItems key={index} ele={ele} index={index}/>)}
      </div>
    </div>
  )
}
