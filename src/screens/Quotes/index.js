import React from 'react';
import { Text, View} from 'react-native';
import Style from '../../utility/appStyle';

const  Qoutes = (props) => {

    return (
        <View style={Style.container}>
            <Text>Qoutes</Text>
            </View>
    )

}

export const screenOptions = navData =>{
    return{
        headerTitle:'Qoutes'
    }
}

export default Qoutes;