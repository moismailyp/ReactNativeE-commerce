import { StyleSheet } from "react-native";
import colors from "../../Common/colors";

const style=(height,width,isPortarait)=>StyleSheet.create({
container:{
    flex:1,
    fontFamily:'Lato-Regular',
    fontSize:18,
    backgroundColor:'#FFCCCC',
    borderWidth:1,
    padding:10,
    borderColor:'red',
},
title:
{
    fontFamily:'Lato-Regular',
    fontSize:18,
    color:'#990000'
}

})
export default style