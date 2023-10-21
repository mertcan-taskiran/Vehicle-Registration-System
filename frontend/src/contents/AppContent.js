import * as React from 'react';
import { request, setAuthHeader } from '../helpers/axios_helper';
import Buttons from '../components/Buttons';
import LoginForm from './LoginForm';
import WelcomeContent from './WelcomeContent'
import Cars from '../components/Cars'

export default class AppContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            componentToShow: "welcome",
            isLoggedIn: false,
        }
    };

    login = () => {
        this.setState({componentToShow: "login"})
    };

    logout = () => {
        this.setState({componentToShow: "welcome"})
        setAuthHeader(null);
        this.setState({ isLoggedIn: false });
    };

    onLogin = (e, username, password) => {
        e.preventDefault();
        request(
            "POST",
            "/login",
            {
                login: username,
                password: password
            }).then(
            (response) => {
                setAuthHeader(response.data.token);
                this.setState({ componentToShow: "cars", isLoggedIn: true });
            }).catch(
            (error) => {
                setAuthHeader(null);
                this.setState({ componentToShow: "welcome", isLoggedIn: false });
            }
        );
    };

    onRegister = (event, firstName, lastName, username, password) => {
        event.preventDefault();
        request(
            "POST",
            "/register",
            {
                firstName: firstName,
                lastName: lastName,
                login: username,
                password: password
            }).then(
            (response) => {
                setAuthHeader(response.data.token);
                this.setState({ componentToShow: "cars", isLoggedIn: true });
            }).catch(
            (error) => {
                setAuthHeader(null);
                this.setState({ componentToShow: "welcome", isLoggedIn: false });
            }
        );
    };

    render() {
        return (
            <>
                <Buttons login={this.login} logout={this.logout} isLoggedIn={this.state.isLoggedIn} />
                {this.state.componentToShow === "welcome" && <WelcomeContent />}
                {this.state.componentToShow === "login" && <LoginForm onLogin={this.onLogin} onRegister={this.onRegister} username={this.state.username} />}
                {this.state.componentToShow === "cars" && <Cars />}
            </>
        );
    };
}