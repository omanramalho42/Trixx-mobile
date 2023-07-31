import React, { useState } from 'react';

import { Alert, Keyboard, KeyboardAvoidingView, TouchableNativeFeedback } from 'react-native';

import {
  Container,
  ContentInput,
  Input,
  Label,
  Logo
} from '../styles/Register';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { TextInput } from 'react-native-paper';

import { Stack, useRouter } from 'expo-router';

import { Button, ControlledInput } from '../components';

import { useDispatch } from 'react-redux';

import { setName, setEmail, setPhone, setPassword } from '../redux/reducers/profileState';

type FormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const VALID_EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const VALID_PHONE_REGEX = /^[0-9]{10,11}$/;
const schema = yup.object({
  name: yup.string().min(4, "O nome deve ter ao menos 4 caracteres").required("Informe seu Nome."),
  email: yup.string().email("Email inválido").required("Informe seu Email."),
  phone: yup.string().matches(VALID_PHONE_REGEX,"Telefone invalido").required("Informe seu Telefone."),
  password: yup.string().min(6, "A senha deve ter ao menos 6 digitos.").required("Informe sua senha."),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], "As senhas não coincidem").required("Informe sua senha.")
});

const register:React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const dispatch = useDispatch()
  const router = useRouter();

  const handleSubmitRegister = async (data: FormData) => {
    // if(nameState.trim() === "") {
    //   return Alert.alert("Informe o nome.");
    // }
    // if(passwordState.trim() === "") {
    //   return Alert.alert("Informe a senha.");
    // }
    // if(passwordState.trim().length < 6) {
    //   return Alert.alert("A senha deve ter ao menos 6 digitos.");
    // }
    // if(passwordState.trim() !== confirmPasswordState.trim()) {
    //   return Alert.alert("As senhas nao se conhecidem.");
    // }
    // if(emailState.trim() === "") {
    //   return Alert.alert("Informe o email.");
    // }
    // if(!(VALID_EMAIL_REGEX).test(emailState.toLowerCase())){
    //   return Alert.alert("Email inválido.");
    // }
    // if(phoneState.trim() === "") {
    //   return Alert.alert("Informe o email.");
    // }
    // if(!(VALID_PHONE_REGEX).test(phoneState.toLowerCase())){
    //   return Alert.alert("Telefone inválido.");
    if(data.name) {
      dispatch(setName(data.name));
    }
    if(data.email) {
      dispatch(setEmail(data.email));
    }
    if(data.phone) {
      dispatch(setPhone(data.phone));
    }
    if(data.password && data.confirmPassword ) {
        dispatch(setPassword(data.password ));
    }

    await Alert.alert("Cadastro realizado com sucesso!");
    router.push("/termsAndService");
  }

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
        <TouchableNativeFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior='position' enabled>
            <Container 
              contentContainerStyle={{ 
                alignItems: "center",
              }}
            >
              {/* @ts-ignore */}
              <Logo />
              
              <ContentInput>
                <Label>
                  Nome
                </Label>
                <ControlledInput 
                  name='name'
                  control={control}
                  error={errors.name}
                  placeholder="Name"
                  placeholderTextColor={"#6666"}
                />
              </ContentInput>

              <ContentInput>
                <Label>
                  E-mail
                </Label>
                <ControlledInput 
                  name='email'
                  control={control}
                  autoCapitalize="none"
                  keyboardType='email-address'
                  error={errors.email}
                  placeholder="e-mail"
                  placeholderTextColor={"#6666"}
                />
              </ContentInput>

              <ContentInput>
                <Label>
                  Telefone
                </Label>
                <ControlledInput 
                  name='phone'
                  control={control}
                  error={errors.phone}
                  placeholder="telefone"
                  placeholderTextColor={"#6666"}
                />
              </ContentInput>

              <ContentInput>
                <Label>
                  Criar senha
                </Label>
                <ControlledInput 
                  name='password'
                  control={control}
                  error={errors.password}
                  placeholder="senha"
                  placeholderTextColor={"#6666"}
                  secureTextEntry={passwordVisible}
                  autoCapitalize="none"
                  //@ts-ignore
                  right={
                    <TextInput.Icon
                      icon={passwordVisible ? 'eye' : 'eye-off'}
                      onPress={() => setPasswordVisible((visible) => !visible)}
                    />
                  } 
                />
              </ContentInput>

              <ContentInput>
                <Label>
                  Confirmar senha
                </Label>
                <ControlledInput 
                  name='confirmPassword'
                  control={control}
                  error={errors.confirmPassword}
                  placeholder="senha"
                  placeholderTextColor={"#6666"}
                  secureTextEntry={passwordVisible}
                  autoCapitalize="none"
                  //@ts-ignore
                  right={
                    <TextInput.Icon
                      icon={passwordVisible ? 'eye' : 'eye-off'}
                      onPress={() => setPasswordVisible((visible) => !visible)}
                    />
                  } 
                />
              </ContentInput>

              <Button
                text='Criar Conta' 
                onPress={handleSubmit(handleSubmitRegister)} 
              />
            </Container>
          </KeyboardAvoidingView>
        </TouchableNativeFeedback>
    </>
  )
}

export default register