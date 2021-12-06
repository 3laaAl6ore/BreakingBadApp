import React from 'react';
import { Text, View} from 'react-native';
import Style from '../../utility/appStyle';

const  EpisodeDetalis = (props) => {

    return (
        <View style={Style.container}>
            <Text>Episode Detalis</Text>
            </View>
    )

}

export const screenOptions = navData =>{
    return{
        headerStyle: {
            backgroundColor: 'blue'
            
        
        },

        headerTitle:'EPISODESDETALIS',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    }
}

export default EpisodeDetalis;