import ScreenLayout from "../../components/ScreenLayout";
import React, {Component} from 'react';
import {AppRegistry,Image,FlatList,StyleSheet,Text,View, useWindowDimensions} from 'react-native';
import flatListData from './data/flatlistdata'
import menus from './data/menu_data';
import dishes from './data/dish_data';
import bannerUrl from './data/banner_data';
import styled from "styled-components/native";
import FlatListLogo from "./FeedLogoFlatlist";
import FlatListUpload from "./FeedUploadFlatlist";

const Container = styled.View``;
const RankContainer =styled.View`
  padding: 5px;
  flex-direction: row;
  align-items: center;
  `;

const Rank = styled.View`
  padding: 20px;
  margin-left : 15px
`;
const CaptionText = styled.Text`
  color: white;
  font-size : 15px
  margin-bottom: 10px
  margin-left: 5px;
`;
const TopText = styled.Text`
color: white;
margin-top: 5px
font-weight : 600
font-size : 15px
margin-left: 15px;
`;
const CaptionTitle = styled.Text`
color: white;
margin-left: 5px;
font-size : 17px
margin-bottom: 10px;
`;

export default function Feed () {

      return (
          <ScreenLayout>
               <Container>
            <TopText>최근 업로드</TopText>
           <View style={{flex: 1,   justifyContent: 'center'}}>
               <FlatList
                    data ={flatListData}
                    horizontal = {true}
                    renderItem = {({item,index})=>{
                        // console.log(`Item=${JSON.stringify(item)}, index= ${index}`)
                        return(
                            <FlatListUpload item={item}  index = {index}/>
                        );
                    }}
               />
           </View>
           <View style={{flex: 1,   justifyContent: 'center'}}>
             <TopText style={{marginTop:25}}>급양 우수 부대</TopText>
               <FlatList
                    data ={flatListData}
                    horizontal = {true}
                    renderItem = {({item,index})=>{
                        // console.log(`Item=${JSON.stringify(item)}, index= ${index}`)
                        return(
                            <FlatListLogo item={item}  index = {index}/>
                        );
                    }}
               />
           </View>
           <RankContainer>
             <Rank>
               <CaptionTitle>실시간 인기 식단 순위</CaptionTitle>
               {menus.map((menu,index)=>{
                 return(
                 <CaptionText>{`${index+1}   ${menu}`}</CaptionText>
                 )
             })}
             </Rank>
             <Rank style={{marginLeft : 70}}>
             <CaptionTitle>실시간 인기 메뉴 순위</CaptionTitle>
               {dishes.map((dish,index)=>{
                 return(
                 <CaptionText>{`${index+1}   ${dish}`}</CaptionText>
                 )
             })}
             </Rank>
           </RankContainer>
           {/* adverse */}
           <Image source={{uri:bannerUrl ,width : 600 , height: 150, padding:20, marginBottom:5}}></Image>
           </Container>
          </ScreenLayout>
      );
  }

  