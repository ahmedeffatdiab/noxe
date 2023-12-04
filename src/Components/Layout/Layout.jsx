import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Layout({userData,setUserData}) {
  let navigate=useNavigate()
  function LogOut(){
    localStorage.removeItem("userToken");
    setUserData(null);
    navigate('/login')
  }
  return (
    <div>
        <Navbar userData={userData} LogOut={LogOut}/>
        <div className="container">
        <Outlet></Outlet>
        </div>
    </div>
  )
}
