import { StyleSheet } from "react-native";
import colors from "../colors";
const style=(height,width,isPortarait)=>StyleSheet.create({
    padding:{
        paddingRight:75,
    },
        image:{
            width:30,
            height:30,
            resizeMode:'contain',
        },
    
    cartCount:{
        position:'absolute',
        right:-1,
        top:-2,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:14,
        overflow:'hidden',
        paddingHorizontal:6,
        paddingVertical:2,
        zIndex:9,
    },
    cartCountText:{
        color:'white',
        fontFamily:'Lato-Bold',
        fontSize:10,
        textAlign:'center'
    },flexStyle:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',

    }

})
export default style;