import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import {twitter} from 'react-native-simple-auth';
import HomeScreen from './home.js' 

const twitter_api = {
    appId: 'uAPWsVhEDTe9TQDzIkwvtNfdE',
    appSecret: 'DGxTmweBXEIvSYlyosfXqOCmrGwWe8kk6GzMmJIGdSURp47kc7',
    callback: 'seraph://authorize'
}

export default class Login extends Component {
    constructor(props){
        super(props);

    }

    loginTwitter(){
        twitter(twitter_api).then((info) => {
            console.log(JSON.stringify(info))
            this.props.navigator.push({
        title:'Home Screen',
        component:HomeScreen
    })
    }).catch((error) => {
        alert('error')
    });
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.logoConten}>
                    <Image style={styles.logo} source={require('../resources/angry.png')}/>
                    <Text style={styles.titleApp}>ANGRY TWEETS</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.loginTwitter()}>
                        <Image style={{  width: 90,height: 90, marginBottom:30}} source={require('../resources/open.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4890A8'
    },
    logoConten: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleApp: {
        width: 350,
        fontSize: 38,
        textAlign: 'center',
        margin: 10,
        fontFamily: 'trebuchetms-bold',
        color: '#ffffff'
    },
    logo: {
        width: 300,
        height: 300
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    buttonContainer: {
        backgroundColor: "#1980b9",
        paddingVertical: 10,
        marginTop: 15,
        marginBottom: 20
    },
    loginbutton: {
        color: '#ffffff',
        fontSize:25,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily:'papyrus'
    }
});