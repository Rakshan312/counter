import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class DRAFTMAKER extends React.Component {
render(){
    return(
      <View>
        <AppHeader/>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'pink' }]}>

          <Text style={styles.buttonText}>what are you using the counter for</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'orange' }]}>

          <Text style={styles.buttonText}>what is your count limit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'cyan' }]}>

          <Text style={styles.buttonText}>do you want to add some beats</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'lime' }]}>

          <Text style={styles.buttonText}>are you in the need of a stopwatch</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'yellow' }]}>

          <Text style={styles.buttonText}>wanna save this as a template</Text>
        </TouchableOpacity>


        </View>
    )
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
