
import React,{useState} from "react";
import { View,Text, ScrollView, Image } from "react-native";
import CustomTextInput from "../../Common/CustomTextInput";
import firestore from '@react-native-firebase/firestore';
import style from "./style";
import CustomButton from "../../CustomButton";
import { useNavigation } from "@react-navigation/native";
import Snackbar from "react-native-snackbar";
import { validateEmail } from "../../Common/validation";
import { useDimensions } from "../../../Context";
import colors from "../../Common/colors";
import { useDispatch } from "react-redux";
import { login } from "../../../Storage/action";

const Login=()=>{
    const navigate=useNavigation()
    const {height,width}=useDimensions();
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const responsiveStyle=style(height,width)
    const dispatch=useDispatch()
    const handleLogin=async()=>{
        if(username.trim()===''&&password.trim()==='')
        {
            Snackbar.show({
                text: 'please fill up the coloumns',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor:'#000',
                textColor:'#fff'
              });
        }
        else
        if(validateEmail(username))
        {
        {
            await firestore()
            .collection('Users')
            .where('email','==',username.trim())
            .get()
            .then(async snapshot=>{
                if (snapshot.empty)
                {  Snackbar.show({
                    text: 'user doesnt exist',
                    duration: Snackbar.LENGTH_SHORT,
                    backgroundColor:'#000',
                    textColor:'red'
                  });

                }
                else
                { snapshot.forEach(snapshotData=>{
                    const snapdata=  snapshotData.data()
                    if(password.trim()===snapdata.password)
                    {Snackbar.show({
                        text: 'login success',
                        duration: Snackbar.LENGTH_SHORT,
                        backgroundColor:colors.green,
                        textColor:'white'
                      });
                      const id=snapshotData.id;
                      dispatch(login({
                        firstName:snapdata.firstName,
                        lastName:snapdata.lastName,
                        email:snapdata.email,
                        mobileNumber:snapdata.mobilenumber,
                        profileImage:snapdata.profileimage,
                        userId:id,
                    }))
                       console.warn(snapdata);

                      navigate.navigate('DrawerApp')
                        
                        
                    }
                    else
                    {
                        Snackbar.show({
                            text: 'wrong password',
                            duration: Snackbar.LENGTH_SHORT,
                            backgroundColor:'#000',
                            textColor:'red'
                          });
                    }
                })
                }

            })
            .catch(error=>
                {
                    console.warn(error)
                })

        }
    }
    else{
        Snackbar.show({
            text: 'enter valid email',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor:'#000',
            textColor:'#fff'
          });

    }

    }
    const navigateToSignup=()=>
    {
        navigate.navigate('signup')
    }
    const handleGotoGoogleLogin=()=>
    {
        navigate.navigate('Logingoogle')
    }
    const handleGotoPhoneLogin=()=>
    {
        navigate.navigate('Loginphone')
    }
    
    return(
    <View style={responsiveStyle.container}>
        <Image source={require('../../../images/topBg.jpg')} style={responsiveStyle.topBg}/>
    <ScrollView style={responsiveStyle.ScrollView}>
    <Image source={require('../../../images/logo.webp')} style={responsiveStyle.logo}/>
<Text style={responsiveStyle.loginText}>Login Account</Text>
<CustomTextInput type="email" handleText={text=>setUsername(text)}placeholder={'email'} />
<CustomTextInput type="password" handleText={text=>setPassword(text)} placeholder={'password'}/>
<CustomButton type="primary" handleButtonPress={handleLogin} buttonText={'sign in'}/>
<Text  onPress={navigateToSignup}style={responsiveStyle.createNew}> if you are new create new</Text>
<View style={responsiveStyle.dashContainer}>
    <View style={responsiveStyle.overflow}>
        <View style={responsiveStyle.dashedView}/>
    </View>
    <View 
     style={responsiveStyle.dashedTextView}>
     <Text
      style={responsiveStyle.dashedText}>Or Login With</Text>
      </View>
</View>
<CustomButton type="secondery" 
handleButtonPress={handleGotoPhoneLogin}
icon={require('../../../images/smartphone.png')} 
buttonText={'sign in with phone'}/>
<CustomButton type="secondery" 
handleButtonPress={handleGotoGoogleLogin} 
icon={require('../../../images/search.png')}
buttonText={'sign in with google'}/>
</ScrollView>
<View style={responsiveStyle.footer}><Text style={responsiveStyle.footerText}>Login as a Guest</Text></View>
</View>
    )}
export default Login