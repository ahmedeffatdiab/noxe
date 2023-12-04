import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Joi from 'joi';
export default function Register() {
    let navigate=useNavigate();
    let [errorList,setErrorList]=useState([]);
    let [error,setError]=useState('');
    let [IsLoading,setIsLoading]=useState(false)
    let [alerm,setAlarm]=useState('')
    let [user,setUser]=useState({
        first_name:'',
        last_name:'',
        username:'',
        email:'',
        password:'',
    });
    function getUserData(eventInfo){
        let myUser={...user};
        myUser[eventInfo.target.name]=eventInfo.target.value;
        setUser(myUser);
    }
    async function sendApiToServer(){
        let {data}=await axios.post('https://apiauth-670p.onrender.com/api/signup',user) ;
        if(data.message=='success'){
            setIsLoading(false)
            navigate('/login')
        }else{
            setIsLoading(false)
            setError(data.message)
        }
    }
    function ValidateRegisterForm(){
        let schema=Joi.object({
            first_name:Joi.string().min(3).max(10).required(),
            last_name:Joi.string().min(3).max(10).required(),
            username:Joi.string().min(3).max(10).required(),
            email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            password:Joi.string().pattern(/^[A-Z][a-z]{3,8}/).required(),
        })
        return schema.validate(user,{abortEarly: false});
    }
    function submitData(e){
        e.preventDefault();
        setIsLoading(true)
        let resValidation=ValidateRegisterForm();
        if(resValidation.error){
            setIsLoading(false)
            setErrorList(resValidation.error.details)
        }else{
            sendApiToServer();
        }
        
    }
    return (
        
        <div className='w-md-50  m-auto bg-dark p-3 rounded-3'>
            {errorList.map((err,index)=>{
                if(err.context.label='password'){
                    return <div key={index} className='alert alert-danger'>password Invalid</div>
                }
            return <div key={index} className='alert alert-danger'>{err.message}</div>})}
                {error.length>0? <div className='alert alert-danger'>{error}</div>:''}
        <form className='  my-2' onSubmit={submitData} autoComplete="off">
            <label htmlFor='first_name'>first Name :</label>
            <input onChange={getUserData}   autoComplete="new-password"   type="text" name="first_name" id="first_name" className='form-control my-input mb-3' placeholder='Enter Firstname ..'/>
            <div className=''>{alerm}</div>
            <label htmlFor='last_name'>last Name :</label>
            <input onChange={getUserData}  autoComplete="new-password"   type="text" name="last_name" id="last_name" className='form-control my-input mb-3' placeholder='Enter Lastname ..'/>
            <label htmlFor='username'>Username :</label>
            <input onChange={getUserData}  autoComplete="new-password"   type="text" name="username" id="username" className='form-control my-input mb-3' placeholder='Enter Username ..'/>
            <label htmlFor='email'>email :</label>
            <input onChange={getUserData}  autoComplete="new-password"   type="text" name="email" id="email" className='form-control my-input mb-3' placeholder='Enter Email ..'/>
            <label htmlFor='password'>password :</label>
            <input onChange={getUserData}   autoComplete="new-password"   type="password" name="password" id="password" className='form-control my-input mb-3' placeholder='Enter Password ..'/>
            <button type="submit" className="btn btn-info">{IsLoading==true?<i className='fas fa-spinner fa-spin'></i>:"Register"}</button>
        </form>
        <div id="g_id_onload"
     data-client_id="768822304568-41ac6h6pgcprkmalt3b1am62hr8n3qcm.apps.googleusercontent.com"
     data-context="signin"
     data-ux_mode="popup"
     data-callback="logincallback"
     data-auto_prompt="false">
</div>

<div class="g_id_signin"
     data-type="standard"
     data-shape="rectangular"
     data-theme="outline"
     data-text="signin_with"
     data-size="large"
     data-logo_alignment="left">
</div>
      

        <div className='w-100 text-center'>
            <p className='m-auto'>Alerdy have An Account? <Link to="/login" className='fw-bolder'>Login</Link>  </p>
        </div>
        </div>
    )
}
