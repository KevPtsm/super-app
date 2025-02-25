// filepath: /c:/Users/kpiet/Desktop/Startup/super-app/src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'C:/Users/kpiet/Desktop/Startup/super-app/screens/HomeScreen'; // Ensure that the file '../screens/HomeScreen.tsx' exists and is correctly named

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;