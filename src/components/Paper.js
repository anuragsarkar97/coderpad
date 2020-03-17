import React, {
    Component
} from 'react'

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import MonacoEditor from 'react-monaco-editor';
import {
    Drawer,
    Dropdown,
    Menu,
    BackTop,
    Rate,
    Card,
} from 'antd';
import {HeartTwoTone, BookOutlined, EditOutlined, EllipsisOutlined, SettingOutlined, QuestionOutlined, BookFilled } from '@ant-design/icons';
import Tags from '../components/Tags';


export default class Paper extends Component {


    constructor(props) {
        super(props);
        this.state = {
            code: '// type your code...',
            visibleA: false,
            placementA: 'top',
            placementB: 'right',
            visibleB: false,
            selectOnLineNumbers: true,
            selectedLanguage: "python",
            marked: false
        }
    }

    showDrawerA = () => {
        console.log("p");
        this.setState({
            visibleA: true
        });
    };

    showDrawerB = () => {
        this.setState({
            visibleB: true
        });
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


    render() {

        let v = this.props.question;

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
                    <QuestionOutlined key="question" onClick={this.showDrawerA} />,
                    <EditOutlined key="solve" onClick={this.showDrawerB} />,
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
                    <Drawer title = "Question Board"
                        placement = {this.state.placementA}
                        closable = {true}
                        onClose = {this.onCloseA}
                        visible = {this.state.visibleA}> 
                        {v.full_question} 
                    </Drawer> 
                    <Drawer 
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
                            <Button onClick = {() => {alert("clicked")}} > Submit </Button>  
                            </div>}> 
                            <MonacoEditor 
                                language = {this.state.selectedLanguage}
                                theme = "vs-light"
                                value = {this.state.code}
                                options = {this.state.options}
                                onChange = {this.onChange}
                                editorDidMount = {this.editorDidMount} />   
                        </Drawer> 
                </Card> 
            </div>
            )
        }
    }