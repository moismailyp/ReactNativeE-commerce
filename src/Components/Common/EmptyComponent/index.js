import { View,Text } from "react-native";
import style from "./style";
import { useDimensions } from "../../../Context";
 
const CommonEmpty=props=>{
    const{height,width,isPortrait}=useDimensions
    const responsiveStyle=style(height,width,isPortrait)

    return(<View style={responsiveStyle.container}>
        <Text style={responsiveStyle.title}>{props.content}</Text>
    </View>)
}
export default CommonEmpty