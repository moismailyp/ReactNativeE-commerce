import React, { useEffect,useState } from 'react';
import {View,Text,Image, TouchableOpacity}from 'react-native';
import SplashScreen from '../Splash/splashscreen';
import Login from '../Login';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import Signup from '../SignUp';
import Logingoogle from '../LoginGoogle';
import Loginphone from '../LoginPhone';
import Homepage from '../HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DimensionContextProvider } from '../../../Context';
import 'react-native-gesture-handler';
import Cart from '../Cart';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Categories from '../Categories';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomDrawer from '../../Common/CustomDrawer';
import CustomFooter from '../../CustomFooter';
import Search from '../Search';
import Offers from '../Offers';
import WishList from '../WishList';
import Orders from '../Orders';
import Account from '../Account';
import style from './style';
import { store } from '../../../Storage/store';
import Shop from '../Shop';
import ProductDeatails from '../ProductDetails';
import Review from '../Review';
import AddAddress from '../AddAddress';
const Stack = createNativeStackNavigator();
const Footer=createBottomTabNavigator();
const Drawer=createDrawerNavigator();
const DrawerApp=()=>
{  
  return(
    <Drawer.Navigator initialRouteName='myFooter' drawerContent={props=><CustomDrawer{...props}/>}>
    <Drawer.Screen name='myFooter' component={FooterApp} options={{headerShown:false}}/>
    <Drawer.Screen name='WishList' component={WishList}/>
    <Drawer.Screen name='Categories' component={Categories}/>
    <Drawer.Screen name='Orders' component={Orders}/>
    <Drawer.Screen name='Account' component={Account}/>
    <Drawer.Screen name='Home' component={Homepage}/>
    <Drawer.Screen name='Shop' component={Shop}/>
    <Drawer.Screen name='Review' component={Review}/>
    <Drawer.Screen name='ProductDetails' component={ProductDeatails}/>
    <Drawer.Screen name='AddAddress' component={AddAddress}/>




    </Drawer.Navigator>
  )
}
const FooterApp=()=>{
  return(
    <Footer.Navigator initialRouteName='Homepage' tabBar={(props)=><CustomFooter{...props}/>} screenOptions={{
    headerTitleAlign:'left',
    headerTitleStyle:style.title}}>
    <Footer.Screen name='home'  component={Homepage} options={{headerShown:false}}/>
    <Footer.Screen name='category' component={Categories} />
    <Footer.Screen name='search' component={Search}/>
    <Footer.Screen name='offer' component={Offers}/>
    <Footer.Screen name='cart' component={Cart}/>


    </Footer.Navigator>

  )
}

function AppNavigator() {
const [loading,setLoading]=useState(true)
  const {isLoggedIn}=useSelector(state=>state);
  console.warn(isLoggedIn);
  useEffect(()=>{
    setTimeout(()=>{
    setLoading(false);
    },3000)
  },[])

  return (

    <DimensionContextProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {loading?<Stack.Screen name="splashScreen" component={SplashScreen} />:

        (<>{isLoggedIn?
(<Stack.Screen name="DrawerApp" component={DrawerApp} />):(<>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="Logingoogle" component={Logingoogle} />
        <Stack.Screen name="Loginphone" component={Loginphone} />
        </>)}</>)}
        </Stack.Navigator>
    </NavigationContainer>
    </DimensionContextProvider>
  );
}

const App=()=>{
  return(
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  )
}
export default App