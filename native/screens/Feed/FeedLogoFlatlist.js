import React, {Component} from 'react';
import {AppRegistry,Image,FlatList,StyleSheet,Text,View, useWindowDimensions} from 'react-native';
import styled from "styled-components/native";
const Container = styled.View``;
const TopContainer = styled.View`
padding: 10px 5px;
margin-bottom: 100px
`;
const Avatarname = styled.Text`
  padding : 7px 14px
  flex-direction: row;
  color: white;
  font-weight: 600;
  align-items: center
`;

const bannerUrl = "https://vrthumb.imagetoday.co.kr/2021/05/12/tid316t002048.jpg"

class FlatListLogo extends Component{

    render() {
          
        return(
        <Container>
          <TopContainer>
            {/* <View style ={{flex:1,marginRight: 30,justifyContent: 'center', alignItems: 'center'}}> */}
              <Image source={{uri:this.props.item.avatar ,width : 100 , height: 80, padding:0, marginRight:0}}></Image>
              <Avatarname>{this.props.item.name}</Avatarname>
            {/* </View> */}
          </TopContainer>
        </Container>
        );
    }
}

export default FlatListLogo;