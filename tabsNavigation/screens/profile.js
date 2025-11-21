import { View, Text, StyleSheet, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.iconRow}>
                <Ionicons name="person-outline" size={28} color="green" />
                <Text style={styles.title}> Perfil usuario </Text>
            </View>
            
            <Button
                title="Detalles de Usuario"
                onPress={() => navigation.navigate('DetailScreen')} // Navegación al Stack global
                color="blue"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7c85fcff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    iconRow: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'blue',
    },
});