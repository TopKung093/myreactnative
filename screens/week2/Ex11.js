import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function Ex11() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
    <View style={{ flexDirection:'column'}}>
    <View style={{backgroundColor: '#4A90E2'}} />
    <View style={{backgroundColor: '#50E3C2'}} />
    </View>
    <Button title="Next" onPress={() => navigation.navigate("Ex12")} />
  </View>);
}