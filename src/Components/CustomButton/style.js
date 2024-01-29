import React from "react";
import { StyleSheet,Dimensions } from "react-native";
const {width,height}=Dimensions.get('screen')
const style=StyleSheet.create({
 button:{
    padding:width*0.03,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:width*0.030,
    flexDirection:'row',
 },
 buttonText:{
    fontFamily:'Lato-Bold',
    fontSize:18,
    color:'#fff'
 },
 icon:{
    width:width*0.08,
    height:width*0.08,
    marginRight:12
 },

})
export default style;