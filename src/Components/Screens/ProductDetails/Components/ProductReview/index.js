import { useState } from "react";
import { Text,View,Image, TouchableOpacity } from "react-native";
import { useDimensions } from "../../../../../Context";
import style from "./style";
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import colors from "../../../../Common/colors";
import StarRating from 'react-native-star-rating-widget';
import { useNavigation } from "@react-navigation/native";


const ProductReview=(props)=>{
    const{height,width,isPortrait}=useDimensions()
    const responsiveStyle=style(height,width,isPortrait)
    const navigation=useNavigation()
    const {products}=props;
    const [rating,setRating]=useState (0)

    const handleRedirect=()=>{

        navigation.navigate('Review');
    }



return(  <View>
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginVertical:10}} >
   
      <Text>Product Review(1)</Text>
      <TouchableOpacity onPress={handleRedirect}><Text style={{color:colors.green,fontFamily:'Lato-Bold',fontSize:15}}>See All</Text></TouchableOpacity>
      </View>
      <View style={{padding:15,backgroundColor:'#dadada',borderRadius:8,marginVertical:10}} >
      <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
                <Image style={responsiveStyle.image} source={require('../../../../../images/prof.png')}/>
                <View>
                <Text style={{color:'black',fontFamily:'Lato-Bold',fontSize:18,marginLeft:10}}>Jhon Doe</Text>
                <StarRating starSize={25} rating={rating} onChange={setRating}/>
                </View>
            </View>
        <Text style={{color:'black',fontFamily:'Lato-Regular',fontSize:12}}>
         
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </Text>
      </View>
    </View>
)}
export default ProductReview;         