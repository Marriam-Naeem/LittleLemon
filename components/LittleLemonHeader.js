import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.18, backgroundColor: '#F4CE14' }}>
      <Text style={{ padding: 45, fontSize: 26, color: 'black', fontWeight: 'bold', textAlign: "center" }}>
        Welcome To Little Lemon</Text>
    </View>
  );
}
