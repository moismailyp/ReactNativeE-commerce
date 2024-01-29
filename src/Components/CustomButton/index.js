import React from "react";
import { Text,View,TouchableOpacity ,Image} from "react-native";
import style from "./style";
const CustomButton=props=>{
    const{buttonText,handleButtonPress,type,icon}=props;
    return (
        <TouchableOpacity onPress={handleButtonPress} style={[style.button,{backgroundColor:type==='primary'?'#000':'#808080'}]}>
            {type!=='primary'?<Image source={icon} style={style.icon}/>:null}
            <Text style={style.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    ) 
}
export default CustomButton;