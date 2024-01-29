import { useEffect } from "react"
import { View,Text } from "react-native"
import colors from "../../../Common/colors"
import { useDimensions } from "../../../../Context"
import style from "./style"


const OrderTotal=({charges,total,products})=>{
    const {height,width,isPortrait}=useDimensions()
    const responsiveStyle=style(height,width,isPortrait)
    console.warn(charges,total);

  
return(
    <View>
    <View style={responsiveStyle.container}>
      
        <View>
            <Text style={responsiveStyle.Head}>Order Details</Text>
            <Text style={responsiveStyle.content}>Bag Total</Text>
            <Text style={responsiveStyle.content}>Bag Savings</Text>
            <Text style={responsiveStyle.content}>Coupon Discount</Text>
            <Text style={responsiveStyle.endContent}>Delivery</Text>
        </View>
        <View style={{alignItems:'flex-end'}}>
        <Text style={responsiveStyle.Head}>.</Text>
            <Text style={responsiveStyle.content}>{parseFloat(total).toFixed(2)}</Text>
            <Text style={[responsiveStyle.contentSavings,{color:colors.greenTop}]}>₹ 0.0</Text>
            <Text style={{fontFamily:'Lato-Regular',fontSize:18,lineHeight:30,color:'#FF0000'}}>Apply Coupon</Text>
            <Text style={{fontFamily:'Lato-Regular',fontSize:18,lineHeight:30,marginBottom:15}}>{parseFloat(charges).toFixed(2)}</Text>
        </View>
       
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'Lato-Bold',fontSize:18,lineHeight:30}}>Order Details</Text>
            <Text style={responsiveStyle.content}>{parseFloat(total+charges).toFixed(2)}</Text>
        </View>

    </View>
)
}
export default OrderTotal