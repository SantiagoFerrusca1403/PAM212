import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView, 
    TouchableOpacity, 
    Alert 
} from 'react-native';

const DATA_NEW = [
    {
        id: 'c1',
        title: 'Videojuegos ', 
        items: [
            { id: 1, name: 'Fortnite', description: '',  },
            { id: 2, name: 'Apex Legends', description: '' },
        ],
    },
     {
        id: 'c2',
        title: 'Videojuegos ', 
        items: [
            { id: 1, name: 'USA', description: 'aaaaaaaaaaaa'},
            { id: 2, name: 'México', description: 'aaaaaaaaaaaaaaa' },
        ],
    },
];



export default function App() {
const handleOrder = (newName) => {
    Alert.alert(
        'Articulo', 
        `${newName}`, 
        [
            { text: 'Cancelar', style: 'cancel' }, 
            { text: 'Confirmar', onPress: () => console.log(`Orden de ${newName} confirmada`) }, 
        ],
    );
     alert(
        'Articulo', 
        `${newName}`, 
        [
            { text: 'Cancelar', style: 'cancel' }, 
            { text: 'Confirmar', onPress: () => console.log(`Orden de ${newName} confirmada`) }, 
        ],
    );
};
    return (
        
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.NoticieroName}>UPQ NEWS</Text>
                <Text style={styles.Description}>
                        UN BUEN FORO PARA ESTAR INFORMADOS
                </Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                {DATA_NEW.map((category) => (
                    <View key={category.id} style={styles.categoryContainer}>
                        
                        <Text style={styles.categoryTitle}>{category.title}</Text>

                        {category.items.map((new)) => (
                            <View key={new.id} style={styles.dishCard}>
                                
                                <View style={styles.newTextContent}>
                                    <Text style={styles.newName}>{new.name}</Text>
                                    <Text style={styles.newDescription}>{new.description}</Text>
                                    
                                </View>

                                <TouchableOpacity
                                    style={styles.orderButton}
                                    onPress={() => handleOrder(new.name)}
                                >
                                    <Text style={styles.orderButtonText}>Leer más</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                        
                    </View>
                ))}
                
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#f5f5f5', 
    },
    header: {
        padding: 20,
        backgroundColor: '#D32F2F', 
        paddingTop: 40, 
    },
    NoticieroName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    Description: {
        fontSize: 16,
        color: '#FFECB3',
        textAlign: 'center',
        marginTop: 5,
    },
    scrollContent: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    categoryContainer: {
        marginBottom: 15,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    categoryTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#D32F2F',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#D32F2F50', // Línea semitransparente
        paddingBottom: 5,
    },
    newCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: StyleSheet.hairlineWidth, // Línea muy fina
        borderBottomColor: '#eee',
    },
    newTextContent: {
        flex: 1,
        paddingRight: 10,
    },
    newName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#333',
    },
    newDescription: {
        fontSize: 13,
        color: '#666',
        marginVertical: 2,
    },
    newPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#388E3C', 
    },
    orderButton: {
        backgroundColor: '#0288D1', 
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginLeft: 10,
    },
    orderButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
});