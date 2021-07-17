import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ route }) {

    const { title, body, rating } = route.params;

    return (
        <View style={ globalStyles.container }>
            <Card>
                <Text>{ title }</Text>
                <Text>{ body }</Text>
                <View style={ styles.rating }>
                    <Text>GameZone rating: </Text>
                    <Image style={{ width: rating*21, height: 21 }} source={ images.ratings[rating] } />
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})