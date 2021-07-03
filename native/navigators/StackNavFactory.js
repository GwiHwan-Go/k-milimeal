import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Photo from "../screens/Photo";
import Profile from "../screens/Profile";
import Feed from "../screens/Feed/Feed";
import Search from "../screens/Search/Search";
import Notifications from "../screens/notifications/Notifications";
import Me from "../screens/Me";
import { Image, TextInput, View } from "react-native";
import { Fontisto } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function StackNavFactory({ screenName }) {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerTitleAlign : "center",
        headerBackTitleVisible: false,
        headerTintColor: "white",
        headerStyle: {
          borderBottomColor: "rgba(255, 255, 255, 0.3)",
          shadowColor: "rgba(255, 255, 255, 0.3)",
          backgroundColor: "black",
        },
      }}
    >
      {screenName === "Feed" ? (
        <Stack.Screen
        name={"Feed"}
        component={Feed}
        options={{
          headerTitle: () => (
            <Image
              style={{
                width: 350,
                height: 40,
              }}
              resizeMode="contain"
              source={require("../assets/milimeal.jpg")}
            />
          ),
        }}
      />
      ) : null}
      {screenName === "Search" ? (
        <Stack.Screen 
        name={"Search"} 
        component={Search}
        options={{
          headerTitle: () => (
          <View style={{flex:1, flexDirection:"row"}}>
            <Fontisto name="search" size={30} color="white" style = {{
              marginRight:12,
              marginTop:3
            }} />
            <TextInput
            style={{ backgroundColor: "white",
          width: 500 , height:40, fontSize: 20}}
            placeholderTextColor="black"
            text
            placeholder=" 3군단"
            autoCapitalize="none"
            returnKeyLabel="Search"
            returnKeyType="search"
            autoCorrect={false}
          />
          </View>)
        }}
      />
      
      ) : null}
      {screenName === "Notifications" ? (
        <Stack.Screen
        name={"Notifications"}
        component={Notifications}
        options={{
          headerShown: false }}
            />
          )
       : null}
      {screenName === "Me" ? <Stack.Screen name={"계정 정보"} component={Me} /> : null}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
    </Stack.Navigator>
  );
}

