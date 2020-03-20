import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingPage from './LoadingPage'
import DropdownPage from './DropdownPage'
import CameraPermission from './CameraPermission'
import GifPage from './GifPage'
import MenuPage from './MenuPage'


const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgb(255, 255, 255)',
  },
};

function App() {
  return (
    <NavigationContainer  theme={MyTheme}>
      <Stack.Navigator initialRouteName="LandingPage" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
        <Stack.Screen name="DropdownPage" component={DropdownPage} />
        <Stack.Screen name="CameraPermission" component={CameraPermission} />
        <Stack.Screen name="GifPage" component={GifPage}/>
        {/* <Stack.Screen name="MenuPage" component={MenuPage}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
