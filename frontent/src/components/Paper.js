import React, {
    Component
} from 'react'
import Button from '@material-ui/core/Button';
import MonacoEditor from 'react-monaco-editor';
import {
    Drawer,
    Dropdown,
    Menu,
    BackTop,
    Rate,
    Card,
    Collapse,
    notification
} from 'antd';
import {EditOutlined,QuestionOutlined } from '@ant-design/icons';
import {withRouter} from 'react-router-dom';


class Paper extends Component {


    constructor(props) {
        super(props);
        console.log("page :" ,this.props);
        this.state = {
            code: '// type your code...',
            visibleA: false,
            placementA: 'top',
            placementB: 'right',
            visibleB: false,
            selectOnLineNumbers: true,
            selectedLanguage: "python",
            marked: false,
            innerdrawerview: false
        }
    }

    showDrawerA = () => {
        console.log("p");
        this.setState({
            visibleA: true
        });
    };

    showDrawerB = () => {
        this.props.history.push("/question/" + this.props.question.document_id);
    };
    onCloseA = () => {  
        this.setState({
            visibleA: false
        });
    };

    onCloseB = () => {
        this.setState({
            visibleB: false
        });
    };


    editorDidMount(editor, monaco) {
        editor.focus();
    }
    onChange(newValue, e) {}

    handleMenuClick = (e) => {
        this.setState({
            selectedLanguage: e.item.props.children
        });
    }

    handleBookmark = () => {
        this.setState({marked : !this.state.marked});
    }

    onCloseInner = () => {
        this.setState({innerdrawerview : false});
    }

    showoutput = () => {
        this.openExecutionNotification("info");
    }

    openExecutionNotification = type => {
        notification[type]({
          message: 'Code Execution',
          description:'Execution queued !',
          placement: 'bottomLeft',
        });
      };


    render() {

        let v = this.props.question;
        const { Panel } = Collapse;

        let menu = ( <Menu onClick = {this.handleMenuClick}>
            <Menu.Item >python</Menu.Item> 
            <Menu.Item >java</Menu.Item > 
            <Menu.Item>cpp</Menu.Item > 
            </Menu >
            );


            return ( 
            <div> 
                <BackTop /> 
                <Card title={v.company_name}
                // extra={<Icon type="message"  theme="outlined" />}
                actions={[
                    // <QuestionOutlined key="question" onClick={this.showDrawerA} />,
                    <EditOutlined key="solve" onClick={() => this.props.history.push("/" + this.props.question.document_id)} />,
                    <Rate key="rate" />,
                  ]}
                style = {{
                        marginLeft: '2.5%',
                        marginRight: '2.5%',
                        marginTop: '2.5%'
                    }} >
                        <p>
                            {v.question_base}
                        </p>
                    {/* <Drawer title = "Question Board"
                        placement = {this.state.placementA}
                        closable = {true}
                        onClose = {this.onCloseA}
                        visible = {this.state.visibleA}> 
                        {v.full_question} 
                    </Drawer>  */}
                    {/* <Drawer 
                        title = "Coder Pad" 
                        width = {720} 
                        placement = {this.state.placementB} 
                        closable = {true} 
                        onClose = {this.onCloseB} 
                        visible = {this.state.visibleB} 
                        footer = 
                            { 
                            <div style = {{display: 'flex',justifyContent: 'space-between'}} >
                            <Dropdown overlay = {menu}>
                            <Button style = {{leftMargin: '5%'}}> {this.state.selectedLanguage} </Button>
                            </Dropdown> 
                            <Button onClick = {this.showoutput} > Submit </Button>  
                            </div>}> 
                            <br></br>
                            <Collapse accordion>
                                <Panel header="Console Output" key="1">
                                    <p>haha</p>
                                </Panel>
                            </Collapse>
                            <br></br>
                            <MonacoEditor 
                                language = {this.state.selectedLanguage}
                                theme = "vs-light"
                                value = {this.state.code}
                                options = {this.state.options}
                                onChange = {this.onChange}
                                editorDidMount = {this.editorDidMount} />  
                        </Drawer>  */}
                </Card> 
            </div>
            )
        }
    }

export default withRouter(Paper);