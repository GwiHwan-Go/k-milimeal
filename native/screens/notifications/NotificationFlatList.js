
import React, {Component} from 'react';
import {AppRegistry,Image,FlatList,StyleSheet,Text,View, useWindowDimensions} from 'react-native';
import flatListData from './flatlistdata'
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
const Container = styled.View``;
const UserAvatar = styled.Image`
  margin-right: 10px;
  margin-bottom: 5px;
  width: 50px;
  height: 45px;
  border-radius: 12.5;
`;
const Header = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;
const Username = styled.Text`
  color: white;
  font-weight: 600;
  margin-right:25
`;
const Actions = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Action = styled.TouchableOpacity`
  margin-right: 10px;
`;
const Caption = styled.View`
  flex-direction: row;
`;
const MenuView = styled.View`
  flex : 1
  align-items: center;
`;
const ExtraContainer = styled.View`
  padding: 10px;
`;
const CaptionText = styled.Text`
  color: white;
  margin-left: 3px
`;
const CommentText = styled.Text`
color: white;
font-size : 15
margin-left: 2px
`;
export default function NotificationFlatListItems(){


        return(
        <Container>
          <Header>
            <UserAvatar resizeMode="cover" source={{ uri: this.props.item.avatar }} />
            <Username>{this.props.item.name}</Username>
            <View style={{flex:1, flexDirection:"row"}}>
            {this.props.item.foodArray.map((food)=>{
              return(
                <MenuView style={{flex:1, }}>
                  <Text style = {{color:"white", marginLeft:5}}>{food.food}</Text>
                  <Ionicons style = {{padding: 5}}
                    name={food.isliked ? "heart" : "heart-outline"}
                    color={food.isliked ? "tomato" : "white"}
                    size={22}
                  ><Text style={{color:"white"}}>{food.likes}</Text></Ionicons>
                
                </MenuView>
              )
            })}
            </View>
           
          </Header>
            <View style ={{flex:1,marginRight: 30,justifyContent: 'center', alignItems: 'center'}}>
              <Image source={{uri:this.props.item.imageUrl ,width : 610 , height: 300}}></Image>
            </View>
            <ExtraContainer>
              <Actions>
                    <CaptionText>{this.props.item.foodDescription}</CaptionText>
                    <Action >
                        <Ionicons name="chatbubble-outline" color="white" size={22} style={{
                          marginLeft:380
                        }}><CommentText style={{color:"white"}}>Comments</CommentText></Ionicons>
                        
                    </Action>
              </Actions>
              <Caption>
              
              
              </Caption>
          </ExtraContainer>
        </Container>
        );
    }
