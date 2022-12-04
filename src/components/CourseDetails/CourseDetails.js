import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Single from '../Single/Single';


const CourseDetails = () => {
    const details = useLoaderData();
    console.log(details)

    return (
        <div className=' container detail-container mx-auto text-center mt-5'>
            <h2 className='fw-bold mb-4'>{details.name}</h2>
            <img className='w-25' src={details.img} alt="" />
            <p className='mt-4'>{details.details}</p>
            <p className='text-primary fw-bold'>Price : ${details.price}</p>
        </div>
    );
};

export default CourseDetails;