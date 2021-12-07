import React ,{useState}from "react";
import { TouchableOpacity, Text,Image ,SafeAreaView,View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppBottomBar } from "./src/navigation";
import Style from './src/utility/appStyle'; 
export default function App() {


  return (
      <View style={Style.container}>

        <View style={{width: '100%',height: '20%',alignItems:'center',padding:5,paddingTop:60}}>
        <Image style={Style.Logo}
         source={require('./src/public/pic/Logo.jpg')} />  
        </View>

        <View style={{width: '100%',height: '86%'}}>

        <NavigationContainer >
    
    
        <AppBottomBar />
      </NavigationContainer>

        </View>
       </View>
  );
}
