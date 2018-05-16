import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content } from 'native-base';
import { Icon } from 'native-base';

class WatchProject extends Component {

	state = {
		backroundColor: '#635DB7',
		color: '#ffffff'
	}

	render() {

		const { backroundColor, color } = this.state;

		return(
			<View style={{flex: 1, marginTop: 65, backgroundColor: backroundColor}}>
				<View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 10, paddingRight: 10}}>
					<Icon style={{color: color, marginRight: 10}} name='ios-settings' />
					<Icon style={{color: color}} name='ios-brush'/>
				</View>
        <View style={{flex: 10}}>
					<Text style={{color: color}}>Watch</Text>
				</View>
			</View>
		);
	}
}

export default WatchProject;
