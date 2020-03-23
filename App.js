import React, { Component } from "react";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import MenuPage from './MenuPage';
import GifPage from './GifPage';


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
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="GifPage" screenOptions={{
        headerShown: false
      }}>
        {/* <Stack.Screen name="LoadingPage" component={LoadingPage} /> */}
        {/* <Stack.Screen name="DropdownPage" component={DropdownPage} /> */}
        {/* <Stack.Screen name="CameraPermission" component={CameraPermission} /> */}
        <Stack.Screen name="GifPage" component={GifPage}/>
        {/* <Stack.Screen name="GifPage" component={GifPage}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
