import React from 'react';

import MapView, { Marker } from 'react-native-maps';

import { View, StyleSheet } from 'react-native';

import { MapContainer } from './styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

const Map:React.FC = () => {
  return (
    <MapContainer>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude:       37.78825,
            longitude:      -122.4324,
            latitudeDelta:  0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ 
              latitude: 37.78825, 
              longitude: -122.4324 
            }}
            title="Marker Title"
            description="Marker Description"
          />
        </MapView>
      </View>  
    </MapContainer>
  )
}

export default Map