import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
      <Text style={styles.text}>My name is </Text>
      <Text style = {styles.name} >Caleb</Text>
      <StatusBar style="auto" />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E3135',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  }
});
