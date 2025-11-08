import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView, 
    TouchableOpacity, 
    Alert 
} from 'react-native';

const DATA_NEWS = [
    {
        id: 'N1',
        title: 'Videojuegos', 
        items: [
            { id: 'p1', name: 'Fortnite', description: 'Caldo de temporada con verduras fresca.'},
            { id: 'p2', name: 'Apex Legends', description: '¿Alguien en serio juega Apex legends Hoy en Dia?.'},
        ],
    },
    {
        id: 'N2',
        title: 'Economía', 
        items: [
            { id: 'p1', name: '¿USA vs China?', description: 'Caldo de temporada con verduras fresca.'},
            { id: 'p2', name: 'Apex Legends', description: '¿Alguien en serio juega Apex legends Hoy en Dia?.'},
        ],
    },
];



export default function ExamenScreen() {
const handleOrder = (dishName, dishPrice) => {
    Alert.alert(
        'Confirmar orden', 
        `¿Desea confirmar la orden de ${dishName} por $${dishPrice.toFixed(2)}?`, 
        [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Confirmar', onPress: () => console.log(`Orden de ${dishName} confirmada`) }, // Requisito 6: Botón "Confirmar"
        ],
    );
    alert(
        'Confirmar orden', // Requisito 6: Título
        `¿Desea confirmar la orden de ${dishName} por $${dishPrice.toFixed(2)}?`, // Requisito 6: Mensaje
        [
            { text: 'Cancelar', style: 'cancel' }, // Requisito 6: Botón "Cancelar"
            { text: 'Confirmar', onPress: () => console.log(`Orden de ${dishName} confirmada`) }, // Requisito 6: Botón "Confirmar"
        ],
    );
};
    return (
        
        // REQUISITO 1: Cambiado a View con color sólido (fondo gris claro)
        <View style={styles.container}>
            
            {/* REQUISITO 2: Encabezado fijo (lo colocamos fuera del ScrollView) */}
            <View style={styles.header}>
                <Text style={styles.restaurantName}>RESTAURANT LA ESQUINA</Text>
                <Text style={styles.restaurantDescription}>
                    Cocina tradicional con un toque moderno.
                </Text>
            </View>

            {/* REQUISITO 3: Implementar un ScrollView */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                {/* Mapear las categorías */}
                {DATA_MENU.map((category) => (
                    <View key={category.id} style={styles.categoryContainer}>
                        
                        {/* REQUISITO 4: Título de categoría */}
                        <Text style={styles.categoryTitle}>{category.title}</Text>

                        {/* Mapear los platillos */}
                        {category.items.map((dish) => (
                            <View key={dish.id} style={styles.dishCard}>
                                
                                {/* REQUISITO 5: Contenido del platillo */}
                                <View style={styles.dishTextContent}>
                                    <Text style={styles.dishName}>{dish.name}</Text>
                                    <Text style={styles.dishDescription}>{dish.description}</Text>
                                    <Text style={styles.dishPrice}>
                                        ${dish.price.toFixed(2)}
                                    </Text>
                                </View>

                                {/* REQUISITO 5: Botón "Ordenar" con TouchableOpacity */}
                                <TouchableOpacity
                                    style={styles.orderButton}
                                    onPress={() => handleOrder(dish.name, dish.price)}
                                >
                                    <Text style={styles.orderButtonText}>Ordenar</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                        
                    </View>
                ))}
                
            </ScrollView>

        </View>
    );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa toda la pantalla
        backgroundColor: '#f5f5f5', // Fondo sólido (gris muy claro)
    },
    header: {
        padding: 20,
        backgroundColor: '#D32F2F', // Un color sólido vibrante para el encabezado (Rojo oscuro)
        paddingTop: 40, // Espacio superior para iOS/Android
    },
    restaurantName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    restaurantDescription: {
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
        // Sombra suave para darle elevación
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
    dishCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: StyleSheet.hairlineWidth, // Línea muy fina
        borderBottomColor: '#eee',
    },
    dishTextContent: {
        flex: 1,
        paddingRight: 10,
    },
    dishName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#333',
    },
    dishDescription: {
        fontSize: 13,
        color: '#666',
        marginVertical: 2,
    },
    dishPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#388E3C', // Verde para el precio
    },
    orderButton: {
        backgroundColor: '#0288D1', // Azul (un color de acción)
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