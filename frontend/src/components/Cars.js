import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import Password from './Password';
import CreateCar from './CreateCar';
import UpdateCar from './UpdateCar';

export default class Cars extends React.Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 p-3">
              <h3 className='text-center'>XYZ-Cars</h3>
              <hr />
              <nav className="navbar navbar-expand-md">
                <ul className="navbar-list">
                  <li className="navbar-item">
                    <Link to="/home" className="navbar-link">
                      Home
                    </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/password" className="navbar-link">
                      Change Password
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-10 sag border-start p-3">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/password" element={<Password />} />
                <Route path="/add-car" element={<CreateCar />} />
                <Route path="/update-car/:id" element={<UpdateCar />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
