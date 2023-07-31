import styled from "styled-components/native";

import { TextInput as InputText } from 'react-native-paper'

export const Container = styled.ScrollView`
  display: flex;
  flex-direction: column;

  padding: 22px 16px;
`;

export const Logo = styled.Image.attrs({
  source: require('../assets/Logo2.png'),
  alt: "Logo"
})`
  width: 112.745px;
  height: 112.745px;

  margin-top: 9px;
  margin-bottom: 3px;
`;

export const ContentInput = styled.View`
  width: 100%;
  
  display: flex;
  flex-direction: column;

  margin: 5px 0 10px 0;

  padding-top: 2px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 48.578px;

  border-radius: 8px;
  border: 1px solid #666;

  border-radius: 8px;

  padding: 16px 15px;
`;

export const Label = styled.Text`
  margin-bottom: 10px;
  margin-top: 6px;

  color: #666;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  /* font-family: "Poppins-Bold"; */
`;