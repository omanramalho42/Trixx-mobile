import React, { FC } from 'react'
import { 
  ButtonRegister, 
  ButtonRegisterText 
} from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button:FC<ButtonProps> = ({ text, onPress }: ButtonProps ) => {
  return (
    <ButtonRegister onPress={onPress}>
      <ButtonRegisterText>
        { text }
      </ButtonRegisterText>
    </ButtonRegister>
  )
}

export default Button