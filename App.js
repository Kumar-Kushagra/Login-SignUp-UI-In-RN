import React from 'react';
import { SafeAreaView, View } from 'react-native';
import AppScreen from './Navigations/Navigators';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const MyApp = props => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
        
      <AppScreen />

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default MyApp;