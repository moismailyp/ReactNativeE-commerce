import React,{useState} from "react";
import {Image, TextInput,TouchableOpacity,View,Text} from 'react-native'
import { Platform } from "react-native";
import style from "./styles";
import colors from "../colors";
import { useDimensions } from "../../../Context";

const CustomTextInput =props=>{
    const {type,handleText,placeholder,value,check=false,multiline=false}= props;
    const [show,setShow]=useState(false)
    const {height}=useDimensions()

    const KeyBoardType=type==='email'?'email-address':type==='phone'?'phone-pad':'default';
    const secureTextEntry=type==='password'?(show?false:true):false;
    const icon=type==='email'?require('../../../images/email.png'):type==='password'? show?require('../../../images/hide.png'):require('../../../images/view.png'):false;
    const handlePassword=()=>setShow(!show)
    return(
        <View style={style.container}>
    <TextInput    
    value={value}
    style={[style.textInput, {height:Platform.OS==='ios'
                                ?multiline?height*0.09:height*0.04:multiline?height*0.07:height*0.02},]}
    placeholder={placeholder}
    KeyboardType={KeyBoardType}
    secureTextEntry={secureTextEntry}
    multiline={multiline}
    onChangeText={handleText}/>
    {check?<Text style={{fontFamily:'Lato-Regular',color:colors.green,fontSize:19}}>check</Text>:null}
    {!icon?null:(<TouchableOpacity onPress={handlePassword} disabled={type!=='password'?true:false}><Image style={style.icon} source={icon}/></TouchableOpacity>)}
    </View>
     )
}
export default CustomTextInput;