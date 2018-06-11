import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Item extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Text>test</Text>
      </View>
    )
  }
};
