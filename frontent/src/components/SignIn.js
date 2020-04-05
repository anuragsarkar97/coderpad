import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';
import { history } from '../history';
export default class SignIn extends Component {

  constructor(props){
    super(props);
  }


  onSuccess = response => {
    const z = response.accessToken;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Credentials' : 'true' },
      body: JSON.stringify({
        accessToken: response.accessToken,
        profile: response.profileObj,
        tokenId: response.tokenId,
      })
  };
  fetch('http://localhost:3009/login', requestOptions)
    .then(function (response) {
      debugger;
      console.log("success", response);
      localStorage.setItem("token", z);
      history.push("/home");
    })
    .catch(function (error) {
      console.log(error);
      history.push("/login");
    });
  };
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
