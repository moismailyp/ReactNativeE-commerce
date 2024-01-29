import { StyleSheet } from "react-native";
const style=(height,width,isPortrait)=>StyleSheet.create({
    container:{
        height:isPortrait?height*0.12:width*0.12,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-around',
            backgroundColor:'white',
    },
    buttonIcon:{
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'black',
    },
    icon:
    {
    width:40,
    height:40,
    resizeMode:'contain'
    },
    dot:{
         fontSize:60,
         color:'black',
         marginTop:-50,
    },
    cartCount:{
        position:'absolute',
        right:-8,
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
        fontSize:16,
        textAlign:'center'
    }

    
    })


export default style