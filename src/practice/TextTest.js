import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';

const TextInNest = () => {

    const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = 'This is not really a bird nest.';
  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  }
  return (
    <Text style={styles.baseText}>
        <Text>
            {titleText}
            {'\n'}
            {'\n'}
        </Text>
        <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
}
const styles=StyleSheet.create({
    baseText:{
        fontFamily: 'Cochin'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },

})
export default TextInNest