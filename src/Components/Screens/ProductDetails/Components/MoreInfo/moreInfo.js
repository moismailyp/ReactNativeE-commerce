import { Text,View } from "react-native";
import { useDimensions } from "../../../../../Context";
import style from "./style";
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

const MoreInfo=()=>{
    const{height,width,isPortrait}=useDimensions()
    const responsiveStyle=style(height,width,isPortrait)


return( <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginVertical:10}} >
      <View style={{flexDirection:'row',alignItems:'center',width:width*0.4,justifyContent:'center',backgroundColor:'#e8e8e8',padding:15,borderRadius:15}}>
          <Text>500g/₹ 24.00</Text>
          <AntDesign name="down" size={25} color={'#dadada'}/>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',width:width*0.4,justifyContent:'center',backgroundColor:'#e8e8e8',padding:15,borderRadius:15}}>
          <Text>Delivery</Text>
          <AntDesign name="down" size={25} color={'#dadada'}/>
      </View>
    </View>
)}
export default MoreInfo; 