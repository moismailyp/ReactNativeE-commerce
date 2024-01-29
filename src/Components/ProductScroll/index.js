import { useState,useEffect } from "react"
import { View,Text, Image, TouchableOpacity } from "react-native"
import { useDimensions } from "../../Context"
import style from "./style"
import { FlatList } from "react-native-gesture-handler"
import CommonHeader from "../Common/CommonHeader"
import SectionHeader from "../CommonSectionHeader"
import firestore from '@react-native-firebase/firestore';
import { useNavigation, useRoute } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { updateCartCount } from "../../Storage/action"


const ProductScroll=(props)=>{
    const {height,width}=useDimensions()
    const responsiveStyle=style(height,width)
    const [products,setProducts]=useState([])
    const navigation=useNavigation()
    const {isNavigationNeeded}=props;
    const dispatch=useDispatch()
    const {userId,cartCount}=useSelector(state=>state);    
const route=useRoute();
    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts=async()=>{
        await firestore().collection('Products').get()
        .then((snapshot)=>{
            if(snapshot.empty)
            {
                console.log('it is empty');
            }
            else
            {
                const result=[];
                snapshot.docs.forEach(doc=>{
                    if(doc.exists)
                    {
                        const responseData={id:doc.id,...doc?.data()}
                        result.push(responseData)
                    }

                })
                setProducts(result)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const handleProductDetails=(item)=>{
        if(route.name=='ProductDetails')
        {
            isNavigationNeeded(true,item)

        }
        else
        {
            navigation.navigate('ProductDetails',{Product:item});
        }
    }
    const handleAddToCart=async(item)=>{
        await firestore().collection('Cart').where('userId','==',userId).where('productId','==',item.id).get()
        .then(snapshot=>{
            if(snapshot.empty)
            {
                firestore().collection('Cart').add(
                    {
                        created:Date.now() ,
                        description:item.description,
                        name:item.name,
                        price:item.price,
                        quantity:1,
                        userId:userId,
                        productId:item.id,
                        image:item.image,
                    }
                )
                dispatch(updateCartCount(cartCount+1))


            }
            else
            {
                firestore().collection('Cart').doc(snapshot?.docs[0].id).update({
                    quantity:parseInt(snapshot?.docs[0].data().quantity)+1,
                })
            }
        })  }

    return(
        <View style={responsiveStyle.container}>
            <SectionHeader head={'Newly Added'} content={'pay less,get more '} rightText={'See All'}/>
            <View>
                <FlatList data={products} 
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index})=>{
                    return(
                        <TouchableOpacity onPress={()=>handleProductDetails(item)} style={{width:150,height:270,padding:15,marginRight:15,marginVertical:15,borderRadius:20,borderWidth:1,borderColor:'black'}}>
                            <Image style={{width:25,height:25,resizeMode:'contain',alignSelf:'flex-end'}} source={require('../../images/heart.png')}/>
                            <Image style={{width:50,height:50,resizeMode:'contain',alignSelf:'center',marginVertical:10}} source={{uri:item.image}}/>
                            <Text style={{fontFamily:'Lato-Black',fontSize:20,}} numberOfLines={1}>{item.name}</Text>
                            <Text style={{fontFamily:'Lato-Regular',fontSize:17}}numberOfLines={2}>{item.description}</Text>
                            <View style={{flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'space-between',
                        marginTop:20
                        }}>
                                <Text style={{fontFamily:'Lato-Regular',fontSize:20}}>{item.price}</Text>
                                <TouchableOpacity onPress={()=>handleAddToCart(item)} style={{padding:5,backgroundColor:'black',borderRadius:5}}><Text style={{fontFamily:'Lato-Regular',fontSize:20,color:'white'}}>+</Text></TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )

                }}
                ></FlatList>
            </View>
        </View>
    )
}
export default ProductScroll;