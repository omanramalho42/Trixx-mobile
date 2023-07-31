import React, { FC } from 'react';
import { 
  Control,
  Controller,
  FieldError
} from 'react-hook-form';
import { StyleSheet, TextInputProps } from 'react-native';
import { TextInput } from 'react-native-paper';

import { Error } from './styles';

type Props = TextInputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
}

const RegisterStyle = StyleSheet.create({
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

const ControlledInput:FC<Props> = ({ control, name, error, ...rest }: Props) => {
  return (
    <>
      <Controller 
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          // @ts-ignore
          <TextInput
            onChangeText={onChange}
            // @ts-ignore
            selectionColor="#E1B12C"
            underlineColor='transparent'
            activeUnderlineColor='#E1B12C'
            underlineStyle={{ borderRadius: 8, marginHorizontal: 5 }}
            value={value}
            style={[RegisterStyle.shadow,RegisterStyle.input]}
            { ...rest }
          />
        )}
      />
      {error && (
        <Error>{error.message}</Error>
      )}
    </>
  )
}

export default ControlledInput