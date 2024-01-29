
import React,{useState,useEffect} from "react";
import { View,Text, ScrollView, Image } from "react-native";
import firestore from '@react-native-firebase/firestore';
import CustomTextInput from "../../Common/CustomTextInput";
import style from "./style";
import CustomButton from "../../CustomButton";
import { useNavigation } from "@react-navigation/native";
import { validateEmail, validateMobileNumber } from "../../Common/validation";
import Snackbar from "react-native-snackbar";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useDimensions } from "../../../Context";
const Signup=()=>{
    const navigate=useNavigation()
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [cpassword,setCPassword]=useState('')
    const [password,setPassword]=useState('')
    const [mobilenumber,setMobileno]=useState('')
    const[errorText,setErrorText]=useState(null);
    const {height,width}=useDimensions()
    const responsiveStyle=style(height,width)
    useEffect(()=>
        {
            GoogleSignin.configure({
                webClientId: '1042659916140-a6vsuevbiavcbcaj9hhvojoj48mph13c.apps.googleusercontent.com',
              });

        })
        const handleGotoGoogleLogin= async()=>
        {
            await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog:true});
        };

    const handleSignup=async()=>{
        if(username.trim()!==''||
        email.trim()!==''||
        password.trim()!==''||
        cpassword.trim()!==''||
        mobilenumber.trim()!=='')
        {
            if(password.trim()===cpassword.trim())
            
             
            {   await firestore().collection('Users')
            .where('username','==',username.trim())
            .where('email','==',email.trim()).get()
            .then(async snapshot=>{
                if(snapshot.empty)
                {
                    if(validateEmail(email.trim()))
                    {
                        if(validateMobileNumber(mobilenumber.trim()))
                        {
                    const userData={
                        username:username.trim(),
                        email:email.trim(),
                        mobilenumber:mobilenumber.trim(),
                        password:password.trim(),
                        created:String(new Date()),
                        updated:String(new Date()),
                    }
                    await firestore()
                    .collection('Users')
                    .add(userData)
                    .then(resp=>{
                        Snackbar.show({
                            text: 'you have created account successfully',
                            duration: Snackbar.LENGTH_SHORT,
                            backgroundColor:'green',
                            textColor:'#fff'
                          });
                          navigate.navigate('Homepage')
                    }).catch(error=>console.log(error));
    
                }
                else
                {
                    setErrorText('invalid phone number')
                }
            }
                else{
                    setErrorText('invalid email')
                }
                }
                else
                {
                    Snackbar.show({
                        text: 'this username already exists try using another 1',
                        duration: Snackbar.LENGTH_SHORT,
                        backgroundColor:'red',
                        textColor:'#fff'
                      });

                }

                 })

     
        }
        else
        { 
              
           setErrorText('password doesnt match');
}
        }
        else
        {
            setErrorText('fill all the coloumns')
        }
       
    };
    const handleGoToLogin=()=>
    {
        navigate.navigate('login')

    }

    
    return(
    <View style={responsiveStyle.container}>
        <Image source={require('../../../images/topBg.jpg')} style={responsiveStyle.topBg}/>
    <ScrollView style={responsiveStyle.ScrollView}>
    <Image source={require('../../../images/logo.webp')} style={responsiveStyle.logo}/>
<Text style={responsiveStyle.loginText}>Signup Account</Text>
{errorText!==null?<View style={{marginTop:15}}>
    <Text style={responsiveStyle.errorText}>{errorText}
    </Text>
    </View>:null}
<CustomTextInput type="username" handleText={text=>setUsername(text)}placeholder={'username'} />

<CustomTextInput type="email" handleText={text=>setEmail(text)}placeholder={'email'} />
<CustomTextInput type="phone" handleText={text=>setMobileno(text)}placeholder={'mobile no'} />

<CustomTextInput type="password" handleText={text=>setPassword(text)} placeholder={'password'}/>
<CustomTextInput type="password" handleText={text=>setCPassword(text)} placeholder={'confirm password'}/>  
<CustomButton type="primary" handleButtonPress={handleSignup} buttonText={'Sign Up'}/>
<Text onPress={handleGoToLogin}style={responsiveStyle.createNew}> Go to  Login</Text>
<View style={responsiveStyle.dashContainer}>
    <View style={responsiveStyle.overflow}>
        <View style={responsiveStyle.dashedView}/>
    </View>
    <View 
     style={responsiveStyle.dashedTextView}>
     <Text
      style={responsiveStyle.dashedText}>Or Signup With</Text>
      </View>
</View>
<CustomButton type="secondery" 
handleButtonPress={handleGotoGoogleLogin} 
icon={require('../../../images/search.png')}
buttonText={'sign in with google'}/>

</ScrollView>
</View>
    )}
export default Signup