import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity,Image} from "react-native"
const CommonHeaderLeft=(props)=>{
    const navigation=useNavigation()
    const type=props.type;
    const imageurl=type==='toggle'?require('../../../images/drawer.png'):require('../../../images/arrow.png');
    return( 
       <TouchableOpacity onPress={()=> type==='toggle'?navigation.toggleDrawer():navigation.goBack()} style={{padding:5}}>
      <Image source={imageurl} style={{height:25,width:25,resizeMode:'contain'}}></Image>
    </TouchableOpacity>)
}
export default CommonHeaderLeft