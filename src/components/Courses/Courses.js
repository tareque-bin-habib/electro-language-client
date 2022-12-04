import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const products = useLoaderData();
    // console.log(products)
    return (
        <div className='course-container'>
            <div className='left-side-container'>
                <h1>left</h1>
            </div>
            <div className='products-container'>
                {
                    products.map(product => <Course key={product.id} product={product}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;