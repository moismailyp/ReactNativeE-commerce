import React,{useCallback, useEffect,useState} from "react";
import { View,Text,ScrollView,Image, FlatList, TouchableOpacity } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import style from "./style";
import { useDimensions } from "../../../Context";
import firestore from '@react-native-firebase/firestore';
import { FieldValue } from '@react-native-firebase/firestore';
import Snackbar from "react-native-snackbar";
import CustomButton from "../../CustomButton";
import colors from "../../Common/colors";
import OrderTotal from "./OrderTotal";
import CommonButton from "../../Common/CommonButton";
import CommonHeaderLeft from "../../Common/CommonLeftHeader";
import { useDispatch, useSelector } from "react-redux";
import { updateCartCount } from "../../../Storage/action";
import { validateMobileNumber } from "../../Common/validation";
const Cart=()=>
{
    const{height,width,isPortrait}=useDimensions()
    const responsiveStyle=style(height,width,isPortrait)
    const {userId,cartCount,mobileNumber,email}=useSelector(state=>state)
     const [products,setProducts]=useState([])
    const [total,setTotal]=useState(0)
    const [charges,setCharges]=useState(50)

    const navigation=useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=> <CommonHeaderLeft />
        })
      
    },[])
    useEffect(()=>{
        if(products.length>0)
        {
            setCharges(50)
        }
        else{
            setCharges(0)
            setTotal(0)
        }
    },[products])

    useFocusEffect(useCallback(()=>
    {
        getProducts();

    } ,[]))
    useEffect(() => {
        // Recalculate the total amount whenever products change
        const calculateTotalAmount = () => {
            let updatedTotalAmount = 0;
            products.forEach((product) => {
                const price = parseFloat(product.price);
                const quantity = parseFloat(product.quantity);

                if (!isNaN(price) && !isNaN(quantity)) {
                    updatedTotalAmount += price * quantity;
                } else {
                    console.error('Invalid price or quantity:', price, quantity);
                }
            });

            setTotal(updatedTotalAmount);
        };

        // Call the function to calculate total amount
        calculateTotalAmount();
    }, [products]);
    const getProducts=async()=>{
        await firestore().collection('Cart').where('userId','==',userId).get()
        .then((snapshot)=>{
            if(snapshot.empty)
            {
                const  result = [];
                setProducts(result)
                let totalAmount = 0;
                setTotal(totalAmount)
            }
            else
            {
                const result=[];
                let totalAmount=0;
                snapshot.docs.forEach(doc=>{
                    if(doc.exists)
                    {
                        const price = parseFloat(doc.data().price); 
                        const quantity = parseFloat(doc.data().quantity);
                        if (!isNaN(price) && !isNaN(quantity)) {
                            const amount = price * quantity;
                            console.warn(amount, 'amount');
    
                            totalAmount += amount;
    
                           
                        } else {
                            console.error('Invalid price or quantity:', price, quantity);
                        }
                        const responseData={id:doc.id,...doc?.data()}
                        result.push(responseData)
                    }

                })
                setTotal(totalAmount)
                setProducts(result)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  const handleButtonPress=()=>{
    if(products.length>0)
    {if (email===''||mobileNumber==='')
    {
        navigation.navigate('Account')
        Snackbar.show({
            text: 'complete your account to continue',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor:'#000',
            textColor:'red'
          });

    }
    else
    {
        navigation.navigate('AddAddress',{products:products,total:total,charges:charges})

    }


    }
    else
    {

        Snackbar.show({
            text: 'your cart is empty',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor:'#000',
            textColor:'red'
          });
    }
  }
    return(
        <View style={responsiveStyle.container}>
             <FlatList data={products}  ListEmptyComponent={()=>{
                return(
                    <View style={{justifyContent:'center',
                alignItems:'center',alignSelf:'center',padding:20}}><Text style={{fontFamily:'Lato-Bold',color:colors.greenTop,fontSize:50}}>Cart is empty</Text></View>
                )
             }} renderItem={({item,index})=><RenderItem item={item}setProducts={setProducts} index={index}  callReload={getProducts}/>} showsVerticalScrollIndicator={false}
                        ListFooterComponent={()=>{
                            return(<>
                                <View style={responsiveStyle.renderView}>
                    <View style={ responsiveStyle.offCircleView}>
                       <View style={responsiveStyle.abc}></View>
                       <View style={responsiveStyle.abc}></View>
                     <View style={responsiveStyle.abc}></View>
                    <View style={responsiveStyle.abc}></View>
                </View>
                
                <View style={{width:'65%',height:100,backgroundColor:'#dadada',padding:20}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontFamily:'Lato-Bold',color:colors.greenTop,fontSize:50}}>67</Text>
                        <View>
                            <Text style={{fontFamily:'Lato-Regular',color:colors.greenTop,fontSize:16}}>%</Text>
                            <Text style={{fontFamily:'Lato-Regular',color:colors.greenTop,fontSize:16}}>Off</Text>
                        </View>
                        <View>
                        <Text style={{fontFamily:'Lato-Bold',color:'black',fontSize:16}}>on your first order</Text>
                        <Text style={{fontFamily:'Lato-Bold',color:'black',fontSize:12}}>on orders above 999</Text>
                        </View>

                    </View>
                </View>
                <View style={{justifyContent:'space-between',height:100,backgroundColor:'#dadada'}}>
                <View style={{width:25,height:25,borderRadius:25/2,backgroundColor:'white',marginTop:-25/2}}></View>
                    <View style={{width:25,height:25,borderRadius:25/2,backgroundColor:'white',marginBottom:-25/2}}></View>
                </View>
                <View style={{width:'25%',height:100,backgroundColor:'#dadada',justifyContent:'center',alignItems:'center',paddingVertical:15,paddingRight:15}}>
                    <Text style={{fontFamily:'Lato-Bold',color:'black',fontSize:12}}>useCode</Text>
                    <View style={{marginVertical:10,padding:5,justifyContent:'center',borderRadius:15,backgroundColor:colors.green,overflow:'hidden'}}>
                        <Text style={{fontFamily:'Lato-Regular',color:'white',fontSize:14,textAlign:'center'}}>RTF56E</Text>
                    </View>
                </View>
                {/* end design */}
                <View style={{marginLeft:-25/2}}>
                    <View style={responsiveStyle.abc}></View>
                    <View style={responsiveStyle.abc}></View>
                    <View style={responsiveStyle.abc}></View>
                    <View style={responsiveStyle.abc}></View>
                </View>
                </View>   
                <OrderTotal products={products} total={cartCount!==0?total:0} charges={charges} />
                <CustomButton buttonText={'Checkout'} handleButtonPress={handleButtonPress}/>
                            
                            </>
                                
                            )
                        }}
                        />
                         
        </View>
    )
}
const RenderItem=({item,index,callReload,setProducts})=>{
    const {height,width}=useDimensions()
    const responsiveStyle=style(height,width)
    const [quantity,setQuantity]=useState(item.quantity)
    const {userId,cartCount}=useSelector(state=>state)
    const dispatch=useDispatch()
    const navigation=useNavigation()

    useEffect(()=>{
        setQuantity(item.quantity)
    },[item])
    const handleAddToCart=async()=>{
        console.warn
        const snapshot= await firestore().collection('Cart').where('userId','==',userId).where('productId','==',item.productId).get()
      
            if(snapshot.empty)
            {
               await firestore().collection('Cart').add(
                    {
                        created:Date.now(),
                        description:item.description,
                        name:item.name,
                        price:item.price,
                        quantity:quantity,
                        userId:userId,
                        productId:item.id,
                        image:item.image,
                    }
                )

            }
            else
            {
             await firestore().collection('Cart').doc(snapshot?.docs[0].id).update({
                    quantity:parseInt(snapshot?.docs[0].data().quantity,10)+1})

            }
            callReload();

      }
 const removeItem = async () => {
    const cartDocRef = firestore().collection('Cart').doc(item.id);

    try {
        // Check the current quantity in the Firestore document
        const cartDoc = await cartDocRef.get();
        const currentQuantity = cartDoc.data().quantity;

        console.warn('Current Quantity:', currentQuantity);

        if (currentQuantity <= 1) {
            // If quantity is 1 or less, delete the item
            console.log('Deleting item...');
            await cartDocRef.delete();
            console.log('Item deleted!');
            callReload();
            dispatch(updateCartCount(cartCount - 1));
            setProducts((prevProducts) => prevProducts.filter((product) => product.id !== item.id));
        } else {
            // If quantity is greater than 1, decrement the quantity
            console.log('Updating quantity...');
            setQuantity(currentQuantity - 1);
            await cartDocRef.update({
                quantity: FieldValue.increment(-1),
            });
            console.log('Quantity updated!');
            callReload();
        }
    } catch (error) {
        console.error('Error removing item:', error);
    }
};

            const handleNavigationProductDetails=()=>{
                navigation.navigate('ProductDetails',{Product:item})
            }
           

    return(
        <TouchableOpacity onPress={handleNavigationProductDetails} style={responsiveStyle.productView}>
        <Image style={responsiveStyle.productImage} source={{uri :item.image}}/>
        <View style={responsiveStyle.nameView}>
        <Text style={responsiveStyle.nameText} numberOfLines={1}>{item.name}</Text>
        <Text style={responsiveStyle.contentText}numberOfLines={2}>{item.description}</Text>
        <View style={responsiveStyle.priceView}>
        <View style={responsiveStyle.priceView2}>

            <Text style={responsiveStyle.priceText}>{item.price}</Text>
            <View style={responsiveStyle.offView}>
            <Text style={responsiveStyle.offText}>43</Text></View>
        </View>
        <View style={responsiveStyle.qunView}> 
        <TouchableOpacity onPress={removeItem}>
            <Text style={responsiveStyle.qunText1}>-</Text></TouchableOpacity>
            <Text style={responsiveStyle.qunText2}>{quantity}</Text>
           <TouchableOpacity onPress={()=>{setQuantity(quantity+1),handleAddToCart()}}>
            <Text style={responsiveStyle.qunText1}>+</Text>
            </TouchableOpacity>
        </View>
        </View>
        
        </View>

    </TouchableOpacity>
    )

}
export default Cart;