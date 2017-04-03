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

export default class HeartIcon extends Component{
    constructor(props){
        super(props);
        this.state={
            gray:require('../resources/heart1.png'),
            blue:require('../resources/heart2.png'),
            current:require('../resources/heart1.png'),
            enable:false
        }
    }

    changeColor(){
        if (!this.state.enable){
            this.props.likeCount += 1;
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
            <TouchableOpacity 
             onPress={() => {
                this.changeColor();
                this.props.handleLikeButton();
            }}>
            <View>
                <Text style={{color:'gray',fontSize:15}}><Image source={this.state.current} style={{width:20, height:20}}/>   {this.props.likeCount}</Text>
            </View>
            </TouchableOpacity>
        )
    }
}