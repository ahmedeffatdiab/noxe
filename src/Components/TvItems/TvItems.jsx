import React from 'react'
import { Link } from 'react-router-dom'
export default function MediaItem({ele,index}) {
    return (
        <>
           <div className='col-xs-6 col-sm-6 col-md-2 my-2 '>
            <Link to={`/tv/${index}`}>
            <div className='card'>
                    {ele.profile_path?<img src={`https://image.tmdb.org/t/p/w500`+ele.profile_path} className='h-100' alt="hun"/>:<img src={`https://image.tmdb.org/t/p/w500`+ele.poster_path} className='h-100' alt="hun"/>}            
                        {/* <img src={`https://image.tmdb.org/t/p/w500`+ele.poster_path} className='h-100' alt="hun"/> */}
                        <div className='card_overlay'>
                            <div className='overlay_text text-center w-100 p-2'>
                                <p>{ele.title}{ele.name}</p>
                                <p>{ele.release_date}</p>
                                <p> {ele.vote_count}{ele.popularity}</p>
                                <p> {ele.vote_average}</p>
                                <p>{ele.known_for_department}</p>
                                {ele.vote_average && <div className='position-absolute p-2 top-0 end-0 bg-primary text-white vote '>{ele.vote_average?.toFixed(1)}</div> }
                            </div>
                        </div>
                </div>
            </Link>
        </div>
        </> 
        
    )
}
