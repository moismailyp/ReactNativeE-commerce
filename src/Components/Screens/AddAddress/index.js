import { useEffect,useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View,Text } from "react-native";
import { useDimensions } from "../../../Context";
import RazorpayCheckout from 'react-native-razorpay';
import CommonButton from "../../Common/CommonButton";
import CommonHeaderLeft from "../../Common/CommonLeftHeader";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import style from "./style";
import { useSelector } from "react-redux";
import { TextInput } from "react-native-gesture-handler";
navigator.geolocation = require('@react-native-community/geolocation')
const AddAddress=()=>{
    const {height,width,isPortrait}=useDimensions()
    const responsiveStyle=style(height,width,isPortrait)
    const {userId,cartCount,mobileNumber,email,firstName,lastName}=useSelector(state=>state)
    const route = useRoute();
    const {products,total,charges}=route.params;
    const [address,setAddress]=useState({})
    const [newPosition,setNewPosition]=useState({})

    const totalAmount=total+charges
    const navigation=useNavigation()
    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=> <CommonHeaderLeft type={'back'} />
        })
    },[])
    const handleButtonPress=()=>{var options = {
        description: 'Credits towards consultation',
        // image: '',
        currency: 'INR',
        key: 'rzp_test_F4BGM3vvBEexVD', // Your api key
        amount: parseInt(total,10)*100 ,
        name: 'foo',
        prefill: {
          email: email,
          contact: mobileNumber,
          name: `${firstName} ${lastName}`
        },
        theme: {color: '#F37254'}
      }
      RazorpayCheckout.open(options).then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      }).catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
    }
    return(
        <View style={responsiveStyle.container}>
                <GooglePlacesAutocomplete placeholder="search location" currentLocation={true} fetchDetails={true}
                currentLocationLabel={'current location'}
                query={
                   { key:'AIzaSyBxr99617iBz0j-ao6GzTTl_Kq0TuvZwg4',
                   language:'en'
                }
                }
                styles={{TextInput:responsiveStyle.textInput}}
                onPress={(data,details)=>{
                    console.warn(data)
                    const location=details?.geometry?.location;
                    const positionData={
                        latitude:location?.lat??0,
                        longitude:location?.lng??0,
                        latitudeDelta:0.0001,
                        longitudeDelata:0.001
                    }
                    setNewPosition(positionData)
                    setAddress(data?.name??data?.description)
                    

                }}
                onFail={(fail)=>{
                  return  console.warn(fail,'fail')
                }}
                onNotFound={(fail)=>{
                  return  console.warn(fail,'fail')
                }}
                />
            <CommonButton buttonText={'Continue to Checkout'}
            handleButtonPress={handleButtonPress}
            />
        </View>
    )
}
export default AddAddress