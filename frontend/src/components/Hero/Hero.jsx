import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <>
    <div className='first'>
      <div className='overlay'>
        <h1 className='heading'>Your personal health companion</h1>
        <h1 className='sub'>AI-Powered Predictions, Real-time support <br /> and Personalized Care-AI at your fingertips</h1>
        <button className='but'>Get started</button>
      </div>
    </div>
    <div className='second'>
      <h1>Welcome to Medilink</h1>
    </div>
    <div class="card-grid">
      <div class="card">
        <img src="https://i.pinimg.com/236x/00/b2/99/00b2994822e2d5019f75bdf9629db20a.jpg" alt="" />
        <h1>Schedule Appointment with ease</h1>
        <p>Find and book appointments with healthcare providers directly from our platform. Our seamless scheduling system ensures you get the care you need without the hassle</p>
        <button>Visit</button>
      </div>
      <div class="card">
        <img src="https://i.pinimg.com/236x/99/6b/a7/996ba7b6b7cf76d479e90690e1c30a01.jpg" alt="" />
        <h1>Medication Reminder</h1>
        <p>Forgetting to take medicines on time? Set up a system that sends reminders to you to take your medication on time to keep you healthy and close to loved ones</p>
        <button>Visit</button>
      </div>
      <div class="card">
        <img src="https://i.pinimg.com/236x/99/6b/a7/996ba7b6b7cf76d479e90690e1c30a01.jpg" alt="" />
        <h1>Community Support Forum</h1>
        <p>A community support forum provides a platform for users to ask questions and get answers from experienced community members. This allows users to tap into the collective knowledge and expertise of the community, getting help and guidance from those who have faced similar challenges or have specialized knowledge.</p>
        <button>Visit</button>
      </div>
      <div class="card">Card 4</div>
    </div>
    <div className='third'>
      <h3>New Feature</h3>
      <h2>Virtual Health Assistant</h2>
      <p>Introducing your personal health companion! 
        <br />Our virtual health assistant is designed 
        <br />to provide you with personalized health guidance 
        <br />and support, whenever and wherever you need it. 
        <br />With our cutting-edge technology, you'll have access 
        <br />to a wealth of health information, tailored to your unique needs 
        <br />and goals. From tracking your vital signs to offering expert advice, 
        <br />our virtual health assistant is the perfect tool to help you take control 
        <br />of your health and wellbeing.</p>
    </div>

    </>
  )
}

export default Hero
