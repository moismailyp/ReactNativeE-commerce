import { View,Text } from "react-native"
import CustomTextInput from "../../../../Common/CustomTextInput";
import style from "./style";
import { useDimensions } from "../../../../../Context";
const DeliveryInfo=()=>{
    const{height,width,isPortrait}=useDimensions()
    const responsiveStyle=style(height,width,isPortrait)
    return(
        <View>
            <Text style={{fontFamily:'Lato-Bold',fontSize:18,marginBottom:10}}>Check Delivery</Text>
            <Text style={responsiveStyle.commonText}>Enter Pincode to check delivery date/pickup option</Text>
            <CustomTextInput type={''} handleText={()=>console.warn(pincode)} check={true} placeholder={'pincode'}/>
            <Text style={responsiveStyle.commonText}>free delivery on orders above 200</Text>
            <Text style={responsiveStyle.commonText}>Cash on delivery available</Text>
            <Text style={responsiveStyle.commonText}>Easy 21 days return and exchange</Text>

        </View>
    )
}
export default DeliveryInfo;