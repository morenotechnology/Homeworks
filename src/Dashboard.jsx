import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Menu</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Crud">CRUD</Link>
            </li>
            <li>
              <Link to="/DataComponent">Data Component</Link>
            </li>
            <li>
              <Link to="/Registro">Registro</Link>
            </li>
            <li>
              <Link to="/RealTimeMessages">Real-Time Chat</Link> 
            </li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Dashboard;
