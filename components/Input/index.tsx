import React, { FC } from 'react'
import { TextInput, TextInputProps, StyleSheet } from 'react-native'

type InputProps = TextInputProps & {
  name: string;
  icon?: string;
  onChange: () => void;
}

const InputStyle = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    elevation: 5,
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#666",

    height: 48.578,

    color: '#66666',

    backgroundColor: "transparent",
  }
});


const Input:FC<InputProps> = ({ name, value, onChange, ...rest }: InputProps) => {
  return (
     <TextInput
        value={value.toString()}
        style={[InputStyle.shadow, InputStyle.input]}
        placeholderTextColor={"#6666"}
        onChangeText={onChange}
        { ...rest }
      />
  )
}

export default Input;