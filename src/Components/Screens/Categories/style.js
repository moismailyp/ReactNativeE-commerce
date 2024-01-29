import { StyleSheet } from "react-native";
const style=(height,width,isPortrait)=>StyleSheet.create({
    main:{
        flex:1,
    },
    container:{
        backgroundColor:'white'
    },
    catImage:{
        width:width*0.2,
        height:width*0.2,
        resizeMode:'contain',
        margin:10,
    },
    catFlatStyle:{
        padding:10,
        backgroundColor:'#dadada',
        width:width*0.3,

    },
    catTouch:{
        borderBottomColor:'black',
        borderBottomWidth:0.8,

    },
    rowStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    backImage:{
        width:width*0.6,
        height:height*0.2,
        resizeMode:'contain',
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:15,
        overflow:'hidden',
    },
    catName:{
        fontFamily:'Lato-Black',
        fontSize:22
    },
    proName:{
        fontFamily:'Lato-Bold',
        fontSize:22
    },
    catDesc:{
        fontFamily:'Lato-Regular',
        fontSize:18
    },
    proDesc:{
        fontFamily:'Lato-Regular',
        fontSize:14,
    },
    prodImage:{
        width:width*0.2,
        height:width*0.2,
        resizeMode:'contain',
        alignSelf:'center',
    },
    proContainer:{
        padding:5,
        alignItems:'center',
        justifyContent:'center'
    },
    proStyle:{
        justifyContent:'center',
        padding:10,
    },
    imageBg:{
        backgroundColor:'#dadada',
        padding:10,
        justifyContent:'center',
        borderRadius:15,
        marginBottom:5,
        

    },


    
})
export default style;