// src/screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { supabase } from '../services/supabase';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    const { data: user, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      Alert.alert('Error al registrarse', error.message);
    } else {
      Alert.alert('Registrado', 'Revisa tu correo para confirmar.');
      navigation.replace('Home');
    }
  };

  return (
    <View style={{ flex:1, padding:20, justifyContent:'center' }}>
      <Text style={{ fontSize:24, marginBottom:20 }}>Crear Cuenta</Text>
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
      <Button title="Registrarse" onPress={handleSignUp} />
    </View>
  );
}
