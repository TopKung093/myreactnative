import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Resort from '../../components/week3/Resort';

export default function Resort() {
    return (        
        <View style={{ flex: 1, paddingTop : 100 }}>
            {/* <Text> Week 3 </Text> */}
            <Resort />
        </View>
    );
}
