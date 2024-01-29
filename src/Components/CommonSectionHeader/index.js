import { Text,View } from "react-native";
import style from "./style";
import { useDimensions } from "../../Context";
import { useNavigation } from "@react-navigation/native";

 
const SectionHeader=(props)=>{
    const navigation=useNavigation()

    const {height,width}=useDimensions()
    const responsiveStyle=style(height,width)
    const handleNavigate=()=>{
        navigation.navigate('Shop',{type: 'all'})

    }
    return(
        <View style={responsiveStyle.header}>
        <View>
        <Text style={responsiveStyle.HeaderText}>{props.head}</Text>
       <Text style={responsiveStyle.regularText}>{props.content}</Text>
       </View>
      <Text style={responsiveStyle.regularText} onPress={handleNavigate}>{props.rightText}</Text>
</View>
        
    )

}
export default SectionHeader