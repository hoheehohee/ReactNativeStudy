import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Item from './Item';

export default class Main extends Component {

  render() {

    const { test } = this.props;
    const items = [
      { name: 'main' },
      { name: 'watch' },
      { name: 'alarm' }
    ];
    console.log(test);
    return (
      <View style={styles.MainView}>
      {
        items.map((value, index) => {
          console.log(value);
          return ( 
          <Item 
            key={index} 
            style={styles.MainRow}
            test={test}
          />
          )
        })
      }
      </View>
    )
  }
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    borderTopWidth: 2
  },
  MainRow: {
    flex: 1,
    height: 100,
    borderRightWidth: 2,
    backgroundColor: 'powderblue'
  }
});