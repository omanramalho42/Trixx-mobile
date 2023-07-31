import React, { useEffect, useState } from 'react';

import { 
  ScrollView, 
  TouchableOpacity,
  StyleSheet,
  Text
} from 'react-native';

import {  
  CardService, 
  ContainerTextService, 
  TitleCardService,
  PromotionBadgeCardService, 
  ViewMoreText,
  ImageCardService 
} from './styles';

const StyleCardService = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "row",

    marginBottom: 27.26,
  },
  badgeText: {
    color: "#F8F8F8",

    textAlign: 'center',

    fontSize: 4.903,
    fontStyle: "normal",
    fontWeight: "700",
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

    elevation: 5,
  }
});

interface CardServiceListProps {
  title:            String;
  image:            "service" | "service1" | "service2" | "service3" | "service4";
  discount?:        String;
}

const cardServiceList: CardServiceListProps[] = [
  { 
    title:    'Prato Pronto',
    discount: "30%", 
    image:    "service" 
  },
  { 
    title:    'Salão espaço Glamour',
    image:    "service1" 
  },
  { 
    title:    'Espace Inove',
    image:    "service2" 
  },
  { 
    title:    'Studio Tattoo',
    image:    "service3" 
  },
  { 
    title:    'Studio Spa',
    image:    "service4" 
  }
];

const images = {
  service:  require('../../assets/images/service.png'),
  service1: require('../../assets/images/service1.png'),
  service2:  require('../../assets/images/service2.png'),
  service3: require('../../assets/images/service3.png'),
  service4:  require('../../assets/images/service4.png'),
};

const CardServiceList:React.FC = () => {
  const [selectedIcon, setSelectedIcon] = useState<Number | null>(null);

  return (
    <ScrollView 
      horizontal 
      contentContainerStyle={StyleCardService.list}
    >
      {[cardServiceList.map((i, idx) => (
        <CardService 
          key={idx}
          style={ [StyleCardService.shadow,{ backgroundColor: selectedIcon === idx ? "#E1B12C" : "#F9F9F9"}] }
          onPress={() => selectedIcon === idx ? setSelectedIcon(null) : setSelectedIcon(idx)}
        >
          { i.discount && (
            <PromotionBadgeCardService>
              <Text style={ StyleCardService.badgeText} >
                { i.discount.toString().toLowerCase() }
              </Text>
            </PromotionBadgeCardService>  
          )}
          {/* @ts-ignore */}
          <ImageCardService 
            source={
              images[i.image]
            } 
            altImage={i.title} 
          />

          <ContainerTextService>
            <TitleCardService>
              { i.title.toString() }
            </TitleCardService>
            <TouchableOpacity>
              <ViewMoreText style={{ color: selectedIcon === idx ? "#F9F9F9" : "#E1B12C" }}>
                Ver mais
              </ViewMoreText>
            </TouchableOpacity>
          </ContainerTextService>
        </CardService>
      ))]}
    </ScrollView>
  )
}

export default CardServiceList;