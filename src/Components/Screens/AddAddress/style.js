import React from "react";
import { StyleSheet,Dimensions } from "react-native";
import colors from "../../Common/colors";
const {width,height}=Dimensions.get('screen')
const style=(height,width,isPortrait)=>StyleSheet.create({

    container:{
      flex:1,
    },
    textInput:{
        fontFamily:'Lato-Regular',
        borderRadius:8,
        fontSize:16,
        borderWidth:10,
        width:width*0.8,
        borderColor:'black',
        height:50,
        padding:10,
        alignSelf:'center'
    }
 

})
export default style;