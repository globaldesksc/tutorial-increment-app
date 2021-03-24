import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Start up message!');
  }, []);

  return (
    <View style={styles.container}>
      <Button 
        title="Increment" 
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Text>
        {counter}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;



