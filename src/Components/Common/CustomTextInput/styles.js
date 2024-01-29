import React from "react";
import { StyleSheet,Dimensions } from "react-native";
import colors from "../colors";
const {width,height}=Dimensions.get('screen')
const style=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        color:colors.black,
        fontSize:16,
        fontFamily:'Lato-Regular',
        padding:width*0.04,
        borderRadius:8,
        marginVertical:12,
        borderWidth:1
    },
    textInput:{
      fontSize:16,
        fontFamily:'Lato-Regular',
        fontFamily:'Lato-Regular',
    },
    icon:{
        width:width*0.05,
        height:width*0.05,
        resizeMode:'contain'
    }
})
export default style;