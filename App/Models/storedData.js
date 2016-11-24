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

import settings from '../settings';

module.exports.addKey = function (key, data, callback) {
    AsyncStorage.setItem(key,  JSON.stringify(data))
    .then(() => {
        callback(false);
    })
    .catch((error) => {
        callback({catch: error, key:key});
    })
}

module.exports.getKey = function (key, callback) {
    AsyncStorage.getItem(key)
    .then((value) => {
        if(!value){
            callback(false,false)
        }
        else{
            callback(JSON.parse(value), false) // ojo!!! si no hay objeto o es nulo JSON.parse() dará error, hay que coomprobar primero que hay respuesta
        }
    })
    .catch((error) => {
        callback(false, {catch: error, key:key, value: value});
    })
}

module.exports.removeKey = function (key, callback) {
    AsyncStorage.multiRemove([key], (error) => {
        if(error) {
            callback({catch: error, key:key});
        }else {
            callback(false);
        }
    });
}