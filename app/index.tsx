import React, { useState } from 'react';

import { 
  SafeAreaView, 
  View,
  Text,
  StyleSheet,
  Dimensions
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
  SeparatorDiv
} from '../styles/Home';

import { Stack, useRouter } from 'expo-router';

// import { COLORS, icons, images, FONT, SIZES, SHADOWS } from '../constants';

import { Container } from '../styles/Home';

const styleHome = StyleSheet.create({
  containerButtonGps: {
    display: "flex",

    justifyContent: "center",
    alignItems: "center"
  },
})

const Home:React.FC = () => {

  const [openModal, setOpenModal] = useState<boolean>(false);

  const router = useRouter();

  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false  }} />

      {openModal && (
        <Modal
          buttonCancel='NEGAR'
          subtitle={"DURANTE O USO DO APP"}
          title={"Permitir que o app Reservou acesse a localização deste dispositivo?"}
          buttonOk={""}
          subtitle2={"APENAS ESTA VEZ"}
          setModalShow={setOpenModal}
        />
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