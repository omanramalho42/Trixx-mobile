import styled from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

export const ButtonRegister = styled.TouchableOpacity<TouchableOpacityProps>`
  margin-bottom: 4px;
  
  width: 100%;
  height: 48px;

  border-radius: 8px;
  background: #E1B12C;

  justify-content: center;

  padding: 12px 0;

  margin-top: 104px;
  margin-bottom: 26px;
`;

export const ButtonRegisterText = styled.Text`
  color: #F8F8F8;
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;