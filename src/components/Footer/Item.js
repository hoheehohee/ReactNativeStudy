import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Item extends Component {
  render() {
    const { test } = this.props;
    return (
      <TouchableOpacity onPress={test}>
        <View style={this.props.style}>
          <Text>test</Text>
        </View>
      </TouchableOpacity>
    )
  }
};
