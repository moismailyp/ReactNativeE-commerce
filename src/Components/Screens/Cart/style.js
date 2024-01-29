import { StyleSheet } from "react-native";
const style=(height,width,isPortrait)=>StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1,
        padding:15,
        paddingHorizontal:25,
    },
    productView:{
        width:'100%',
        padding:15,
        marginRight:15,
        marginVertical:15,
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#dadada',
        overflow:'hidden'
        },
   
            
        productImage:
        {
        width:50,
        height:50,
        resizeMode:'contain',
        alignSelf:'center'
        ,marginVertical:10
        },
        nameView:{
            paddingHorizontal:15,
            borderLeftWidth:1,
            marginLeft:10,
            width:width*0.7,
            },
        nameText:{
        fontFamily:'Lato-Black',
        fontSize:20,
        color:'black'
        },
        contentText:
        {
        fontFamily:'Lato-Regular',
        fontSize:17,
        color:'black'
        },
        priceView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:20,                
        },
        priceView2:{
            flexDirection:'row',
            alignItems:'center',
        },
        priceText:
        {
        fontFamily:'Lato-Bold',
        fontSize:20,
        color:'black'
        },
        offView:{
            padding:5,
            borderRadius:15,
            backgroundColor:'black',
            marginHorizontal:10,
        },
        offText:{
            fontFamily:'Lato-Bold',
            fontSize:15,
            color:'white',
            marginHorizontal:10,
        },
        qunView:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-around',
            borderRadius:15,
            borderWidth:1,
            borderColor:'black',
            overflow:'hidden',
            padding:5,
        },
        qunText1:{
            fontFamily:'Lato-Bold',
            fontSize:16,
            color:'black',
            marginHorizontal:10,

        },
        qunText2:
        {
            fontFamily:'Lato-Bold',
            fontSize:18,
            color:'black',
            marginHorizontal:10,

        },
        renderView:{
            flexDirection:'row',
            alignItems:'center',
            width:width,
            alignSelf:'center',
            justifyContent:'center',
            marginBottom:height*0.015,
        },
        offCircleView:
            {
            marginRight:-height*0.015,
            zIndex:99
        },
        abc:
        {
            width:25,
            height:25,
            borderRadius:25/2,
            backgroundColor:'white'
        }

})
export default style;