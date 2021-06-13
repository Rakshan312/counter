import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  goToDRAFTMAKER = ()=> {
    this.props.navigation.navigate('DRAFTMAKER');
  };
    goToONGOING = ()=> {
    this.props.navigation.navigate('ONGOING');
  };
    goToTEMPLATES = ()=> {
    this.props.navigation.navigate('TEMPLATES');
  };
  render() {
    return (
      <View>
        <AppHeader />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'lime' }]}
          onPress={() => {
            this.goToDRAFTMAKER();
          }}>
          <Text style={styles.buttonText}>DRAFT MAKER</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'cyan' }]}
          onPress={() => {
            this.goToONGOING();
          }}>
          <Text style={styles.buttonText}>ONGOING</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'yellow' }]}
          onPress={() => {
            this.goToTEMPLATES();
          }}>
          <Text style={styles.buttonText}>TEMPLATES</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});
