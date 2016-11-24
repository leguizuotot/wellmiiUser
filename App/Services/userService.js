import React, { Component } from 'react';

import settings from '../settings';

var hostname = settings.app.hostname;

module.exports.loginFacebook = function (ownAccessToken, ownAccessFacebook) {

  var data = {
    "ownAccessToken": ownAccessToken,
    "ownAccessFacebook": ownAccessFacebook
  };
  
  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  return fetch('https://' + hostname + '/users/login/facebook', {

    method: 'post',
    headers: {
      //'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody
  });
};

module.exports.loginGoogle = function (ownAccessToken, ownAccessGoogle) {

  var data = {
    "ownAccessToken": ownAccessToken,
    "ownAccessGoogle": ownAccessGoogle
  };
  
  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  return fetch('https://' + hostname + '/users/login/google', {

    method: 'post',
    headers: {
      //'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody
  });
};

module.exports.loginTwitter = function (ownAccessToken, ownAccessTwitter) {

  var data = {
    "ownAccessToken": ownAccessToken,
    "ownAccessTwitter": ownAccessTwitter
  };
  
  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  return fetch('https://' + hostname + '/users/login/twitter', {

    method: 'post',
    headers: {
      //'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody
  });
};

module.exports.loginLocal = function (email, password) {

  var data = {
    "email": email,
    "password": password
  };
  
  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  return fetch('https://' + hostname + '/users/login/local', {

    method: 'post',
    headers: {
      //'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody
  });
};

module.exports.registerLocal = function (email, password, password2) {

  var data = {
    "email": email,
    "password": password,
    "password2": password2,
  };
  
  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  return fetch('https://' + hostname + '/users/register/local', {

    method: 'post',
    headers: {
      //'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody
  });
};

module.exports.retreivePassword = function (email) {

  var data = {
    "email": email
  };
  
  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  return fetch('https://' + hostname + '/users/register/local/forgotPassword', {

    method: 'post',
    headers: {
      //'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody
  });
};

module.exports.refreshToken = function (ownAccessToken) {

  var data = {
    "ownAccessToken": ownAccessToken
  };
  
  var formBody = [];
  for (var property in data) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(data[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  return fetch('https://' + hostname + '/users/refresh/ownAccessToken', {

    method: 'post',
    headers: {
      //'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody
  });
};


