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

export default class RetweetIcon extends Component{
    constructor(props){
        super(props);
        this.state={
            gray:require('../resources/retweet1.png'),
            blue:require('../resources/retweet2.png'),
            current:require('../resources/retweet1.png'),
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
                this.props.handleRetweet();
            }}>
            <View>
                <Text style={{color:'gray',fontSize:15}}><Image source={this.state.current} style={{width:23, height:20}}/>   {this.props.retweetCount}</Text>
            </View>
            </TouchableOpacity>
        )
    }
}