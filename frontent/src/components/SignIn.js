import React, { Component } from 'react'
import { GoogleLogin } from 'react-google-login';
export default class SignIn extends Component {

  constructor(props){
    super(props);
  }


  onSuccess = response => {
    console.log(response);
    const z = response.accessToken;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Credentials' : 'true',
     'access_token' :  response.accessToken,
     'token' : response.tokenId
    },
      body: JSON.stringify({
        profile: response.profileObj,
      })
  };
  localStorage.setItem("profile-photo", response.profileObj.imageUrl);
  // fetch('http://localhost:3005/login', requestOptions)
  fetch('http://192.168.0.103:3005/login', requestOptions)
    .then(() => {
      console.log("success", response);
      localStorage.setItem("token", z);
      this.props.history.push("/home");
    })
    .catch(() => {
      // console.log(error);
      // this.props.history.push("/login");
      this.props.history.push("/home");
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
