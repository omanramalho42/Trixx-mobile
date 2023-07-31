import styled from 'styled-components/native';

interface ContainerProps {
  modalShow: boolean;
}

export const Container = styled.ScrollView<ContainerProps>`
  display: flex;

  opacity: ${({ modalShow }) => modalShow ? 0.4 : 1};
`;

export const ModalOverlay = styled.View`
  width: 100%;
  height: 100%;

  position: absolute;
  
  z-index: 10;
  
  justify-content: center;
  align-items: center;
`;

export const DefaultText = styled.Text`
  font-size: 15px;
  font-style: normal;
  font-weight: 600;

  font-family: 'PoppinsRegular';

  width: 96px;

  margin: 16px 0 9px 16px;
  
  color: #222D5B;
`;

export const ButtonActiveGps = styled.TouchableOpacity`
  width: 104px;
  height: 33px;

  margin: 24px 0 22px 0;

  justify-content: center;
  align-items: center;

  border-radius: 10px;

  background-color: #E1B12C;
`;

export const TextButtonActiveGps = styled.Text`
  color: #F8F8F8;

  text-align: center;

  font-size: 12.192px;
  font-style: normal;
  font-weight: 500;
`;

export const SeparatorDiv = styled.View`
  height: 2px;
  background-color: #D9D9D9;
`;