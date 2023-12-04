import React from 'react'
import { useParams } from 'react-router-dom';
import { useState , useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function MovieDetails() {
    const params=useParams();
    let [detail,setDetails]=useState('')
    async function getMovieDetails(){
        let res=await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`)
        setDetails(res.data)
    }
    useEffect(()=>{
        getMovieDetails()
      },[])
  return (
    <div className='container'>
    <div className='row my-2 detailsStyle'>
        <div className='col-sm-12 col-md-4 py-4'>
            <img src={`https://image.tmdb.org/t/p/w500`+detail.poster_path} className='w-100 details-image'/>
        </div>
        <div className='col-sm-12 col-md-8'>
            <div className='text-center py-5'>
                <h4>اسم الفيلم : {detail.title} </h4>
                <h4>تاريخ الفيلم : {detail.release_date}</h4>
                <h4>عدد المقيمين : {detail.vote_count}</h4>
                <h4>التقييم : {detail.vote_average}</h4>

            </div>
        </div>
    </div>
    <div className=' my-2 detailsStyle storyStyle d-flex flex-column justify-content-center'>
        <h2 dir='rtl'>القصه : </h2>
        {detail.overview?<p dir='rtl' className='py-2 float-left'>{detail.overview}</p >:<p dir='rtl'>  لا تتوافر قصه لهذا الفيلم</p>}
    </div>
    <div className='d-flex justify-content-center my-3'>
        <Link to="/">
            <button className='btb btn-success mx-2'>عوده الرئيسيه</button>
        </Link>
    </div>
</div>
  )
}
