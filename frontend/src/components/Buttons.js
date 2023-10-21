import React from 'react';

export default function Buttons(props) {
  return (
    <div className="row">
      <div className="col-md-12 text-center" style={{ marginTop: '30px' }}>
        {props.isLoggedIn ? (
          <button className="btn btn-dark" style={{ margin: '10px' }} onClick={props.logout}>
            Logout
          </button>
        ) : (
          <button className="btn btn-primary" style={{ margin: '10px' }} onClick={props.login}>
            Login
          </button>
        )}
      </div>
    </div>
  );
}