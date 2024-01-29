import {View,Image,Text, ScrollView, TouchableOpacity}from "react-native"
import {useEffect, useState} from"react";
import { useDimensions } from "../../../Context";
import style from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';
import CommonHeaderLeft from "../../Common/CommonLeftHeader";
import CommonHeaderRight from "../../Common/CommonHeaderRight";
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import StarRating from 'react-native-star-rating-widget';
import colors from "../../Common/colors";
import MoreInfo from "./Components/MoreInfo/moreInfo";
import ExtraInfo from "./Components/ExtraInfo/extrainfo";
import ProductReview from "./Components/ProductReview";
import DeliveryInfo from "./Components/DeliveryInfo";
import ProductScroll from "../../ProductScroll";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCartCount } from "../../../Storage/action";
const ProductDeatails=()=>{
    const{height,width,isPortrait}=useDimensions()
    const [rating,setRating]=useState (0)
    const scrollRef=useRef(null)
    const responsiveStyle=style(height,width,isPortrait)
    const navigation=useNavigation()
    const route=useRoute()
    const {Product}=route.params;
    const [quantity,setQuantity]=useState(0)
    const [productDetails,setProductDetails]=useState({})
    const {userId,cartCount}=useSelector(state=>state)
    const dispatch=useDispatch()
    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=><CommonHeaderLeft/>,
            headerRight:()=><CommonHeaderRight type={'cart'} share={true}/>,
            title:'',
        })
    },[])
   const handleQuantity=(type)=>{
    if(type==='plus')
    {
     setQuantity(quantity+1)   
    }
    else
    {
        if(quantity===1)
        {
            return;
        }
        else
        {
            setQuantity(quantity-1)
        }
    }
   }

    useEffect(()=>{
setProductDetails(Product)
    },[Product])
    const navigationNeeded=(value,item)=>{
        if(value)
       { 
        scrollRef.current.scrollTo({x:0,y:0,animated:true})
        setProductDetails(item)
        }
    }
    

    const handleAddToCart=async()=>{
        await firestore().collection('Cart').where('userId','==',userId).where('productId','==',productDetails.id).get()
        .then(snapshot=>{
            if(snapshot.empty)
            {
                firestore().collection('Cart').add(
                    {
                        created:Date.now() ,
                        description:productDetails.description,
                        name:productDetails.name,
                        price:productDetails.price,
                        quantity:quantity,
                        userId:userId,
                        productId:productDetails.id,
                        image:productDetails.image,
                    }
                )
                dispatch(updateCartCount(cartCount+1))


            }
            else
            {
                firestore().collection('Cart').doc(snapshot?.docs[0].id).update({
                    quantity:parseInt(snapshot?.docs[0].data().quantity)+quantity,
                })
            }
        })  }

        
    
    return( <View>
        <ScrollView ref={scrollRef}>
            <View style={responsiveStyle.heart}>
            <AntDesign name="hearto" size={50} color={colors.darkGreen}/>
            </View>
            <Image source={{uri :productDetails.image }} style={responsiveStyle.proImage}  />
            <View style={responsiveStyle.mainView}>
                <View style={responsiveStyle.padding}>
                <Text style={responsiveStyle.name}>{productDetails.name}</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <StarRating
        rating={rating}
        onChange={setRating}
      />
      <Text style={{color:'#dadada',marginRight:10,fontFamily:'Lato-Regular',fontSize:20}}> (1 rating)</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
         <Text style={responsiveStyle.price} >₹{parseFloat(productDetails.price).toFixed(2)}</Text>
         <Text style={{color:'#dadada',fontFamily:'Lato-Regular',fontSize:18,color:colors.green}}>  45% 0ff</Text>
      </View>
      <MoreInfo/>
      <View style={{borderBottomWidth:1,borderBottomColor:'#dadada',paddingVertical:10}}>
                <Text style={responsiveStyle.descriptionHead}>Product details</Text>
                <Text style={responsiveStyle.description}>{productDetails.description}</Text>
                </View>
                <ExtraInfo/>
                <ProductReview Product={productDetails}/>
                <DeliveryInfo/>
                </View>
                <ProductScroll isNavigationNeeded={navigationNeeded}/>
                </View>
    
        </ScrollView>
        <View style={{
            position:'absolute',
            bottom:20,
            alignSelf:'center',
            padding:10,
            borderRadius:8,
            backgroundColor:colors.green,
            justifyContent:'space-between',
            flexDirection:'row',
            alignItems:'center',
            width:'85%',
            
              }}>
                
                <View style={{padding:10,
                    borderRadius:8,
                    backgroundColor:colors.white,
                    justifyContent:'center',
                    flexDirection:'row',
                    alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>handleQuantity('minus')}>
                <AntDesign name="minus" size={25} color={colors.green}/></TouchableOpacity>
                <Text style={{color:colors.green,fontFamily:'Lato-Black',fontSize:25,marginHorizontal:10}}>{quantity}</Text>
                <TouchableOpacity onPress={()=>handleQuantity('plus')}>
                <AntDesign name="plus" size={25} color={colors.green}/>
                </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleAddToCart}>
                <Text style={{color:'white',fontFamily:'Lato-Black',fontSize:22}}>Add to cart</Text>
                </TouchableOpacity>


          
              </View>
                </View>

    )
}
export default ProductDeatails;