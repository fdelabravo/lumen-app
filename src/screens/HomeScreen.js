// src/screens/HomeScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { supabase } from '../services/supabase';

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    // Cierra sesión en Supabase
    await supabase.auth.signOut();
    // Regresa al Login y elimina el historial de navegación
    navigation.replace('Login');
  };

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Bienvenido a Lumen
      </Text>
      <Button
        title="Cerrar sesión"
        onPress={handleLogout}
      />
    </View>
  );
}
