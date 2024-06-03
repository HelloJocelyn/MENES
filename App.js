// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import MyNavigator from './src/navigations/StackNavigator'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  RefreshControl,
  SectionList,
  StatusBar,
  SafeAreaView,
  Platform
} from 'react-native';


const App = () => {
  return (
   <MyNavigator/>
  )
}




export default App;
