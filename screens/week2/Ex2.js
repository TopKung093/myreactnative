import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function Ex2() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
    <View style={{
        flex: 1,
             flexDirection: 'row',
             }}>
             <View style={{
        width: 100 , 
        backgroundColor: 'powderblue'}} />
        </View>
        <Button title="Next" onPress={() => navigation.navigate("Ex3")} />
        </View>
  );
}
