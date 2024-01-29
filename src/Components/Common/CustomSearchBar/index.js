import { View,Image,Text } from "react-native";
import { useDimensions } from "../../../Context";
import style from "./style";
import { TextInput } from "react-native-gesture-handler";

const CustomSearch=(props)=>
{
    const {filter}={...props}
    const {height,width}=useDimensions()
    const responsiveStyle=style(height,width)
    return(
        <View style={filter===true?responsiveStyle.newContainer:responsiveStyle.container}>
            <View style={filter===true?responsiveStyle.newStyle:responsiveStyle.search}>
                <View style={responsiveStyle.innerView}>
                <Image style={responsiveStyle.searchIcon} source={require('../../../images/search-.png')}/>
                <TextInput placeholder="search here" placeholderTextColor={'black'}
                style={responsiveStyle.textInput}></TextInput>
                </View>
                <Image style={responsiveStyle.searchIcon} source={require('../../../images/mic.png')}/>

                </View>
              {filter?<Text style={responsiveStyle.filter}>filter</Text>:null}
                </View>
    )
}
export default CustomSearch