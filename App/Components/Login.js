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
  Alert,
  AsyncStorage
} from 'react-native';

import {Router, Route, Scene, Actions, Schema} from 'react-native-router-flux';

import NavBar from './Widgets/NavBar';
import settings from '../settings';
import styles from '../styles';

import userStorage from '../Controllers/userStorage';
import userService from '../Services/userService';


class Login extends Component {

    componentWillMount () {

    }

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            inputEmail: '',
            inputPassword: ''
        };
    };

    componentDidMount () {
        userStorage.getUserChecked((user, error) => {
            if (error) {
                // do something to show the error
                Alert.alert('#error @Login-componentDidMount ()', JSON.stringify(error, null, 2), [
                    {text: 'OK', onPress: () => console.log('OK Pressed!')}
                ])
                this.setState({
                    loaded: true
                });
            }
            else{
                if(user.ownAccessToken){
                    Alert.alert('Logged in as:', JSON.stringify(user, null, 2), [
                        {text: 'OK', onPress: () => console.log('OK Pressed!')}
                    ])
                    Actions.SideDrawer()
                }
                else{
                     this.setState({
                        loaded: true
                    });
                }
            }
        });
    };

    _registerUser() {
        Actions.LoginNewUser();
    };

    _retrievePassword() {
        Actions.LoginResetPassword();
    };

    _signInLocal() {
        var aux;
        userService.loginLocal(this.state.inputEmail, this.state.inputPassword)
            .then((responseRAW) => responseRAW.json())
            .then((response) => {
                var fd = response;
                aux = response               
                if(fd.status == 200 && fd.user){
                    userStorage.addUser(fd.user, (error) => {
                        if (error) {
                            Alert.alert('sds', JSON.stringify(error, null, 2), [
                                {text: 'OK', onPress: () => console.log('OK Pressed!')}
                            ])
                        }
                        else{
                            Actions.SideDrawer()
                        }
                    });
                }
                else{
                    Alert.alert('Unexpected response @userService.loginLocal()', JSON.stringify(fd, null, 2), [
                        {text: 'OK', onPress: () => console.log('OK Pressed!')}
                    ])
                }
            })
            .catch((error) => {  
                var exfd = error;
                Alert.alert('#error @userService.loginLocal()', JSON.stringify(error, null, 2) + '\n' + JSON.stringify(aux, null, 2), [
                    {text: 'OK', onPress: () => console.log('OK Pressed!')}
                ])
            })
    };

    _signInFacebook() {
        Actions.SideDrawer();
    };

    _signInGoogle() {
        Actions.LoginGoogle();
    }; 

    _signInTwitter() {
        Actions.SideDrawer();
    };

    render() {
        if(!this.state.loaded) {
            return(<View  style={[{flexDirection: 'column',  flex:1, backgroundColor: settings.app.colors.corporate}]}></View>)
        }
        else{
            return(this.renderView())
        }
    }

    renderView() {
            return(
                <View  style={[styles.containerScene]}>
                    <NavBar title={settings.app.name} backButton={false} drawer={false}/>
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
                                <TextInput
                                    style={styles.itemTextInput}
                                    placeholder={'PASSWORD'}
                                    onChangeText={(value) => this.setState({inputPassword: value})}
                                    secureTextEntry={true}
                                    >
                                </TextInput>

                                <TouchableHighlight onPress={this._signInLocal.bind(this)}>
                                    <View style={[styles.containerRight, {margin: 2, backgroundColor: settings.app.colors.corporate, height: 40, flex: 1, alignItems: 'center', justifyContent: 'center'}]}>
                                        <Text style={styles.buttonText}>Log in</Text>                                          
                                    </View>
                                </TouchableHighlight>

                                <View style={[styles.containerRight, {justifyContent: 'space-between', padding: 2}]}>
                                    <TouchableHighlight onPress={this._registerUser.bind(this)}>
                                        <Text>Create a new account</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={this._retrievePassword.bind(this)}>
                                        <Text>Forgot password?</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>

                        <View style={{height: 40}}></View>

                        <View style={styles.containerDown}>
                                    <TouchableHighlight onPress={this._signInFacebook.bind(this)}>
                                        <View style={[styles.containerRight, {margin: 7}]}>
                                            <View style={{backgroundColor: settings.socialLogin.colorFacebook1, height: 40, width: 50, alignItems: 'center', justifyContent: 'center'}} >
                                                <Image
                                                    style={{width: 30, height: 30}}
                                                    source={{uri: 'https://'+settings.app.hostname+'/imgs/social/facebook.png'}}
                                                />
                                            </View>
                                            <View style={{backgroundColor: settings.socialLogin.colorFacebook1, height: 40, flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'}} >
                                                <Text style={styles.buttonText}>    Log in with Facebook</Text>
                                            </View>
                                        </View>
                                    </TouchableHighlight>

                                    <TouchableHighlight onPress={this._signInGoogle.bind(this)}>
                                        <View style={[styles.containerRight, {margin: 7}]}>
                                            <View style={{backgroundColor: settings.socialLogin.colorGoogle1, height: 40, width: 50, alignItems: 'center', justifyContent: 'center'}} >
                                                <Image
                                                    style={{width: 30, height: 30}}
                                                    source={{uri: 'https://'+ settings.app.hostname +'/imgs/social/googlePlusWhite.png'}}
                                                />
                                            </View>
                                            <View style={{backgroundColor: settings.socialLogin.colorGoogle1, height: 40, flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'}} >
                                                <Text style={styles.buttonText}>    Log in with Google</Text>
                                            </View>
                                        </View>
                                    </TouchableHighlight>


                                    <TouchableHighlight onPress={this._signInTwitter.bind(this)}>
                                        <View style={[styles.containerRight, {margin: 7}]}>
                                            <View style={{backgroundColor: settings.socialLogin.colorTwitter1, height: 40, width: 50, alignItems: 'center', justifyContent: 'center'}} >
                                                <Image
                                                    style={{width: 30, height: 30}}
                                                    source={{uri: 'https://'+ settings.app.hostname +'/imgs/social/twitterWhite.png'}}
                                                />
                                            </View>
                                            <View style={{backgroundColor: settings.socialLogin.colorTwitter1, height: 40, flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'}} >
                                                <Text style={styles.buttonText}>    Log in with Twitter</Text>
                                            </View>
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
export default Login;