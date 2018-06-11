import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Item from './Item';

export default class Main extends Component {

  render() {

    const items = [
      { name: 'main' },
      { name: 'watch' },
      { name: 'alarm' }
    ];

    return (
      <View style={styles.MainView}>
      {
        items.map((value, index) => {
          console.log(value);
          return ( 
          <Item key={index} style={styles.MainRow}/>
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