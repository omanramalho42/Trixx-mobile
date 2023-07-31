import React, { useState } from 'react';

import { StyleSheet } from 'react-native';

import {
  Container,
  ContentInput,
  Input,
  Label,
  Logo
} from '../styles/Register';

import { Feather } from '@expo/vector-icons';

import { Stack, useRouter } from 'expo-router';

import { Button } from '../components';

import { useDispatch } from 'react-redux';
import { setName, setEmail, setPhone, setPassword } from '../redux/reducers/profileState';

const RegisterStyle = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    elevation: 5,
  }
});

const register:React.FC = () => {
  const dispatch = useDispatch()
  const router = useRouter();

  const handleSubmitRegister = () => {
    if(nameState) {
      dispatch(setName(nameState));
    }
    if(emailState.length > 0) {
      dispatch(setEmail(emailState));
    }
    if(phoneState.length > 0) {
      dispatch(setPhone(phoneState));
    }
    if(passwordState.length > 0 && confirmPasswordState.length > 0) {
      if(passwordState === confirmPasswordState) {
        dispatch(setPassword(passwordState));
      }
    }

    router.push("/termsAndService");
  }

  const [nameState,setNameState]                        = useState<String>("");
  const [emailState,setEmailState]                      = useState<String>("");
  const [phoneState,setPhoneStae]                       = useState<String>("");
  const [passwordState,setPasswordState]                = useState<String>("");
  const [confirmPasswordState,setConfirmPassowordState] = useState<String>("");
  
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <Container 
        contentContainerStyle={{ 
          alignItems: "center"
        }}
      >
        {/* @ts-ignore */}
        <Logo />
        
        <ContentInput>
          <Label>
            Nome
          </Label>
          <Input 
            placeholder='nome' 
            style={RegisterStyle.shadow}
            onChangeText={(value) => setNameState(value)}
          />
          {/* <Feather name="eye-off" size={24} color="black" /> */}
          
        </ContentInput>

        <ContentInput>
          <Label>
            E-mail
          </Label>
          <Input 
            placeholder='e-mail' 
            style={RegisterStyle.shadow} 
            onChangeText={setEmailState}
          />
        </ContentInput>

        <ContentInput>
          <Label>
            Telefone
          </Label>
          <Input 
            placeholder='telefone' 
            style={RegisterStyle.shadow} 
            onChangeText={setPhoneStae}
          />
        </ContentInput>

        <ContentInput>
          <Label>
            Criar senha
          </Label>
          <Input 
            placeholder='senha' 
            style={RegisterStyle.shadow} 
            onChangeText={setPasswordState}
          />
        </ContentInput>

        <ContentInput>
          <Label>
            Confirmar senha
          </Label>
          <Input 
            placeholder='senha' 
            style={RegisterStyle.shadow}
            onChangeText={setConfirmPassowordState} 
          />
        </ContentInput>

        <Button
          text='Criar Conta' 
          onPress={handleSubmitRegister} 
        />
      </Container>
    </>
  )
}

export default register