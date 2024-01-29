import { StyleSheet } from "react-native";
const style=(height,weight)=>StyleSheet.create({
    container:{
        margin:15,
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    HeaderText:
    {
        fontFamily:'Lato-Bold',
         fontSize:20,
         color:'black',
         },
         regularText:{
            
                fontFamily:'Lato-Regular',
                fontSize:17,
                color:'black',
            
            
         }
    })
export default style;