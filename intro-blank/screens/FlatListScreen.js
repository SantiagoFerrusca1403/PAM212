import React, { useState } from 'react';
import { View, Text, FlatList, SectionList, StyleSheet } from 'react-native';

// --- Datos de Alumnos para FlatList ---
const alumnos = [
  { id: '1', nombre: 'Santiago'},
  { id: '2', nombre: 'Jovanny'},
  { id: '3', nombre: 'Mariana'},
  { id: '4', nombre: 'Valeria'},
  { id: '5', nombre: 'Daniel'},
];

// --- Datos de Categorías para SectionList ---
const categorias = [
  {
    titulo: 'Primavera',
    data: ['Marzo', 'Abril', 'Mayo']
  },
  {
    titulo: 'Verano',
    data: ['Junio', 'Julio', 'Agosto']
  },
  {
    titulo: 'Otoño',
    data: ['Septiembre', 'Octubre', 'Noviembre']
  },
  {
    titulo: 'Invierno',
    data: ['Diciembre', 'Enero', 'Febrero']
  },
];

// --- Componente Principal ---
export default function FlatListScreen() {
  return (
    <View style={styles.container}>
      
      {/* 1. Ejemplo de FlatList */}
      <Text style={styles.titulo}>Ejemplo de FlatList (Alumnos)</Text>
      <FlatList
        data={alumnos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Text style={styles.itemText}>{item.nombre}</Text>
          </View>
        )}
      />

      

      {/* 2. Ejemplo de SectionList */}
      <Text style={styles.titulo}>Ejemplo de SectionList (Estaciones)</Text>
      <SectionList
        sections={categorias}
        keyExtractor={(item, index) => item + index}
        // renderItem corregido (sin paréntesis extra)
        renderItem={({ item }) => (
          <Text style={styles.sectionItemText}>{item}</Text>
        )}
        
        renderSectionHeader={({ section: { titulo } }) => (
          <Text style={styles.sectionHeader}>{titulo}</Text>
        )}
      />
    </View>
  );
}

// --- Definición de Estilos (Styles) ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#f5f5f5', // Fondo suave
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 5,
  },
  
  // Estilos para FlatList (Alumnos)
  itemBox: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderLeftWidth: 5, // Detalle visual
    borderLeftColor: '#007bff',
  },
  itemText: {
    fontSize: 18,
    color: '#007bff', 
    fontWeight: '600',
  },
  // Estilos para SectionList (Estaciones y Meses)
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#28a745', // Verde para encabezados de sección
    color: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 15,
    borderRadius: 5,
  },
  sectionItemText: {
    padding: 10,
    fontSize: 16,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#ffffff',
    paddingLeft: 20,
    color: '#555',
  },
});