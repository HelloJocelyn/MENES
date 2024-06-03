import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import constants from '../../assets/constants';
import Icon from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Setting')}
            />
        </View>
    );
}
function SettingScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Setting Screen</Text>

        </View>
    );
}



function MyNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        height: 60,
                        elevation: 50,
                        backgroundColor: constants.LIGHT_THEME_BG,
                        position: "center",
                        borderRadius: 15,
                        left: 10,
                        right: 10
                    },
                }}>
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            let color = focused ? constants.LIGHT_THEME_PRIMARY_COLOR : constants.LIGHT_THEME_TEXT_COLOR;
                            let icon = focused ? "settings" : "settings-outline";
                            let size = focused ? 30 : 24;
                            return (
                                <Icon name={icon} size={size} color={color} />
                            )
                        },
                        tabBarLabel: 'Categories',
                        tabBarActiveTintColor: constants.LIGHT_THEME_PRIMARY_COLOR,
                        tabBarInactiveTintColor: constants.LIGHT_THEME_TEXT_COLOR,
                    }} />
                <Tab.Screen name="Setting" component={SettingScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            let color = focused ? constants.LIGHT_THEME_PRIMARY_COLOR : constants.LIGHT_THEME_TEXT_COLOR;
                            let icon = focused ? "settings" : "settings-outline";
                            let size = focused ? 30 : 24;
                            return (
                                <Icon name={icon} size={size} color={color} />
                            )
                        },
                        tabBarLabel: 'Settings',
                        tabBarActiveTintColor: constants.LIGHT_THEME_PRIMARY_COLOR,
                        tabBarInactiveTintColor: constants.LIGHT_THEME_TEXT_COLOR,
                    }} />
            </Tab.Navigator>

        </NavigationContainer>
    )
}


export default MyNavigator