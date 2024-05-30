// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
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


const GeneralTest = () => {
    return (<View style={styles.container}>
        <Text style={styles.text2}> Test aa </Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        opacity: 0.70
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    text2: {
        color: 'red',
        fontSize: 14,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    scrollView: {
        flex: 1,
        // backgroundColor: 'pink',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});


export default GeneralTest