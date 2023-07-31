import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: #FFF;
  padding: 16px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  
  padding: 16px;

  border-radius: 6px;
  background: #EDEDED;
`;

export const Title = styled.Text`
  color: #666;
  
  font-weight: bold;
  font-size: 12.635px;
  font-style: normal;

  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-weight: 400;
  font-size: 12.635px;
  font-style: normal;

  color: #666;
`;

export const ContentCheckBox = styled.View`
  display: flex;
  flex-direction: row;

  width: 250.646px;

  margin-top: 70px;
  margin-bottom: 58px;
`;

interface CheckBoxProps {
  check: Boolean;
}

export const CheckBox = styled.TouchableOpacity<CheckBoxProps>`
  width: 21.841px;
  height: 21.841px;

  border-radius: 5px;
  border: 2px solid #666666;

  background-color: ${({ check }) => check ? "#000" : "transparent" };

  margin: 0 15.5px 0 0;
`;

export const CheckBoxTitle = styled.Text`
  color: #666;

  font-size: 13.576px;
  font-style: normal;
  font-weight: 700;
`;