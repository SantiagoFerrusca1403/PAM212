import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';

const TAB = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <TAB.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline';
                        } else if (rn === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'grey',
                    tabBarLabelStyle: { paddingBottom: 5, fontSize: 12 },
                    tabBarStyle: { padding: 10, height: 70 }
                })}
            >
                <TAB.Screen name="Home" component={Home} options={{ title: 'Principal' }} />
                <TAB.Screen name="Profile" component={Profile} options={{ title: 'Mi Perfil' }} />
                <TAB.Screen name="Settings" component={Settings} options={{ title: 'Ajustes' }} />
            </TAB.Navigator>
        </NavigationContainer>
    );
} 