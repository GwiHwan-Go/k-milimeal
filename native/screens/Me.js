import React from "react";
import { Text, View, Image, Container,TouchableOpacity } from "react-native";
import {colors} from "../colors"
import styled from "styled-components/native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";

const avatarUrl = "https://dispatch.cdnser.be/wp-content/uploads/2017/02/20170228011921_kakao_11.jpg"
const ButtonContainer = styled.View`
  flex : 1;
  flex-direction : row;
  width: 100%
  padding : 10px
`;
const ButtonEdit = styled.TouchableOpacity`
  flex : 1;
  background-color: ${colors.blue};
  padding: 15px 10px;
  border-radius: 3px;
  margin-right : 10px
  width: 100%;
  height : 50px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
const ButtonSee = styled.TouchableOpacity`
  flex : 1;
  background-color: white;
  padding: 15px 10px;
  border-radius: 3px;
  width: 100%;
  height : 50px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
const ButtonText = styled.Text`
  color: white;
  font-size : 15px
  font-weight: 600;
  text-align: center;
  margin-bottom : 15px
`;
const SeeText = styled.Text`
  color: black;
  font-size : 15px
  font-weight: 600;
  text-align: center;
  margin-bottom : 15px
`;
const HistoryView = styled.View`
  flex : 1
  margin-top : 80px;
  justify-content: flex-start;
`;
const HistoryText = styled.Text`
  color: white;
  font-size : 25px
  font-weight: 600;
  text-align: left;
  margin-top : 10px
  margin-bottom : 10px
`;

export default function Me({navigation}) {
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        padding : 25
      }}>
      <View
        style={{
          alignItems: "center"
        }}>
          <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
      
        <Image source={{ uri:avatarUrl,width : 100 , height: 100}} style = {{borderRadius : 50}} />
        </TouchableOpacity>
        <Text style={{ color: "white", padding : 10, marginLeft : 0, fontSize : 15 }}>고귀환 님, 항상 응원할게요.</Text>
        <ButtonContainer>
          <ButtonEdit disabled={false}>
            <ButtonText> 계정 정보 수정하기 </ButtonText>  
          </ButtonEdit>
          <ButtonSee disabled={false}>
            <SeeText> 계정 정보 보기 </SeeText>  
          </ButtonSee>
        </ButtonContainer>
      </View>
      <HistoryView>
          <HistoryText >활동 내역</HistoryText>
          <ButtonEdit disabled={false}>
            <ButtonText> 코멘트, 좋아요 표시한 내역 표시 </ButtonText>  
          </ButtonEdit>
          <HistoryText >관심 부대</HistoryText>
          <ButtonSee disabled={false}>
            <SeeText> 관심 있는 부대의 최근 업로드 내역 표시 </SeeText>  
          </ButtonSee>
      </HistoryView>
    </View>
  );
}