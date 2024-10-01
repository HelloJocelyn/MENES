import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import constants from '../../assets/constants';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen  from '../screens/HomeScreen';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// function HomeScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

//             <ItemBar></ItemBar>
//             <AddItem></AddItem>
//         </View>
//     );
// }
function SettingScreen({
    navigation
}: any) {
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
                        height: 45,
                        elevation: 50,
                        backgroundColor: "#fff",
                        position: "absolute",
                        overflow: 'hidden',
                        borderTopLeftRadius: 21,
                        borderTopRightRadius: 21,
                        shadowOffset: {
                            width: 0,
                            height: 12,
                        },
                        width: '100%',
                        shadowOpacity: 0.54,
                        shadowRadius: 16,
                        zIndex: 0,
                    },

                }}>
                // @ts-expect-error TS(2322): Type '({ navigation }: any) => {}' is not assignab... Remove this comment to see the full error message
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