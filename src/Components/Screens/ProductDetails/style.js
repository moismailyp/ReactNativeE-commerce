import { StyleSheet } from "react-native";
import colors from "../../Common/colors";
const style=(height,width,isPortarait)=>StyleSheet.create({
proImage:{
    width:width*0.9,
    height:width*0.8,
    resizeMode:'contain',
    marginTop:25,
},
heart:{
    position:'absolute',
    right:0,
    marginVertical:15,
},
mainView:{
    backgroundColor:'white',
    flex:1,
    padding:width*0.03,
    borderTopRightRadius:15,
    borderTopLeftRadius:15,
    shadowColor: '#dadada',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 15,
    paddingBottom:90,
},
   name:{
    fontFamily:'Lato-Black',
    fontSize:25,
    marginBottom:10,
   },
   price:{
    fontFamily:'Lato-Bold',
    fontSize:20,
   },
   descriptionHead:{
    fontFamily:'Lato-Bold',
    fontSize:18,

   },
   description:{
    fontFamily:'Lato-Bold',
    fontSize:20,
    color:'#dadada'

   },
   padding:{
    padding:width*0.05,
   }
})
export default style