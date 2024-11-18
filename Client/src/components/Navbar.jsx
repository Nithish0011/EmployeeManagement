import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../Assets/piggy.png'

const Navbar = () => {

    const location = useLocation();
    const username = location.state?.username || "HUKUM GUPTA";
    const navigate = useNavigate();

    const handleLogout = () => {
        // Implement your logout logic here
        // For example, clear user session or token
        navigate('/login'); // Redirect to login page after logout
    };
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" style={{ width: '30px', height: '30px' }} />
                        Kakatiyan
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/EmployeeList">Employee List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/CreateEmployee">Create Employee</Link>
                            </li>
                        </ul>
                        <span className="navbar-text me-3">
                            Welcome, {username}
                        </span>
                        <button className="btn btn-outline-danger" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Navbar