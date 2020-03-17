import React, { Component } from 'react'
import Paper from '../components/Paper.js';
import { Row, Col, Skeleton, message } from 'antd';


const v = {
  company_name : "facebook",
  question_tag : ["array", "dp"],
  question_difficulty : "hard",
  question_base : "some basic desc ...",
  full_question : "some markdown content will be available here .... "
}


export default class Page extends Component {

  state = {
    loading: true,
  };

  componentDidMount() {
    message.info('Logged In Successfully 😀', 1);
    setTimeout(() => {
      this.setState({ loading: false });
    }, 300);
  }

  cards() {
    let rows = [];
    for(var i=0;i<20;i++) {
      rows.push(<Col span={8}>
        <Skeleton active loading={this.state.loading}>
          <Paper question={v} />
          </Skeleton>
          </Col>); 
    } 
    return rows;
  }

  render() {
    return (
      <div>
        <Row gutter={[10, 10]}>
        {this.cards()}
        </Row>
      </div>
    )
  }
}
