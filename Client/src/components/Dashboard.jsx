import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Admin DashBoard</h1>
        <p>Your journey starts here!</p>
        
      </header>
      <main>
        <section>
          <h2>About Project</h2>
          <p>The Employee Management System is a web application designed to manage <br />employee records, including registration, authentication, and data storage. <br /> The application leverages a Node.js backend with Express for API development <br />and MongoDB for data storage. The frontend can be developed <br /> using React (or any other framework) to create a user-friendly interface..</p>
        </section>
        <section>
          <h2>Features</h2>
          <p>User Registration:</p>
          <p>User Authentication:</p>
          <p>Secure Password Storage:</p>
          <p>Error Handling:</p>
          <p>CORS Support:Allows the frontend to communicate with the backend from different origins.</p>
          <p></p>
        </section>
        
      </main>
    </div>
        
    
  )
}

export default Dashboard