
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
    ListView,
    Stylesheet,
    Linking,
    Navigation,
    RefreshControl
} from 'react-native';

export default class ReplyIcon extends Component{
    constructor(props){
        super(props);
        this.state={
            gray:require('../resources/reply1.png'),
            blue:require('../resources/reply2.png'),
            current:require('../resources/reply1.png'),
            enable:false
        }
    }

    changeColor(){
        if (!this.state.enable){
            this.setState({
            current: this.state.blue,
            enable: true
        })
        } else {
            this.setState({
            current: this.state.gray,
             enable: false
        })
    }   
    }

    render()
    {
        return(
            <TouchableOpacity onPressOut={() => this.changeColor()}
             onPressIn={() => this.changeColor()} 
             onPress={() => {
                this.props.handleReply();
            }}>
            <View>
            <Text style={{color:'gray',fontSize:15}}><Image source={this.state.current} style={{width:20, height:20}}/>    {this.props.replyCount}</Text>
            </View>
            </TouchableOpacity>
        )
    }
}