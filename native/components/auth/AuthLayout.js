import React from "react";
import styled from "styled-components/native";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
  } from "react-native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 0px 20px;
`;

const Logo = styled.Image`
  max-width: 70%;
  width: 100%;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export default function AuthLayout({ children }) {
    const dismissKeyboard = () => {
        Keyboard.dismiss();
      };
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={dismissKeyboard}
      disabled={Platform.OS === "web"}
    > 
        <Container>
            <KeyboardAvoidingView
                style={{
                    width: "100%",
                            }}
                behavior="position"
                keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
                >
                <Logo
                    resizeMode="contain"
                    source={require("../../assets/milimeal.jpg")}
                />
                {children}
            </KeyboardAvoidingView>
        </Container>
    </TouchableWithoutFeedback>
  );
}