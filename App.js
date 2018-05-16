import React, { Component } from 'react';
import { Button } from 'react-native-material-design';
import {
  HelloWord,
  Bananas,
  LotsOfGreetings,
  BlinkApp,
  LotsOfStyles,
  FetchExample
} from './src';


import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  move = () => {
    console.log(11);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <HelloWord />
        <Bananas />
        <LotsOfGreetings />
        <BlinkApp />
        <LotsOfStyles />
        <FetchExample />
        <Button value="NORMAL FLAT" onPress={()=> console.log("I pressed a flat button")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom: 100
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
