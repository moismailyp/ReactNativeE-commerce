import { useEffect,useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View,Text,Image, TouchableOpacity, Modal } from "react-native";
import { useDimensions } from "../../../Context";
import CommonHeaderLeft from "../../Common/CommonLeftHeader";
import CustomTextInput from "../../Common/CustomTextInput";
import ImagePicker from 'react-native-image-crop-picker';
import Snackbar from "react-native-snackbar";
import { useDispatch, useSelector } from "react-redux";
import firestore from '@react-native-firebase/firestore';
import style from "./style";
import CustomButton from "../../CustomButton";
import { validateEmail, validateMobileNumber } from "../../Common/validation";
import { updateProfile } from "../../../Storage/action";
import { updateProfileImage } from "./controller";
const Account=()=>{
    const {firstName,lastName,email,userId,mobileNumber,profileImage}=useSelector(state=>state);
    const {height,width,isPortrait}=useDimensions()
    const dispatch=useDispatch();
    const responsiveStyle=style(height,width,isPortrait)
    const navigation=useNavigation()
    const [fname,setFname]=useState(firstName)
    const [sname,setSname]=useState(lastName)
    const [email1,setEmail]=useState(email)
    const [mobile,setMobile]=useState(mobileNumber)
    const [modal,setModal]=useState(false)
    const [modalChoose,setModalChoose]=useState(false)
    const [userImage,setUserImage]=useState('')
    console.warn(mobileNumber);
    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=> <CommonHeaderLeft type={'toggle'}/>
           
            
        })
       
    },[])
    const handleUpdatedProfile= async()=>
    {
        if(mobile!=='')
        {

         if(validateMobileNumber(mobile.trim()))
            {  
                

                if(validateEmail(email1.trim()))
                {
                    if(fname!==''&&sname!=='')
                    {
                        let newUrl=profileImage;
                        if(userImage!=='')
                        {
                            newUrl= await updateProfileImage(userImage)
                        }
                        await firestore().collection('Users').doc(userId).update(
                            {
                                firstName:fname,
                                lastName:sname,
                                email:email1,
                                mobilenumber:mobile,
                                profileimage:newUrl,
                            }
                        ).then(()=>{
                            Snackbar.show({
                                text: 'profile updated successfully',
                                duration: Snackbar.LENGTH_SHORT,
                                backgroundColor:'green',
                                textColor:'white'
                                 });
                            
                            dispatch(updateProfile({
                                firstName:fname,
                                lastName:sname,
                                email:email1,
                                mobileNumber:mobile,
                                profileImage:newUrl,
                            }))
                    
                        })

                    }
                    else
                    {
                Snackbar.show({
                    text: 'please fill all the coloumns',
                    duration: Snackbar.LENGTH_SHORT,
                    backgroundColor:'red',
                    textColor:'white'
                    });
                    }
                }
                else
                {
                 Snackbar.show({
                        text: 'enter valid Email id',
                        duration: Snackbar.LENGTH_SHORT,
                        backgroundColor:'red',
                        textColor:'white'
                         });

                 }
            }
      
            else
            {
                Snackbar.show({
                    text: 'enter valid phone no',
                    duration: Snackbar.LENGTH_SHORT,
                    backgroundColor:'red',
                    textColor:'white'
                  });

            }

        }
        else
        {
            Snackbar.show({
                text: 'enter valid Phone no',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor:'red',
                textColor:'white'
              })

        }

    }

    const handleOpenImage=()=>{
        setModal(!modal)
    }
    const handleEditImage=()=>{
        setModalChoose(true)
    }
    const handlePickFromGallery=()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            setUserImage(image.sourceURL)
            setModalChoose(false)

            

        }).catch(error=>{
            console.warn(error);
        });

    }
    const handlePickFromCamera=()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            setModalChoose(false)
          }).catch(error=>{
        console.warn(error);
          });

    }
    const imageUrl = userImage === '' ? (profileImage === '' ? require('../../../images/prof.png') : { uri: profileImage }) : { uri: userImage };

    return(
        <View style={responsiveStyle.container}>
            <Text style={responsiveStyle.head}>{firstName}{lastName}</Text>
            <View style={responsiveStyle.userImage}>
                <TouchableOpacity onPress={handleOpenImage}>
                    <Image style={responsiveStyle.image} source={imageUrl}></Image>
                </TouchableOpacity>
                <TouchableOpacity 
                style={responsiveStyle.editTouch}
                onPress={handleEditImage}
                >
                    <Image source={require('../../../images/edit.png')}
                    style={responsiveStyle.edit}
                    ></Image>
                </TouchableOpacity>
            </View>
     <CustomTextInput value={fname} handleText={text =>setFname(text)}/>
     <CustomTextInput value={sname} handleText={text =>setSname(text)}/>
     <CustomTextInput value={email1} handleText={text =>setEmail(text)}/>
     <CustomTextInput value={mobile} handleText={text =>setMobile(text)}/>


            <CustomButton type="primary"
                          handleButtonPress={handleUpdatedProfile}
                          buttonText={'update profile'}
            />
            <Modal visible={modal} onRequestClose={()=>setModal(false)} >
                <View style={responsiveStyle.modalBackGround}>
                    <TouchableOpacity style={responsiveStyle.close} onPress={()=>setModal(false)}> 
                     <Image source={require('../../../images/error.png')}
                    style={responsiveStyle.edit}
                    ></Image></TouchableOpacity>
                <Image source={imageUrl} style={responsiveStyle.bigImage}></Image>
                </View></Modal>

                <Modal visible={modalChoose} onRequestClose={()=>setModalChoose(false)} >
                <View style={responsiveStyle.modalBackGround}>
                   
                    <View style={responsiveStyle.selectBox}>
                    <TouchableOpacity style={responsiveStyle.closeChoose} onPress={()=>setModalChoose(false)}> 
                     <Image source={require('../../../images/error.png')}
                    style={responsiveStyle.edit}
                    ></Image>
                    </TouchableOpacity>
                     <TouchableOpacity style={responsiveStyle.touch} onPress={handlePickFromGallery}><Text style={responsiveStyle.picTouch}>Gallery</Text></TouchableOpacity> 
                     <TouchableOpacity style={responsiveStyle.touch} onPress={handlePickFromCamera}><Text style={responsiveStyle.picTouch}>Camera</Text></TouchableOpacity> 
                    </View>

                </View></Modal>

              
        </View>
    )
}
export default Account