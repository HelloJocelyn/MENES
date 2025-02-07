import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

const SwitchTest = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)
    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            >

            </Switch>
            {
                isEnabled ? (
                    <Text>Enabled</Text>
                ) : (<Text>Disabled</Text>)
            }
        </View>

    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SwitchTest