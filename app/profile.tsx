import React from 'react';
import { Text, View, Image } from 'react-native';

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
  icon: any;
  inactive: Boolean;
}

const icons = {
  profile:  require('../assets/icons/profile.png'),
  cadeado: require('../assets/icons/cadeado.png'),
  help:  require('../assets/icons/help.png'),
};

const profile:React.FC = () => {
  const router = useRouter();

  const links:LinkProps[] = [
    { title: 'Meus Dados', icon: 'profile', link : 'profileInfo', inactive: false },
    { title: 'Alterar senha', icon: 'cadeado', link : '', inactive: true },
    { title: 'Ajuda', icon: '', link : 'help', inactive: true },
    { title: 'Registro', icon: '', link : 'register', inactive: false },
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
            <Image source={ require("../assets/icons/arrow.png") } alt='back' style={{ width: 18, height: 21, transform: [{ rotate: '180deg' }] }} />
          </Text>
          <Avatar>
            <Image source={ require("../assets/icons/camera.png") } alt='camera' style={{ width: 24, height: 24, position: 'relative', left: 80, top: 100 }} />
          </Avatar>
          <TitleHeader>
            Usuário Teste
          </TitleHeader>
        </ContainerHeader>

        <Contentlink>
          {links.map((i, idx) => (
            <View key={idx}>
              <LinkContent active={i.inactive} onPress={() => !i.inactive ? router.push(`/${i.link}`): {}}>
                <LinkProfileData>
                  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image 
                      source={
                        icons[i.icon]
                      }
                      alt='back' 
                      style={{ width: 24, height: 24 }} 
                    />
                    
                    <LinkProfileDataText>
                      { i.title }
                    </LinkProfileDataText>
                  </View>
                  <View style={{ justifyContent: 'flex-end'}}>
                    <Image source={ require("../assets/icons/arrow.png") } alt='back' style={{ width: 18, height: 21 }} />
                  </View>
                </LinkProfileData>
              </LinkContent>
              <Separator />
            </View>
          ))}
        </Contentlink>

        <ButtonSignOut>
          <View style={{ marginTop: 40, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
            <Image source={ require("../assets/icons/Sair.png") } alt='back' style={{ width: 18, height: 21, marginRight: 8 }} />
            <Text style={{ color: '#E1B12C' }}>Sair</Text>
          </View>
        </ButtonSignOut>
      </ScrollView>
    </>
  )
}

export default profile