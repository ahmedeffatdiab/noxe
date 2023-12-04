import React from 'react'
import { useParams } from 'react-router-dom';
import { useState , useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function PersonDetails() {
    const params=useParams();
    let [dataAPi,setDataApi]=useState([]);
  async function getTvs(){
    let res=await axios.get('https://api.themoviedb.org/3/trending/person/week?api_key=52ef927bbeb21980cd91386a29403c78');
    setDataApi(res.data.results[params.index].known_for);
  }
  useEffect(()=>{
    getTvs();
  },[])
  return (
    <div>
      {dataAPi.map((ele,index)=>{
        return(
<div className="card mb-3  m-auto my-5">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`https://image.tmdb.org/t/p/w500`+ele.backdrop_path}  className="img-fluid h-100  rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{ele.title}</h5>
        <p className="card-text">{ele.overview}</p>
        <p className="card-text">Vote Average : {ele.vote_average}</p>
        <p className="card-text">Vote Count : {ele.vote_count}</p>
        <p className="card-text"><small className="text-muted">Release Date : {ele.release_date}</small></p>
      </div>
    </div>
  </div>
</div>
        )
      })}
      
    </div>
  )
}
