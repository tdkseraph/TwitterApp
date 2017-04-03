import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TabBarIOS,
    Navigator,
    StatusBar,
    View
} from 'react-native';
import LoginScreen from './components/login.js'
import HomeScreen from './components/home.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {reducer} from './reducers/reducer.js'

const store = createStore(reducer);

export default class App extends Component {
    renderScene(route, navigator) {
        return <route.component navigator={navigator}/>
    }

    render() {
        const defaultRoure = {
            title: 'Login Screen',
            component: LoginScreen
        }

        return (
            <Provider store={store}>
                <Navigator initialRoute={defaultRoure} renderScene={this.renderScene}/>
            </Provider>
        )
    }
}

