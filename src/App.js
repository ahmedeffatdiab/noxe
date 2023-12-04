import React, { useEffect } from 'react'
import { createBrowserRouter,RouterProvider,createHashRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import TV from './Components/TV/TV';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import NotFound from './Components/NotFound/NotFound'
import ApiContextProvider from './Context/ApiContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import { Offline } from 'react-detect-offline';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Person from './Components/Person/Person';
import PersonDetails from './Components/PersonDetails/PersonDetails';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import TvDetails from './Components/TvDetails/TvDetails';
export default function App() {
  let [userData,setUserData]=useState(null)
  function saveUserData(){
    let encodedToken=localStorage.getItem('userToken');
    let decodedToken=jwtDecode(encodedToken);
    setUserData(decodedToken);
  }
  const clearLocalStorage = () => {
    localStorage.clear();
  };
 useEffect(()=>{
  if(localStorage.getItem('userToken') !==null){
    saveUserData()
  }
  window.addEventListener('beforeunload', clearLocalStorage);
 },[])
  const routers=createHashRouter([
    {path:'/',element:<Layout userData={userData} setUserData={setUserData}/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<ProtectedRoute><About/></ProtectedRoute>},
      {path:'person',element:<ProtectedRoute><Person/></ProtectedRoute>},
      {path:'tv',element:<ProtectedRoute><TV/></ProtectedRoute>},
      {path:'register',element:<Register/>},
      {path:'profile',element:<ProtectedRoute><Profile userData={userData}/></ProtectedRoute>},
      {path:'login',element:<Login saveUserData={saveUserData}/>},
      {path:'movie/:id',element:<ProtectedRoute><MovieDetails/></ProtectedRoute>},
      {path:'person/:index',element:<ProtectedRoute><PersonDetails/></ProtectedRoute>},
      {path:'tv/:index',element:<ProtectedRoute><TvDetails/></ProtectedRoute>},
      {path:'*',element:<NotFound/>},
    ]},
    
  ])
  return <>
  <Offline><div className='offline'>You Are offline Now, please check connection of network</div></Offline>
  <ApiContextProvider>
            <RouterProvider router={routers}/>
          </ApiContextProvider> 
  </>
           
  
  
}
