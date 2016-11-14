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

class Home2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        const gotoHome1 = () => Actions.Home();
        const gotoHome2 = () => Actions.Home2();

        return (
            <View  style={[styles.containerScene]}>
                <NavBar title={settings.app.name} backButton={false} drawer={true}/>
                <View style={[styles.containerMain]}>
                    <ScrollView style={[styles.containerDown, {flex:1}]}>
                        <Text> Estas en Home TTTWWWWOOOO!!!!!!</Text>
                        <TouchableHighlight onPress={gotoHome1}>
                            <Text> Booommm Home1*!!!! </Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={gotoHome2}>
                            <Text> Booommm Home2*!!!! </Text>
                        </TouchableHighlight>
                    </ScrollView>  
                </View>
            </View>
        );
    }
}

Home2.contextTypes = contextTypes;

export default Home2;