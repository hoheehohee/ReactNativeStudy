import React, { Component } from 'react';
import { View, Text, DatePickerIOS, ActionSheetIOS, Alert, TouchableOpacity } from 'react-native';
import { Container, Header, Content } from 'native-base';
import { Icon, ActionSheet } from 'native-base';
import moment from 'moment-timezone';
moment.tz('Asia/Seoul').format();

var BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Destruct',
  'Cancel',
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

class WatchProject extends Component {

	state = {
		backroundColor: '#635DB7',
		color: '#ffffff',
		isColorOpen: false,
		times: {
			date: moment().format("YYYY년 MM월 DD일"),
			time: moment().format("h:mm:ss a"),
			timeType: "24hour",
			time2: moment().format("H:mm:ss")
		}

	}

	componentWillMount() {
		this.TimerFunc();
	}

	TimerFunc = async() => {

		setInterval(() => {
			const { timeType } = this.state;
			this.setState({
				times: {
					date: moment().format("YYYY년 MM월 DD일"),
					time: timeType === '24hour' ? moment().format("H:mm:ss") : moment().format("h:mm:ss a"),
				}
			})
		}, 1000)
	}

	colorOpen = () => {
		const { isColorOpen } = this.state;
		this.setState({ isColorOpen: !isColorOpen });
	}

	changeColor = (color) => {
		this.setState({
			backroundColor: color,
			isColorOpen: false
		});
	}

	timeType = () => {
		Alert.alert(
		  '시간 설정',
		  '12 hour and 24 hour',
		  [
		    {
					text: '12 hour', onPress: () => {
						this.setState({ timeType: '12hour' })
					}
				},
				{
					text: '24 hour', onPress: () => {
						this.setState({ timeType: '24hour' })
					}
				},
		    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
		    // {text: 'OK', onPress: () => console.log('OK Pressed')},
		  ]
		)
  }

	render() {

		const { backroundColor, color, nowtime, times, isColorOpen } = this.state;

		return(
			<View style={{flex: 1, marginTop: 65, backgroundColor: backroundColor}}>
				<View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 10, paddingRight: 10}}>
					<Icon style={{color: color, marginRight: 10}} name='ios-brush' onPress={this.colorOpen}/>
					<Icon style={{color: color}} name='ios-settings' onPress={this.timeType}/>
				</View>
				{
					isColorOpen
					? (
						<View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
							<TouchableOpacity onPress={() => this.changeColor('#fff')}>
								<View style={{width: 45, height: 50, backgroundColor: '#fff'}} />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.changeColor('#434343')}>
								<View style={{width: 45, height: 50, backgroundColor: '#434343'}} />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.changeColor('#7d112c')}>
								<View style={{width: 45, height: 50, backgroundColor: '#7d112c'}} />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.changeColor('#563a85')}>
								<View style={{width: 45, height: 50, backgroundColor: '#563a85'}} />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.changeColor('#232c62')}>
								<View style={{width: 45, height: 50, backgroundColor: '#232c62'}} />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.changeColor('#0e6f91')}>
								<View style={{width: 45, height: 50, backgroundColor: '#0e6f91'}} />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.changeColor('#28643f')}>
								<View style={{width: 45, height: 50, backgroundColor: '#28643f'}} />
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.changeColor('#e4d5a7')}>
								<View style={{width: 45, height: 50, backgroundColor: '#e4d5a7'}} />
							</TouchableOpacity>
						</View>
					): null
				}
        <View style={{
					flex: 9,
					flexDirection: 'column',
        	justifyContent: 'center',
        	alignItems: 'center'
				}}>
					<View>
						<Text style={{color: color, textAlign: 'center'}}>
							{
								`${times.date} ${times.time}`
							}
						</Text>
					</View>
				</View>
			</View>
		);
	}
}

export default WatchProject;
