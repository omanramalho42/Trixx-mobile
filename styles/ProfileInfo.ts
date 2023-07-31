import styled from "styled-components/native";

export const ContainerHeader = styled.View`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  height: 112px;
  background: #E1B12C;
`;

export const HeaderTitle = styled.Text`
  width: 100%;
  
  position: relative;
  right: 40;
  text-align: center;

  margin: 26px 0 15px 0;
  
  color: #F8F8F8;
  
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
`;