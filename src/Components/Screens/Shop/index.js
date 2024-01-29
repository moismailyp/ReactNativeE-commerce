import { useEffect,useState } from "react";
import {View,Text, FlatList,Image, TouchableOpacity} from "react-native";
import { useDimensions } from "../../../Context";
import style from "./style";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { useNavigation, useRoute } from "@react-navigation/native";
import CommonHeaderRight from "../../Common/CommonHeaderRight";
import CommonHeaderLeft from "../../Common/CommonLeftHeader";
import CustomSearch from "../../Common/CustomSearchBar";
import { useSelector } from "react-redux";
import firestore from '@react-native-firebase/firestore';
import CommonEmpty from "../../Common/EmptyComponent";
const Shop=()=>{
    const {height,width,isPortrait}=useDimensions()
    const responsiveStyle=style(height,width,isPortrait)
const navigation=useNavigation();
    const {categories}=useSelector(state=>state)
    const route=useRoute();
    const {type}=route.params;
    const [selectedCategory,setSelectedCategory]=useState('')
    const [products,setProducts]=useState('')

    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=> <CommonHeaderLeft />,
            headerRight:()=><CommonHeaderRight type={'cart'}/>,
            title:selectedCategory,
            
           })
    },[selectedCategory])
    useEffect(()=>{
        if(type==='all')
        {
            setSelectedCategory('Shop')
        }
    },[type])
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
                setProducts(result)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const handleCategories= async item=>{
        setSelectedCategory(item.name)
        await firestore().collection('Products').where('categoryId','==',item.id).get()
        .then((snapshot)=>{
            if(snapshot.empty)
            {
                setProducts([])
            }
            else
            {
                const result=[];
                snapshot.docs.forEach(doc=>{
                    if(doc.exists)
                    {
                        const responseData={id:doc.id,...doc?.data()}
                        result.push(responseData)
                    }

                })
                setProducts(result)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const handleRenderItem=({item,index})=>{
        return(
            <TouchableOpacity onPress={()=>handleCategories(item)} style={responsiveStyle.catItemView}>
                <Text style={responsiveStyle.catItem}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    const handleProductDetails=(item)=>
    {
        navigation.navigate('ProductDetails',{Product:item});
    }
    const handleProductRender=({item,index})=>{
          return(
          <TouchableOpacity onPress={()=>handleProductDetails(item)} style={responsiveStyle.productView}>
            <Image style={responsiveStyle.productImage} source={{uri: item.image}}/>
            <View style={responsiveStyle.nameView}>
            <Text style={responsiveStyle.nameText} numberOfLines={1}>{item.name}</Text>
            <Text style={responsiveStyle.contentText}numberOfLines={2}>{item.description}</Text>
            <View style={responsiveStyle.priceView}>
            <View style={responsiveStyle.priceView2}>
            <Text style={responsiveStyle.priceText}>{item.price}</Text>
            <View style={responsiveStyle.offView}>
            <Text style={responsiveStyle.offText}>43</Text></View>
            </View>
            <View style={responsiveStyle.qunView}> 
                <Text style={responsiveStyle.qunText1}>-</Text>
                <Text style={responsiveStyle.qunText2}>0</Text>
                <Text style={responsiveStyle.qunText1}>+</Text>

            </View>
            </View>
            
            </View>

        </TouchableOpacity>)
        }
        const EmptyComponent=()=>{
            return<CommonEmpty content={'no items available'}/>
        }
    
    return(
        <View>
            <View>
            <FlatList keyExtractor={(item,index)=>String(index)} 
            horizontal showsHorizontalScrollIndicator={false} 
            style={responsiveStyle.categoriesStyle}
              contentContainerStyle={responsiveStyle.contentContainer} data={categories}  
              showsVerticalScrollIndicator={false} renderItem={handleRenderItem}></FlatList>
        </View>
            <CustomSearch filter={true}/>

            <View style={responsiveStyle.padding}>
                <FlatList keyExtractor={(item,index)=>String(index)} showsVerticalScrollIndicator={false} data={products} ListEmptyComponent={EmptyComponent} renderItem={handleProductRender}/>
      
                        </View>
        </View>
    )
}
export default Shop;