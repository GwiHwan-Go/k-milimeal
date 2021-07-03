import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabIcon from "../components/nav/TabIcon.js";
import StackNavFactory from "./StackNavFactory";

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
  <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: "white",
      showLabel: false,
      style: {
        borderTopColor: "rgba(255, 255, 255, 0.3)",
        backgroundColor: "black",
      },
    }}
  >
    <Tabs.Screen
      name="Feed"
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <TabIcon iconName={"md-home"} color={color} focused={focused} />
        ),
      }}
      >
      {() => <StackNavFactory screenName="Feed" />}
    </Tabs.Screen>
    <Tabs.Screen
      name="Search"
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <TabIcon iconName={"calendar"} color={color} focused={focused} />
        ),
      }}
      >
      {() => <StackNavFactory screenName="Search" />}
    </Tabs.Screen>
    <Tabs.Screen
      name="Notifications"
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <TabIcon iconName={"albums"} color={color} focused={focused} />
        ),
      }}
      >
      {() => <StackNavFactory screenName="Notifications" />}
    </Tabs.Screen>
    <Tabs.Screen
      name="Me"
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <TabIcon iconName={"person"} color={color} focused={focused} />
        ),
      }}
      >
      {() => <StackNavFactory screenName="Me" />}
    </Tabs.Screen>
  </Tabs.Navigator>
);
}