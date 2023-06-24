
//Lecture of views and texts
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
// import WelcomeMessage from './components/WelcomeMessage';


// export default function App() {
//   return (
//     <>
//    <View
//         style={{flex: 1,backgroundColor: '#495E57'}}>
//         <LittleLemonHeader />
//         <WelcomeMessage />
//     </View>
//     <View style={{ backgroundColor: '#495E57' }}>
//         <LittleLemonFooter />
//       </View>
// //     </> 
// );
// }


import * as React from 'react';
import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
// import MenuItems from './components/MenuItems';
import MenuItems from './components/MenuItemsSectionList';
import FeedbackForm from './components/TextInput';

export default function App() {
  return (
    <>
    <View
      style={{
        flex: 1,
        backgroundColor: '#333333',
      }}>
      <LittleLemonHeader />
      <FeedbackForm />
    </View>
    <View style={{ backgroundColor: '#333333' }}>
    <LittleLemonFooter />
  </View>
  </> 
  );
}

