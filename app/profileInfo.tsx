import React from 'react'

import { Text, StyleSheet } from 'react-native'

import { Container, ContentInput, Input, Label } from '../styles/Register'

import { Button } from '../components'

import { Stack, useRouter } from 'expo-router'

import { ContainerHeader, HeaderTitle } from '../styles/ProfileInfo'

import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const ProfileInfoStyle = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    elevation: 5,
  }
});

const profileInfo:React.FC = () => {
  const router = useRouter();

  const name = useSelector((state: RootState) => state.profile.name);
  const email = useSelector((state: RootState) => state.profile.email);
  const phone = useSelector((state: RootState) => state.profile.phone);
  const password = useSelector((state: RootState) => state.profile.password);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <ContainerHeader>
        <Text style={{ position: 'absolute', top: 30, left: 0, marginLeft: 16 }} onPress={() => router.back()}>
          back
        </Text>
        <HeaderTitle>
          Dados
        </HeaderTitle>
      </ContainerHeader>

      <Container>
        <ContentInput>
          <Label>
            Nome Completo
          </Label>
          <Input 
            placeholder='nome' 
            style={ProfileInfoStyle.shadow}
            value={name.toString() || ""}
          />
          
        </ContentInput>

        <ContentInput>
          <Label>
            E-mail
          </Label>
          <Input 
            placeholder='e-mail' 
            style={ProfileInfoStyle.shadow}
            value={email.toString() || ""}
          />
        </ContentInput>

        <ContentInput>
          <Label>
            Celular
          </Label>
          <Input 
            placeholder='telefone' 
            style={ProfileInfoStyle.shadow}
            value={phone.toString() || ""}
          />
        </ContentInput>
        
        <ContentInput>
          <Label>
            Celular
          </Label>
          <Input 
            placeholder='senha' 
            style={ProfileInfoStyle.shadow}
            value={password.toString() || ""}
          />
        </ContentInput>

        <Button
          text='Confirmar' 
          onPress={() => router.push("/")} 
        />
      </Container>
    </>
  )
}

export default profileInfo