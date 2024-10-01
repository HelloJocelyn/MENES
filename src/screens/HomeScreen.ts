import ItemBar from '../items/ItemBar'
import AddItem from '../items/DaysSince'
import { View, Text, Button } from 'react-native';


function HomeScreen({
    navigation
}: any) {
    // @ts-expect-error TS(2322): Type '{}' is not assignable to type 'View'.
    return (
        // @ts-expect-error TS(7027): Unreachable code detected.
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <ItemBar></ItemBar>
            <AddItem></AddItem>
        </View>
    );
}

export default HomeScreen;