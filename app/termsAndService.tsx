import React, { useState } from 'react';

import { Stack, useRouter } from 'expo-router';

import { Button } from '../components';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { setTermsAndService } from '../redux/reducers/profileState';

import { SafeAreaView } from 'react-native';

import {
  Container,
  Content,
  CheckBox,
  CheckBoxTitle,
  ContentCheckBox,
  Text,
  Title
} from '../styles/TermsAndService'

const termsAndService:React.FC = () => {
  const dispatch = useDispatch();
  const terms = useSelector((state: RootState) => state.profile.termsAndService);
  const router = useRouter();

  const [selectCheckbox, setSelectCheckBox] = useState<Boolean>(terms === 0 ? false : true);
  const handleSubmitTerms = () => {
    if(selectCheckbox) {
      dispatch(setTermsAndService(1));
      router.push("/");
    }
  }
  return (
    <SafeAreaView>
      <Stack.Screen 
        options={{ headerShown: false }} 
      />

      <Text onPress={() => router.back()}>
        Back
      </Text>

      <Container>

        <Content>
          <Title>
            Contrato de Usuário do Reservou
          </Title>
          <Text>
            Ao selecionar a caixa de permissão abaixo,
            você concorda com os Termos de Serviço e
            com a Política de Privacidade, incluindo o
            processamento de seus dados pessoais pela
            Reservou. Por favor , observe
            que você pode revogar sua permissão
            quando quiser, enviando um e-mail para reservou@gmail.com.

            Por favor , tenha em mente que se você
            revogar a permissão, você não poderá usar a
            funcionalidade principal do aplicativo.
          </Text>

          <ContentCheckBox>
            <CheckBox 
              check={selectCheckbox} 
              onPress={() => setSelectCheckBox((value) => !value)}
            >
              { selectCheckbox && (
                <>
                  
                </>
              )}
            </CheckBox>
            <CheckBoxTitle>
              Por meio deste , concordo com a
              Política de Privacidade e com os
              Termos de Serviço.
            </CheckBoxTitle>
          </ContentCheckBox>
        </Content>

        <Button 
          text='Aceitar Termos'
          onPress={() => handleSubmitTerms()} 
        />
      </Container>
    </SafeAreaView>
  )
}

export default termsAndService