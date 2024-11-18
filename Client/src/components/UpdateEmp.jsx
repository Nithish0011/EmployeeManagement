import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { listContext } from '../App';



const UpdateEmp = () => {
  const { state } = useLocation();
  const { employee } = state; // Get the employee data from the state
  const { employeeList, setEmployeeList } = useContext(listContext);
  const [formData, setFormData] = useState(employee);
  const [error, setError ] =useState({email: '',mobile:''});
  const navigate = useNavigate();

  useEffect(() => {
    setFormData(employee); // Set form data when the component mounts
  }, [employee]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        courses: {
          ...prevData.courses,
          [name]: checked,
        },
      }));

      if (name == 'email') {
        const isDuplicateEmail = employeeList.some(emp => emp.email === value && emp.id !== formData.id);
        setError((prevError) => ({
            ...prevError,
            email: isDuplicateEmail ? 'Email already exists' : '',
        }))

    }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployeeList = employeeList.map(emp =>
      emp.id === formData.id ? formData : emp 
    );
    setEmployeeList(updatedEmployeeList);
    navigate('/EmployeeList'); 
  };

  return (
    <div className='container-fluid' 
        style = {{
        background: 'linear-gradient(to right,#FF5F6D ,#FFC371)', minHeight: '100vh'}}>
      <div className='row'>
        <div className='col-12'
            >
          <div className='card'
          style = {{
            backgroundColor: '#DAE0E2'}}>
            <div className='card-header'
               style = {{
                backgroundColor: '#74B9FF'}}>
              <h4 className='m-0'
               
              >Update Employee</h4>
            </div>
            <div className='card-body'>
              <form onSubmit={handleSubmit}>
                <div className='row row-gap-3'>
                  <div className='col-12'>
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className='form-control'
                      required
                    />
                  </div>
                  <div className='col-12'>
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className='form-control'
                      required
                    />
                  </div>
                  <div className='col-12'>
                    <label>Mobile</label>
                    <input
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className='form-control'
                      required
                    />
                  </div>
                  <div className='col-12'>
                    <label>Designation</label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      className='form-control'
                      required
                    />
                  </div>
                  <div className='col-12'>
                    <label>Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className='form-control'
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className='col-12'>
                    <label>Courses</label>
                    <div>
                      <input
                        type="checkbox"
                        name="BSC"
                        checked={formData.courses.BSC}
                        onChange={handleChange}
                      /> BSC
                      <input
                        type="checkbox"
                        name="MCA"
                        checked={formData.courses.MCA}
                        onChange={handleChange}
                      /> MCA
                      <input
                        type="checkbox"
                        name="BTech"
                        checked={formData.courses.BTech}
                        onChange={handleChange}
                      /> BTech
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 d-flex justify-content-end'>
                    <button type="submit" className='btn btn-primary mt-3'>Update</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      
    </div>
  </div>

);
};

export default UpdateEmp;