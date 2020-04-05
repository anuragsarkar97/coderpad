import React, { Component } from 'react'
import Paper from './Paper.js';
import { Row, Col, Skeleton, message } from 'antd';
const axios = require('axios').default;

const t = [
  {
    company_name : "facebook",
    question_tag : ["array", "dp"],
    question_difficulty : "hard",
    question_base : "find the longest subsequence ",
    full_question : "some markdown content will be available here .... "
  },
  {
    company_name : "bloomberg",
    question_tag : ["2 pointer", "dp"],
    question_difficulty : "easy",
    question_base : "find the smallest set ",
    full_question : "some markdown content will be available here .... "
  },
  {
    company_name : "google",
    question_tag : ["matrix", "dfs"],
    question_difficulty : "medium",
    question_base : "find islands ",
    full_question : "some markdown content will be available here .... "
  },
  {
    company_name : "facebook",
    question_tag : ["bfs", "sorting"],
    question_difficulty : "hard",
    question_base : "find the correct letter ",
    full_question : "some markdown content will be available here .... "
  }

];

export default class Page extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      q : t,
    };
  }

  componentDidMount() {
    console.log("sfsdf")
    axios({
      method: 'get',
      url: 'localhost:3005/question',
    })
      .then(function(response) {
        this.setState({loading : false, q : response.data});
    }).catch(function(response){
      console.log("error doing api call")
      // this.setState({q : t});
    });
  }

  cards() {
    let rows = [];
    this.state.q.map((item, index) => {
      rows.push(<Col key={index} span={8}>
          <Paper question={item} />
          </Col>);

    });
    return rows;
  }

  render() {
    return (
      <div>
        <Row gutter={[10, 10]}>
        <Skeleton active loading={this.state.loading}>
        {this.cards()}
        </Skeleton>
        </Row>
      </div>
    )
  }
}
