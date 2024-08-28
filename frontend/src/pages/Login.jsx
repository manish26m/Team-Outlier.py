import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Sign Up');
  const [userName, setUserName] = useState(existingContact.userName || "");
  const [password, setPassword] = useState(existingContact.password || "");
  const [email, setEmail] = useState(existingContact.email || "");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const data = {
      userName,
      password,
      email
    }
    
    const url = ''

    const options = {
      method: updating ? "PATCH" : "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }

    const response = await fetch(url, options)

    if (response.status !== 201 && response.status !== 200) {
      const data = await response.json()
      alert(data.message)
  } else {
      updateCallback()
  }
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : <input type="text" id='userName' value={firstName} onChange={(e) => setUserName(e.target.value)} className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
      <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {
          currentState === 'Login'
          ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
          : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4 '>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>

    </form>
  )
}

export default Login
