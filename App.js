import React from 'react';
import {NativeBaseProvider, Box, ScrollView} from 'native-base';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import TipCalculator from './src/components/TipCalculator';
import Header from './src/components/Header';

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <SafeAreaView>
          <ScrollView>
            <Header />
            <TipCalculator />
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
