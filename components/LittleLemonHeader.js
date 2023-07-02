import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.25, backgroundColor: '#EE9972' }}>
      <Text
        style={{ padding: 38, fontSize: 30, color: 'black' , fontWeight: 'bold' , textAlign : "center"}}>
          Little Lemon
      </Text>
      
    </View>
  );
}
