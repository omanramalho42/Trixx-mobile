import React, { useState } from 'react';

import { 
  SafeAreaView, 
  View, 
  Text, 
  ScrollView 
} from 'react-native';

import { Stack, useRouter } from 'expo-router';

// import { COLORS, icons, images, FONT, SIZES, SHADOWS } from '../constants';

import { Container } from '../styles/Home';

const Home:React.FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <Text>
          Hello World! 🦇🔥
        </Text>
      </Container>
    </SafeAreaView>
  )
}

export default Home;