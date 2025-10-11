// 1. Import: Zona de declaraciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button } from 'react-native';
import React,{useState} from 'react';

// 2. Main: Zona de componentes
export default function App() {

  const[contador,setContador]=useState(0);
  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Contador: </Text>
      <Text style={styles.texto2}>{contador} </Text>

      <View style={styles.contenedorBotones}>
      <Button color= "green" title="Incrementar" onPress={() => setContador(contador + 1)}/>
        <Button color = "orange" title="Restar" onPress={() => setContador(contador - 1)}/>
          <Button color = "pink" title="Reiniciar" onPress={() => setContador(contador - contador)}/>
      </View>
      <StatusBar style="auto" />

    </View>
  );
}

// 3. Estilos: Zona de estetica y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#686868ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    color:'#000000ff',
    fontSize: 30,
    fontFamily: 'Times new roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },

  texto2: {
    color:'#15bd77ff',
    fontSize: 40,
    fontFamily: 'Courier',
    fontWeight: '400',
    textDecorationLine: 'underline',
  },

  contenedorBotones: {
    maginTop: 15,
    flexDirection:'row',
    gap: 20,
  },

});
