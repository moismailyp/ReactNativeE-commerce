
import React,{useState} from "react";
import { View,Text, ScrollView, Image } from "react-native";
import CustomTextInput from "../../Common/CustomTextInput";
import style from "./style";
import CustomButton from "../../CustomButton";
import { useNavigation } from "@react-navigation/native";

const Logingoogle=()=>{
    const navigate=useNavigation()
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {height,weight}=useDimensions()
    const responsiveStyle=style(height,weight)
    const handleButtonPress=()=>{
        console.warn('button pressed')
    }
    const navigateToSignup=()=>
    {
        navigate.navigate('signup')
    }
    
    return(
    <View style={responsiveStylele.container}>
        <Image source={require('../../../images/topBg.jpg')} style={responsiveStyle.topBg}/>
    <ScrollView style={responsiveStyle.ScrollView}>
    <Image source={require('../../../images/logo.webp')} style={responsiveStyle.logo}/>
<Text style={responsiveStyle.loginText}>Login with google</Text>
<CustomTextInput type="email" handleText={text=>setUsername(text)}placeholder={'email'} />
<CustomButton type="primary" handleButtonPress={handleButtonPress} buttonText={'Login with Google'}/>
<Text  onPress={navigateToSignup}style={responsiveStyle.createNew}> Go To Login</Text>
</ScrollView>
</View>
    )}
export default Logingoogle