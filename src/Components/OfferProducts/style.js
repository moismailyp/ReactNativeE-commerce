import { StyleSheet } from "react-native";
const style=(height,width)=>StyleSheet.create({
    container:{padding:15,
        backgroundColor:'#dadada'
    
    },
    productView:{
        width:'100%',
        padding:15,
        marginRight:15,
        marginVertical:15,
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
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
        width:width*0.7,              
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
            padding:6,
            marginRight:20,
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


        
    
})
export default style;