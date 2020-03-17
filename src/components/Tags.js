import React, { Component } from 'react'
import {Tag} from 'antd';


export default class Tags extends Component {
  render() {
    let values = this.props.tag;

    return (
      <div>
      {
        values.map((item, index) => <Tag>{item}</Tag>)
      }
      </div>
    )
  }
}
