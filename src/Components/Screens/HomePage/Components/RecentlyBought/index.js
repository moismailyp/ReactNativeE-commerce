import { useState,useEffect } from "react";
import { Text,View,FlatList,Image, TouchableOpacity} from "react-native";
import { useDimensions } from "../../../../../Context";
import firestore from '@react-native-firebase/firestore';

import style from "./style";
import { useNavigation } from "@react-navigation/native";

const RecentBought=()=>{
    const {height,width}=useDimensions()
    const responsiveStyle=style(height,width);
    const navigation=useNavigation()
    const [recentItems,setRecentItems]=useState([])
    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts=async()=>{
        await firestore().collection('Products').get()
        .then((snapshot)=>{
            if(snapshot.empty)
            {
                console.log('it is empty');
            }
            else
            {
                const result=[];
                snapshot.docs.forEach(doc=>{
                    if(doc.exists)
                    {
                        result.push(doc.data())
                    }

                })
                setRecentItems(result)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const handleNavigation=(item)=>{
        navigation.navigate('ProductDetails',{Product:item})
      }

return(
    <View style={responsiveStyle.container}>
    <Text style={responsiveStyle.head}>Buy from recently Bought</Text>
    <FlatList horizontal showsHorizontalScrollIndicator={false} data={recentItems} renderItem={({item,index})=>
    {
        return(
            <TouchableOpacity onPress={()=>handleNavigation(item)} style={responsiveStyle.contentView}><Image style={responsiveStyle.image} source={{uri :item.image}}/>
            </TouchableOpacity>
        )
    }
    }></FlatList></View>
)
}
export default RecentBought;