// import React, { useState } from 'react'
// import {useNavigate} from "react-router-dom";
// import axios from 'axios';

// const Login = () => {
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

//   const navigate = useNavigate();


//   const logInUser = () => {
//     if(email.length === 0){
//       alert("Email has left Blank!");
//     }
//     else if(password.length === 0){
//       alert("password has left Blank!");
//     }
//     else{
//       axios.post('http://127.0.0.1:5000/login', {
//         email: email,
//         password: password
//     })
//     .then(function (response) {
//         console.log(response);
//         //console.log(response.data);
//         navigate("/");
//     })
//     .catch(function (error) {
//         console.log(error, 'error');
//         if (error.response.status === 401) {
//             alert("Invalid credentials");
//         }
//     });

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     const data = {
//       userName,
//       password,
//       email
//     }
    
//     const url = 'http://127.0.0.1:5000/login'

//     const options = {
//       method: updating ? "GET" : "POST",
//       headers: {
//           "Content-Type": "application/json"
//       },
//       body: JSON.stringify(data)
//     }

//     const response = await fetch(url, options)

//     if (response.status !== 201 && response.status !== 200) {
//       const data = await response.json()
//       alert(data.message)
//   } else {
//       updateCallback()
//   }
//   }
//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
//       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
//         <p className='prata-regular text-3xl'>{currentState}</p>
//         <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
//       </div>
//       <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
//       <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />

//       <div className='w-full flex justify-between text-sm mt-[-8px]'>
//         <p className='cursor-pointer'>Forgot your password?</p>
//       </div>
//       <button className='bg-black text-white font-light px-8 py-2 mt-4 '>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>

//     </form>
//   )
// }
// }
// }
// export default Login
import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
 
export default function LoginPage(){
 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
   
    const navigate = useNavigate();
     
    const logInUser = () => {
        if(email.length === 0){
          alert("Email has left Blank!");
        }
        else if(password.length === 0){
          alert("password has left Blank!");
        }
        else{
            axios.post('http://127.0.0.1:5000/login', {
                email: email,
                password: password
            })
            .then(function (response) {
                console.log(response);
                //console.log(response.data);
                navigate("/");
            })
            .catch(function (error) {
                console.log(error, 'error');
                if (error.response.status === 401) {
                    alert("Invalid credentials");
                }
            });
        }
    }
 
    let imgs = [
      'https://as1.ftcdn.net/v2/jpg/03/39/70/90/1000_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg',
    ];
     
  return (
    <div>
        <div className="container h-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img src={imgs[0]} className="img-fluid"/>
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Log Into Your Account</p>
                  </div>
 
                  <div className="form-outline mb-4">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                    <label className="form-label" for="form3Example3">Email address</label>
                  </div>
 
             
                  <div className="form-outline mb-3">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                    <label className="form-label" for="form3Example4">Password</label>
                  </div>
 
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                      <label className="form-check-label" for="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">Forgot password?</a>
                  </div>
 
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-primary btn-lg" onClick={logInUser} >Login</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register" className="link-danger">Register</a></p>
                  </div>
 
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}