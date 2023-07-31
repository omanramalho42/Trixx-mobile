import React from 'react';

import { View } from 'react-native';

import { 
  ContainerHeader,
  Filter,
  Logo,
  ToggleButton,
  ToggleIcon,
  FilterIcon
} from './styles';

import { useRouter } from 'expo-router';

const Header:React.FC= () => {
  const router = useRouter();

  return (
    <View>
      <ContainerHeader>
        <ToggleButton 
          onPress={
            () => router.push("/profile")
          }
        >
          {/* @ts-ignore */}
          <ToggleIcon />
        </ToggleButton>
          {/* @ts-ignore */}
          <Logo />
        <Filter>
          {/* @ts-ignore */}
          <FilterIcon />
        </Filter>
      </ContainerHeader>
    </View>
  )
}

export default Header