import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={{backgroundColor: '#F4CE14', marginBottom: 10}}>
      <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold' , textAlign: "center"}}>
      All rights reserved by Little Lemon, 2023 {' '}
      </Text>
    </View>
  );
}
