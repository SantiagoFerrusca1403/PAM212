import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  ScrollView,
} from 'react-native';
import SwitchButton from './Switch';

export default function BotonesScreen() {
  // Array de información de configuración
  const info = [
    { id: 1, title: 'Mantener la pantalla encendida', value: false },
    { id: 2, title: 'Ajustar brillo automático', value: true },
    { id: 3, title: 'WiFi', value: false },
    { id: 4, title: 'Bluetooth', value: false },
  ];

  // Componente para cada opción con switch
  const Item = ({ title, value }) => (
    <View style={styles.item}>
      <View style={styles.itemBox}>
        <Text style={styles.itemtitle}>{title}</Text>
      </View>
      <View style={styles.switch}>
        <SwitchButton temporal={value} isButton={true} />
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Encabezado */}
      <View style={styles.Encabezado}>
        <Text style={styles.EncabezadoTitle}>Configuración</Text>
      </View>

      {/* Opciones de configuración */}
      <View style={styles.footer}>
        {info.map((x) => (
          <Item key={x.id} title={x.title} value={x.value} />
        ))}
      </View>

      {/* Separador visual */}
      <View style={styles.divider} />

      {/* Sección de tipos de botones */}
      <Text style={styles.header}>Tipos de Botones en React Native</Text>

      {/* 1. Button nativo */}
      <Text style={styles.title}>1. Button (nativo)</Text>
      <Button title="Presionar" onPress={() => alert('Botón básico')} />

      {/* 2. TouchableOpacity */}
      <Text style={styles.title}>2. TouchableOpacity</Text>
      <TouchableOpacity
        style={styles.btnOpacity}
        onPress={() => alert('Opacity')}>
        <Text style={styles.text}>Botón Opacity</Text>
      </TouchableOpacity>

      {/* 3. TouchableHighlight */}
      <Text style={styles.title}>3. TouchableHighlight</Text>
      <TouchableHighlight
        style={styles.btnHighlight}
        underlayColor="#002a3dff"
        onPress={() => alert('Highlight')}>
        <Text style={styles.text}>Botón Highlight</Text>
      </TouchableHighlight>

      {/* 4. TouchableWithoutFeedback */}
      <Text style={styles.title}>4. TouchableWithoutFeedback</Text>
      <TouchableWithoutFeedback onPress={() => alert('Sin feedback')}>
        <View style={styles.btnNoFeedback}>
          <Text style={styles.text}>Sin feedback</Text>
        </View>
      </TouchableWithoutFeedback>

      {/* 5. Pressable */}
      <Text style={styles.title}>5. Pressable</Text>
      <Pressable
        onPress={() => alert('Pressable!')}
        style={({ pressed }) => [
          styles.btnPressable,
          {
            backgroundColor: pressed ? '#ff7043' : '#66bb6a',
            transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
            opacity: pressed ? 0.7 : 1,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: pressed ? 1 : 4 },
            shadowOpacity: pressed ? 0.3 : 0.6,
            shadowRadius: pressed ? 2 : 4,
          },
        ]}>
        <Text style={styles.text}>Botón Pressable</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 50,
  },
  Encabezado: {
    height: 75,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    paddingHorizontal: 18,
  },
  EncabezadoTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#383838',
    marginLeft: 10,
  },
  footer: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
  },
  item: {
    height: 55,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemBox: {
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  itemtitle: {
    fontSize: 15,
    fontWeight: '300',
    color: '#383838',
  },
  switch: {
    width: 70,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 2,
    width: '80%',
    backgroundColor: '#ccc',
    marginVertical: 25,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    color: '#333',
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
  btnOpacity: {
    backgroundColor: '#2a9fffff',
    padding: 10,
    borderRadius: 8,
  },
  btnHighlight: {
    backgroundColor: '#29b6f6',
    padding: 10,
    borderRadius: 8,
  },
  btnNoFeedback: {
    backgroundColor: '#ab47bc',
    padding: 10,
    borderRadius: 8,
  },
  btnPressable: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 40,
  },
});
