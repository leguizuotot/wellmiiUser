import React, { Component } from 'react';
import {
  AsyncStorage
} from 'react-native';

import settings from '../settings';
import storedData from '../Models/storedData';
import userService from '../Services/userService';

var key = settings.app.name + 'user';

module.exports.addUser = function (user, callback) {
    storedData.addKey(key, user, (error) => {
        if (error) {
            callback({description: '#error @storedData.addKey(key, fd.user)', error: error});
        }
        else{ // data validated and updated return user info
            callback(false)
        }
    });
}

module.exports.readUser = function (callback) {
    storedData.getKey(key, (data, error) => {
        if (error) {
               callback(false, {description: '#error @readUser+storedData.getKey(key)', error: error});
        }
        else{ 
            if(!data.ownAccessToken){ // no data found
                callback(false, false)
            }
            else{ // data validated and updated return user info
                callback(data, false)
            }
        }
    })
}


module.exports.getUserChecked = function (callback) {
    storedData.getKey(key, (data, error) => {
        if (error) {
               callback(false, {description: '#error @getUserChecked+storedData.getKey(key)', error: error});
        }
        else{ 
            if(!data.ownAccessToken){ // no data found
                callback(false, false)
            }
            else{ // found data and now we have to update the data
                userService.refreshToken(data.ownAccessToken)
                .then((responseRAW) => responseRAW.json()) //formatea el objeto a formato JSON
                .then((response) => {
                    var fd = response;
                    if(fd.status == 200 && fd.user.ownAccessToken){
                        storedData.removeKey(key, (success, error) => {
                            if (error) {
                                callback(false, {description: '#error @getUserChecked+storedData.removeKey(key)', error: error});
                            }
                            else{
                                storedData.addKey(key, fd.user, (error) => {
                                    if (error) {
                                        callback(false, {description: '#error @getUserChecked+storedData.addKey(key, fd.user)', error: error});
                                    }
                                    else{ // data validated and updated return user info
                                        callback(fd.user, false)
                                    }
                                });
                            }
                        })
                    }
                    else{ //response not expected
                        callback(false, {description: 'Unexpected response', error: fd});
                    }
                })
                .catch((error) => {  
                        callback(false, {description: '#error @getUserChecked+user.refreshToken(stored.ownAccessToken)', error: error});
                })
            }
        }
    });
}

module.exports.removeUser = function (callback) {
    storedData.removeKey(key, (error) => {
        if (error) {
               callback({description: '#error @dataStored.removeKey(key)', error: error});
        }
        else{
            callback(false);
        }
    })
}