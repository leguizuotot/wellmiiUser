import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  ScrollView,
  TextInput,
  TouchableHighlight
} from 'react-native';

import settings from '../settings'
import styles from '../styles'
import NavBar from './Widgets/NavBar'

import {Router, Scene, Actions, Schema} from 'react-native-router-flux';

const contextTypes = {
  drawer: PropTypes.object,
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        const drawer = this.context.drawer;

        const gotoHome1 = () => Actions.Home();
        const gotoHome2 = () => Actions.Home2();

        return (
            <View  style={[styles.containerScene]}>
                <NavBar title={settings.app.name} backButton={true} drawer={true}/>
                <View style={[styles.containerMain]}>
                    <View style={[styles.containerDown, {flex:1}]}>
                        <Text> Estas en Home ONE!!!!!!</Text>
                        <TouchableHighlight onPress={drawer.toggle}>
                            <Text> Booommm Home1*!!!! </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={gotoHome2}>
                            <Text> Booommm Home2*!!!! </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={gotoHome2} style={{flex:1}}>
                            <Text> Booommm Ho242342342!!!! </Text>
                        </TouchableHighlight>

                    </View>  
                </View>
            </View>
        );
    }
// *********************
}

Home.contextTypes = contextTypes;

export default Home;


