import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <>
    <div className='h-full w-full'>
      <h1 className='heading'>Your personal health companion</h1>
      <h1 className='sub'>AI-Powered Predictions, Real-time support <br /> and Personalized Care-AI at your fingertips</h1>
      <button className='but'>Get started</button>
    </div>
    <div className='second'>
      <h1>Welcome to MediLink</h1>
      <div class="card">
        <h2>Card Title</h2>
        <p>This is a sample card with a title and some text.</p>
        <button>Learn More</button>
      </div>
    </div>
    </>
  )
}

export default Hero
