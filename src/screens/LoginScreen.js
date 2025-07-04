// src/screens/LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { supabase } from '../services/supabase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { data: session, error } = await supabase.auth.signInWithPassword({ email, password });
      console.log('Supabase session:', session);
      console.log('Supabase error:', error);
      if (error) {
        Alert.alert('Error al iniciar sesión', error.message);
      } else {
        navigation.replace('Home');
      }
    } catch (err) {
      console.error('Fatal error en handleLogin:', err);
      Alert.alert('Error inesperado', err.message);
    }
  };

  return (
    <View style={{ flex:1, padding:20, justifyContent:'center' }}>
      <Text style={{ fontSize:24, marginBottom:20 }}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Correo electrónico"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth:1, marginBottom:15, padding:10 }}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth:1, marginBottom:15, padding:10 }}
      />
      <Button title="Entrar" onPress={handleLogin} />
      <View style={{ marginTop:20 }}>
        <Button
          title="Crear cuenta"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
}
