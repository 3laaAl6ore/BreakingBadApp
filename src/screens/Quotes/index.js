import React,{useState, useEffect} from 'react';
import { Text, View,FlatList} from 'react-native';
import Style from '../../utility/appStyle';

const  Qoutes = (props) => {
    const [data, setData] = useState([]);

    const loadData = async () => {
      const url = "https://www.breakingbadapi.com/api/quotes";
      const response = await fetch(url, {
        method: "GET",
      });
      const serverData = await response.json();
      setData(serverData);
    };
    useEffect(() => {
      loadData();
    }, []);
    return (
        <View style={{flex: 1,padding:5}}>
            <FlatList 
            data = {data}
            keyExtractor={(item) => item.quote_id}
            renderItem ={(QoutesItem)=>(
            <View style={Style.FlatListQuoteStyle}>
            
            <View style={{width: '100%',padding:8,margin:8}}>

            <Text style={Style.quote}> {QoutesItem.item.quote} </Text>
            <Text style={{fontSize: 13}}> {QoutesItem.item.author} </Text>

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
            
        
        },

        headerTitle:'QOUTES',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    }
}

export default Qoutes;