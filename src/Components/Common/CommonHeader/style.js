import { StyleSheet,Dimensions,StatusBar } from "react-native";

 const style=(height,width)=>StyleSheet.create({
    container:{
        flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
   
        height:70,
        backgroundColor:'white',
        paddingHorizontal:1,
        marginTop:30
    },
    logo:{
        resizeMode:'contain',
        height:50,
        width:100,
       
    },
    sideLogo:{
        resizeMode:'contain',
        height:height*0.1,
        width:width*0.2,
        marginTop:10,
marginRight:10,      

    },
    
})
export default style