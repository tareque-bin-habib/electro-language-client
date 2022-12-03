import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className='form-container'>
            <h5 className='text-center mt-5 fw-bold form-title'>Please Register</h5>
            <Form className='d-flex justify-content-center align-items-center mt-5'>
                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='w-100' type="email" name='email' placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='w-100' type="password" name='password' placeholder="Enter Your password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm password!</Form.Label>
                        <Form.Control className='w-100' type="password" name='confirm' placeholder="Confirm your Password" />
                    </Form.Group>
                    <div>
                        <p>Already have an account? <Link to='/login'>login</Link> </p>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </div>
            </Form>
            <div className='d-flex justify-content-center mt-3'>

            </div>
        </div>
    );
};

export default Register;