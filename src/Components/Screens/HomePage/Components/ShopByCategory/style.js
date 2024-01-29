import { StyleSheet } from "react-native";
const style=(height,width)=>StyleSheet.create({
container:{
    margin:15,
},
head:{
    fontFamily:'Lato-Bold',
    fontSize:20,
    textAlign:'center',
},
FlatList:{
    marginTop:20,
    marginVertical:5,
    alignItems:'center',
    justifyContent:'center',  
},
innerView:{
    marginRight:15,
    marginBottom:10,
},
itemName:{
    fontFamily:'Lato-Regular',
    fontSize:16,
    color:'black'
},
image:{
    height:height*0.07,
    width:width*0.13,
    resizeMode:'contain'

},
imageView:{
    justifyContent:'center',
    backgroundColor:'#dadada',
    alignItems:'center',
    borderRadius:10,
    padding:10,
    marginBottom:10,
},
})

export default style;