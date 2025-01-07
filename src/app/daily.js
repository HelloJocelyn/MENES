import React, { Component } from 'react';
import {
    ActivityIndicator,
    ScrollView,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    Modal
} from 'react-native';
import BarDetail from '../items/BarDetails';
import ItemBar from '../items/ItemBar';
import { styled } from 'nativewind';
import { TextInput } from 'react-native';
import { useState } from 'react';

const StyledView = styled(View)
const deviceHeight = Dimensions.get('window').height;

function Daily() {
    const [isModalVisible, setIsModalVisible] = useState(false);


    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <StyledView className="flex-1 bg-amber-200" >

                <ScrollView className="flex-1">
                    <ItemBar></ItemBar>
                </ScrollView>
                <StyledView className="bg-lime-100">
                    <TouchableOpacity
                        className="absolute bottom-10 w-16 h-16 rounded-full bg-teal-500 items-center justify-center shadow-lg shadow-teal-500/50"
                        style={{
                            alignSelf: 'center',
                            // For iOS shadow
                            shadowColor: '#14b8a6',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.3,
                            shadowRadius: 4,
                        }}
                        onPress={() => console.log('Button pressed')}
                    >
                        <Text className="text-white text-xs">Add new</Text>
                    </TouchableOpacity>
                </StyledView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => setIsModalVisible(false)}
                >
                    <StyledView className="flex-1 justify-end">
                        <StyledView className="bg-white rounded-t-3xl p-6 h-96">
                            <StyledView className="flex-row justify-between items-center mb-6">
                                <Text className="text-xl font-semibold">新しいアイテム</Text>
                                <TouchableOpacity 
                                    onPress={() => setIsModalVisible(false)}
                                    className="p-2"
                                >
                                    <Text className="text-gray-500 text-lg">✕</Text>
                                </TouchableOpacity>
                            </StyledView>

                            {/* Add your form components here */}
                            <StyledView className="space-y-4">
                                {/* Example input fields - customize as needed */}
                                <TextInput 
                                    className="border border-gray-300 rounded-lg p-3"
                                    placeholder="アイテム名"
                                />
                                
                                <TouchableOpacity 
                                    className="bg-teal-500 p-4 rounded-lg items-center"
                                    onPress={() => {
                                        // Add your save logic here
                                        setIsModalVisible(false);
                                    }}
                                >
                                    <Text className="text-white font-semibold">保存</Text>
                                </TouchableOpacity>
                            </StyledView>
                        </StyledView>
                    </StyledView>
                </Modal>
            </StyledView>
        </SafeAreaView>

    );
}

export default Daily;