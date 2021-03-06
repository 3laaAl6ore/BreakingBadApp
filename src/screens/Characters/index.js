import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import Style from "../../utility/appStyle";

const Character = (props) => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const url = "https://www.breakingbadapi.com/api/characters";
    const response = await fetch(url, {
      method: "GET",
    });
    const serverData = await response.json();
    setData(serverData);
    //console.log("DTA: " + JSON.stringify(data));
  };
  useEffect(() => {
    loadData();
  }, []);
  //console.log(data);

  return (
    <View style={Style.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.char_id}
        renderItem={(characterItem) => (
          <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('characterDetalis', {
              CharacterDList: characterItem.item,
            });
          }}
        >
          <View style={Style.FlatListCharactersStyle}>
            
            <Image
              source={{ uri: characterItem.item.img }}
              style={Style.CharacterImg}
            />
            <View>
            <Text style={Style.CharacterName}>{characterItem.item.name}</Text>
            <Text style={Style.nicknameStyle}>{characterItem.item.nickname}</Text>
            </View>
         </View>
         </TouchableOpacity>
        )}
      />
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerStyle: {
      backgroundColor: "blue",
    },
    headerTitle: "CHARACTERS",
    headerTintColor: "#fff",
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
};

export default Character;
