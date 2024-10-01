import React, { Component } from 'react';
import {
    ActivityIndicator,
    ScrollView,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
// import config from '../../config/config';

const deviceWidth = Dimensions.get('window').width;

class BarDetail extends Component {
    state = {
        languages: ["日本語", "Espanol"],
    };

    // componentDidMount() {
    //     fetch(
    //         `https://newsapi.org/v2/top-headlines?country=in&apiKey=${config.API_KEY}`,
    //     )
    //         .then(res => res.json())
    //         .then(response => {
    //             this.setState({
    //                 news: response.articles,
    //             });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text
                    style={{
                        width: deviceWidth - 130,
                        paddingLeft: 10,
                        paddingTop: 5,
                    }}>
                    "test" 
                </Text>
                <Button onPress={() => goBack()} title="Go back from ProfileScreen" />
                
            </View>

        );
    }
}

export default BarDetail;
