import React, {Component} from 'react';
import {GoogleLogin} from 'react-google-login';
import {Row, Col, Card, Button, Affix} from 'antd';
import './signInStyles.css';
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
import fblog from './assets/fblogo.svg'
import instalogo from './assets/instagram-2016.svg'
import Footer from 'rc-footer';
export default class SignIn extends Component {

    constructor(props) {
        super(props);
    }

    onSuccess = response => {
        console.log(response);
        const z = response.accessToken;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true',
                'access_token': response.accessToken,
                'token': response.tokenId
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
                    <Col span={24} style={{backgroundImage: 'linear-gradient(to right,#a680c2,#844db8, #6042f5, #844db8,#a680c2'}}>
                        <div class='introText' style={{
                            //fontFamily: 'Roboto',
                            fontFamily:'Anton, sans-serif',
                            fontWeight: 'bold',
                            marginTop: '10%',
                            textAlign: 'center',
                            fontSize: '3vw',
                            color: 'white'
                        }}>
                            Learn
                            <ReactRotatingText
                                items={[' Data Structures & Algorithms', ' Web Development', ' Mobile App Development']}/>
                        </div>
                        <div class='summary' style={{
                            fontFamily: 'Raleway, sans-serif', marginTop: '1%', textAlign: 'center', fontSize: '2vw'
                            , color: 'white', fontWeight: '500'
                        }}>
                            Let's explore these in-demand subjects together !
                        </div>
                        <div className="xv" style={{textAlign: 'center',fontFamily:'Abel,sans-serif'}}>
                            <Button style={{
                                backgroundColor: "white",
                                marginTop: '2%',
                                marginBottom: '5%',
                                marginRight : '1%',
                                textAlign: 'center',
                                color: '#6042f5',
                                fontSize: "100%",
                                borderRadius: 0,
                                fontWeight: "bold",
                                height: "-10vh",
                                width: "13vh"
                            }}
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSd1jaFmg5BDjixB8CEUCzt3WLUmJTZzg6kv3dRZ-ST-2pmaxw/viewform">
                            Join us !
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div class='courseTitle' style={{
                            fontFamily: 'Raleway, sans-serif',
                           // fontWeight: 'bold',
                            fontSize: '2vw',
                            marginTop: '1%',
                            marginBottom: '1%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            What do we offer ?
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <div class='dsaImage' style={{marginLeft: '10%', marginRight: '5%'}}>
                            <Card style={{width: '100%', border: "0.1vw solid #5b2c8a", marginBottom: '10px',boxShadow:'0.4vw 0.4vw 0.4vw #5b2c8a'}}>
                                < img src={DsaImage} height='70%' width='90%' class='center'/>
                                <p class='dsaHeader' style={{
                                    marginLeft: '10%', marginRight: '10%', fontFamily: 'Raleway, sans-serif',
                                    fontWeight: 'bold', fontSize: '2vw', marginTop: '10%', display: 'block'
                                }}>
                                    DS & ALGORITHMS 
                                </p>
                                <p class='dsaSummary' style={{fontSize: '1.1vw',marginBottom:'1.7vw'}}>
                                    We'll cover the fundamentals topics like Arrays,Linked Lists, Stacks & Queues, Trees
                                    & many more to skyrocket your chances of cracking interviews of your dream companies.
                                </p>
                            </Card>
                        </div>

                    </Col>
                    <Col span={6}>

                        <div class='webDevImage' style={{marginLeft: '5%', marginRight: '5%'}}>
                            <Card style={{width: '100%', border: "0.1vw solid #5b2c8a", marginBottom: '10px',boxShadow:'0.4vw 0.4vw 0.4vw #5b2c8a'}}>
                                <img src={WebDevImage} height='60%' width='90%' class='center'/>
                                <p class='webDevHeader' style={{
                                    marginLeft: '10%', marginRight: '10%', fontFamily: 'Raleway, sans-serif',
                                    fontWeight: 'bold', fontSize: '2vw', marginTop: '10%', display: 'block'
                                }}>
                                    WEB DEVELOPMENT
                                </p>
                                <p class='webDevSummary' style={{fontSize: '1.1vw', marginBottom:'2.7vw'}}>
                                    Learn about full stack development to develop both client and server software. Deploy
                                    your webapp  and learn how to maintain scalability & performance.
                                </p>
                            </Card>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div class='mobileAppImage' style={{marginLeft: '5%', marginRight: '5%'}}>
                            <Card style={{width: '100%', border: "0.1vw solid #5b2c8a", marginBottom: '10px',boxShadow:'0.4vw 0.4vw 0.4vw #5b2c8a'}}>
                                <img src={MobileAppImage} height='60%' width='90%'/>
                                <p class='appDevHeader' style={{
                                    marginLeft: '10%', marginRight: '10%', fontFamily: 'Raleway, sans-serif',
                                    fontWeight: 'bold', fontSize: '2vw', marginTop: '13%', display: 'block'
                                }}>
                                    MOBILE APP DEVELOPMENT
                                </p>
                                <p class='appDevSummary' style={{fontSize: '1.1vw'}}>
                                    Learn to develop cool mobile applications which gives you control over both the phone’s
                                    controls and the devices they interface with. Deploy on PlayStore/AppStore and brag about it.
                                </p>
                            </Card>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div class='mlImage' style={{marginLeft: '5%', marginRight: '10%'}}>
                            <Card style={{width: '100%', border: "0.1vw solid #5b2c8a", marginBottom: '10px',boxShadow:'0.4vw 0.4vw 0.4vw #5b2c8a'}}>
                                <img src={MLImage} height='40%' width='90%'/>
                                <p class='mlHeader' style={{
                                    marginLeft: '10%',
                                    marginRight: '10%',
                                    fontFamily: 'Raleway, sans-serif',
                                    fontWeight: 'bold',
                                    fontSize: '2vw',
                                    marginTop: '10%',
                                    display: 'block',
                                    align: 'center'
                                }}>
                                    MACHINE LEARNING
                                </p>
                                <p class='mlSummary' style={{fontSize: '1.1vw', marginBottom:'1.4vw'}}>
                                    Machine Learning is the buzzword. But seriously, how well do you know about the ins & 
                                    outs of this topic ? We got you covered. Learn how the exisiting algorithms actually work.
                                </p>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div class='instructorsHeader' style={{
                            fontFamily: 'Raleway, sans-serif',
                            textAlign: 'center', color: '#646965', fontSize: '2vw', marginTop: '4%'
                        }}>
                            Experienced Instructors from
                        </div>
                    </Col>
                </Row>
                <Row style={{backgroundColor: 'white', color: 'grey'}}>
                    <Col span={8}>
                        <div class='MicrosoftLogo' style={{marginLeft: '70%', marginRight: '0%', marginTop: '20%'}}>
                            <img src={MSLogo} width='60%' height='60%'>

                            </img>
                        </div>
                        <div class='GoogleLogo' style={{marginLeft: '70%', marginTop: '20%'}}>
                            <img src={GoogleLogo} width='60%' height='60%'>

                            </img>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div class='AmazonLogo' style={{marginLeft: '34%', marginTop: "17%"}}>
                            <img src={AmazonLogo} width='50%' height='50%'>
                            </img>
                        </div>
                        <div class='FedexLogo' style={{marginLeft: '42%', marginTop: "18%"}}>
                            <img src={FedexLogo} width='30%' height='30%'>
                            </img>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div class='OyoLogo' style={{marginRight: '45%', marginTop: '16%'}}>
                            <img src={OyoLogo} width='40%' height='40%'>
                            </img>
                        </div>
                        <div class='AppleLogo' style={{marginLeft: '6%', marginRight: '15%', marginTop: '15%'}}>
                            <img src={AppleLogo} width='15%' height='15%'>
                            </img>
                        </div>
                    </Col>
                </Row>
           <Footer/>
                    <Row>
                        <Col span={24} style={{
                            backgroundImage: 'linear-gradient(to right,#9147FF, #6042f5, #9147FF',
                            marginTop: '5%'
                        }}>
                            <div class='introText' style={{
                                fontFamily: 'Raleway, sans-serif',
                                fontWeight: 'light',
                                marginTop: '1%',
                                marginLeft: '31%',
                                fontSize: '1vw',
                                color: 'white',
                            }}><p style={{textAlign: 'left'}}>
                                Contact Us:  code.o.meter@gmail.com &nbsp; &nbsp;|  
                                &nbsp; &nbsp;All rights Reserved to N2.tech @2020
                            </p>
                            </div>
                        </Col>
                    </Row>
    <Footer/>

            </div>

        )
    }
}
