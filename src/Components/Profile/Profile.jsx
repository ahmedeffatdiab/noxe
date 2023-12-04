import React from 'react'
import userProile from '../../images/user-Profile.jpg'
export default function Profile({userData}) {
  const {UserData}=userData
  return (
    <>
    <div className='profile-info my-5 text-center  w-50 h-100 pb-5'>
    <i class="fa-solid fa-user fa-5x my-4 text-black"></i>
      <div className='mx-auto  w-100 text-black'>
                <h3>First_Name : {UserData.First_name}</h3>
                <h3>Last_Name : {UserData.Last_name}</h3>
                <h3>Username : {UserData.Username}</h3>
                <h3>Email : {UserData.Email}</h3>
      </div>
    </div>
        {/* <div className='d-flex justify-content-center align-content-center align-items-center w-100'>
          
     </div> */}
    </>
    // <div className='d-flex justify-content-center align-content-center align-items-center w-100'>
    //   <div className='mx-auto my-5 w-100'>
    //         <h3>First_Name : {UserData.First_name}</h3>
    //         <h3>Last_Name : {UserData.Last_name}</h3>
    //         <h3>Username : {UserData.Username}</h3>
    //         <h3>Email : {UserData.Email}</h3>
    //     </div>
    // </div>
    
  )
}
