import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Password extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oldPassword: '',
      newPassword: '',
      newPasswordConfirm: '',
      error: null,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSaveClick = () => {
    const { oldPassword, newPassword, newPasswordConfirm } = this.state;
    const { username } = this.props;

    if (newPassword !== newPasswordConfirm) {
        // console.log("Şifreler eşleşmiyor.");
        this.setState({ error: 'Passwords do not match.' });
    } else {
        this.setState({ error: null });
        const changePasswordRequest = {
            username: username,
            oldPassword: oldPassword,
            newPassword: newPassword,
        };

        axios.post("http://localhost:8080/api/change-password", changePasswordRequest)
            .then(response => {
              console.log("Şifre başarıyla değiştirildi.")
            })
            .catch(error => {
              this.setState({ error: 'An error occurred while changing the password.' });
            });
    }
  }

  render() {
    const { oldPassword, newPassword, newPasswordConfirm, error } = this.state;

    return (
      <div>
        <h3>Change Password</h3>
        <hr />
        <div className='container'>
          <form>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <div className="form-group">
              <label htmlFor="oldPassword" className='mt-3'>Old Password</label>
              <input
                type="password"
                name="oldPassword"
                value={oldPassword}
                onChange={this.handleInputChange}
                placeholder='Old Password'
                className="form-control border border-top-0 border-end-0 border-start-0 bg-transparent"
                id="oldPassword"
              />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword" className='mt-3'>New Password</label>
              <input
                type="password"
                name="newPassword"
                value={newPassword}
                onChange={this.handleInputChange}
                placeholder='New Password'
                className="form-control border border-top-0 border-end-0 border-start-0 bg-transparent"
                id="newPassword"
              />
            </div>
            <div className="form-group">
              <label htmlFor="newPasswordConfirm" className='mt-3'>Confirm New Password</label>
              <input
                type="password"
                name="newPasswordConfirm"
                value={newPasswordConfirm}
                onChange={this.handleInputChange}
                placeholder='Confirm New Password'
                className="form-control border border-top-0 border-end-0 border-start-0 bg-transparent"
                id="newPasswordConfirm"
              />
            </div>
            <div className="text-end mt-3">
              <Link to="/home" type="button" className="btn btn-secondary me-3">
                Cancel
              </Link>
              <button type="button" className="btn btn-primary" onClick={this.handleSaveClick}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Password;
