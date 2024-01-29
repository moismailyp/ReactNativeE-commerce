import { useNavigation } from "@react-navigation/native";
import React, { useState }  from "react";
import { ScrollView, View,Text } from "react-native";
import style from "./style";
import CommonHeader from "../../Common/CommonHeader";
import CustomSearch from "../../Common/CustomSearchBar";
import Banner from "./Components/Banner";
import RecentBought from "./Components/RecentlyBought";
import ShopCategory from "./Components/ShopByCategory";
import ProductScroll from "../../ProductScroll";
import OfferProducts from "../../OfferProducts";
const Homepage=()=>
{
    const navigation=useNavigation()
    return(
    <View style={style.main}>
   <CommonHeader/>
   <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} style={style.container}>
   <CustomSearch />
   <Banner/>
   <RecentBought/>
   <ShopCategory/>
   <ProductScroll/>
   <OfferProducts/>
   <Text style={style.footText}>didnt find what you are looking for</Text>
   <View style={style.footButton}><Text style={style.footButtonText}>Browse Category</Text></View>
   </ScrollView>
   </View>
    )
}
export default Homepage;