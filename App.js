import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { MovieContext } from './Context';
import Homescreen from './screens/Homescreen';
import StackNavigator from './StackNavigator';
export default function App() {
  return (
    <>
  
      <MovieContext>

<StackNavigator />
<StatusBar style="auto" />

</MovieContext>
      
      

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
