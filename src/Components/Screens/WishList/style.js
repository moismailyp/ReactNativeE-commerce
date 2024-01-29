import { StyleSheet } from "react-native";
import colors from "../../Common/colors";
const style=(height,width,isPortrait)=>StyleSheet.create({
  container:{
flex:1,
backgroundColor:'#dadada',
padding:15
},
ProductView:{
    alignSelf:'center',
    backgroundColor:'white',
    borderRadius:15,
    overflow:'hidden',
    alignItems:'center',
    flexDirection:'row',
    width:width*0.9,
    padding:15,
    marginTop:15
},
remove:{
    width:20,
    height:20,
    resizeMode:'contain',
 
},
cartCount:{
    position:'absolute',
    right:10,
    top:-10,
    zIndex:9,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    overflow:'hidden',
    paddingHorizontal:8,
    paddingVertical:4,
},
count:{
    fontFamily:'Lato-Bold',
    fontSize:18,
    color:'white'
  
},
price:{
    fontFamily:'Lato-Bold',
    fontSize:15,
    color:'black'
},
removeView:{
    position:'absolute',
    top:0,
    backgroundColor:'red',
    right:0,
    borderRadius:15,
    overflow:'hidden',
    padding:5,
},

cartImage:
    { 
height:35,
width:35,
resizeMode:'contain',
},
productImage:{
    width:90,
    height:90,
    resizeMode:'contain',
},
secondView:{
    borderLeftWidth:1,
    borderLeftColor:'#dadada',
    paddingLeft:10,
    marginLeft:10,
    overflow:'hidden',
    width:width*0.6
    

},
title:{
    fontFamily:'Lato-Bold',
    fontSize:20,
    color:'black',
},
desc:{
    fontFamily:'Lato-Regular',
    fontSize:16,
    color:'black',
},
bottomView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:5,
},
offView:{
    borderRadius:15,
    backgroundColor:colors.green,
    padding:5,
    marginHorizontal:'white',
},
cartView:
{
    borderRadius:15,
    padding:5,
    marginHorizontal:5,
    borderWidth:1
},
cartText:{
    fontFamily:'Lato-Regular',
    fontSize:12,
    color:'white',
},
offText:{
    fontFamily:'Lato-Regular',
    fontSize:12,
    color:'white',
}

})
export default style;