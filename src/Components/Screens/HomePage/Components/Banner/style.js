import { StyleSheet } from "react-native";
const style=(height,width)=>StyleSheet.create(
    {
        container:{
            justifyContent:'center',
            alignItems:'center',
        },
        banner:{
            width:width*0.9,
            height:width*0.4,
            resizeMode:'contain',
            borderRadius:15,
            overflow:'hidden',
            margin:15,

        },
    innerView:
    {
        padding:15,
    },
    head:{
        fontFamily:'Lato-Black',
        fontSize:20,
    },
    content:{
        fontFamily:'Lato-Regular',
        fontSize:18
    },
    touch:{
        backgroundColor:'black',
        padding:5,
        justifyContent:'center',
        alignItems:'center',
        width:width*0.3,
        borderColor:'white',
        marginVertical:10,
        borderRadius:15,
    },
    touchText:{
        fontFamily:'Lato-Regular',
        fontSize:16,
        color:'white'
    }

    }
)
export default style

