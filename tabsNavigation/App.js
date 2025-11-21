import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';
import Detail from './screens/Detail'; 

const TAB = createBottomTabNavigator();
const Stack = createNativeStackNavigator(); 

function MainTabs() {
    return (
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
                tabBarActiveTintColor: 'blue', 
                tabBarInactiveTintColor: 'grey',
                tabBarLabelStyle: { paddingBottom: 5, fontSize: 12 },
                tabBarStyle: { padding: 10, height: 70 }
            })}
        >
            <TAB.Screen name="Home" component={Home} options={{ title: 'Home', headerShown: false }} />
            <TAB.Screen name="Profile" component={Profile} options={{ title: 'Profile', headerShown: false }} />
            <TAB.Screen name="Settings" component={Settings} options={{ title: 'Settings', headerShown: false }} />
        </TAB.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="MainTabs" 
                    component={MainTabs} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="DetailScreen" 
                    component={Detail} 
                    options={{ title: 'Detalle' }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}