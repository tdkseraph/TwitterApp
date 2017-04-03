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
    TextInput,
    Navigation,
    RefreshControl
} from 'react-native';

import twitter, {auth} from 'react-native-twitter';
import HomeScreen from './home.js'
import {twitterAPI} from '../api/twitterapi.js'

export default class TweetScreen extends Component {
    constructor(props) {
        super(props);
        this.state ={
            count:0,
            text:''
        }
    }

    countLetters(value) {
        this.setState({count:value.length, text:value});
    }

    async createTweet(){
         let data = await twitterAPI.createTweet(this.state.text).then((item) => {
            console.log(item);
             this.props.navigator.push({
        title:'Home Screen',
        component:HomeScreen
    })
        })
    }

    backToHomeScreen(){
        this.props.navigator.push({
        title:'Home Screen',
        component:HomeScreen
    })
    }

    render(){
        return (
             <View
                style={{
                paddingTop: 25,
                backgroundColor: '#4890A8'
            }}>
                <StatusBar barStyle='dark-content'/>
                <View
                    style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginLeft: 6,
                    marginRight: 6,
                    marginBottom:5
                }}>
                    <Text
                        style={{
                        fontSize: 20,
                        color: 'white'
                    }}
                        onPress={() => this.backToHomeScreen()}>Cancel</Text>
                    <Text onPress={() => this.createTweet()}
                        style={{
                        fontSize: 20,
                        color: 'white',
                    }}>Tweet</Text>
                    </View>
                    <View style={{paddingTop: 25,backgroundColor: 'white'}}>
                        <View
                    style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',}}>
                    <Text
                        style={{
                        fontSize: 17,
                        color: 'black'
                    }}>trandangkhoa</Text>
                    <Text
                        style={{
                        fontSize: 17,
                        color: 'silver',
                    }}>{this.state.count}</Text>
                    </View>
                        <View style={{backgroundColor:'white', width:'100%',height:'95%'}}>
                        <TextInput onChangeText={(value) => this.countLetters(value) } editable={true} multiline={true} numberOfLines={40}
                        style={{margin:10, fontSize:17, height:'95%', paddingBottom:0}} />
                    </View>
                    </View>
            </View>
        )
    }

}