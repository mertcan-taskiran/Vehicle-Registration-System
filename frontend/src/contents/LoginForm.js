import * as React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: "login",
            firstName: "",
            lastName: "",
            login: "",
            password: "",
            showPassword: false,
            onLogin: props.onLogin,
            onRegister: props.onRegister
        };
    };

    onChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name] : value});
    };

    onSubmitLogin = (e) => {
        this.state.onLogin(e, this.state.login, this.state.password);
    };

    onSubmitRegister = (e) => {
        this.state.onRegister(e, this.state.firstName, this.state.lastName, this.state.login, this.state.password);
    };

    togglePasswordVisibility = () => {
      this.setState((prevState) => ({
        showPassword: !prevState.showPassword,
      }));
    };

    render() {
      return (
        <div className="row justify-content-center">
          <div className="col-4">
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
              <li className="nav-item" role="presentation">
                <button className={classNames("nav-link", this.state.active === "login" ? "active" : "")} id="tab-login"
                  onClick={() => this.setState({active: "login"})}>Login</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className={classNames("nav-link", this.state.active === "register" ? "active" : "")} id="tab-register"
                  onClick={() => this.setState({active: "register"})}>Register</button>
              </li>
            </ul>
            <div className='card p-4'>
              <h3 className='text-center fw-bold'>XYZ-Cars</h3>
              <p className='text-center'>{this.state.active === "login" ? "Please log in to continue" : "Sign Up"}</p>
              <div className="tab-content">
                <div className={classNames("tab-pane", "fade", this.state.active === "login" ? "show active" : "")} id="pills-login" >
                  <form onSubmit={this.onSubmitLogin}>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="loginName">Username</label>
                      <input type="login" id="loginName" name= "login" className="form-control" onChange={this.onChangeHandler}/>     
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="loginPassword">Password</label>
                      <div className="input-group">
                        <input type={this.state.showPassword ? "text" : "password"} id="loginPassword" name="password" className="form-control" onChange={this.onChangeHandler}/>
                        <button type="button" className="password-toggle-btn border border-0" onClick={this.togglePasswordVisibility}>
                          <FontAwesomeIcon icon={this.state.showPassword ? faEyeSlash : faEye} />
                        </button>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block w-100 mb-4">Log In</button>
                    <hr />
                    <div className='text-center' type="button" onClick={() => this.setState({ active: "register" })}>No account yet? Sign Up</div>
                  </form>
                </div>
                <div className={classNames("tab-pane", "fade", this.state.active === "register" ? "show active" : "")} id="pills-register" >
                  <form onSubmit={this.onSubmitRegister}>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="firstName">First name</label>
                      <input type="text" id="firstName" name="firstName" className="form-control" onChange={this.onChangeHandler}/>                 
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="lastName">Last name</label>
                      <input type="text" id="lastName" name="lastName" className="form-control" onChange={this.onChangeHandler}/>                    
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="login">Username</label>
                      <input type="text" id="login" name="login" className="form-control" onChange={this.onChangeHandler}/>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="registerPassword">Password</label>
                      <div className="input-group">
                        <input type={this.state.showPassword ? "text" : "password"} id="registerPassword" name="password" className="form-control" onChange={this.onChangeHandler}/>
                        <button type="button" className="password-toggle-btn border border-0" onClick={this.togglePasswordVisibility}>
                          <FontAwesomeIcon icon={this.state.showPassword ? faEyeSlash : faEye}/>
                        </button>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block w-100 mb-3">Sign Up</button>
                    <hr />
                    <div className='text-center' type="button" onClick={() => this.setState({ active: "login" })}>Have an account? Sign In</div>
                  </form>       
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

}