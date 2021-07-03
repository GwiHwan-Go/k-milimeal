
import React, { Component } from 'react'
import {LocaleConfig} from 'react-native-calendars';
import { ActivityIndicator, Text, TextInput, View } from "react-native";
import styled from "styled-components/native";
import { useForm } from 'react-hook-form';
import { useEffect } from 'react/cjs/react.production.min';
import SearchCalendar from './Calendar/Calendar';

const UserAvatar = styled.Image`
  margin-bottom: 34px;
  width: 50px;
  height: 45px;
  border-radius: 12.5;
`;
export default function Search({navigation}) {

  const imgUrl = 'https://w.namu.la/s/53bafa888696190b6e0896e445e2fc8a75c55354214f23b1a6c0df86115028d37d7d46b11cad0586a9f6dd1b3944419daf64e5b157fa44060ed2fbf48e77bf3c20f1de99142ec3975dc3ab2577e2a04cd67a067d182041be24e2e4644d0f25df'
     return (
      <View style={{ paddingTop: 40, flex: 1 }}>
        <View style ={{flex:1,flexDirection:"row",marginRight: 30,justifyContent: 'center', alignItems:"center", backgroundColor:"white"}}>
          <UserAvatar resizeMode="cover" source={{ uri: imgUrl }} />
          <Text style={{color:"black", marginBottom: 36, fontWeight:"400", fontSize:25}}>3군단</Text>
        </View>
        <SearchCalendar />
      </View>
     
     )}