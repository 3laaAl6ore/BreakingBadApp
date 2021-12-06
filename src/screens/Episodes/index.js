import React from 'react';
import { Text, View} from 'react-native';
import Style from '../../utility/appStyle';

const  Episodes = (props) => {

    return (
        <View style={Style.container}>
            <Text>Episode </Text>
            </View>
    )

}

export const screenOptions = navData =>{
    return{
        headerStyle: {
            backgroundColor: 'blue'
            
        
        },
        headerTitle:'EPISODES',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    }
}

export default Episodes;