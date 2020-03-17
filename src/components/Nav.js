import React, { Component } from 'react'
import { Menu, Affix } from 'antd';
import {
  CodeOutlined
} from '@ant-design/icons';
import {withRouter} from 'react-router-dom';

class Nav extends Component {

  componentDidMount() {
      let p = localStorage.getItem("token")
      if(p == null || !this.valid(p)) {
          this.props.history.push("/login");
      } else {
        this.props.history.push("/home");
      }
    }

    valid = (token) => {
      return true;
    }

  render() {
  
    return (
      <Affix>
      <Menu  mode="horizontal">
        <Menu.Item key="mail">
        <CodeOutlined />
          Coder Pad
        </Menu.Item>
      </Menu>
      </Affix>
    )
  }
}

export default withRouter(Nav);