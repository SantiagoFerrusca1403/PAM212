import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native-web';

export default function ActivityIndicatorScreen() {

  const [cargando, setCargando] = useState(false);

  const iniciarCarga = () => {
    setCargando(true);
    setTimeout(() => setCargando(false), 3000);
  };

  const detenerCarga = () => {
    setCargando(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Práctica: Activity Indicator</Text>

      <View style={styles.boton}>
        <Button
          title={cargando ? 'Cargando...' : 'Iniciar carga'}
          onPress={iniciarCarga}
        />
      </View>

      <View style={styles.boton}>
        <Button title="Detener carga" onPress={detenerCarga} />
      </View>

      <View style={styles.carga}>
        <ActivityIndicator
          size="large"
          color="#007bff"
          animating={cargando}          // se muestra solo si cargando es true
          hidesWhenStopped={true}       // se oculta automáticamente cuando animating es false
        />
        <Text style={styles.textoCarga}>Cargando información...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: "#000000ff",
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boton: {
    width: 220,
    marginBottom: 16,
  },
  carga: {
    alignItems: 'center',
    marginTop: 20,
  },
  textoCarga: {
    marginTop: 12,
    fontSize: 16,
    color: '#000000',
  },
});