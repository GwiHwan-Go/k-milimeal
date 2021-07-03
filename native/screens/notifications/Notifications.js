import React from "react";
import ScreenLayout from "../../components/ScreenLayout";
import { useWindowDimensions,SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image } from 'react-native';
import NotificationFlatListItems from "./NotificationFlatList"
import flatListData from "./data/flatlistdata";

export default function Notifications () {

      return (
          <ScreenLayout>
              <View style={{flex: 1,  marginTop: 22 , justifyContent: 'center'}}>
               <FlatList
                    data ={flatListData}
                    horizontal = {false}
                    renderItem = {({item,index})=>{
                        // console.log(`Item=${JSON.stringify(item)}, index= ${index}`)
                        return(
                            <NotificationFlatListItems item={item} index = {index}/>
                        );
                    }}
               />
           </View>
          </ScreenLayout>
      );
  }
