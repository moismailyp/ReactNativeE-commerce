import React from 'react'
import {View,Text, TouchableOpacity  } from 'react-native'
import { useDimensions } from '../../../Context'
import style from './style'
const CommonButton=(props)=>{
    const{height,width,isPortrait}=useDimensions()
    const responsiveStyle=style(height,width,isPortrait)

    

    return(
<TouchableOpacity style={responsiveStyle.container} onPress={props.handleButtonPress} >
    <Text style={responsiveStyle.text}>{props.buttonText}</Text>
</TouchableOpacity>
    )
    
}
export default CommonButton;