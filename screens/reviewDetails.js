import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ navigation }) {

    pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={ globalStyles.container }>
            <Text>Review Screen</Text>
            <Button 
                title="back to home screen"
                onPress={ pressHandler }
            />
        </View>
    );
}