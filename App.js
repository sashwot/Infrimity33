import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Button, View } from 'react-native';
import * as Speech from 'expo-speech'
import {useDimension} from '@react-native-community/hooks'
export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
    <Button title="Water" onPress={()=>Speech.speak('I need some water!')}/> 
    <Button title="Rest Room" onPress={()=>Speech.speak('I need to go to bathroom!')}/>
    <Button title="Bed Room" onPress={()=>Speech.speak('I want to sleep now, please take me to my room!')}/>
    <Button title="Food" onPress={()=>Speech.speak('I am hungry please give me some food!')}/>
    <Button title="Outdoor" onPress={()=>Speech.speak('I want to go outside!')}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
