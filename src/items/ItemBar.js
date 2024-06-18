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

class ItemBar extends Component {
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
                    "test" {this.state.languages.length}
                </Text>
                {
                    this.state.languages.map((language, index) => (
                        <View
                            key={index}
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                backgroundColor: 'white',
                                borderRadius: 10,
                                elevation: 4,
                                width: deviceWidth - 30,
                                marginVertical: 7,
                            }}>
                            <Image
                                source={require('../../assets/icons/weather.png')}
                                style={{ height: 100, width: 100, borderRadius: 10 }}
                            />
                            <Text
                                style={{
                                    width: deviceWidth - 130,
                                    paddingLeft: 10,
                                    paddingTop: 5,
                                }}>
                                {language}
                            </Text>
                        </View>
                    )
                    )
                }
            </View>

        );
    }
}

export default ItemBar;
