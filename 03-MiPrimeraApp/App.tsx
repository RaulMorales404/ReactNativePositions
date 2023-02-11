import React from 'react';
import { SafeAreaView } from 'react-native';
import FlexScreen from './src/screens/FlexScreen';

// import ObjectModel from './src/screens/ObjectModel';
// import Home from './src/screens/Home';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#28425b' }}>
      <FlexScreen />
    </SafeAreaView>

  );

};





export default App;
