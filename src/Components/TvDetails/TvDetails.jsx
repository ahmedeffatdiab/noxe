import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function TvDetails({}) {
  const {index}=useParams();
  let [detail,setDetail]=useState([]);
  async function getTvs(){
    let res=await axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=52ef927bbeb21980cd91386a29403c78');
    setDetail(res.data.results[index]);
  }
  useEffect(()=>{
    getTvs();
  },[])
  return (
    <div>
      <div className='container'>
    <div className='row my-2 detailsStyle'>
        <div className='col-sm-12 col-md-4 py-4'>
            <img src={`https://image.tmdb.org/t/p/w500`+detail.poster_path} className='w-100 details-image'/>
        </div>
        <div className='col-sm-12 col-md-8'>
            <div className='text-center py-5'>
                <h4> Movie Name : {detail.name} </h4>
                <h4>first_air_date : {detail.first_air_date}</h4>
                <h4>Vote_count : {detail.vote_count}</h4>
                <h4>vote_average : {detail.vote_average}</h4>

            </div>
        </div>
    </div>
    <div className=' my-2 detailsStyle storyStyle'>
        <h2 >Stroy : </h2>
        {detail.overview?<p  className='py-2'>{detail.overview}</p>:"this movie not available story"}
    </div>
    <div className='d-flex justify-content-center my-3'>
        {/* <Link to="/">
            <button className='btb btn-success mx-2'>عوده الرئيسيه</button>
        </Link> */}
    </div>
</div>
    </div>

  )
}
