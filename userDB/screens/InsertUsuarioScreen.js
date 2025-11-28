import { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, ActivityIndicator, Platform } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

const controller = new UsuarioController();

export default function InsertUsuarioScreen() {

  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [usuarioEditando, setUsuarioEditando] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);

  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
      console.log(`${data.length} Usuarios cargados`);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };

    init();

    controller.addListener(cargarUsuarios);

    return () => {
      controller.removeListener(cargarUsuarios);
    };
  }, [cargarUsuarios]);

  const handleGuardar = async () => {
    if (guardando) return;
    try {
      setGuardando(true);

      if (usuarioEditando) {
        
        await controller.actualizarUsuario(usuarioEditando.id, nombre);
        Alert.alert('Usuario Actualizado', `"${nombre}" actualizado.`);
        setUsuarioEditando(null); 
      } else {
        
        const usuarioCreado = await controller.crearUsuario(nombre);
        Alert.alert('Usuario Creado', `"${usuarioCreado.nombre}" guardado con ID: ${usuarioCreado.id}`);
      }
      setNombre('');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setGuardando(false);
    }
  };

  const handleEditar = (usuario) => {
    setUsuarioEditando(usuario);
    setNombre(usuario.nombre);
  };

  const handleCancelarEdicion = () => {
    setUsuarioEditando(null);
    setNombre('');
  };

  const handleEliminar = async (id) => {
    try {
      await controller.eliminarUsuario(id);
      cargarUsuarios();
    } catch (error) {
      Alert.alert('Error',error.message);
    }
  };


  const renderUsuario = ({item, index}) => (
    <View style = {styles.userItem}>
      <View style = {styles.userNumber}>
        <Text style={styles.userNumberText}>{index + 1}</Text>
      </View>
      <View style = {styles.userInfo}>
        <Text style={styles.userName}>{item.nombre}</Text>
        <Text style={styles.userId}>{item.id}</Text>
        <Text style={styles.userDate}>
          {
            new Date(item.fechaCreacion).toLocaleDateString('es-MX', {
              year: 'numeric',
              month: 'long',
              day:'numeric',
            })
          }
        </Text>
      </View>
      <View style={styles.userActions}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => handleEditar(item)}
          disabled={guardando}
        >
          <Text style={styles.actionText}>✏️ Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleEliminar(item.id)}
          disabled={guardando}
        >
          <Text style={[styles.actionText, styles.deleteText]}>🗑️ Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (

    <View style={styles.container}>

      <Text style={styles.title}> CRUD DE USUARIOS</Text>
      <Text style={styles.subtitle}>
        {Platform.OS === 'web' ? ' WEB (LocalStorage)' : ` ${Platform.OS.toUpperCase()} (SQLite)`}
      </Text>

      <View style={styles.insertSection}>
        <Text style={styles.sectionTitle}> 
          {usuarioEditando ? `Editar Usuario: ${usuarioEditando.nombre}` : 'Insertar Nuevo Usuario'}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
          editable={!guardando}
        />

        <TouchableOpacity
          style={[styles.button, guardando && styles.buttonDisabled]}
          onPress={ handleGuardar }
          disabled={guardando} >

          <Text style={styles.buttonText}>
            {guardando ? ' Guardando...' : (usuarioEditando ? 'Guardar Cambios' : 'Agregar Usuario')}
          </Text>

        </TouchableOpacity>

        {usuarioEditando && (
          <TouchableOpacity
            style={[styles.button, styles.cancelButton, guardando && styles.buttonDisabled]}
            onPress={ handleCancelarEdicion }
            disabled={guardando} >
            <Text style={styles.buttonText}>Cancelar Edición</Text>
          </TouchableOpacity>
        )}

      </View>

      <View style={styles.selectSection}>

        <View style={styles.selectHeader}>

          <Text style={styles.sectionTitle}>Lista de Usuarios ({usuarios.length})</Text>

          <TouchableOpacity
            style={styles.refreshButton}
            onPress={ cargarUsuarios } >
            <Text style={styles.refreshText}>Recargar</Text>
          </TouchableOpacity>

        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>Cargando usuarios...</Text>
          </View>
        ) : (
          <FlatList
            data={ usuarios }
            keyExtractor={(item) => item.id} // Asegurar que sea string
            renderItem={ renderUsuario }
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}> No hay usuarios</Text>
                <Text style={styles.emptySubtext}>Agrega el primero arriba</Text>
              </View>
            }
            contentContainerStyle={usuarios.length === 0 && styles.emptyList}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  insertSection: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectSection: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8, 
  },
  cancelButton: {
    backgroundColor: '#ff9800', 
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  selectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  refreshButton: {
    padding: 8,
  },
  refreshText: {
    color: '#007AFF',
    fontSize: 14,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
    fontSize: 14,
  },
  userItem: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  userNumber: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  userNumberText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  userId: {
    fontSize: 12,
    color: '#007AFF',
    marginBottom: 2,
  },
  userDate: {
    fontSize: 12,
    color: '#666',
  },
  userActions: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  actionButton: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#007AFF',
  },
  deleteText: {
    color: '#FF3B30',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#999',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#bbb',
  },
});