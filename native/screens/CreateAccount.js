import React, { useRef } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function CreateAccount() {
    const { register, handleSubmit, setValue } = useForm();
    const lastNameRef = useRef();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
  
    const onNext = (nextOne) => {
      nextOne?.current?.focus();
    };
    const onValid = (data) => {
        console.log(data);
      };
    
    useEffect(() => {
        register("firstName", {
            required: true,
          });
          register("lastName", {
            required: true,
          });
          register("username", {
            required: true,
          });
          register("email", {
            required: true,
          });
          register("password", {
            required: true,
          });
      }, [register]);

    return (
        <AuthLayout>
            <TextInput
                placeholder="사용할 아이디를 입력해 주세요."
                returnKeyType="next"
                onSubmitEditing={() => onNext(lastNameRef)}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                onChangeText={(text) => setValue("firstName", text)}
            />
            <TextInput
            placeholder="소속을 알려주세요.(간부/군인/민간인)"
            placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
            returnKeyType="next"
            />
            <TextInput
                ref={lastNameRef}
                placeholder="간부/군인인 경우 군번을 입력해주세요."
                returnKeyType="next"
                onSubmitEditing={() => onNext(usernameRef)}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                onChangeText={(text) => setValue("lastName", text)}
            />
            <TextInput
                ref={usernameRef}
                placeholder="이름을 입력해주세요."
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => onNext(emailRef)}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                onChangeText={(text) => setValue("username", text)}
            />
            <TextInput
                ref={emailRef}
                placeholder="이메일을 입력해주세요."
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() => onNext(passwordRef)}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
                onChangeText={(text) => setValue("email", text)}
            />
            <TextInput
            placeholder="휴대번호(군번호 제외)를 입력해주세요."
            placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
            returnKeyType="next"
            />
            <TextInput
            placeholder="비밀번호를 입력해주세요."
            placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
            returnKeyType="next"
            />
            <TextInput
                ref={passwordRef}
                placeholder="비밀번호를 한번 더 확인할게요."
                secureTextEntry
                returnKeyType="done"
                lastOne={true}
                placeholderTextColor={"rgba(255, 255, 255, 0.6)"}onChangeText={(text) => setValue("password", text)}
                onSubmitEditing={handleSubmit(onValid)}
            />
              
            <AuthButton
                text="계정 생성하기"
                disabled={false}
                onPress={handleSubmit(onValid)}
            /> 
        </AuthLayout>
      );
}