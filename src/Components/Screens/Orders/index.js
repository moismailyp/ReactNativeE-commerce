import { useEffect } from "react";
import { View,Text, Image, TouchableOpacity } from "react-native";
import { useDimensions } from "../../../Context";
import CustomSearch from "../../Common/CustomSearchBar";
import style from "./style";
import colors from "../../Common/colors";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import CommonHeaderLeft from "../../Common/CommonLeftHeader";
const Orders=()=>{
    const {height,width}=useDimensions()
    const responsiveStyle=style(height,width)
    const navigation=useNavigation()
    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=> <CommonHeaderLeft type={'toggle'}/>
           
            
        })
      
    },[])
  
    const ordersArray=[{
        id:1,
        OrderId:'AS453D',
        orderDate:'15/03/2022',
        address1:'1000 Ellis st,San Fransisco,CA',
        address2:'94115,usa',
        price:'677',
        quantity:'5',
    }]

    return(
        <View style={responsiveStyle.container}>
<CustomSearch filter={true}/>
    <FlatList data={ordersArray} keyExtractor={(index)=>{String(index)}} showsVerticalScrollIndicator={false} renderItem={({item,index})=>{
        return( 
        <TouchableOpacity style={responsiveStyle.flatView}>
        <View style={responsiveStyle.innerView}>
            <View>
                <Text style={responsiveStyle.orderId}>{item.OrderId}</Text>
                <Text style={responsiveStyle.orderDate}>ordered on {item.orderDate}</Text>
                <Text style={responsiveStyle.address1}>{item.address1}</Text>
                <Text style={responsiveStyle.address1}>item.address2</Text>
                <Text style={responsiveStyle.address1}>
                    Paid:<Text style={responsiveStyle.priceText}> {item.price}</Text>  Items:<Text style={responsiveStyle.quantity}>{item.quantity}</Text>
                </Text>




                </View>
           <Image source={require('../../../images/map.jpg')} style={responsiveStyle.mapImage}/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',
        alignItems:'center',marginTop:15}}>
            
                <Text style={responsiveStyle.orderStatus}>Order Shipped</Text>
                <Text style={responsiveStyle.rateAndReview}>rate and review products</Text>
                
        </View>
   
    </TouchableOpacity>

        )
    }}>
       
        </FlatList>
        </View>
    )
}
export default Orders