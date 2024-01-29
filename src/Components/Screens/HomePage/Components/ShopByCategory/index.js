import { useEffect ,useState} from 'react';
import {View,Text, Image,FlatList, TouchableOpacity} from 'react-native';
import { useDimensions } from '../../../../../Context';
import style from './style';
import firestore from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux';
import { updatecategories } from '../../../../../Storage/action';
import { useNavigation } from '@react-navigation/native';
const ShopCategory=()=>{
    const {height,width}=useDimensions();
    const responsiveStyle=style(height,width)
    const[categories,setCategories]=useState([])
    const navigation=useNavigation()
    const dispatch=useDispatch()
    useEffect(()=>{
        getCategories();
    },[])
    const getCategories=async()=>{
        await firestore().collection('Categories').get()
        .then(snapshot=>{
            if(snapshot.empty)
            {
                console.log('empty')
            }
            else
            {
                const result=[]
                snapshot.docs.forEach(docs=>{
                    if(docs.exists)
                    {
                        const responseData={id:docs.id,...docs?.data()};
                        result.push(responseData)
                    }
                })
                setCategories(result)
                dispatch(updatecategories(result))
            }

        })
        .catch(error)
        {
            console.warn(error);
        }
    }
    const handleNavigation=(index)=>
    {
        navigation.navigate('Categories',{catIndex:index})
    }
    
    return(
       <View style={responsiveStyle.container}><Text style={responsiveStyle.head}>Shop By Category</Text>
       <FlatList 
       keyExtractor={({item,index})=>String(index)}
       numColumns={4}
      data={categories} 
       contentContainerStyle={responsiveStyle.FlatList}
     
       renderItem={({item,index})=>
    {
        return(
            <TouchableOpacity onPress={()=>handleNavigation(index)} style={ responsiveStyle.innerView}>
                <View style={responsiveStyle.imageView}><Image style={responsiveStyle.image}source={{uri:item.image}}></Image></View>
                <Text style={responsiveStyle.itemName}>{item.name}</Text>
            </TouchableOpacity>
        )

    }
    }></FlatList>
       </View>
    )

}
export default ShopCategory