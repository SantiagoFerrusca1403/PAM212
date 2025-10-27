import React, { useState } from 'react';
import { View, Text, Switch, TextInput, Alert, Button, StyleSheet } from 'react-native';

export default function InputScreen() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [correo, setCorreo] = useState('');
  const [terminos, setTerminos] = useState(false);

  const enviarDatos = () => {
    if (!terminos) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones');
      alert('Error', 'Debes aceptar los términos y condiciones');
      setMensaje('Acepta los terminos para continuar');
    }

    if (nombre.trim() === '' && correo.trim() === '') {
      Alert.alert('Error', 'Llena bien los campos');
      alert('Error', 'Llena bien los campos');
      setMensaje('Llena bien los campos');
    }

    

    else {
          Alert.alert('¡Hola!', 'Tus datos fueron enviados correctamente');
          alert('¡Hola!', 'Tus datos fueron enviados correctamente.');
    
          setMensaje('¡Hola!', 'Tus datos fueron enviados correctamente :3.');
        };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        placeholderTextColor="#ddd"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#ddd"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
      />

     

      <View style={styles.terminosContainer}>
        <Text style={styles.label}>Aceptar términos y condiciones</Text>
        <Switch
          value={terminos}
          onValueChange={setTerminos}
          thumbColor={terminos ? '#c89318ff' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#c89318ff' }}
        />
      </View>

      <Button title="Registrarse" onPress={enviarDatos} />
      <Text style={styles.mensaje}>{mensaje}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    borderWidth: 3,
    borderColor: '#c89318ff',
    padding: 12,
    borderRadius: 9,
    color: '#fff',
  },
  mensaje: {
    marginTop: 20,
    fontSize: 18,
    color: '#c89318ff',
    textAlign: 'center',
  },
  terminosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    gap: 10,
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
});
