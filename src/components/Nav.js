import React, { Component } from 'react'
import { Menu, Affix, AutoComplete, Avatar, Row, Col } from 'antd';
import {
  CodeOutlined,
  UserOutlined
} from '@ant-design/icons';
import {withRouter} from 'react-router-dom';
const axios = require('axios').default;


class Nav extends Component {

  componentDidMount() {
    axios.get('/auth', {
      accessToken: localStorage.getItem('token'),
    })
    .then(function (response) {
      if(window.location.pathname == "/login") {
        this.props.history.push("/home");
      } else {
        this.props.history.push(window.location.pathname);
      }
    }).catch(function(response){
      this.props.history.push("/login")
    })
    }

    valid = (token) => {
      return true;
    }

    redirectUser = () => {
      this.props.history.push("/profile");
    }

    redirectHome = () => {
      this.props.history.push("/home");
    }

  render() {

    const options = [
      { value: 'Burns Bay Road' },
      { value: 'Downing Street' },
      { value: 'Wall Street' },
    ];
  
    return (
      <Affix>
      <Menu  mode="horizontal" >
        <Row>
          <Col span={8}>
            <div style={{textAlign : 'left', marginLeft : '5%'}}>
            <Menu.Item key="mail" onClick={this.redirectHome}>
            <CodeOutlined />
              Coder Pad
            </Menu.Item>
            </div>
          </Col>
          <Col span={8}>
            <div style={{textAlign : 'center'}}>
              {window.location.pathname == "/home" ? 
              <AutoComplete
              options={options}
              style={{ width: 400, marginTop: '2%', marginBottom : '2%' }}
              // onSelect={onSelect}
              // onSearch={onSearch}
              placeholder="Search here !" 
            /> : null
            }
            </div>  
          </Col>
          <Col span={8}> 
            <div style={{textAlign : 'right'}}>
              {window.location.pathname != "/login"  ?
              <Avatar style={{ backgroundColor: '#87d068', marginRight : '10%' }} icon={<UserOutlined />} onClick={this.redirectUser} /> : null
              }
            </div>
          </Col>
        </Row>
      </Menu>
      </Affix>
    )
  }
}

export default withRouter(Nav);