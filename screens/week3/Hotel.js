import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Hotel from '../../components/week3/Hotel';

export default function Hotel() {
    return (        
        <View style={{ flex: 1, paddingTop : 100 }}>
            {/* <Text> Week 3 </Text> */}
            <Hotel />
        </View>
    );
}
