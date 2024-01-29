import { StyleSheet } from "react-native";
const style=(height,width)=>StyleSheet.create({
    container:{
        backgroundColor:'#dadada',
        borderRadius:15,
        margin:15,
        padding:10,
    },
    head:{
        fontFamily:'Lato-Black',
        fontSize:18,
        marginBottom:10,
    },
    contentView:{
        backgroundColor:'white',
        padding:2,
        marginRight:15,
        borderRadius:15
    },
    image:{
        width:width*0.2,
        height:height*0.1,
        resizeMode:'contain'

    } 
})
export default style