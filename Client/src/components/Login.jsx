import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Define an array of allowed email and password combinations
    const allowedCredentials = [
        { email: 'nithish@gmail.com', password: 'password1',username:"Nithish" },
        { email: 'arif@gmail.com', password: 'password2' },
        { email: 'nick@gmail.com', password: 'password3' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Check if the entered credentials match any in the allowedCredentials array
        const user  = allowedCredentials.find(
            (credential) => credential.email === email && credential.password === password
        );

        if (user ) {
            // Redirect to a protected route or dashboard
            navigate('/dashboard', { state: { state: {username: user.username || "Guest"}}}); // Change this to your desired route
        } else {
            setError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email">
                            <strong>Email: </strong>
                        </label>
                        <input 
                            type="email"
                            placeholder='Enter Email'
                            autoComplete="off"
                            name="email"
                            className='form-control rounded-0'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">
                            <strong>Password: </strong>
                        </label>
                        <input 
                            type="password"
                            placeholder='Enter Password'
                            autoComplete="off"
                            name="password"
                            className='form-control rounded-0'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-default border w-100 bg-light rounded-0'>
                        Login
                    </button>
                </form>
                <p className='mt-3'>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;