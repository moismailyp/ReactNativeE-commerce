import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect,useState,useEffect } from "react";
import CustomSearch from "../../Common/CustomSearchBar";
import { View,Text,ScrollView,Image, TouchableOpacity, ImageBackground } from "react-native";
import style from "./style";
import { FlatList } from "react-native-gesture-handler";
import { useDimensions } from "../../../Context";
import firestore from '@react-native-firebase/firestore';
import CommonHeaderLeft from "../../Common/CommonLeftHeader";
import { useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";

 const Categories=()=>
 {
    const navigation=useNavigation();
    const{height,width,isPortrait}=useDimensions()
    const [active,setActive]=useState(0)
    const [products,setProducts]=useState([])
    const responsiveStyle=style(height,width,isPortrait)
    const {categories}=useSelector(state=>state)
    const route=useRoute()
    const { catIndex } = route.params ?? { catIndex:0 };
    console.warn(route);
    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=> <CommonHeaderLeft  type={'toggle'}/>
        })
        getProducts();
    },[])

    const handleCategoryTouch=(index)=>{
        setActive(index)
    }
    useEffect(()=>{
        setActive(catIndex)

    },[catIndex])
    
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
                setProducts(result)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const hadleNavigation=(item)=>{
        navigation.navigate('ProductDetails',{Product:item})
      }
    
    return(
        <View style={responsiveStyle.main}>
               <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} style={responsiveStyle.container}>

               <CustomSearch/>
               <View style={responsiveStyle.rowStyle}>
                {/* sidebar */}
                <View>
                    <FlatList contentContainerStyle={responsiveStyle.catFlatStyle} data ={categories} showsVerticalScrollIndicator={false} renderItem={({item,index})=>{
                        return(
                            <TouchableOpacity style={[responsiveStyle.catTouch,{backgroundColor:index===active?'white':'#dadada'}]} onPress={()=>handleCategoryTouch(index)}>
                           <View><Image style={responsiveStyle.catImage}Image source={{uri:item.image}}/></View>
                           </TouchableOpacity>)
                    }} />
                </View>
                {/* content */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                        <ImageBackground style={responsiveStyle.backImage}source={require('../../../images/fruits.webp')}>
                            <Text style={responsiveStyle.catName} numberOfLines={1}>{categories[active]?.name}</Text>
                            <Text style={responsiveStyle.catDesc} numberOfLines={3}>{categories[active]?.description}</Text>

                        </ImageBackground>
                       <FlatList contentContainerStyle={responsiveStyle.proStyle} data={products} numColumns={2} showsVerticalScrollIndicator={false} renderItem={({item,index})=>{
                        return(
                            <TouchableOpacity onPress={()=>hadleNavigation(item)} style={responsiveStyle.proContainer}>
                                <View style={responsiveStyle.imageBg}>
                                    <Image source={{url:item.image}} style={responsiveStyle.prodImage}/>
                                    </View>
                                    <Text style={responsiveStyle.proName}>{item.name}</Text>
                                    <Text style={responsiveStyle.proDesc}> ₹{item.price}</Text>
                            </TouchableOpacity>
                        )

                       }}></FlatList>
                    
                </ScrollView>
               </View>
               </ScrollView> 
        </View>
    )
 }
 export default Categories;