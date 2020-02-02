import React, { useContext } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    FlatList

} from 'react-native';
import { VelibContext } from "../services/VelibProvider";
import MapView from "react-native-maps";

const DetailStationScreen = (props) => {
    const data = useContext(VelibContext);
    const velib = props.navigation.state.params.item;

    return (
        <View style={styles.container}>
            <MapView style={styles.mapStyle}
                     region={{latitude: data.position.coords.latitude,
                         longitude: data.position.coords.longitude,
                         latitudeDelta: 0.0122,
                         longitudeDelta: 0.0021,}}
                     showsUserLocation={true}
                     followsUserLocation={true}
            >
                    <MapView.Marker
                        coordinate={{
                            longitude: velib.geometry.coordinates[0],
                            latitude: velib.geometry.coordinates[1],
                        }}
                        title={velib.fields.station_name}
                        key={velib.recordid}
                        description={velib.fields.nbbike+' vélo à ' + Math.round(velib.fields.dist) + 'm'}
                    />
            </MapView>
            <Text style={styles.text} >Sation à {Math.round(velib.fields.dist)} mètres</Text>
            <Text style={styles.text} >{(velib.fields.station_state)==='Operative' ? 'Opperationel' : 'Non opperationel' }</Text>
            <Text style={styles.text} >{velib.fields.nbbike} {(velib.fields.nbbike)===1 ? 'vélib disponible' : 'vélibs disponibles' } </Text>
            <Text style={styles.text} >{(velib.fields.creditcard)==='yes' ? 'Prend' : 'Ne prend pas' } la CB</Text>
        </View>

);};

DetailStationScreen.navigationOptions = ({navigation}) =>  {
    return{title: navigation.state.params.item.fields.station_name}
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
    text: {
        padding: 10,
        fontSize: 16
    }
});

export default DetailStationScreen;
