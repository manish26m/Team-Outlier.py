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
      <div className='grid'>
        <div class="card1">
          <h2>Schedule appointments with ease</h2>
          <p>Find and book appointments with healthcare providets directly from our platform</p>
          <button>Learn More</button>
        </div>
      <div class="card2">
        <h2>Medication Reminder</h2>
        <p>Remember to take your medicines</p>
        <button>Learn More</button>
      </div>

      </div>
    </div>
    </>
  )
}

export default Hero
