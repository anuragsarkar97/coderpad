import React, {
    Component
} from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MonacoEditor from 'react-monaco-editor';
import {
    Row,
    Col,
    Drawer,
    Dropdown,
    Menu,
    BackTop,
    Rate,
    Divider
} from 'antd';
import {HeartTwoTone} from '@ant-design/icons';
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
            selectedLanguage: "python"
        }
    }

    showDrawerA = () => {
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


    render() {

        let v = this.props.question;

        let menu = ( <Menu onClick = {this.handleMenuClick} >
            <Menu.Item > python </Menu.Item> 
            <Menu.Item >java </Menu.Item > 
            <Menu.Item> cpp </Menu.Item > 
            </Menu >
            );

            return ( 
            <div> 
                <BackTop /> 
                <Card className = "paper" variant = "outlined"
                style = {{
                        marginLeft: '2.5%',
                        marginRight: '2.5%',
                        marginTop: '2.5%'
                    }}>
                    <CardContent>
                        <Typography className = "question" color = "h2" gutterBottom> 
                        {v.company_name} 
                        </Typography> 
                        <Tags tag = {v.question_tag} /> 
                        <Typography variant = "body2" component = "p" > 
                        {v.question_base} 
                        </Typography> 
                    </CardContent> 
                    <Row> 
                        <Col> 
                            <CardActions> 
                                <Row> 
                                    <Col span = {24}> 
                                    < Button size = "small" onClick = {this.showDrawerB}> Solve </Button>
                                    </Col> 
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
                                </Row > 
                            </CardActions> 
                        </Col> 
                        <Col >
                            <CardActions >
                                <Row >
                                    <Col span = {24}> 
                                        <Button size = "small" onClick = {this.showDrawerA}> 
                                        Learn More 
                                        </Button> 
                                    </Col> 
                                    <Drawer title = "Question Board"
                                    placement = {this.state.placementA}
                                    closable = {false}
                                    onClose = {this.onCloseA}
                                    visible = {this.state.visibleA}> 
                                    {v.full_question} 
                                    </Drawer> 
                                </Row> 
                            </CardActions> 
                        </Col> 
                        <Col>
                        <Divider />
                        </Col>
                    </Row> 
                </Card> 
            </div>
            )
        }
    }