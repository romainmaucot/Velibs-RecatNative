import React, { useContext } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import {VelibContext} from "../services/VelibProvider";

 const ListScreen = ({navigation}) => {
    const data = useContext(VelibContext);
     if (!data.velibs) {
         return (
             <Text> Please wait....</Text>
         )
     }

     return (
       <FlatList style={styles.list}
          renderItem={({ item }) => {
            return <Text style={styles.li}
                         onPress={() => navigation.navigate('Detail', {item})}>
                {item.fields.station_name}
            </Text>
          }}
          data={data.velibs.records}
          keyExtractor={item => item.recordid}
        />
  );
};

ListScreen.navigationOptions = {
  title: "Vélibs",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  list: {
    padding: '5%'
  },
  li: {
      padding: '2%',
      marginBottom: '2%',
      borderColor: 'green',
      borderWidth: 1,
      borderRadius: 5
  }
});

export default ListScreen;

/*
  const [velibs, setVelibs] = useState();

  useEffect(() => {
    getVelib('https://raw.githubusercontent.com/tlenclos/fake-opendata-velib-server/master/db.json')
        .then((value) => {
            setVelibs(value.records);
        })
  });
*/


