import React , {useState} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function Signup  ()  {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name || !email || !password) {
      setError('All fields are required.')
      return;
    }
    axios.post('http://localhost:3001/register', {name, email, password})
    .then(result => {
      console.log(result);
      setSuccess('Registration sucessful! Redirecting to login..');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    
    })
    .catch(err => {
      console.log(err);
      setError('Regristration failed. please try again')
    });  
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded  w-25'>
        <h2>Register</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="Name">
              <strong>Name: </strong>
            </label>
            <input 
              type="text"
              placeholder='Enter Name'
              autoComplete = "off"
              name = "name"
              className='form-control rounded-0'
              onChange={(e) => setName(e.target.value)}
              />
          </div>
          <div className='mb-3'>
            <label htmlFor="Email">
              <strong>Email: </strong>
            </label>
            <input 
              type="email"
              placeholder='Enter Email'
              autoComplete = "off"
              name = "email"
              className='form-control rounded-0'
              onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className='mb-3'>
            <label htmlFor="password">
              <strong>password: </strong>
            </label>
            <input 
              type="password"
              placeholder='Enter password'
              autoComplete = "off"
              name = "password"
              className='form-control rounded-0'
              onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <button type='submit' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Register</button>
      </form>  
          <p>Already Have an Account</p>
          <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
            Login
          </Link>
        
      </div>
    </div>
  )
}

export default Signup;