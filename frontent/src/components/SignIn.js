import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Row, Col,Card, Button } from 'antd';
//import Card from 'antd';
import TopImage from './assets/undraw_programming_2svr.svg';
import DsaImage from './assets/undraw_software_engineer_lvl5.svg';
import WebDevImage from './assets/undraw_web_developer_p3e5.svg';
import MobileAppImage from './assets/undraw_Mobile_application_mr4r.svg';
import MLImage from './assets/undraw_Artificial_intelligence_oyxx.svg';
import MSLogo from './assets/mslogo.svg';
import AmazonLogo from './assets/amazonsvglogo.svg'
import OyoLogo from './assets/oyosvglogo.svg'
import GoogleLogo from './assets/googlesvglogo.svg'
import DeshawLogo from './assets/deshawsvglogo.svg'
import AppleLogo from './assets/applesvglogo.svg'
import FedexLogo from './assets/fedxsvglogo.svg'
import ReactRotatingText from 'react-rotating-text'
import Image from 'react-image-resizer';
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
  fetch('http://192.168.0.103:3005/login', requestOptions)
    .then(() => {
      localStorage.setItem("token", z);
      this.props.history.push("/home");
    })
    .catch(() => {
      this.props.history.push("/login");
      // this.props.history.push("/home");
    });
  };
  onFailure = response => console.error("error", response);

  render() {
    return (
    
     // <div style={{marginLeft : '30%', marginRight : '30%', marginTop : '20%', textAlign : 'center'}}>
        /*{ <Card style={{marginLeft : '30%', marginRight : '30%', marginTop : '20%', textAlign : 'center'}}> }*/
        /*<GoogleLogin
          clientId="799554132875-eeio89ohmbec9i7krc7psu5vc509t3v1.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          cookiePolicy={'single_host_origin'}
        />*/
        /*{ </Card> }*/
     // </div>
     <div>
      {/* //  <div style = {{marginLeft : '30%', marginRight : '30%', marginTop : '20%', textAlign : 'center', height : '200%'}}>
      //    <div class = 'introText' style={{fontFamily: 'Oswald, sans-serif;', fontWeight:'bold', fontSize:'30px'}}>
      //       Welcome to the competition !
      //    </div> */}
         <Row>
          <Col span={24} style={{backgroundImage:'linear-gradient(to right, #9147FF, #BE40FF,#D441FD'}}>
            <div class='introText' style={{fontFamily:'Oswald, sans-serif;', fontWeight:'bold', marginTop:'10%', textAlign:'center',
          fontSize:'40px', color:'white'}}>
              Learn 
              <ReactRotatingText items={[' Data Structures & Algorithms', ' Web Development', ' Mobile App Development']}/>
            </div>
            <div class='summary' style={{fontFamily:'Manrope, sans-serif', marginTop:'1%', textAlign:'center', fontSize:'20px'
          ,color:'white'}}>
              Coding is not difficult if taught in a fun manner !
            </div>
            <div class='btn1' style={{marginTop:'10%', marginBottom:'5%', textAlign:'center'}}>
              <Button color="95389e" size="sm">
                Join us !
              </Button>{' '}
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
           <div class='courseTitle' style={{fontFamily:'Oswald, sans-serif;', fontWeight:'bold',fontSize:'20px', marginTop:'1%',marginBottom:'1%',
                    display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
            What do we offer ?
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={6} >
          <div class ='dsaImage' style={{marginLeft:'10%', marginRight:'10%'}}>
            <Card style={{width:'100%',border:"2px solid #BE40FF", marginBottom:'10px'}}>
              < img src={DsaImage} height='70%' width='90%' class ='center'/>
              <p class='dsaHeader' style={{marginLeft:'10%', marginRight:'10%', fontFamily:'Oswald, sans-serif;',
              fontWeight:'bold', fontSize:'10px',marginTop:'10%', display:'block'}}>
              DS & ALGORITHMS
              </p>
              <p class='dsaSummary'>
                We'll cover the fundamentals topics like Arrays,Linked Lists, Stacks & Queues, Trees
                & many more to skyrocket your chances of getting desriable job interviews.
              </p>
            </Card>    
          </div>
        
          </Col>
          <Col span={6}>
          
            <div class='webDevImage' style={{marginLeft:'10%', marginRight:'10%'}}>
            <Card style={{width:'100%',border:"2px solid #BE40FF", marginBottom:'10px'}}>
              <img src = {WebDevImage} height='60%' width='90%' class='center'/>
              <p class='webDevHeader' style={{marginLeft:'10%', marginRight:'10%', fontFamily:'Oswald, sans-serif;',
              fontWeight:'bold', fontSize:'10px', marginTop:'10%', display:'block'}}>
              WEB DEVELOPMENT
              </p>
              <p class='webDevSummary'>
                A long, long, long paragraph about all the ins and outs of Full Stack Engineering. A long, long, long paragraph about all the ins and outs of Full Stack Engineering.
              </p>
              </Card>
            </div>
          </Col>
          <Col span={6}>
            <div class='mobileAppImage' style={{marginLeft:'10%', marginRight:'10%'}}>
            <Card style={{width:'100%',border:"2px solid #BE40FF", marginBottom:'10px'}}>
            <img src = {MobileAppImage} height='60%' width='90%'/>
            <p class='appDevHeader' style={{marginLeft:'10%', marginRight:'10%', fontFamily:'Oswald, sans-serif;',
              fontWeight:'bold', fontSize:'10px', marginTop:'13%', display:'block'}}>
              MOBILE APP DEVELOPMENT
              </p>
              <p class='appDevSummary'>
                A long, long, long paragraph about all the ins and outs of Mobile App Engineering.
                A long, long, long paragraph about all the ins and outs of Mobile App Engineering.
              </p>
              </Card>
            </div>
          </Col>
          <Col span={6}>
          <div class='mlImage' style={{marginLeft:'10%', marginRight:'10%'}}>
          <Card style={{width:'100%',border:"2px solid #BE40FF", marginBottom:'10px'}}>
            <img src = {MLImage} height='40%' width='90%'/>
            <p class='mlHeader' style={{marginLeft:'10%', marginRight:'10%', fontFamily:'Oswald, sans-serif;',
              fontWeight:'bold', fontSize:'10px',marginTop:'10%', display:'block',align:'center'}}>
              MACHINE LEARNING
              </p>
              <p class='mlSummary'>
                A long, long, long paragraph about all the ins and outs of Machine Learning. A long, long, long paragraph about all the ins and outs of Machine Learning.
              </p>
              </Card>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
          <div class='instructorsHeader' style={{fontFamily:'Manrope, sans-serif;',
            textAlign:'center', color:'#646965', fontSize:'25px', marginTop:'2%'}}>
              Instructors from companies like....
            </div>
          </Col>
        </Row>
        <Row style={{backgroundColor:'white', color:'grey'}}>
          <Col span={8}>
            <div class='MicrosoftLogo' style={{marginLeft:'10%',marginRight:'10%',marginTop:'20%'}}>
              <img src={MSLogo} width='90%' height='90%'>

              </img>
            </div>
            <div class='GoogleLogo' style={{marginLeft:'10%',marginRight:'10%',marginTop:'20%'}}>
              <img src={GoogleLogo} width='90%' height='90%'>

              </img>
            </div>
          </Col>
          <Col span={8}>
            <div class='AmazonLogo' style={{marginLeft:'5%',marginRight:'5%', marginTop:"15%"}}>
              <img src={AmazonLogo} width='90%' height='90%'>
              </img>
            </div>
            <div class='FedexLogo' style={{marginLeft:'24%',marginRight:'5%', marginTop:"20%"}}>
              <img src={FedexLogo} width='60%' height='60%'>
              </img>
            </div>
          </Col>
          <Col span={8}>
          <div class='OyoLogo' style={{marginLeft:'5%',marginRight:'5%',marginTop:'10%'}}>
              <img src={OyoLogo} width='90%' height='90%'>
              </img>
            </div>
            <div class='AppleLogo' style={{marginLeft:'35%',marginRight:'5%',marginTop:'7%'}}>
              <img src={AppleLogo} width='50%' height='50%'>
              </img>
            </div>
          </Col>
        </Row>
       </div>

    )
  }
}
