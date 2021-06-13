import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import DRAFTMAKER from './screens/DRAFTMAKER';
import ONGOING from './screens/ONGOING';
import TEMPLATES from './screens/TEMPLATES';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  DRAFTMAKER: DRAFTMAKER,
  ONGOING: ONGOING,
  TEMPLATES: TEMPLATES,
  
});

const AppContainer = createAppContainer(AppNavigator);
