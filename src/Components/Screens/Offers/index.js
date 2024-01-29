import { useEffect } from "react";
import { View,Text,ScrollView, Dimensions, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomSearch from "../../Common/CustomSearchBar";
import style from "./style";
import colors from "../../Common/colors";
import { useDimensions } from "../../../Context";
import CommonHeaderLeft from "../../Common/CommonLeftHeader";
const Offers=()=>{
    const navigation=useNavigation();
    const{height,width,isPortrait}=useDimensions()
    const responsiveStyle=style(height,width,isPortrait)
    useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=> <CommonHeaderLeft />
           
            
        })
      
    },[])
    const offers=[{
        offer:'41%',
        head:'midnight sale offer',
        content:'on all orders above 900',
        code:'yt8973f'
    },{
        offer:'41%',
        head:'midnight sale offer',
        content:'on all orders above 900',
        code:'yt8973f'
    },{
        offer:'41%',
        head:'midnight sale offer',
        content:'on all orders above 900',
        code:'yt8973f'
    },{
        offer:'41%',
        head:'midnight sale offer',
        content:'on all orders above 900',
        code:'yt8973f'
    },
]

    return(
        <View style={style.main}>
               <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} style={style.container}>

               <CustomSearch/>
                <FlatList data={offers} contentContainerStyle={responsiveStyle.contentStyle} showsVerticalScrollIndicator={false} keyExtractor={({item,index})=>String(index)}  renderItem={({item,index})=>{
                    return(
                        <View style={responsiveStyle.renderView}>
                    <View style={ responsiveStyle.offCircleView}>
                       <View style={responsiveStyle.abc}></View>
                       <View style={responsiveStyle.abc}></View>
                     <View style={responsiveStyle.abc}></View>
                    <View style={responsiveStyle.abc}></View>
                </View>
                
                <View style={{width:'65%',height:100,backgroundColor:'#dadada',padding:20}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{fontFamily:'Lato-Bold',color:colors.greenTop,fontSize:50}}>67</Text>
                        <View>
                            <Text style={{fontFamily:'Lato-Regular',color:colors.greenTop,fontSize:16}}>%</Text>
                            <Text style={{fontFamily:'Lato-Regular',color:colors.greenTop,fontSize:16}}>Off</Text>
                        </View>
                        <View>
                        <Text style={{fontFamily:'Lato-Bold',color:'black',fontSize:16}}>on your first order</Text>
                        <Text style={{fontFamily:'Lato-Bold',color:'black',fontSize:12}}>on orders above 999</Text>
                        </View>

                    </View>
                </View>
                <View style={{justifyContent:'space-between',height:100,backgroundColor:'#dadada'}}>
                <View style={{width:25,height:25,borderRadius:25/2,backgroundColor:'white',marginTop:-25/2}}></View>
                    <View style={{width:25,height:25,borderRadius:25/2,backgroundColor:'white',marginBottom:-25/2}}></View>
                </View>
                <View style={{width:'25%',height:100,backgroundColor:'#dadada',justifyContent:'center',alignItems:'center',paddingVertical:15,paddingRight:15}}>
                    <Text style={{fontFamily:'Lato-Bold',color:'black',fontSize:12}}>useCode</Text>
                    <View style={{marginVertical:10,padding:5,justifyContent:'center',borderRadius:15,backgroundColor:'black',overflow:'hidden'}}>
                        <Text style={{fontFamily:'Lato-Regular',color:'white',fontSize:14,textAlign:'center'}}>RTF56E</Text>
                    </View>
                </View>
                {/* end design */}
                <View style={{marginLeft:-25/2}}>
                    <View style={responsiveStyle.abc}></View>
                    <View style={responsiveStyle.abc}></View>
                    <View style={responsiveStyle.abc}></View>
                    <View style={responsiveStyle.abc}></View>
                </View>
                </View>  
                    )
                }}></FlatList>
                
               </ScrollView> 
            <Text>Hii</Text>
        </View>
    )
}
export default Offers