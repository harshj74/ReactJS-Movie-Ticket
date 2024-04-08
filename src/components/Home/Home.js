import React from 'react'
import './Home.css'
import logo from '../../img/MovieTicket.png'
import mockup from '../../img/mockup.png'
import { Link } from 'react-router-dom'

const Home = () => {
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
            <div className="content">
                <div className="boldtext">
                    <p className='innertext1'>THE EASIEST WAY TO BOOK</p>
                    <p className='innertext2'>MOVIE TICKETS</p>
                    <p className='innertext3'>buy movie tickets in advance, find movie times, watch trailers, read movie reviews and much more...</p>
                </div>
                <img className='imgs' src={mockup} alt="My Image" />
            </div>
        </div>
    )
}

export default Home
