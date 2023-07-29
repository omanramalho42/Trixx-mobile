import styled from "styled-components/native";

export const ContainerModal = styled.View`
  position: absolute; 
  
  width: 332.075px;
  height: 237.233px;

  border-radius: 18.288px;
  background-color: #F3F3F3;

  padding: 12px 20px;

  border-radius: 25px; 

  justify-content: center;
  align-items: center;

  top: 20%; 
  left: 5%; 
  
  z-index: 10; 
`;

export const ModalTitle = styled.Text`
  color: #666;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;

  margin-bottom: 13px;
`;

export const ModalSubTitle = styled.Text`
  margin-bottom: 20px;
`;

export const ModalBtn = styled.TouchableOpacity`
  margin-bottom: 4px;
`;

export const ModalBtnText = styled.Text`
  color: #E1B12C;

  font-size: 13px;
  font-style: normal;
  font-weight: 400;
`;