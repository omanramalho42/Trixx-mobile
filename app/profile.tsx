import React from 'react';
import { Text, View } from 'react-native';

import {
  Avatar,
  ButtonSignOut,
  ContainerHeader,
  Contentlink,
  LinkContent,
  LinkProfileData,
  LinkProfileDataText,
  TitleHeader,
  Separator
} from '../styles/Profile';

import { Stack, useRouter } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';

interface LinkProps {
  title: String;
  link: String;
  icon: String;
  inactive: Boolean;
}

const profile:React.FC = () => {
  const router = useRouter();

  const links:LinkProps[] = [
    { title: 'Meus Dados', icon: '', link : 'profileInfo', inactive: false },
    { title: 'Alterar senha', icon: '', link : '', inactive: true },
    { title: 'Ajuda', icon: '', link : '', inactive: true },
    { title: 'Registro', icon: '', link : 'register', inactive: true },
  ];

  return (
    <>
      <Stack.Screen 
        options={{ headerShown: false }} 
      />
      <ScrollView>
        
        <ContainerHeader>
          <Text 
            style={{ justifyContent: 'flex-start', textAlign: 'left', marginLeft: 15 }}
            onPress={() => router.back()}
          >
            back
          </Text>
          <Avatar />
          <Text style={{ position: 'absolute', top: 150, right: 140 }}>
            c
          </Text>
          <TitleHeader>
            Usuário Teste
          </TitleHeader>
        </ContainerHeader>

        <Contentlink>
          {links.map((i) => (
            <>
              <LinkContent active={i.inactive} onPress={() => !i.inactive ? router.push(`/${i.link}`): {}}>
                <LinkProfileData>
                  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>icon</Text>
                    <LinkProfileDataText onPress={() => {}}>
                      { i.title }
                    </LinkProfileDataText>
                  </View>
                  <Text style={{ justifyContent: 'flex-end'}}>icon</Text>
                </LinkProfileData>
              </LinkContent>
              <Separator />
            </>
          ))}
        </Contentlink>

        <ButtonSignOut>
          <Text style={{ color: '#E1B12C', marginTop: 40 }}>
            Sair
          </Text>
        </ButtonSignOut>
      </ScrollView>
    </>
  )
}

export default profile