import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';
import {Card} from 'antd';

export default class SignIn extends Component {

  onSuccess = response => {
    console.log("success", response);
    localStorage.setItem("token", response.accessToken);
    this.props.history.push("/home");
  }
  onFailure = response => console.error("error", response);

  render() {
    return (
      <div style={{marginLeft : '30%', marginRight : '30%', marginTop : '20%', textAlign : 'center'}}>
        {/* <Card style={{marginLeft : '30%', marginRight : '30%', marginTop : '20%', textAlign : 'center'}}> */}
        <GoogleLogin
          clientId="799554132875-eeio89ohmbec9i7krc7psu5vc509t3v1.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          cookiePolicy={'single_host_origin'}
        />
        {/* </Card> */}
      </div>
    )
  }
}
