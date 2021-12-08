import React from "react";
import { Text, View, Image } from "react-native";
import Style from "../../utility/appStyle";

const characterDetalis = (props) => {
  console.log(props);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: "100%", height: "55%" }}>
        <Image
          source={{ uri: props.route.params.CharacterDList.img }}
          style={{ width: "100%", height: "100%", resizeMode: "stretch" }}
        />
      </View>
      <View
        style={{
          width: "100%",
          height: "7%",
          backgroundColor:
            props.route.params.CharacterDList.status == "Alive"
              ? "green"
              : "red",
        }}
      >
        <Text
          style={{
            width: "100%",
            color: "white",
            textAlign: "center",
            fontSize: 25,
          }}
        >
          {props.route.params.CharacterDList.status}
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          color: "white",
          textAlign: "center",
          fontSize: 25,
        }}
      ></View>
      <Text style={{ fontWeight: "bold", color: "black", fontSize: 25 }}>
        {" "}
        Name:{" "}
        <Text style={{ fontWeight: "200", fontSize: 18 }}>
          {props.route.params.CharacterDList.name}
        </Text>{" "}
      </Text>
      <Text style={{ fontWeight: "bold", color: "black", fontSize: 25 }}>
        {" "}
        Nickname:{" "}
        <Text style={{ fontWeight: "200", fontSize: 18 }}>
          {props.route.params.CharacterDList.nickname}
        </Text>{" "}
      </Text>
      <Text style={{ fontWeight: "bold", color: "black", fontSize: 25 }}>
        {" "}
        Portrayed:{" "}
        <Text style={{ fontWeight: "200", fontSize: 18 }}>
          {props.route.params.CharacterDList.portrayed}
        </Text>{" "}
      </Text>
      <Text style={{ fontWeight: "bold", color: "black", fontSize: 25 }}>
        {" "}
        Appearance:{" "}
        <Text style={{ fontWeight: "200", fontSize: 18 }}>
          {props.route.params.CharacterDList.appearance + ","}{" "}
        </Text>{" "}
      </Text>
    </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerStyle: {
      backgroundColor: "blue",
    },
    headerTitle: navData.route.params.CharacterDList.name,
    headerBackTitle: null,
    headerTintColor: "#fff",
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
};

export default characterDetalis;
