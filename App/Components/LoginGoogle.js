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
  Alert,
  AsyncStorage
} from 'react-native';

import NavBar from './Widgets/NavBar';
import settings from '../settings'
import styles from '../styles'

import {Router, Scene, Actions, Schema} from 'react-native-router-flux';

import CookieManager from 'react-native-cookies'; // para arreglar error rnpm link https://github.com/joeferraro/react-native-cookies/issues/39
import URL from 'url-parse';


import userService from '../Services/userService';
import userStorage from '../Controllers/userStorage';


var hostname = settings.app.hostname;
var pathname = settings.socialLogin.pathnameGoogle;

/* logros pendientes
como detectar si la ruta esta caida
como detectar que al ruta no se encuentra
como detectar que la ruta no es lo esperado
*/

export default class LoginGoogle extends Component {

    componentWillMount(){
        CookieManager.clearAll((err, res) => {});
    }

    constructor(props) {
        super(props);
        this.state = {
            webview: 'connecting...',
            cookieValue: '',
            response: ''
        };
    }

    onNavigationStateChange (navState) {
        this.setState({
            webview: 'loading...'
        });

        if (!navState.loading) {
            var url = new URL(navState.url);
            this.setState({
                webview: url.hostname + '' + url.pathname
            });
            if (url && url.hostname === hostname && url.pathname.indexOf(pathname + '/callback') !== -1) {
                this.setState({
                    webview: url.hostname + '' + url.pathname
                });
                CookieManager.get(hostname, (err, cookie) => { 
                    if (cookie && cookie.authGoogle) {
                        userService.loginGoogle('', cookie.authGoogle, hostname)
                        .then((responseRAW) => responseRAW.json())
                        .then((response) => {
                            var fd = response;
                            this.setState({
                                cookieValue: cookie.authGoogle,
                                webview: url.hostname + '' + url.pathname,
                                response: fd
                            });
                            Actions.Login();                                                                                  
                        })
                        .catch((error) => {
                            // lo mismo, en caso de error si no consigue la cookie.... habra que avisar de q hay problemas y no se puede logar. el problema seria el back
                            Alert.alert('#error @User.loginGoogle(, cookie.authGoogle, hostname)', JSON.stringify(error, null,2) + '\n' + JSON.stringify(fd, null,2), [
                                //{text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                                {text: 'OK', onPress: () => console.log('OK Pressed!')}
                            ])
                            Actions.Login();
                        })
                    }
                    else{
                        // si no genera la cookie habra que dar un error y volver a la pagina de login o algo asi. hace falta un componente error y un componente de login principal
                        this.setState({
                            webview: url.hostname + '' + url.pathname + '\n' + '#error cookie authGoogle not found. #cookie: ' + JSON.stringify(cookie)
                        });
                    }
                });
            }
        }
    }

    render() {
                    
        return (
            <View  style={[styles.containerScene]}>
                <NavBar title={settings.app.name} backButton={true} drawer={false}/>
                <View style={[styles.containerMain]}>
                <View style={[styles.containerDown, {flex:1}]}>                    
                    <WebView
                        source={{uri: 'https://' + hostname + '' + pathname}}    
                        onNavigationStateChange={this.onNavigationStateChange.bind(this)}
                    />
                </View>
                </View>
            </View>
        );
    }
// CIERRA LA CLASE
}
