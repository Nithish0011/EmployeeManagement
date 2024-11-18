import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {listContext} from '../App'

const CreateEmployee = () => {

  const { employeeList, setEmployeeList} = useContext(listContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    courses: {
      BSC: false,
      MCA: false,
      BTECH: false,
    },
    image: null,
  });

  const [submittedData, setSubmittedData] = useState(null);
  const navigate = useNavigate();

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
    } else if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        image: e.target.files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { 
      ...formData, 
      id: employeeList.length + 1,
      createDate : new Date().toLocaleString()
    }; 
    setEmployeeList((prevList) => [...prevList, newEmployee]);
    setSubmittedData(newEmployee);
    console.log('Form Data Submitted:', newEmployee);
  
    navigate('/EmployeeList'); // Navigate to EmployeeList
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <div className='card'>
            <div className='card-header'>
              <h4 className='m-0'>Create Employee</h4>
            </div>
            <div className='card-body'>
              <form onSubmit={handleSubmit}>
                <div className='row row-gap-3'>
                  <div className='col-3'>
                    <label htmlFor="name" className='font-size-13'>Employee Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Employee Name"
                      className='form-control'
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='col-3'>
                    <label htmlFor="email" className='font-size-13'>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className='form-control'
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='col-3'>
                    <label htmlFor="mobile" className='font-size-13'>Mobile</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      placeholder="Contact Number"
                      className='form-control'
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className='col-3'>
                    <label htmlFor="designation" className='font-size-13'>Designation</label>
                    <select
                      id="designation"
                      name="designation"
                      className='form-control'
                      value={formData.designation}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="HR">HR</option>
                      <option value="Manager">Manager</option>
                      <option value="Associate">Associate</option>
                    </select>
                  </div>
                  <div className='col-3'>
                    <label htmlFor="gender" className='font-size-13'>Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      className='form-control'
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      
                    </select>
                  </div>
                  
                  <div className='col-3'>
                    <label className='font-size-13'>Courses</label>
                    <div>
                      <label>
                        <input
                          type="checkbox"
                          name="BSC"
                          checked={formData.courses.BSC}
                          onChange={handleChange}
                        /> BSC
                      </label>
                      <label className='ms-3'>
                        <input
                          type="checkbox"
                          name="MCA"
                          checked={formData.courses.MCA}
                          onChange={handleChange}
                        /> MCA
                      </label>
                      < label className='ms-3'>
                        <input
                          type="checkbox"
                          name="BTECH"
                          checked={formData.courses.BTECH}
                          onChange={handleChange}
                        /> BTECH
                      </label>
                    </div>
                  </div>
                  <div className='mb-3'>
                    <label>Image Upload: </label>
                    <input type="file" name="image" onChange={handleChange} accept="image/*" />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 d-flex justify-content-end'>
                  <button type="submit" className='btn btn-primary mt-3'>Submit</button>
                  </div>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
      {submittedData && (
        <div className='row mt-5'>
          <div className='col-12'>
            <div className='card'>
              <div className='card-header'>
                <h4 className='m-0'>Submitted Employee Data</h4>
              </div>
              <div className='card-body'>
                <h5>Employee Name: {submittedData.name}</h5>
                <h5>Email: {submittedData.email}</h5>
                <h5>Mobile: {submittedData.mobile}</h5>
                <h5>Designation: {submittedData.designation}</h5>
                <h5>Gender: {submittedData.gender}</h5>
                <h5>Courses:</h5>
                <ul>
                  {submittedData.courses.BSC && <li>BSC</li>}
                  {submittedData.courses.MCA && <li>MCA</li>}
                  {submittedData.courses.BTECH && <li>BTECH</li>}
                </ul>
                {submittedData.image && (
                  <div>
                    <h5>Uploaded Image:</h5>
                    <img src={URL.createObjectURL(submittedData.image)} alt="Uploaded" style={{ width: '200px', height: 'auto' }} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateEmployee;