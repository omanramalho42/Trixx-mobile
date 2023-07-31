import styled from "styled-components/native";

export const CardService = styled.TouchableOpacity`
  all:             unset;
  
  justify-content: center;
  align-items:     center;
  
  width:           156px;
  height:          137px;

  margin-left:     16px;

  border-radius:   4.815px;
`;

interface ImageCardServiceProps {
  altImage: String;
}

export const ImageCardService = styled.Image.attrs<ImageCardServiceProps>({
  alt: `${({ altImage }) => altImage }`
})`
  width:         110px;

  border-radius: 3.85px;
  
  margin:        15px 12.6px 5.73px 12px;
`;

export const ContainerTextService = styled.View`
  margin-bottom: 7px;
  position:      relative;
`;

export const PromotionBadgeCardService = styled.View`
  width:            19px;
  height:           9.806px;

  border-radius:    2.452px;
  background:       #E1B12C;

  justify-content:  center;

  position:         absolute;
  
  top:              75px;
  left:             105px;

  z-index:          10;
`;

export const TitleCardService = styled.Text`
  color:        #222D5B;

  width:        100%;

  font-weight:  500;
  font-size:    12px;
`;

export const ViewMoreText = styled.Text`
  width:       99.185px;
  
  font-weight: 500;

  color: #E1B12C;
`;