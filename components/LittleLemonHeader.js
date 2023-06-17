import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.2, backgroundColor: '#F4CE14' }}>
      <Text
        style={{ padding: 38, fontSize: 30, color: 'black' , fontWeight: 'bold' , textAlign : "center"}}>
          Little Lemon
      </Text>
      
    </View>
  );
}
