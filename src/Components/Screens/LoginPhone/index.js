
import React,{useState} from "react";
import { View,Text, ScrollView, Image } from "react-native";
import CustomTextInput from "../../Common/CustomTextInput";
import style from "./style";
import CustomButton from "../../CustomButton";
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import { handleValidateOtp, handleValidatePhoneNumber } from "./controller";
import Snackbar from "react-native-snackbar";
import { useDimensions } from "../../../Context";


const Loginphone=()=>{
    const navigate=useNavigation()
    const [phoneNumber,setPhoneNumber]=useState('')
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
    const [showOtpField,setShowOtpField]=useState(false)
    const [error,setError]=useState(null)
    const [password,setPassword]=useState('')
    const {height,weight}=useDimensions()
    const responsiveStyle=style(height,weight)
    const handleButtonPress=async()=>{
        console.warn(phoneNumber)
        try{
            setError('')
            if(handleValidatePhoneNumber(phoneNumber.trim()))
            {
                const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
                if(confirmation)
                {
                    setConfirm(confirmation)
                    setShowOtpField(true)
                }
            }
            else
            {
                setError('invalid phone number')

            }
     
    }
    catch(error)
    {
        setError('invalid phone number ')
        console.warn(error)
    }
        
    }
  
    
      async function confirmCode() {
        try {
            if(code!==handleValidateOtp(code))
            {
                const res= await confirm.confirm(code);
         if (res)
         {
            Snackbar.show({
                text: 'otp is verified',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor:'green',
                textColor:'#fff'
              });
              navigate.navigate('Homepage')
         }

            }
            else
        {
            Snackbar.show({
                text: 'otp is verified',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor:'green',
                textColor:'#fff'
              });


        }
         
         console.warn(res);
        } catch (error) {
            Snackbar.show({
                text: 'wrong otp',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor:'green',
                textColor:'#fff'
              });
        }
      }
    
    const navigateToSignup=()=>
    {
        
    }
    
    return(
    <View style={responsiveStyle.container}>
        <Image source={require('../../../images/topBg.jpg')} style={responsiveStylele.topBg}/>
    <ScrollView style={responsiveStyle.ScrollView}>
    <Image source={require('../../../images/logo.webp')} style={responsiveStyle.logo}/>
<Text style={responsiveStyle.loginText}>Login With Phone</Text>
{error!==null&&<Text style={responsiveStyle.errorText}>{error}</Text>}
<CustomTextInput type="phone" handleText={text=>setPhoneNumber(text)}placeholder={'mobile number'} />
{showOtpField?
<CustomTextInput type="otp" handleText={text=>setCode(text)}placeholder={'enter otp'} />:null}
<CustomButton type="primary" handleButtonPress={showOtpField?confirmCode:handleButtonPress} buttonText={showOtpField?'submit otp':'login with phone'}/>
<Text  onPress={navigateToSignup}style={responsiveStyle.createNew}> Goto Login</Text>


</ScrollView>
</View>
    )}
export default Loginphone