import { Image,View } from "react-native"

const SplashScreen=()=>{
    return(
        <View style={{flex:1,justifyContent:'center',backgroundColor:'white',alignItems:'center'}}>
            <Image style={{height:250,width:150,resizeMode:'contain'}} source={require('../../../images/whatsapp.png')}></Image>
        </View>
    )
}
export default SplashScreen