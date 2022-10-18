import React from 'react';
import {StyleSheet, View} from 'react-native';
import MaterialIcon from './src';

const App = () => {
  return (
    <View style={styles.container}>
      <MaterialIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
