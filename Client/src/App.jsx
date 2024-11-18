import React,{createContext , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup'; 
import Login from './components/Login';   
import Dashboard from './components/Dashboard';
import CreateEmployee from './components/CreateEmployee';
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';
import UpdateEmp from './components/UpdateEmp';


export const listContext = createContext();

const App = () =>  {
  const [employeeList, setEmployeeList] = useState([]);

    return (

      <listContext.Provider value={{ employeeList, setEmployeeList }} >
        <BrowserRouter 
          future={{
            v7_startTransition: true,
        }}>
          <Navbar/>
            <Routes>
                
                <Route path="/register" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/CreateEmployee" element={<CreateEmployee/>}/>
                <Route path="/EmployeeList" element={<EmployeeList/>}/>
                <Route path="/UpdateEmp" element={<UpdateEmp/>}/>

            </Routes>
        </BrowserRouter>


      </listContext.Provider>
        
    );
};

export default App;