import { useEffect } from 'react';
import {Text,View,Image, TouchableOpacity} from 'react-native';
import { useDimensions } from '../../Context';
 import style from './style';
import { useDispatch, useSelector } from 'react-redux';
import { UseDispatch } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { updateCartCount } from '../../Storage/action';
const CustomFooter=({state,description,navigation})=>{
const {isPortrait,height,width}=useDimensions()
const responsiveStyle=style(height,width,isPortrait)
const dispatch=useDispatch()

const {cartCount,userId}=useSelector(state=>state);
useEffect(()=>
{
    getProducts();

} ,[])

const getProducts=async()=>{
    await firestore().collection('Cart').where('userId','==',userId).get()
    .then((snapshot)=>{
       dispatch(updateCartCount(snapshot.size))

            })
           
  
    .catch((error)=>{
        console.log(error)
    })
}


    return(
        <View style={responsiveStyle.container}>
            {state.routes.map((route,index)=>{
                const icon=route.name==='home'?require('../../images/home.png')
                :route.name==='cart'?require('../../images/cart.png')
                :route.name==='category'?require('../../images/category.png')
                :route.name==='search'?require('../../images/search-.png')
              :require('../../images/offer.png')
              const isFocused=state.index===index;

                return(
                    <TouchableOpacity onPress={()=>navigation.navigate(route.name)} key={index}style={responsiveStyle.buttonIcon} >
                        {route.name==='cart'?<View style={responsiveStyle.cartCount}  ><Text style={responsiveStyle.cartCountText}>{cartCount}</Text></View>:null}

                        {isFocused?<Text style={responsiveStyle.dot}>.</Text>:null}

                                            <Image style={responsiveStyle.icon} source={icon}></Image>

                    <Text style={responsiveStyle.text} >{route.name}</Text>
                    </TouchableOpacity>)

            })}
            {/* <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'black'}} >Category</Text>
            <Image style={{width:40,height:40,resizeMode:'contain'}} source={require('../../images/category.png')}></Image>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'black'}} >Search</Text>
            <Image style={{width:40,height:40,resizeMode:'contain'}} source={require('../../images/search-.png')}></Image>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'black'}} >Offer</Text>
            <Image style={{width:40,height:40,resizeMode:'contain'}} source={require('../../images/offer.png')}></Image>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'black'}} >Cart</Text>
            <Image style={{width:40,height:40,resizeMode:'contain'}} source={require('../../images/cart.png')}></Image>
            </View> */}
    </View>
) }
export default CustomFooter;