import React from "react";
import { View,Text ,Image} from "react-native";
import { useDimensions } from "../../../Context";
import style from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { signout } from "../../../Storage/action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const CustomDrawer=()=>{
    const {isLoggedIn,firstName,lastName,email,profileImage}=useSelector(state=>state);

    const Navigation=useNavigation()
    const {height,width}=useDimensions()
    const responsiveStyle=style(height,width)
    const dispatch=useDispatch();
    const imageUrl =profileImage === '' ? require('../../../images/prof.png') : { uri: profileImage } ;

    const signoutHandle=()=>{
        dispatch(signout())

    }
    const contents=[{
        itemId:0,
        itemName:'Home',
        NavigateTo:'myFooter',
        icon:require('../../../images/home.png')
    },{
        itemId:1,
        itemName:'ShopByCategory',
        NavigateTo:'Categories',
        icon:require('../../../images/category.png')
    },
    {
        itemId:2,
        itemName:'Orders',
        NavigateTo:'Orders',
        icon:require('../../../images/clipboard.png')
    },
    {
        itemId:3,
        itemName:'WishList',
        NavigateTo:'WishList',
        icon:require('../../../images/heart.png')
    },
    {
        itemId:4,
        itemName:'Account',
        NavigateTo:'Account',
        icon:require('../../../images/user.png')
    }]
    return (
        <View style={responsiveStyle.container}>
            <TouchableOpacity onPress={()=>Navigation.navigate('Account')} style={responsiveStyle.profileIcon}>
            <View style={responsiveStyle.profileIcon1}>
            <Image style={responsiveStyle.image} source={imageUrl}></Image>

            </View>
            <View style={{marginLeft:15}}>
                <Text style={{fontFamily:'Lato-Bold'}}>{firstName}{lastName}</Text>
                <Text style={{fontFamily:'Lato-Regular'}}>{email}</Text>
            </View>
            </TouchableOpacity>
            <View style={{marginVertical:15}}>
                <View>{contents.map((item,index)=>{
                    return(
                    <TouchableOpacity key={item.itemId} onPress={()=>Navigation.navigate(item.NavigateTo)} style={responsiveStyle.DrawerElements}>
                    <View style={responsiveStyle.DrawerElements1}>
                    <Image source={item.icon}style={responsiveStyle.DrawerIcon}/>
                    <Text style={responsiveStyle.drawerName}>{item.itemName}</Text>
                    </View>
                    <Image source={require('../../../images/right-arrow.png')}style={responsiveStyle.arrowIcon}/>
                </TouchableOpacity>)})}
            </View>
            </View>
            <View>
                <TouchableOpacity onPress={signoutHandle} style={responsiveStyle.signoutTouch}>
                <Image source={require('../../../images/right-arrow.png')}
                style={[responsiveStyle.arrowIcon,responsiveStyle.arrow]}/>

                    <Text style={responsiveStyle.signoutText}>SignOut  </Text>
                </TouchableOpacity>
            </View >
            <View style={responsiveStyle.supportView}
            ><Text>Contact Support</Text>
            <Text>facing problem with App,feel free to contact 24 hour support system</Text>
            <View style={responsiveStyle.ContactView}>
                <Text style={responsiveStyle.LogoutText}>contact</Text>
            </View>
            </View>

        </View>
        
    )
}
export default CustomDrawer;