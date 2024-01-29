import { StyleSheet } from "react-native";
const style=(height,width)=>StyleSheet.create(
    {
        main:{
            flex:1,
            paddingHorizontal:15,

        },
        title:{
            fontFamily:'Lato-Bold',
            fontSize:18,
        },
        flatList:{
            alignItems:'center',
            marginVertical:15,
        },
        imageCon:{
            padding:15,
            borderRadius:15,
            overflow:'hidden',
            marginRight:15,
        },
        image:{
            width:width*0.1,
            height:height*0.08,
            resizeMode:'contain',
        },
        

    }
)
export default style