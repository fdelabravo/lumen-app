// src/navigation/RootNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Iniciar Sesión' }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: 'Crear Cuenta' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            title: 'Bienvenido',
            headerLeft: () => null  // Deshabilita botón “back” en Home
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
