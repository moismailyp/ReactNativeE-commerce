import { StyleSheet } from "react-native";
import colors from "../../../Common/colors";
const style=(height,width,isPortrait)=>StyleSheet.create({
container:{
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
marginVertical:15,
borderBottomColor:'black',
borderBottomWidth:1
},
Head:{
    fontFamily:'Lato-Black',
    fontSize:20,
    lineHeight:50
},
content:{
    fontFamily:'Lato-Regular',
    fontSize:18,
    lineHeight:30,
    color:'black'
},
endContent:{
    fontFamily:'Lato-Regular',
    fontSize:18,
    lineHeight:30,
    marginBottom:15,

},
contentSavings:{
    fontFamily:'Lato-Regular',
    fontSize:18,
    lineHeight:30,
    color:colors.greenTop,
}
})
export default style;