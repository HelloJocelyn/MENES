import ItemBar from '../items/ItemBar'
import AddItem from '../items/DaysSince'
import { View, Text, Button } from 'react-native';


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <ItemBar></ItemBar>
            <AddItem></AddItem>
        </View>
    );
}

export default HomeScreen;