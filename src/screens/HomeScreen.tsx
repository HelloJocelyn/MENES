import ItemBar from '../items/ItemBar'
import AddItem from '../items/DaysSince'
import { View, Text, Button } from 'react-native';
import React, { useEffect, useState ,FC} from "react";


function HomeScreen0({
    navigation
}: any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <ItemBar></ItemBar>
            <AddItem></AddItem>
        </View>
    );
}

 class HomeScreen extends React.Component<{navigation: any}> {
    override render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ItemBar></ItemBar>
                <AddItem></AddItem>
                {/* <Text>Hello</Text> */}
                
            </View>
        );
    }
}

export default HomeScreen;