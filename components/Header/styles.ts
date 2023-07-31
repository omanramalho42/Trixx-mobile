import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export const ContainerHeader = styled.View`
  display:          flex;
  flex-direction:   row;

  align-items:      center;
  justify-content:  space-around;

  background-color: rgba(225, 177, 44, 1);

  height:           102px;
`;

export const ToggleButton = styled.TouchableOpacity<TouchableOpacityProps>`
  margin: 17px 0px 23px 16px;
`;

export const ToggleIcon = styled.Image.attrs({
  source: require('../../assets/icons/toggle.png'),
  alt: "Toggle icon"
})`

`;

export const Logo = styled.Image.attrs({
  source: require('../../assets/logo.png'),
  alt: "Logo"
})`
  margin: 5.88px 0 3.88px 0;

  width:  52px;
  height: 52px;
`;

export const Filter = styled.TouchableOpacity`
  margin: 15px 16px 30px 0;
`;

export const FilterIcon = styled.Image.attrs({
  source: require('../../assets/icons/filter.png'),
  alt: "Filter Icon"
})`

`;