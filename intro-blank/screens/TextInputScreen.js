import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Button, StyleSheet } from 'react-native';

export default function TextScreen() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [contrasenia, setContrasenia] = useState("");
  const [comentario, setComentario] = useState("");

  const enviarDatos = () => {
    if (nombre.trim() === '' || contrasenia.trim() === "" ) {
      Alert.alert('Error', 'Completa todos los campos');
      alert('Error: Completa todos los campos');
      setMensaje('Campo en blanco, por favor completa todos los campos');

    } else {
      Alert.alert('¡Hola!', 'Tus datos fueron enviados correctamente');
      alert('¡Hola!', 'Tus datos fueron enviados correctamente.');

      setMensaje('¡Hola!', 'Tus datos fueron enviados correctamente :3.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Práctica para ingresar tu nombre usando TextInput y Alert</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />
        <TextInput
        style={styles.input}
        placeholder="Escribe tu constraseña"
        value={contrasenia}
        onChangeText={setContrasenia}
        secureTextEntry={true}
        keyboardType='numeric'
      />
        <TextInput
        style={[styles.input, {height : 100, textAlignVertical: "top"}]}
        placeholder="Escribe un comentario"
        value={comentario}
        onChangeText={setComentario}
        multiline={true}
        numberOfLines={4}
      />

      <Button title="Enviar" onPress={enviarDatos} />
      <Text style={styles.mensaje}>{mensaje}</Text>
    </View>    

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    gap:10
  },
  title:{
    fontSize:25,
    fontWeight:'bold'
  },
  input:{
    width:'80%',
    borderWidth:3,
    borderColor:'#a47bf7ff',
    padding:12,
    borderRadius:9
  },
  mensaje:{
    marginTop:20,
    fontSize:18,
    color:'#e431f1ff',
    textAlign:'center'
  }
});