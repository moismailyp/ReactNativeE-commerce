import { useEffect,useRef,useState } from "react";
import { Text,View,Image,TouchableOpacity, ScrollView } from "react-native";
import { useDimensions } from "../../../Context";
import { useNavigation } from "@react-navigation/native";
import CommonHeaderLeft from "../../Common/CommonLeftHeader";
import StarRating from 'react-native-star-rating-widget';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import CommonHeaderRight from "../../Common/CommonHeaderRight";
import colors from "../../Common/colors";
import style from "./style";
import ActionSheet from "react-native-actions-sheet";
import CustomTextInput from "../../Common/CustomTextInput";
import CustomButton from "../../CustomButton";
const Review=(props)=>{
    const {height,width}=useDimensions();
    const [rating,setRating]=useState (0)
    const responsiveStyle=style(height,width)
    const navigation=useNavigation();
    const ActionSheetRef=useRef(null)
    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=> <CommonHeaderLeft type={' '}/>,
            headerRight:()=> <CommonHeaderRight plus={true} handlePlusIcon={optionActionSheet}/>,
           })
    },[])
    const optionActionSheet=()=>
    {
        ActionSheetRef.current.show();
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={responsiveStyle.container}>
    
   <View style={responsiveStyle.reviewBox} >
   <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
             <Image style={responsiveStyle.image} source={require('../../../images/prof.png')}/>
             <View>
             <Text style={{color:'black',fontFamily:'Lato-Bold',fontSize:18,marginLeft:10}}>Jhon Doe</Text>
             <StarRating starSize={25} rating={rating} onChange={setRating}/>
             </View>
         </View>
     <Text style={{color:'black',fontFamily:'Lato-Regular',fontSize:12}}>
      
     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
     </Text>
   </View>
   <ActionSheet ref={ActionSheetRef}>
    <View style={{padding:20}}><Text style={{fontFamily:'Lato-Regular',fontSize:16}}>write a Review</Text>
    <StarRating starSize={25} rating={rating} onChange={setRating}/>
    <CustomTextInput placeholder="write here" multiline={true}/>
    <CustomButton buttonText={'submit review'} />
    </View>
   </ActionSheet>
        </ScrollView>

    )
}
export default Review;