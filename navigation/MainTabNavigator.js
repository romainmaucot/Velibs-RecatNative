import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ListScreen from '../screens/ListScreen';
import MapScreen from '../screens/MapScreen';
import DetailStationScreen from '../screens/DetailStationScreen';

const ListStack = createStackNavigator(
  {
    Home: ListScreen,
      Detail: DetailStationScreen
  },
    );

ListStack.navigationOptions = {
  tabBarLabel: 'List',
};

const MapStack = createStackNavigator(
  {
    Links: MapScreen,
  }
);

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
};

export default createBottomTabNavigator({
  ListStack,
  MapStack
});