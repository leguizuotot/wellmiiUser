import React from 'react';
import {PropTypes} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Image,
  AsyncStorage,
  Alert
} from "react-native";
import { Actions } from 'react-native-router-flux';

import settings from '../../settings'
import styles from '../../styles'

import userStorage from '../../Controllers/userStorage'

const contextTypes = {
  drawer: React.PropTypes.object,
};

const SideDrawerContent = (props, context) => {
    const drawer = context.drawer;

    const logOut = () => {
        userStorage.removeUser((error) => {
            if (error) {
                Alert.alert('#error @SideDrawerContent/logout()/userStorage.removeUser', JSON.stringify(error, null, 2), [
                    {text: 'OK', onPress: () => console.log('OK Pressed!')}
                ])
                Actions.Login()
            }
            else{
                Actions.Login()   
            }
        });
    }

    return (
                <View style={{flexDirection: 'column', flex:1, marginRight:5}}>
                    <View style={{flexDirection: 'column', flex:1, elevation: 5, backgroundColor: '#FFFFFF'}}>
                        <View style={[styles.containerDown, {backgroundColor: settings.app.colors.corporate, height:100, justifyContent: 'flex-end'}]}>
                            <Text style={[styles.textTag, {color: '#FFFFFF'}]}></Text>  
                            <Text style={[styles.textDescription,{color: '#FFFFFF'}]}>leguizuotot83@gmail.com</Text>  
                        </View>

                        <TouchableHighlight  onPress={() => { drawer.close(); Actions.Home(); }}>
                            <View style={[styles.containerRight, {height:40, alignItems: 'center', backgroundColor:'#FFFFFF', borderBottomWidth: 1, borderColor: settings.app.colors.corporate}]}>
                                <View style={{height: 40, width: 40, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image
                                        style={{width: 20, height: 20}}
                                        source={{uri: 'https://'+settings.app.hostname+'/imgs/drawer/plus.png'}}
                                    />
                                </View>
                                <Text>Funcionalidad 1</Text>
                            </View>
                        </TouchableHighlight>
                                                       
                        <TouchableHighlight  onPress={() => { drawer.close(); Actions.Home2(); }}>
                            <View style={[styles.containerRight, {height:40, alignItems: 'center', backgroundColor:'#FFFFFF', borderBottomWidth: 1, borderColor: settings.app.colors.corporate}]}>
                                <View style={{height: 40, width: 40, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image
                                        style={{width: 20, height: 20}}
                                        source={{uri: 'https://'+settings.app.hostname+'/imgs/drawer/plus.png'}}
                                    />
                                </View>
                                <Text>Funcionalidad 2</Text>
                            </View>
                        </TouchableHighlight>


                        <View style={[styles.containerRight, {height:40, alignItems: 'center', backgroundColor:'#FFFFFF'}]}>
                            <Text style={{fontWeight: 'bold'}}>Account</Text>
                        </View>
                        
                        <TouchableHighlight  onPress={() => { drawer.close(); Actions.AccountProfile(); }}>
                            <View style={[styles.containerRight, {height:40, alignItems: 'center', backgroundColor:'#FFFFFF'}]}>
                                <View style={{height: 40, width: 40, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image
                                        style={{width: 20, height: 20}}
                                        source={{uri: 'https://'+settings.app.hostname+'/imgs/drawer/user.png'}}
                                    />
                                </View>
                                <Text>Cuenta</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={() => { drawer.close(); Actions.Home2(); }}>
                            <View style={[styles.containerRight, {height:40, alignItems: 'center', backgroundColor:'#FFFFFF'}]}>
                                <View style={{height: 40, width: 40, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image
                                        style={{width: 20, height: 20}}
                                        source={{uri: 'https://'+settings.app.hostname+'/imgs/drawer/payment.png'}}
                                    />
                                </View>
                                <Text>Métodos de pago</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={() => { drawer.close(); Actions.Home2(); }}>
                            <View style={[styles.containerRight, {height:40, alignItems: 'center', backgroundColor:'#FFFFFF', borderBottomWidth: 1, borderColor: settings.app.colors.corporate}]}>
                                <View style={{height: 40, width: 40, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image
                                        style={{width: 20, height: 20}}
                                        source={{uri: 'https://'+settings.app.hostname+'/imgs/drawer/marker.png'}}
                                    />
                                </View>
                                <Text>Ubicaciones</Text>
                            </View>
                        </TouchableHighlight>

                        <View style={[styles.containerRight, {height:40, alignItems: 'center', backgroundColor:'#FFFFFF'}]}>
                               <Text style={{fontWeight: 'bold'}}>Help & Support</Text>
                        </View>
                        <TouchableHighlight  onPress={() => { drawer.close(); Actions.Home2(); }}>
                            <View style={[styles.containerRight, {height:40, alignItems: 'center', backgroundColor:'#FFFFFF'}]}>
                                <View style={{height: 40, width: 40, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image
                                        style={{width: 20, height: 20}}
                                        source={{uri: 'https://'+settings.app.hostname+'/imgs/drawer/settings.png'}}
                                    />
                                </View>
                                <Text>Configuración</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={() => { logOut() }}>
                            <View style={[styles.containerRight, {height:40, alignItems: 'center', backgroundColor:'#FFFFFF'}]}>
                                <View style={{height: 40, width: 40, alignItems: 'center', justifyContent: 'center'}}>
                                    <Image
                                        style={{width: 20, height: 20}}
                                        source={{uri: 'https://'+settings.app.hostname+'/imgs/drawer/signout.png'}}
                                    />
                                </View>
                                <Text>Cerrar sesion</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight  onPress={() => { drawer.close(); }} style={{backgroundColor:'#FFFFFF', flex:1}}>
                            <View></View>
                        </TouchableHighlight>
                    </View>  
                </View>

    )
}

SideDrawerContent.contextTypes = contextTypes;

export default SideDrawerContent;

