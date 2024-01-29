import { StyleSheet } from "react-native";
import colors from "../../Common/colors";
const style=(height,width,isPortrait)=>StyleSheet.create({
    container:
    {
    flex:1,
    backgroundColor:'white',
    padding:20,
    },
    head:{
    fontFamily:'Lato-Black',
    fontSize:25,
    textAlign:'center'
    },
    userImage:{
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:25,
    },
    image:
    {
    width:width*0.3,
    height:width*0.3,
    borderRadius:width*0.15,
    resizeMode:'contain',
    },
    bigImage:{
    height:width*0.6,
    width:width*0.6,

    },
    edit:{
        width:50,
        height:50,
        resizeMode:'contain',
        
    },
    modalBackGround:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#1f1f1e',
    },
    editTouch:{
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'white',
        borderRadius:50
    },
    close:{
        backgroundColor:'white',
        borderRadius:25,
        position:'absolute',
        zIndex:9,
        right:15,
        top:height*0.29
    },
    closeChoose:{
        backgroundColor:'white',
        borderRadius:25,
        position:'absolute',
        zIndex:9,
        right:-10,
        top:-10
    },
    selectBox:{
        backgroundColor:'white',
        padding:25,
        borderRadius:15,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row',
    },
    touch:{
        padding:25,
        justifyContent:'center',
        backgroundColor:colors.green,
        borderRadius:15,
        marginHorizontal:10,
    },
    picText:{
        fontFamily:'Lato-Regular',
        fontSize:17,
        color:'white',
    }

     
})
export default style