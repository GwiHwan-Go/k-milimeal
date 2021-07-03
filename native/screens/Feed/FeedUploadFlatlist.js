import React, {Component} from 'react';
import {AppRegistry,Image,FlatList,StyleSheet,Text,View, useWindowDimensions} from 'react-native';
import styled from "styled-components/native";

const Container = styled.View``;
const TopContainer = styled.View`
padding: 10px 5px;
margin-bottom: 100px
`;
const UserAvatar = styled.Image`
  margin-right: 2px;
  margin-bottom: 0px
  width: 50px;
  height: 45px;
`;
const Header = styled.TouchableOpacity`
  padding: 5px;
  flex-direction: row;
  align-items: center;
`;
const Username = styled.Text`
  color: white;
  font-weight: 600;
`;
const Caption = styled.Text`
  margin-left: 25px
  color: white;
  font-weight: 400;
`;
class FlatListUpload extends Component{

    render() {
      const bannerUrl = "https://vrthumb.imagetoday.co.kr/2021/05/12/tid316t002048.jpg"    
        return(
        <Container>
          <TopContainer>
          <Header>
            <UserAvatar resizeMode="cover" source={{ uri: this.props.item.avatar }} />
            <Username>{this.props.item.name}</Username>
            <Caption>{this.props.item.foodDescription}</Caption>
          </Header>
            {/* <View style ={{flex:1,marginRight: 30,justifyContent: 'center', alignItems: 'center'}}> */}
              <Image source={{uri:this.props.item.imageUrl ,width : 300 , height: 150, padding:5, marginRight:0}}></Image>
            {/* </View> */}
          </TopContainer>
        </Container>
        );
    }
  }

export default FlatListUpload;