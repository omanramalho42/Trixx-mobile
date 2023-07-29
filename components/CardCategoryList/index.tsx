import React from 'react'

import { 
  ScrollView, 
  View, 
  Image,
  StyleSheet
} from 'react-native';

import { 
  CardCategory, 
  CardCategoryText 
} from './styles';

const images = {
  IconGym:        require('../../assets/icons/IconGym.png'),
  IconPizza:      require('../../assets/icons/IconPizza.png'),
  restaurantIcon: require('../../assets/icons/restaurantIcon.png'),
  hairIcon:       require('../../assets/icons/hairIcon.png'),
  barbaIcon:      require('../../assets/icons/barbaIcon.png'),
  faceIcon:       require('../../assets/icons/faceIcon.png'),
  massageIcon:    require('../../assets/icons/massageIcon.png'),
  tattoIcon:      require('../../assets/icons/tattoIcon.png'),
  allIcon:        require('../../assets/icons/allIcon.png'),
};

interface CardCategoryListProps {
  title: "Pizzaria" | "Restaurantes" | "Esportes" | "Salão" | "Barbearia" | "Tatuagem" | "Massagem" | "Estética" | "Ver todos";
  icon?: "restaurantIcon" | "IconPizza" | "IconGym" | "hairIcon" | "barbaIcon" | "faceIcon" | "massageIcon" | "tattoIcon" | "allIcon";
}

const cardCategoryList: CardCategoryListProps[] = [
  { title: 'Pizzaria',     icon: 'IconPizza'      },
  { title: 'Restaurantes', icon: 'restaurantIcon' },
  { title: 'Esportes',     icon: 'IconGym'        },
  { title: 'Salão',        icon: 'hairIcon'       },
  { title: 'Barbearia',    icon: 'barbaIcon'      },
  { title: 'Tatuagem',     icon: 'tattoIcon'      },
  { title: 'Massagem',     icon: 'massageIcon'    },
  { title: 'Estética',     icon: 'faceIcon'       },
  { title: 'Ver todos',    icon: 'allIcon'        }
];

const categoryListStyle = StyleSheet.create({
  list: {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginBottom: 35
  },
  ContainerCategory: {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginLeft: 16 
  }
});

const CardCategoryList:React.FC = () => {
  return (
    <ScrollView 
      horizontal 
      contentContainerStyle={categoryListStyle.list}
    >
      {cardCategoryList.map((i, idx) => (
        <View 
          key={idx} 
          style={categoryListStyle.ContainerCategory}
        >
          <CardCategory>
            <Image 
              source={
                images[i.icon]
              } 
              alt={i.title.toString()} 
            />
          </CardCategory>
          <CardCategoryText>
            { i.title }
          </CardCategoryText>
        </View>
      ))}
    </ScrollView>
  )
}

export default CardCategoryList