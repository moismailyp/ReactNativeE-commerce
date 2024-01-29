import { useEffect,useState } from "react";
import { View,Text,ScrollView,Image } from "react-native"
import firestore from '@react-native-firebase/firestore';
import { FlatList } from "react-native-gesture-handler";
import Categories from "../../../Categories";
import { useDimensions } from "../../../../../Context";

import style from "./style";
import { useSelector } from "react-redux";

const Trending=()=>{
    const {height,width}=useDimensions()
    const responsiveStyle=style(height,width)
 
    const {categories}=useSelector(state=>state)
    return(
        <View style={responsiveStyle.main}>
            <Text>Trending category</Text>
    <FlatList keyExtractor={(index)=>String(index)} contentContainerStyle={style.flatList} data={categories} horizontal showsHorizontalScrollIndicator={false} renderItem={({item,index})=>{
        return(
            <View style={[responsiveStyle.imageCon,{}]}>
                <Image source={{uri:item.image}} style={responsiveStyle.image}></Image>

            </View>
        )
    }}></FlatList>
    
        </View>
    )

}
export default Trending