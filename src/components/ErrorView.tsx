import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {}

const ErrorView: FC<Props> = (props: Props) => {
  console.log('errerere');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hey! try a different search!</Text>
    </View>
  );
};

export default ErrorView;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#5e6063',
    fontWeight: 'bold',
  },
});
