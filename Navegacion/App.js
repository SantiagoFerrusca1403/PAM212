
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Home from './screens/Home'
import Profile from './screens/Profile'
import Settings from './screens/Settings'



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
            headerStyle: {
                backgroundColor: '#007BFF', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}
      >
        {/* Definición de cada Screen */}
        <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ title: 'Vista Principal' }} 
        />
        <Stack.Screen 
            name="Profile" 
            component={Profile} 
            options={{ title: 'Mi Perfil' }} 
        />
        {/* Incluimos Settings para que el Home y Profile funcionen */}
        <Stack.Screen 
            name="Settings" 
            component={Settings} 
            options={{ title: 'Configuración' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}