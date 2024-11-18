 import React, { useState,useContext } from 'react'
 import { NavLink, useNavigate } from 'react-router-dom'
 import { listContext} from '../App'
 
 const EmployeeList = () => {
  const [searchTerm, setSearchterm] = useState('')

  const { employeeList, setEmployeeList} = useContext(listContext)
  const navigate = useNavigate();
  const handleDelete = (id) => {
    setEmployeeList((prevList) => prevList.filter(employee => employee.id !== id));
  };

  const handleEdit = (employee) => {
    navigate('/UpdateEmp', { state: { employee}});
  }

  const filteredEmployees = employeeList.filter(employee => 
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

   return (
     <div className='container-fluid'>
      <div className='row mt-4'>
        <div className='col-12 px-4'>
          <div className='card'>
            <div className='card-header '>
              <div className='d-flex justify-content-between align-item-center'>
                <h4 className='m-0'>EmployeeList</h4>
                <NavLink to="/CreateEmployee" className='btn btn-primary'>Create New</NavLink>
              </div>
              <div>
                <input 
                  type="text"
                  placeholder='search by Name or Email' 
                  value={searchTerm}
                  onChange={(e) => setSearchterm(e.target.value)}
                  className='form-control'
                  style={{ width: '300px', display: 'inline-block'}}
                  />
                  <span className='ms-3'>Total Employees: {filteredEmployees.length}</span>
              </div>
            </div>  
                

  <table className="table table-striped">
  <caption>List of Employees</caption>
  <thead>
    <tr>
      <th scope="col">Unique Id</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Designation</th>
      <th scope="col">Gender</th>
      <th scope="col">course</th>
      <th scope="col">create Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {filteredEmployees.map((employee) => (
      <tr key={employee.id}>
        <th scope="row">{employee.id}</th>
        <td>{employee.image && <img src={URL.createObjectURL(employee.image)} alt="uploaded" style={{width:'50px', height: 'auto'}}/>}</td>
        <td>{employee.name}</td>
        <td>{employee.email}</td>
        <td>{employee.mobile}</td>
        <td>{employee.designation}</td>
        <td>{employee.gender}</td>

        <td>
          {employee.courses.BSC && <span>BSC</span>}
          {employee.courses.MCA && <span>MCA</span>}
          {employee.courses.BTECH && <span>BTech</span>}

        </td>
        <td>{employee.createDate}</td>
        <td>
          <button
            onClick={() => handleEdit(employee)} className='btn btn-warning btn-sm'
          >Edit</button>
          <button
            onClick={() => handleDelete(employee.id)} className='btn btn-danger btn-sm ms-2'
          >Delete</button>
        </td>

      </tr>

    ))}
    {/* <tr> */}
      {/* <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td> */}
    {/* </tr> */}
  </tbody>
</table>
            </div>
            <div className='card-body'></div>
          </div>
        </div>
      </div>
     
   )
 }
 
 export default EmployeeList