import React, { useRef } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";
import { gql, useMutation } from "@apollo/client";
import {  logUserIn } from "../apollo";

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
  
`;

export default function Login({route : {params}}) {
    const { register, handleSubmit, setValue, watch } = useForm({
      defaultValues: {
        password:params?.password,
        username:params?.username,
      }
    });
    const passwordRef = useRef();
    const onCompleted = async (data) => {
        console.log(data)
        const { login: { ok, token }, } = data;
        if (ok) {
          await logUserIn(token)
        }
      };
    const [logInMutation, { loading }] = useMutation(LOGIN_MUTATION, {
      onCompleted,
      });
    const onNext = (nextOne) => {
      nextOne?.current?.focus();
    };
    const onValid = (data) => {
      console.log('logindata=',data)
        if (!loading) {
            logInMutation({
              variables: {
                ...data,
              },
            });
          }
        
    };
  
    useEffect(() => {
        register("username", {
            required: true,
          });
          register("password", {
            required: true,
          });
    }, [register]);
  
  
    return (
      <AuthLayout>
        <TextInput
          placeholder="아이디를 입력해주세요."
          returnKeyType="next"
          autoCapitalize="none"
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          onSubmitEditing={() => onNext(passwordRef)}
          onChangeText={(text) => setValue("username", text)}
        />
        <TextInput
          ref={passwordRef}
          placeholder="비밀번호를 입력해주세요."
          secureTextEntry
          returnKeyType="done"
          lastOne={true}
          placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
          onSubmitEditing={handleSubmit(onValid)}
          onChangeText={(text) => setValue("password", text)}
        />
        <AuthButton
          text="로그인"
          loading={loading}
            disabled={!watch("username") || !watch("password")}
          onPress={handleSubmit(onValid)}
        />
      </AuthLayout>
    );
  }