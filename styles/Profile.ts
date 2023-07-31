import styled from "styled-components/native";

export const ContainerHeader = styled.SafeAreaView`
  flex: 1;
  height: 240px;

  justify-content: center;

  display: flex;
  flex-direction: column;

  background-color: #E1B12C;
`;

export const TitleHeader = styled.Text`
  color: #F8F8F8;
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;

  margin: 14px 0 18px 0;
`;

export const Avatar = styled.View`
  margin-top: 24px;

  width: 120px;
  height: 120px;

  margin: auto;

  border-radius: 100px;
  
  background-color: #666;
`;

export const Contentlink = styled.View`
  flex-direction: column;
  display: flex;

  padding: 24px 16px;
`;
interface LinkContentProps {
  active: Boolean;
}

export const LinkContent = styled.TouchableOpacity<LinkContentProps>`
  display: flex;

  opacity: ${({ active }) => !active ? '1' : '0.2'};

  padding: 16px 0;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;

  background-color: #666666;
`;

export const LinkProfileData = styled.View`
  display: flex;
  flex-direction: row;
  
  justify-content: space-between;
  align-items: center;

  padding: 16px 0;
`;

export const LinkProfileDataText = styled.Text`
  color: #666;

  /* //AJUSTAR */
  margin-left: 16px;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const ButtonSignOut = styled.TouchableOpacity`
  color: #F8F8F8;
  text-align: center;

  margin: 24px 16px;

  font-style: normal;
  font-weight: 400;
`;