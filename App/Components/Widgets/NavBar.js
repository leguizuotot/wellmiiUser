import React, { Component, PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  ScrollView,
  TextInput,
  TouchableHighlight,
  Navigator
} from 'react-native';

import {Router, Route, Scene, Actions, Schema} from 'react-native-router-flux';

import settings from '../../settings';
import styles from '../../styles';

const contextTypes = {
  drawer: PropTypes.object,

};

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render(){
        const gotoBack = () => Actions.Login();
        const drawer = this.context.drawer;

        var leftSide;
        if(this.props.backButton == true) {
            leftSide = (
                <TouchableHighlight  onPress={gotoBack} style = {{alignSelf: 'stretch', width:50, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF', margin: 2, fontSize:12}}>Back</Text>
                </TouchableHighlight>
            )
        }else {
            leftSide = (
                <View style = {{alignSelf: 'stretch', width:50, justifyContent: 'center', alignItems: 'center'}}></View>
            )
        };
      
        var rightSide;
        if(this.props.drawer == true) {
            rightSide = (
                <TouchableHighlight  onPress={drawer.toggle} style = {{alignSelf: 'stretch', width:50, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#FFFFFF', margin: 2, fontSize:12}}>Drawer</Text>
                </TouchableHighlight>
            )
            }else {
                rightSide = (
                    <View style = {{alignSelf: 'stretch', width:50, justifyContent: 'center', alignItems: 'center'}}></View>
            )
        };
      
        var navTitle;
        if(this.props.title){
            navTitle = this.props.title;
        }else {
            navTitle = settings.app.name;
        }

    return(
            <View style={{backgroundColor:'#209779', flexDirection: 'row', height: 55}}>
                <View style= {{flex:1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    {leftSide}
                    <Text style={{color: '#FFFFFF', margin: 2, fontWeight: 'bold', fontSize:18}}>{navTitle}</Text>
                    {rightSide}
                </View>
            </View>
         );
    }
// *********************
}

NavBar.contextTypes = contextTypes;

export default NavBar;
