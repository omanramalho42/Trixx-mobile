import React from 'react'

import { View } from 'react-native'

import { 
  ContainerHeader,
  Filter,
  Logo,
  ToggleButton,
  ToggleIcon,
  FilterIcon
} from './styles'

const Header:React.FC = () => {
  return (
    <View>
      <ContainerHeader>
        <ToggleButton>
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