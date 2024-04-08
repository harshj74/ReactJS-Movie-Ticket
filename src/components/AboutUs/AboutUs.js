import React from 'react'
import logo from '../../img/MovieTicket.png'
import { Link } from 'react-router-dom'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='main'>
      <div className='innerdiv'>
        <img className='img' src={logo} alt="My Image" />
        <p className='text1'>MOVIE</p>
        <p className='text2'>TICKET</p>
        <div className='titles'>
          <Link to='/' className='text'>HOME</Link>
          <Link to='/about' className='text'>ABOUT US</Link>
        </div>
      </div>
      <div className="con">
        <div className="bttext">
          <div className="in">
            <p className='txt1'>WELCOME TO</p>
            <p className='txt2'>MOVIE TICKET !</p>
          </div>
          <p className='txt3'>Your ultimate destination for hassle-free and convenient movie ticket booking! We are dedicated to revolutionizing the way you experience entertainment by providing seamless access to the latest movies, showtimes, and ticket reservations, all in one user-friendly platform.</p>
          <p className='txt4'>Join the millions of movie enthusiasts who trust "Movie Ticket" for their entertainment needs. Whether you're planning a solo outing, a fun date night, or a memorable family excursion, we're here to enhance your cinematic experience and create unforgettable moments at the movies.</p>
          <p className='txt3'>Your ultimate destination for hassle-free and convenient movie ticket booking! We are dedicated to revolutionizing the way you experience entertainment by providing seamless access to the latest movies, showtimes, and ticket reservations, all in one user-friendly platform.</p>
          <p className='txt4'> - Movie Ticket Team 😊</p>
        </div>
        {/* <img className='imgs' src={mockup} alt="My Image" /> */}
      </div>
    </div>
  )
}

export default AboutUs
