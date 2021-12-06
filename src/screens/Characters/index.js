import React ,{useState}from 'react';
import { Text, View,FlatList} from 'react-native';
import Style from '../../utility/appStyle';

const  Character = (props) => {
    const [data , setData] = useState([]);

    const url = 'https://www.breakingbadapi.com/api/characters';

    const loadData = async(url) => {
        const response = await fetch(url, {
           method:'GET' 
        });
        const serverData = await response.json();
        setData(serverData.results);
        console.log('DTA: ' + data);
      }
    return (
        <View style={Style.container}>
            <FlatList
            data={loadData}
            keyExtractor={item=>item.char_id}
            renderItem={categoryItem =>
             <View style={{backgroundColor:'#fff',margin:10,paddingVertical:10,alignItems:'center',paddingHorizontal:50,borderRadius:20,width:'70%',alignSelf: 'center'}}>
                <Text style={{fontSize:19}}>{categoryItem.item.name}</Text>
            </View>
         }
            />
            <Text >character </Text>
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

export default Character;