import React, { useEffect, useState } from 'react';

import { 
  SafeAreaView, 
  View,
  StyleSheet,
} from 'react-native';

import { 
  Header,
  Map,
  CardServiceList,
  CardCategoryList,
  Footer,
  Modal
} from '../components';

import { 
  DefaultText,
  ButtonActiveGps,
  TextButtonActiveGps,
  SeparatorDiv,
  ModalOverlay
} from '../styles/Home';

import { Stack, useRouter } from 'expo-router';
import { Container } from '../styles/Home';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const styleHome = StyleSheet.create({
  containerButtonGps: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center"
  },
})

const Home:React.FC = () => {
  const router = useRouter();
  const terms = useSelector((state: RootState) => state.profile.termsAndService);

  const [termos] = useState(terms || 0);
  const [openModal, setOpenModal] = useState<boolean>(false);
  
  useEffect(() => {
    if(!termos) {
      router.push("/register");
    }
  },[termos]);

  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false  }} />
      
      {openModal && (
        <ModalOverlay>
          <Modal
            buttonCancel='NEGAR'
            subtitle={"DURANTE O USO DO APP"}
            title={"Permitir que o app Reservou acesse a localização deste dispositivo?"}
            buttonOk={""}
            subtitle2={"APENAS ESTA VEZ"}
            setModalShow={setOpenModal}
          />
        </ModalOverlay>
      )}

      <Container showsVerticalScrollIndicator={false} modalShow={openModal}>
        {/* HEADER */}
        <Header />
      
        <DefaultText>
          Localização
        </DefaultText>

        {/* MAP */}
        <Map />

        <View style={ styleHome.containerButtonGps }>
          <ButtonActiveGps
            onPress={() => setOpenModal((value) => !value)}
          >
            <TextButtonActiveGps>
              Ativar GPS
            </TextButtonActiveGps>
          </ButtonActiveGps>
        </View>

        <SeparatorDiv />

        <DefaultText style={{ width: 230 }}>
          Serviços e Reservas Próximos
        </DefaultText>

        <CardServiceList />

        <SeparatorDiv />

        <DefaultText>
          Explore
        </DefaultText>

        <CardCategoryList />

        <Footer />

      </Container>
    </SafeAreaView>
  )
}

export default Home;