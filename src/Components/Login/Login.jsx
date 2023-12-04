import axios from 'axios';
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';

export default function Login({saveUserData}) {
    let [user,setUser]=useState({
        email:'',
        password:'',
    });
    let navigate=useNavigate();
    let [errorList,setErrorList]=useState([]);
    let [error,setError]=useState('');
    let [IsLoading,setIsLoading]=useState(false)
    let [alerm,setAlarm]=useState('')
    function getUserData(eventInfo){
        let myUser={...user};
        myUser[eventInfo.target.name]=eventInfo.target.value;
        setUser(myUser);
    
    }
    async function sendApiToServer(){
        let {data}=await axios.post('https://apiauth-670p.onrender.com/api/login',user) ;
        if(data.message=='success'){
            setIsLoading(false);
            localStorage.setItem("userToken",data.data.token);
            saveUserData();
            navigate('/')
        }else{
            setIsLoading(false)
            setError(data.message)
        }
  }
  function ValidateLoginForm(){
    let schema=Joi.object({
      email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password:Joi.string().required(),
    })
    return schema.validate(user,{abortEarly: false});
  }
  function submitData(e){
    e.preventDefault();
    setIsLoading(true)
    let resValidation=ValidateLoginForm();
    if(resValidation.error){
        setIsLoading(false)
        setErrorList(resValidation.error.details)
    }else{
        sendApiToServer();
    }
    
  }

    return (
        <div className=' w-md-50  m-auto bg-dark p-3 rounded-3'>
            {errorList.map((err,index)=>{
          if(err.context.label='password'){
              return <div key={index} className='alert alert-danger'>password Invalid</div>
          }else{
              return <div key={index} className='alert alert-danger'>{err.message}</div>}})}
              {error.length>0? <div className='alert alert-danger'>{error}</div>:''}
              <form className='my-2' onSubmit={submitData} autoComplete="off">
                  <label htmlFor='email'>email :</label>
                  <input onChange={getUserData} autoComplete="new-password"   type="text" name="email" id="email" className='form-control my-input mb-3' placeholder='Enter Email ..'/>
                  <label htmlFor='password'>password :</label>
                  <input onChange={getUserData} autoComplete="new-password"   type="password" name="password" id="password" className='form-control my-input mb-3' placeholder='Enter Password ..'/>
                  <button type="submit" className="btn btn-info">{IsLoading==true?<i className='fas fa-spinner fa-spin'></i>:"Login"}</button>
              </form>
              <div className='w-100 text-center'>
                    <p className='m-auto'>Create An Account? <Link to="/register" className='fw-bolder'>Register</Link>  </p>
              </div>
        
        </div>
        
    )
}
