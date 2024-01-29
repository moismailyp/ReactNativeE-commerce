import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { View,Text,Image,TouchableOpacity,FlatList } from "react-native";
import { useDimensions } from "../../../Context";
import style from "./style";
import CommonHeaderLeft from "../../Common/CommonLeftHeader";
import { useSelector } from "react-redux";
const WishList=()=>{
    const {height,width,isPortrait}=useDimensions()
    const responsiveStyle=style(height,width,isPortrait)
    const {cartCount}=useSelector(state=>state)
    const navigation=useNavigation()
  useEffect(()=>{
    navigation.setOptions({
        headerRight:()=>{
            return(<TouchableOpacity>
                <View style={responsiveStyle.cartCount}><Text style={responsiveStyle.count}>{cartCount}</Text></View>
               <Image source={require('../../../images/cart.png')} style={responsiveStyle.cartImage}></Image>
               </TouchableOpacity>
            )
        }
    ,
  headerLeft:()=><CommonHeaderLeft  type={'toggle'}/>,
  headerTitleAlign:'left',
  headerTitleStyle:{fontFamily:'Lato-Bold',fontSize:22},});},[]);
  
  const wishItems=[{
    id:1,
    image:require('../../../images/lemon.png'),
    title:'Lemon',
    description:'feshly direct from farms',
    off:'50%',
    price:'13.00',
  },
  {
    id:2,
    image:require('../../../images/lemon.png'),
    title:'Lemon',
    description:'feshly direct from farms',
    off:'50%',
    price:'13.00',
  },
  {
    id:3,
    image:require('../../../images/lemon.png'),
    title:'Lemon',
    description:'feshly direct from farms',
    off:'50%',
    price:'13.00',
  },
  {
    id:4,
    image:require('../../../images/lemon.png'),
    title:'Lemon',
    description:'feshly direct from farms',
    off:'50%',
    price:'13.00',
  },
  {
    id:5,
    image:require('../../../images/lemon.png'),
    title:'Lemon',
    description:'feshly direct from farms',
    off:'50%',
    price:'13.00',
  },
]
    return(
        <View style={responsiveStyle.container}>
            <FlatList data={wishItems} keyExtractor={(index)=>{String(index)}} renderItem={({index,item})=>{
                return(
            <View style={responsiveStyle.ProductView }>
                <View style={responsiveStyle.removeView}><Image source={require('../../../images/delete.png')} style={responsiveStyle.remove}></Image></View>
            <Image source={require('../../../images/lemon.png')} style={responsiveStyle.productImage}></Image>
            <View style={responsiveStyle.secondView}>
            <Text style={responsiveStyle.title}>Lemon</Text>
            <Text style={responsiveStyle.desc} numberOfLines={2}>Freshly Direct from farms</Text>
            <View style={responsiveStyle.bottomView}>
            <Text style={responsiveStyle.price}>13.00</Text>
            <View style={responsiveStyle.offView}>
                        <Text style={responsiveStyle.offText}>50% OFF</Text>
                    </View>
                    <View style={responsiveStyle.cartView}>
                        <Text style={responsiveStyle.cartText}>Add To Cart</Text>
                    </View>
                </View>
            </View>
            <View style={responsiveStyle.removeView}><Image source={require('../../../images/delete.png')} style={responsiveStyle.remove}></Image></View>

           </View>
     ) }}/>
        </View>
    )
}
export default WishList