import { StyleSheet } from "react-native";
import colors from "../colors";
const style=(height,width,isPortrait)=>StyleSheet.create({
    container:{
    borderRadius:15,
    backgroundColor:colors.green,
    padding:15,
    width:width*0.9,
    justifyContents:'center',
    alignItems:'center',
    marginVertical:15
    },
    text:{
        color:'white',
        fontFamily:'Lato-Bold'
    }
})
export default style;