import { View,Text, Image, TouchableOpacity } from "react-native"
import { useDimensions } from "../../Context"
import style from "./style"
import { FlatList } from "react-native-gesture-handler"
import SectionHeader from "../CommonSectionHeader"
import firestore from '@react-native-firebase/firestore';
import { useState,useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { updateCartCount } from "../../Storage/action"
const OfferProducts=()=>{
    const {height,width}=useDimensions()
    const responsiveStyle=style(height,width)
    const [products,setProducts]=useState([])
    const navigation=useNavigation()
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
    
  

    return(
        <View style={responsiveStyle.container}>
            <SectionHeader head={'Say Hello to Offers '} content={'best price ever for all the time'} rightText={'See All'}/>
            <View>
                <FlatList data={products} 
                showsVerticalScrollIndicator={false}
                renderItem={({item,index})=>{
                    return(
                        <RenderItem item={item} index={index}/>
                    )

                }}/>
                   
            </View>
        </View>
    )
}
const RenderItem=({item,index})=>
{
    const navigation=useNavigation();
    const [quantity,setQuantity]=useState(0)
    const {height,width}=useDimensions()
    const responsiveStyle=style(height,width)
    const {userId,cartCount}=useSelector(state=>state)
    const dispatch=useDispatch()
    const handleNavigation=(product)=>{
    
        navigation.navigate('ProductDetails',{Product:product})
      }
  const handleQuantity=(props)=>{
    console.warn(item.id);
        if(props.type==='plus')
        {
     
                setQuantity(quantity+1)
                handleAddToCart(props.item);
            

        }
        else if(props.type==='minus')
        {
            if(quantity===0)
            {
                return;
            }
            else
            {
                setQuantity(quantity-1)

          }
        }
      }
      const handleAddToCart=async(item)=>{
        const snapshot =await firestore().collection('Cart').where('userId','==',userId).where('productId','==',item.id).get()

       
            console.warn('cart',snapshot)
            if(snapshot.empty)
            {
              await  firestore().collection('Cart').add(
                    {
                        created:Date.now(),
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
             await  firestore().collection('Cart').doc(snapshot?.docs[0].id).update({
                    quantity:parseInt(snapshot?.docs[0].data().quantity)+1,})
            }
      
      }
    return(
    <TouchableOpacity onPress={()=>handleNavigation(item)} style={responsiveStyle.productView}>
<Image style={responsiveStyle.productImage} source={{uri :item.image}}/>
<View style={responsiveStyle.nameView}>
<Text style={responsiveStyle.nameText} numberOfLines={1}>{item.name}</Text>
<Text style={responsiveStyle.contentText}numberOfLines={2}>{item.description}</Text>
<View style={responsiveStyle.priceView}>
<View style={responsiveStyle.priceView2}>

    <Text style={responsiveStyle.priceText}>₹{item.price}</Text>
    <View style={responsiveStyle.offView}>
    <Text style={responsiveStyle.offText}>19%</Text></View>
</View>
<View style={responsiveStyle.qunView}> 
  <TouchableOpacity onPress={()=>handleQuantity({type:'minus',item:item})}><Text style={responsiveStyle.qunText1}>-</Text></TouchableOpacity>
    <Text style={responsiveStyle.qunText2}>{quantity}</Text>
  <TouchableOpacity onPress={()=>handleQuantity({type:'plus',item:item})}><Text style={responsiveStyle.qunText1}>+</Text></TouchableOpacity>

</View>
</View>

</View>

</TouchableOpacity>
)}
export default OfferProducts;