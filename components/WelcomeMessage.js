import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Ima} from 'react-native';

export default function WelcomeMessage() {
  return (
    <View style = {{flex: 1}}>
      <Text style = {{ padding : 40, fontSize: 30, color: '#EDEFEE' , textAlign : "center"}}>
        Welcome To Little Lemon
        </Text>
        <Text style = {{fontSize : 24, color: '#EDEFEE', padding: 20, marginTop: 8, textAlign : "center"}}>
         Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
      </Text>


      
      
    </View>
  );
}
