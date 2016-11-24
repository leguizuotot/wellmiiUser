import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Navigator,
  Image,
  Alert
} from 'react-native';

import {Router, Route, Scene, Actions, Schema} from 'react-native-router-flux';

import NavBar from './Widgets/NavBar';
import settings from '../settings';
import styles from '../styles';

import userService from '../Services/userService';



class AccountPaymentMethods extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputEmail: ''
        };
    };

    _sendEmail() {
        
        userService.retreivePassword(this.state.inputEmail)
            .then((responseRAW) => responseRAW.json())
            .then((response) => {
                var fd = response;
                
                if(fd.status == 200){
                    Alert.alert('Password reset', fd.statusDescription, [
                        //{text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                        {text: 'OK', onPress: () => console.log('OK Pressed!')}
                    ])
                    Actions.Login({inputEmail: this.state.inputEmail});     
                }
                else{
                    var errDescription = '';
                    if(fd.err) {
                        for (i = 0; i < Object.keys(fd.err).length; i++) { 
                            errDescription =  errDescription + '\n' + fd.err[i].msg;
                        }
                    }
                    Alert.alert('Oops! :( Something went wrong', fd.statusDescription + errDescription, [
                        //{text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                        {text: 'OK', onPress: () => console.log('OK Pressed!')}
                    ])
                }
            })
            .catch((error) => {  
                var exfd = error;
                Alert.alert('Unexpected Error', JSON.stringify(exfd, null, 2), [
                    {text: 'OK', onPress: () => console.log('OK Pressed!')}
                ])
            })
        //
    };

    render() {
        return(
                <View  style={[styles.containerScene]}>
                    <NavBar title={settings.app.name} backButton={false} drawer={true}/>
                    <View style={[styles.containerMain]}>
                    <ScrollView style={[styles.containerDown, {flex:1, padding: 15}]}>                    
                        <View style={{height: 60}}></View>
                        <View >
                            <View>
                                <TextInput
                                    style={styles.itemTextInput}
                                    placeholder={'EMAIL'}
                                    onChangeText={(value) => this.setState({inputEmail: value})}
                                    value={this.state.value}
                                >
                                </TextInput>

                            </View>
                            <TouchableHighlight >
                                    <View style={[styles.containerRight, {margin: 7, backgroundColor: settings.app.colors.corporate, height: 40, flex: 1, alignItems: 'center', justifyContent: 'center'}]}>

                                                <Text style={styles.buttonText}>Send email to retreive password</Text>
                                      
                                    </View>
                            </TouchableHighlight>
                        </View>
                                                 
                    </ScrollView>
                    </View>
                </View>

        );
        
    }
// *********************
}
export default AccountPaymentMethods;