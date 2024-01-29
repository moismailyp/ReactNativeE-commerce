import React from "react";
import { View,Text,Image, TouchableOpacity } from "react-native";
import style from "./style";
import { useNavigation } from "@react-navigation/native";
import { useDimensions } from "../../../Context";
 const CommonHeader=()=>
 {
    const {height,width}=useDimensions();
    const responsiveStyle=style(height,width);

    const navigate=useNavigation();
    return(
        <View style={responsiveStyle.container}>
            <TouchableOpacity onPress={()=>navigate.toggleDrawer()}>
            <Image style={responsiveStyle.sideLogo} source={require('../../../images/drawer.png')}/>          
            </TouchableOpacity>
<Image style={responsiveStyle.logo} source={require('../../../images/logo.webp')}/>          

        </View>
    )
 }
 export default CommonHeader;