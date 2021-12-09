import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../../components/week3/Card';

export default function Card() {
    return (        
        <View style={{ flex: 1, paddingTop : 100 }}>
            {/* <Text> Week 3 </Text> */}
            <Card />
        </View>
    );
}
