import { useEffect,useState } from "react"
import { FlatList, ImageBackground,View,Text } from "react-native"
import { useDimensions } from "../../../../../Context"
import style from "./style"
import { TouchableOpacity } from "react-native-gesture-handler"
import firestore from '@react-native-firebase/firestore';


const Banner=()=>{
    const {height,width}=useDimensions()
    const responsiveStyle=style(height,width)
 const [bannerItems,setBannerItems]=useState()

    useEffect(()=>{
        getBanners();
    },[]);

    const getBanners=async()=>{
        await firestore().collection('Banners').get()
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
                setBannerItems(result)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }

return(
    <View>
    <FlatList data={bannerItems} horizontal showsHorizontalScrollIndicator={false} renderItem={({item,index})=>{
        return(
            
            <ImageBackground style={responsiveStyle.banner} source={{uri:item.image}} >
                <View style={responsiveStyle.innerView}>
                    <Text style={responsiveStyle.head}>{item.bannerHead}</Text>
                    <Text style={responsiveStyle.content}>{item.bannerDescription}</Text>
                    <TouchableOpacity style={responsiveStyle.touch}>
                        <Text style={responsiveStyle.touchText}>shop now</Text></TouchableOpacity>

                </View>
            </ImageBackground>
        )
    }}
    /></View>
)
}
export default Banner;