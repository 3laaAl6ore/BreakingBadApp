import React from "react";
import { Text, Image ,View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppBottomBar } from "./src/navigation";
import Style from './src/utility/appStyle'; 
export default function App() {
  return (
      <View style={Style.container}>

        <View style={{width: '30%',height: '10%'}}>
        <Image style={Style.Logo}
         source={require('./src/public/pic/Logo.jpg')} />  
        </View>

        <View style={{width: '100%',height: '90%'}}>

        <NavigationContainer style={{width: '100%',height: '100%'}}>
        <AppBottomBar />
      </NavigationContainer>

        </View>
       </View>
  );
}
