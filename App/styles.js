/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Dimensions
} = React;

module.exports = StyleSheet.create({

//******************************************************
//******************   CONTAINERS   ********************
//******************************************************

containerScene: {
  flexDirection: 'column',
  flex:1,
  backgroundColor:'#FFFFFF',
  //alignSelf: 'stretch',
},

containerMain: {
  flexDirection: 'column',
  flex:1,
  marginLeft:5,
  marginRight:5,
  marginBottom:5,
},

containerDown: {
  flexDirection: 'column',
},

containerDownBorder: {
  flexDirection: 'column',
  alignSelf: 'stretch',
  borderTopWidth: 1,
  borderColor: '#209779',

},

containerRight: {
  flexDirection: 'row',
},

//******************************************************
//*******************   TEXTOS   ***********************
//******************************************************

textDescription: {
  color: '#636164',
  fontWeight: 'normal',
  margin: 2,
  flexDirection: 'row',
  //alignSelf: 'stretch',
},

textTag:{
  color: '#636164',
  fontWeight: 'bold',
  margin: 2,
  flexDirection: 'row',
},

textHighlight:{
  color: '#209779',
},

textInput:{
  flex: 1,
  margin: 2,
  height: 50,
  flexDirection: 'row',
},

//******************************************************
//************   BOTONES touchableItems   **************
//******************************************************
button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#209779',
    margin: 2
},

buttonBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FFFFFF',
    borderColor:'#209779',
    borderWidth: 3,
    margin: 2,
},

buttonXL:{
    height: 50,
    margin:5
},

buttonBubble:{
    borderRadius: 20,
},

buttonText:{
  color: '#FFFFFF',
  margin: 2,
  fontWeight: 'bold',
  textAlign: 'center',
},

buttonBorderText:{
  color: '#209779',
  margin: 2,
  fontWeight: 'bold',
  textAlign: 'center',
},

//******************************************************
//******************   IMAGENES   **********************
//******************************************************

thumbnail:{
  width: 30,
  height: 30,
  margin: 2,
},

thumbnailLogo:{
  alignSelf: 'center',
  margin: 2,
},


});