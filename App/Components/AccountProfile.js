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
        userStorage.getUserChecked((user, error) => {
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

    _linkGoogleAccount () {
        Actions.LinkGoogle();
    }

    render() {
        if(!this.state.user) {
            return(
                <View style={[styles.containerScene]}>
                    <NavBar title={settings.app.name} backButton={false} drawer={true}/>
                    <ScrollView style={[styles.containerMain]}>
                        <View style={[styles.containerDown, {flex:1, padding: 15}]}>                    
                            <Text>loading...</Text>     
                        </View>
                    </ScrollView>
                </View>
            );
        }
        else{
            return(
                <View style={[styles.containerScene]}>
                    <NavBar title={settings.app.name} backButton={false} drawer={true}/>
                    <ScrollView style={[styles.containerMain]}>
                        <View style={[styles.containerDown, {flex:1, padding: 15}]}>                    
                            {this.renderUser(this.state.user)}
                        </View>
                    </ScrollView>
                </View>    
            )
        }
    }

    renderUser(user){
            return(
                <View>
                    <Text>Email: {user.profile[0].email}</Text>
                    {this.renderFacebook(user)}
                    {this.renderGoogle(user)}
                    {this.renderTwitter(user)}
                </View>
            )

    }
    
    renderFacebook(user) {
        if(user.profile[0].facebookId){
            return(
                <Text>Facebook account: {user.profile[0].facebookId}</Text>
            )
        }
        else{
            return(
                <Text>No Facebook account linked</Text>
            )
        }        
    }

    renderGoogle(user) {
        if(user.profile[0].googleId){
            return(
                <Text>Google account: {user.profile[0].googleId}</Text>
            )
        }
        else{
            return(
                <TouchableHighlight onPress={this._linkGoogleAccount.bind(this)}>
                    <Text>No Google account linked</Text>
                </TouchableHighlight>
            )
        }        
    }

    renderTwitter(user) {
        if(user.profile[0].twitterId){
            return(
                <Text>Twitter account: {user.profile[0].twitterId}</Text>
            )
        }
        else{
            return(
                <Text>No Twitter account linked</Text>
            )
        }        
    }
// *********************
}
export default AccountProfile;
