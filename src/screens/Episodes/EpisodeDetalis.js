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
        headerTitle:'EpisodeDetalis'
    }
}

export default EpisodeDetalis;