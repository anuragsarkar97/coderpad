import React, { Component } from 'react'
import GitHubLogin from 'react-github-login';
import { GithubLoginButton } from "react-social-login-buttons";
import { GoogleLogin } from 'react-google-login';

export default class SignIn extends Component {

  onSuccess = response => {
    console.log("success", response);
    localStorage.setItem("token", response.accessToken);
    this.props.history.push("/home");
  }
  onFailure = response => console.error("error", response);

  render() {
    return (
      <div style={{alignItems:'center'}}>
        <GoogleLogin
          clientId="799554132875-eeio89ohmbec9i7krc7psu5vc509t3v1.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  }
}
