import React,{ useState,useEffect} from 'react';
import { Text, View ,TouchableOpacity,FlatList} from 'react-native';
import Style from '../../utility/appStyle';

const  Episodes = (props) => {
    const [data, setData] = useState([]);

    const loadData = async () => {
      const url = "https://www.breakingbadapi.com/api/episodes";
      const response = await fetch(url, {
        method: "GET",
      });
      const serverData = await response.json();
      setData(serverData);
     // console.log("DTA: " + JSON.stringify(data));
    };
    useEffect(() => {
      loadData();
    }, []);
   // console.log(data);
    return (
        <View style={Style.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.char_id}
        renderItem={(EpisodeItem) => (
          <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('EpisodesDetalis', {
              EpisodeDList: EpisodeItem.item,
            });
          }}
        >
          <View style={Style.FlatListEpisodeStyle}>
            
            <View style={{width: '100%',padding:3,margin:4}}>
            <Text style={Style.CharacterName}>{EpisodeItem.item.title} </Text>

            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize: 12,color: 'grey',}}>Season {EpisodeItem.item.season} | Episode {EpisodeItem.item.episode} </Text>
            <Text style={{fontSize: 12,color: 'grey',marginLeft: '30%',}}>Air Date {EpisodeItem.item.air_date} </Text>
            </View>
            </View>
         </View>
         </TouchableOpacity>
        )}
      />
        </View>
    )

}

export const screenOptions = navData =>{
    return{
      
        headerStyle: {
            backgroundColor: 'blue',
        
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