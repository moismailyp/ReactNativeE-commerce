import React from "react";
import { StyleSheet,Dimensions } from "react-native";
const {width,height}=Dimensions.get('screen')
const style=StyleSheet.create(
    {
        container:{
            height:height,

        },
        main:{
            flex:1,

        },
        footText: {
            fontFamily:'Lato-Bold',
            fontSize:25,
            color:'#d3d3d3'

        },
        footButton:{
            padding:15,
            backgroundColor:'black',
            width:'40%',
            margin:15,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:10
        },
        footButtonText:{
            fontFamily:'Lato-Bold',
            fontSize:16,
            color:'white',

        }
    }
)
export default style