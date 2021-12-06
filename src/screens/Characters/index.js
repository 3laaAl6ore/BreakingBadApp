import React from 'react';
import { Text, View} from 'react-native';
import Style from '../../utility/appStyle';

const  character = (props) => {

    return (
        <View style={Style.container}>
            <Text>character </Text>
            </View>
    )

}

export const screenOptions = navData =>{
    return{
        headerStyle: {
            backgroundColor: 'blue'
            
        
        },
        headerTitle:'CHARACTERS' ,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    }
}

export default character;