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
        headerTitle:'Episodes'
    }
}

export default Episodes;