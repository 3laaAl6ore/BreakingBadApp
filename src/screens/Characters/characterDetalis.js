import React from 'react';
import { Text, View,Image} from 'react-native';
import Style from '../../utility/appStyle';

const  characterDetalis = (props) => {
console.log(props);
    return (
        <View style={{flex:1}}>
           <View style={{width:'50%'}}>
           <Image
              source={{ uri:props.route.params.CharacterDList.img }}
              style={{width:255, height:250,resizeMode: 'contain'}}
            />
           </View>
            </View>
    )

}

export const screenOptions = navData =>{
    return{
        headerStyle: {
            backgroundColor: 'blue'
            
        
        },
        headerTitle:navData.route.params.CharacterDList.name,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    }
}

export default characterDetalis;