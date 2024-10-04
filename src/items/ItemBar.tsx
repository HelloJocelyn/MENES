import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)



const deviceWidth = Dimensions.get('window').width;

/**
 * name: 
 *  itemName: string
 *  createdAt: timestamp
 *  updatedAt: timestamp
 *  workingDays: string[]
 *  continousWorkingDays: number
 *  total hours: number
 *  startTime: timestamp
 *  endTime: timestamp
 *  
 * 
 */
async function storeItem(userID: string) {
    try {
        // @ts-expect-error TS(2304): Cannot find name 'USER_ID_KEY'.
        await AsyncStorage.setItem(USER_ID_KEY, userID);
    } catch (err) {
        // @ts-expect-error TS(2304): Cannot find name 'Sentry'.
        Sentry.captureException(err);
    }
}


const Item = ({ itemName, workingDays, continuousDays,totalHours }) => (
    <StyledView
        style={{
            // display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 10,
            elevation: 4,
            width: deviceWidth - 30,
            marginVertical: 7,
            height: 50
        }}
        className="grid h-[50vh] items-center justify-center  shadow m-10 text-justify">
        <StyledText
            style={{
                width: deviceWidth - 110,
                paddingLeft: 10,
                // paddingTop: 5,
            }}
            className="text-slate-800 shadow text-center">
            {itemName}
        </StyledText>
        <StyledView className="flex">
            <StyledText className="text-slate-800 shadow text-center">
                {workingDays}
            </StyledText>

            <StyledText className="text-stone-400 shadow text-center ">
                {continuousDays}
            </StyledText>
            <StyledText className="text-stone-400 shadow text-center ">
                {totalHours}
            </StyledText>
        </StyledView>
    </StyledView>
);



class ItemBar extends Component {
    // @ts-expect-error TS(4114): This member must have an 'override' modifier becau... Remove this comment to see the full error message
    state = {
        languages: ["日本語", "Espanol"],
    };
    daysSince = {

    }

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

    // @ts-expect-error TS(4114): This member must have an 'override' modifier becau... Remove this comment to see the full error message
    render() {
        return (
            <StyledView className="flex-1 items-center justify-center">
                {
                    this.state.languages.map((language, index) => (
                        <Item key={index} itemName={language} workingDays={10} continuousDays={5} totalHours={1}></Item>
                        // <StyledView
                        //     key={index}
                        //     style={{
                        //         // display: 'flex',
                        //         flexDirection: 'row',
                        //         backgroundColor: 'white',
                        //         borderRadius: 10,
                        //         elevation: 4,
                        //         width: deviceWidth - 30,
                        //         marginVertical: 7,
                        //         height: 50
                        //     }}
                        //     className="grid h-[50vh] items-center justify-center  shadow m-10 text-justify">

                        //     <StyledText
                        //         style={{
                        //             width: deviceWidth - 110,
                        //             paddingLeft: 10,
                        //             // paddingTop: 5,
                        //         }}
                        //         className="text-slate-800 shadow text-center">
                        //         {language}
                        //     </StyledText>
                        // </StyledView>
                    )
                    )
                }
            </StyledView>

        );
    }
}



export default ItemBar;

