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
  service:  require('../assets/images/service.png'),
  service1: require('../assets/images/service1.png'),
  service2:  require('../assets/images/service2.png'),
  service3: require('../assets/images/service3.png'),
  service4:  require('../assets/images/service4.png'),
};

const profile:React.FC = () => {
  const router = useRouter();

  const links:LinkProps[] = [
    { title: 'Meus Dados', icon: 'profile.png', link : 'profileInfo', inactive: false },
    { title: 'Alterar senha', icon: 'cadeado.png', link : '', inactive: true },
    { title: 'Ajuda', icon: '', link : 'help.png', inactive: true },
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
            back
          </Text>
          <Avatar />
          <Text style={{ position: 'absolute', top: 150, right: 140 }}>
            <Image source={{ uri: "../assets/icons/camera.png" }} alt='camera' style={{ width: 24, height: 24 }} />
          </Text>
          <TitleHeader>
            Usuário Teste
          </TitleHeader>
        </ContainerHeader>

        <Contentlink>
          {links.map((i, idx) => (
            <>
              <LinkContent key={idx} active={i.inactive} onPress={() => !i.inactive ? router.push(`/${i.link}`): {}}>
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
                    <Image source={{ uri: "../assets/icons/arrow.png" }} alt='back' style={{ width: 18, height: 21 }} />
                  </View>
                </LinkProfileData>
              </LinkContent>
              <Separator />
            </>
          ))}
        </Contentlink>

        <ButtonSignOut>
          <View style={{ marginTop: 40 }}>
            <Image source={{ uri: "../assets/icons/Sair.png" }} alt='back' style={{ width: 18, height: 21 }} />
          </View>
        </ButtonSignOut>
      </ScrollView>
    </>
  )
}

export default profile