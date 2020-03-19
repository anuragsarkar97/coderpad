import React, { Component } from 'react'
import Paper from '../components/Paper.js';
import { Row, Col, Skeleton, message } from 'antd';


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

  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 300);
  }

  cards() {
    let rows = [];
    t.map((item, index) => {
      rows.push(<Col span={8}>
        <Skeleton active loading={this.state.loading}>
          <Paper question={item} />
          </Skeleton>
          </Col>); 
    })
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
