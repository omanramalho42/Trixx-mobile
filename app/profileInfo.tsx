import React from 'react'

import { View, StyleSheet, Image } from 'react-native'

import { Container, ContentInput, Input, Label } from '../styles/Register'

import { Button } from '../components'

import { Stack, useRouter } from 'expo-router'

import { ContainerHeader, HeaderTitle } from '../styles/ProfileInfo'

import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
        <TouchableOpacity style={{ position: 'relative', top: 30, left: 0, marginLeft: 16, width: 40, height: 40 }} onPress={() => router.back()}>
          <Image source={ require("../assets/icons/arrow.png") } alt='back' style={{ width: 18, height: 21, transform: [{ rotate: '180deg' }] }} />
        </TouchableOpacity>
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
            editable={false}
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
            editable={false}
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
            editable={false}
            value={phone.toString() || ""}
          />
        </ContentInput>
        
        <ContentInput>
          <Label>
            Senha
          </Label>
          <Input 
            placeholder='senha' 
            style={ProfileInfoStyle.shadow}
            editable={false}
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