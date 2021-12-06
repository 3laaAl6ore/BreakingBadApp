import React from 'react';
import { Text, View} from 'react-native';
import Style from '../../utility/appStyle';

const  characterDetalis = (props) => {

    return (
        <View style={Style.container}>
            <Text>character Detalis</Text>
            </View>
    )

}

export const screenOptions = navData =>{
    return{
        headerTitle:'characterDetalis'
    }
}

export default characterDetalis;