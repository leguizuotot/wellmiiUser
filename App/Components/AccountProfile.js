import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  ScrollView,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  Alert
} from 'react-native';

import {Router, Scene, Actions, Schema} from 'react-native-router-flux';

import settings from '../settings';
import styles from '../styles';
import NavBar from './Widgets/NavBar';

import userService from '../Services/userService';
import userStorage from '../Controllers/userStorage';

class AccountProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: null
        };
    }

    componentWillMount () { 
    }

    componentDidMount () {
        userStorage.readUser((user, error) => {
            if(error) {
                Alert.alert('#error @Home/componentDidMount()/userStorage.readUser', JSON.stringify(error, null, 2), [
                    {text: 'OK', onPress: () => console.log('OK Pressed!')}
                ])
            }
            else{
                this.setState({
                    user: user
                });
            }
        })
    }

    render() {
        return(
                <View  style={[styles.containerScene]}>
                    <NavBar title={settings.app.name} backButton={false} drawer={true}/>
                    <ScrollView style={[styles.containerMain]}>
                    <View style={[styles.containerDown, {flex:1, padding: 15}]}>                    
                          <Text>{JSON.stringify(this.state.user,null,2)}</Text>                  
                    </View>
                    </ScrollView>
                </View>

        );
        
    }
// *********************
}
export default AccountProfile;