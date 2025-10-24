import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Button, StyleSheet } from 'react-native';

export default function InputScreen() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [correo, setCorreo] = useState("");
  const [comentario, setComentario] = useState("");

  const enviarDatos = () => {
    if (nombre.trim() === '') {
      Alert.alert('Error', 'Agrega tu nombre');
      alert('Error: Agrega tu nombre');
      setMensaje('Agrega tu nombre');

    } else {
      Alert.alert('¡Hola! '+ nombre + ' Bienvenid@');
      alert('¡Hola!', nombre, 'Tus datos fueron enviados correctamente.');

      setMensaje('¡Hola!'+ nombre + 'Tus datos fueron enviados correctamente :3.');
    }
    if (correo.trim() === '') {
      Alert.alert('Error', 'Agrega tu correo');
      alert('Error: Agrega tu correo');
      setMensaje('Agrega tu correo');

    } 
    if(nombre.trim()==='' && correo.trim()===''){
        Alert.alert('Error', 'LLena bien los campos');
      alert('Error: Llena bien los campos');
      setMensaje('Llena bien los campos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de prueba</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />
        <TextInput
        style={styles.input}
        placeholder="Escribe tu correo"
        value={correo}
        onChangeText={setCorreo}
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
    fontWeight:'bold',
    color: '#c89318ff'
  },
  input:{
    width:'80%',
    borderWidth:3,
    borderColor:'#c89318ff',
    padding:12,
    borderRadius:9,
    color: '#ffffffff'
  },
  mensaje:{
    marginTop:20,
    fontSize:18,
    color:'#c89318ff',
    textAlign:'center'
  }
});