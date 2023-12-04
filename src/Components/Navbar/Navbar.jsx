import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Navbar({userData,LogOut}) {
        
return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
<div className="container-fluid">
    <Link className="navbar-brand text-white fw-bolder" style={{fontSize:"30px"}} to="/">Noxe</Link>
    <button className="navbar-toggler " style={{backgroundColor:"#e3f2fd"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item ">
            <Link className="nav-link text-white" aria-current="page" to="/">Movies</Link>
        </li>
        <li className="nav-item" >
            <Link className="nav-link text-white" to='about'>About</Link>
        </li>
        <li className="nav-item ">
            <Link className="nav-link text-white" to="person">Persons</Link>
        </li>
        <li className="nav-item ">
            <Link className="nav-link text-white" to="tv">TVs</Link>
        </li>
        
        
    </ul>
        <div className="right-nav  d-flex align-items-center ">
            <div className="socialMedia mx-lg-5">
                <a href="#"> <i className='fab fa-facebook mx-2 ' style={{cursor:"pointer",color:"blue"}}></i></a>
                <a href="#"><i className='fab fa-instagram mx-2 ' style={{cursor:"pointer",color:"red"}}></i></a>
                <a href="#"><i className='fab fa-spotify mx-2 ' style={{cursor:"pointer",color:"green"}}></i></a>
                <a href="#"><i className='fab fa-youtube mx-2 ' style={{cursor:"pointer",color:"red"}}></i></a>
        
            </div>
        <ul className='list-unstyled d-flex m-0 align-items-center '> 
            {userData?<>
                <li className='px-2 cursor-pointer' onClick={LogOut} ><Link className="nav-link text-white" to="" >logOut</Link></li>
                <li className='px-2 cursor-pointer'><Link className="nav-link text-white" to="profile">Profile</Link></li>
            </>
            :<>
             <li className='px-2 cursor-pointer' ><Link className="nav-link text-white" to='login'>Login</Link></li>
            <li className='px-2 cursor-pointer'><Link className="nav-link text-white" to='register'>Register</Link></li>
            </>
            }
            
           
        </ul>
    </div>
    </div>
</div>
</nav>
    </div>

    )
}
