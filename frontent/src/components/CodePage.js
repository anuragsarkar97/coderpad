import React, { Component } from 'react'
import MonacoEditor from 'react-monaco-editor';
import { Collapse, Button, Dropdown, Menu, Card } from 'antd';
import ReactMarkdown from 'react-markdown';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

export default class CodePage extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "python",
      code : '// type your code...',
      showtestcase : false
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  render() {
    const { Panel } = Collapse;

    const menu = (
      <Menu>
        <Menu.Item>
          <a onClick={() => {this.setState({selectedLanguage : "Python"})}}>
            Python
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => {this.setState({selectedLanguage : "Java"})}}>
            Java
          </a>
        </Menu.Item>
        <Menu.Item>
          <a onClick={() => {this.setState({selectedLanguage : "C++"})}}>
            C++
          </a>
        </Menu.Item>
      </Menu>
    );

    const input = '# This is a header\n\nAnd this is a paragraph'
    let ts;
    if(this.state.showtestcase) {
      ts = <Card style={{ width: '20%', marginTop : '2%' }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        {/* <Card.Grid>Content</Card.Grid> */}
      </Card>
    }

    return (
      <div>
        <div style={{marginTop : '3%' ,marginLeft : '5%' , marginRight : '5%'}}>
        <Collapse defaultActiveKey={['1']} >
            <Panel header="Question" key="1">
              <p><ReactMarkdown source={input} /></p>
            </Panel>
          </Collapse>
        <div className="monaco" style = {{marginTop : '2%', marginBottom : '2%' }}>
        <Editor
            value={this.state.code}
            onValueChange={c => this.setState({ code : c })}
            highlight={code => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14,
              minHeight : '300px'
            }}
          />

        </div>
        <Button type="primary" onClick={() => {this.setState({showtestcase : true})}} style={{marginRight : '2%'}}>Submit</Button>
        <Button type="primary" style={{marginRight : '2%'}}>Test</Button>
        <Dropdown overlay={menu} placement="topCenter">
          <Button>{this.state.selectedLanguage}</Button>
        </Dropdown>
        {ts}
        <Collapse style={{marginTop : '5%'}}>
            <Panel header="Theory" key="2">
              <p><ReactMarkdown source={input} /></p>
            </Panel>
          </Collapse>
      </div>  
      </div>
    )
  }
}
