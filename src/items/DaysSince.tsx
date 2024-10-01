import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
class AddItem extends Component {
    render() {
        return (
            <View style={styles.itemAdd} >
                <Text style={styles.plus}> + </Text>
            </View>
        )

    }
}

export default AddItem;

const styles = StyleSheet.create({
    itemAdd: {
        // display: 'center',
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        // background: linear - gradient(127, "#5199e1", 14.9, "#3110ed", 88.35),
        backgroundColor: '#5199e1',
        /* margin: auto; */
        /* background-color: #FFF4A3; */
        // padding: 10,
        /* display: flex; */
        borderWidth: 1,
        borderColor: 'white',
        /* border-style: dotted; */

        // margin: 10,
        borderRadius: 25,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

    },
    plus: {
        // display: 'center',
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        color: 'white',
        fontSize: 40
    }
});





// button {
//     background-color: #48abe0;
//     color: white;
//     border: none;
//     padding: 5px;
//     font-size: 31px;
//     height: 130px;
//     width: 130px;
//     box-shadow: 0 2px 4px darkslategray;
//     cursor: pointer;
//     transition: all 0.2s ease;
//   }
  
//   button:hover {
//    background-color: #65b9e6;
//   }
  
//   button:active {
//     box-shadow: 0 0 2px darkslategray;
//     transform: translateY(2px);
//   }
