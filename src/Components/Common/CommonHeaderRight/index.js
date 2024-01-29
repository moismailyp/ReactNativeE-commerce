import { useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity,Image,View,Text, Share} from "react-native"
import { useDimensions } from "../../../Context"
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import style from "./style"
import { useSelector } from "react-redux";
const CommonHeaderRight=(props)=>{
   
    const navigation=useNavigation()
    const{ height,width,isPortrait}=useDimensions()
    const responsiveStyle=style(height,width,isPortrait)
    const {cartCount}=useSelector(state=>state)
    const type=props.type;
    const imageurl=type==='cart'?require('../../../images/cart.png'):require('../../../images/cart.png');
    const handleClick=()=>{
    
            navigation.navigate('cart')
        
    }
        const handleClickShare=async()=>
        {

        
            try {
                const result = await Share.share({
                  message:
                    'React Native | A framework for building native apps using React',
                });
                if (result.action === Share.sharedAction) {
                  if (result.activityType) {
                    // shared with activity type of result.activityType
                  } else {
                    // shared
                  }
                } else if (result.action === Share.dismissedAction) {
                  // dismissed
                }
              } catch (error) {
                Alert.alert(error.message);
              }

        }

    
    return( 
        <View style={responsiveStyle.flexStyle}>
            {props.share?  <TouchableOpacity onPress={handleClickShare} style={{padding:5}}>
    <AntDesign name="sharealt" size={30}/>

    </TouchableOpacity>:null}

            {props.plus?<TouchableOpacity onPress={props.handlePlusIcon} style={{padding:5}}>
    <Feather name="plus-square" size={30}/>

    </TouchableOpacity>:null}
        {type==='cart'?  <TouchableOpacity onPress={handleClick} style={{padding:5}}>
            <>
            <View style={responsiveStyle.cartCount}>
                <Text style={responsiveStyle.cartCountText}>{cartCount}</Text>
                </View>
      <Image source={imageurl} style={{height:25,width:25,resizeMode:'contain'}}></Image>
      </>
    </TouchableOpacity>:null}
    
     
    </View>)
}
export default CommonHeaderRight