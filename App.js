import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import imagemCamera from './pages/imagemCamera';

const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="imagemCamera" component={imagemCamera} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
