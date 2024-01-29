import { StyleSheet } from "react-native";
import colors from "../../../../Common/colors";
const style=(height,width,isPortarait)=>StyleSheet.create({
image:{
    width:50,
    height:50,
    resizeMode:'contain',
    overflow:'hidden',
    borderRadius:25,
}
})
export default style