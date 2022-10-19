import React, {useRef} from 'react';
import {NativeBaseProvider, Box, ScrollView, Button} from 'native-base';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import TipCalculator from './src/components/TipCalculator';
import Header from './src/components/Header';

export default function App() {
// const btnRef = useRef()

  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <SafeAreaView>
          <ScrollView>
            <Header />
            {/* <Button
              ref={btnRef}
              title="5"
              onPress={() => console.log('title:' + btnRef.current.props.title)}
            /> */}
            <TipCalculator />
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
