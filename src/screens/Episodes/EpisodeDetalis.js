import React from 'react';
import { Text, View,FlatList} from 'react-native';
import Style from '../../utility/appStyle';

const  EpisodeDetalis = (props) => {
   const i = 0;
   const characters = [
    
   ];

console.log(props);
    return (
        <View style={{width: '100%'}}>
            <View style={{width: '100%',height: '50%',backgroundColor:'skyblue',alignItems:'center',justifyContent: 'center'}}>
                <Text style={{fontSize:42,fontWeight:'bold'}}> {props.route.params.EpisodeDList.title} </Text>
            </View>
            <View style={{width: '100%',height: '10%',backgroundColor:'blue',alignItems:'center',justifyContent: 'center'}}>
                <Text style={{fontSize:42,fontWeight:'bold',color:'white'}}> Characters </Text>
            </View>
        <FlatList
        data={props.route.params.EpisodeDList.characters}
        keyExtractor={(item) => item.char_id}
        renderItem={(characterItem) => (

        
          <View style={Style.FlatListCharactersStyle}>
            <View>
            <Text style={{   
                 fontWeight:'bold',
                color:'green', 
                fontSize:15,
                color:'green',
                }}>{characterItem.item}</Text>
            </View>
         </View>
        )}
      />
            </View>
    )

}

export const screenOptions = navData =>{
    return{
        headerStyle: {
            backgroundColor: 'blue'
            
       //     Season {EpisodeItem.item.season} | Episode {EpisodeItem.item.episode}
        },
        headerBackTitle:null,
        headerTitle:'Season '+navData.route.params.EpisodeDList.season + ' | Episode '+navData.route.params.EpisodeDList.episode,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    }
}

export default EpisodeDetalis;