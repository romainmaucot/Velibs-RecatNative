import React, {useContext, useState, useEffect} from 'react';
import { View, StyleSheet,Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import SearchBar from "../components/SearchBar";
import { VelibContext} from "../services/VelibProvider";

const MapScreen = () => {
    const data = useContext(VelibContext);

    return (
    <View style={styles.container}>
      <SearchBar/>
      <MapView style={styles.mapStyle}
               region={{latitude: data.position.coords.latitude,
                 longitude: data.position.coords.longitude,
                 latitudeDelta: 0.0122,
                 longitudeDelta: 0.0021,}}
               showsUserLocation={true}
               followsUserLocation={true}
      >
          {data.velibs.records.map(marker => (
          <MapView.Marker
              coordinate={{
                  longitude: marker.geometry.coordinates[0],
                  latitude: marker.geometry.coordinates[1],
              }}
              title={marker.fields.station_name}
              key={marker.recordid}
              description={marker.fields.nbbike+' vélo à ' + Math.round(marker.fields.dist) + 'm'}
          />
          ))}
      </MapView>
    </View>
  );
};

MapScreen.navigationOptions = {
  title: 'Map',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/2,
  },
});

export default MapScreen;
