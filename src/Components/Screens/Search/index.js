import { useEffect } from "react";
import { View,Text,ScrollView } from "react-native";
import CustomSearch from "../../Common/CustomSearchBar";
import { useNavigation } from "@react-navigation/native";
import style from "./style";
import OfferProducts from "../../OfferProducts";
import Trending from "./Components/Trending";
import CommonHeaderLeft from "../../Common/CommonLeftHeader";

const Search=()=>{
    
    const navigation=useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=> <CommonHeaderLeft  type={'toggle'}/>
           
            
        })
      
    },[])
    return(
        <View style={style.main}>
               <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} style={style.container}>

               <CustomSearch/>
               <Trending/>
               <OfferProducts/>
               </ScrollView>
        </View>
    )
}
export default Search