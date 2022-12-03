import React from 'react';
import Button from 'react-bootstrap/Button';
import img from '../../image/banner.png'
import './Home.css'

const Home = () => {
    return (
        <div className='container mx-auto row row-cols-lg-2 row-cols-md-2 row-cols-sm-1'>
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                    <p className='fw-bold discover'>Discover your journey</p>
                    <h1 className='banner-heading'>Discover <span className='number'>4500+</span> Courses <br />
                        from top Instructors
                        <br />
                        Around the world
                    </h1>
                    <p className='banner-pera'>Take your learning organization to the next level.Who'll share their <br />
                        knowledge to people around the world
                    </p>
                    <Button variant="primary" className='mt-3 ' size="lg">view all courses</Button>
                </div>
            </div>
            <div >
                <img src={img} alt="" className='img-fluid' />
            </div>
        </div>
    );
};

export default Home;