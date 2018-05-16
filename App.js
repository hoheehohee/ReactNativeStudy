import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
import {
  HelloWord,
  Bananas,
  LotsOfGreetings,
  BlinkApp,
  LotsOfStyles,
  FetchExample,
  WatchProject
} from './src';


import {
  Platform,
  StyleSheet,
  View,
  NavigatorIOS
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyView,
          title: 'Main',
          passProps: {index: 1},
        }}
        style={{flex: 1}}
      />
    );
  }
}

class MyView extends Component {

  move = () => {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: WatchProject,
      title: 'Watch Project',
      pssProps: { index: nextIndex }
    })
  }

  render() {
    return(
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
        <Button block primary onPress={this.move}>
          <Text>Go Watch Project</Text>
        </Button>
      </View>
    )
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
