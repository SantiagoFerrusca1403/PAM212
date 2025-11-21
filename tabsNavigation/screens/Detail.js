import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Detail() {
    return (
        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name="information-circle-outline" size={32} color="purple" />
                <Text style={styles.title}>Detalles Usuario</Text>
                <Text style={styles.text}>Usando Navegacion Stack</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9283f6ff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    iconRow: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'black',
        marginTop: 10,
    },
    text: {
        fontSize: 18,
        color: 'blue',
        marginTop: 5,
    }
});