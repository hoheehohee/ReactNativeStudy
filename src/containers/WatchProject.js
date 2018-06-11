import React, { Component } from 'react';
import { View, Text, DatePickerIOS, ActionSheetIOS, Alert, TouchableOpacity, Animated } from 'react-native';
import { Icon, ActionSheet } from 'native-base';
import { ColorList, Footer } from '../components';
import moment from 'moment-timezone';
moment.tz('Asia/Seoul').format();

class WatchProject extends Component {

	state = {
		backroundColor: '#635DB7',
		color: '#ffffff',
		isColorOpen: false,
		times: {
			date: moment().format("YYYY년 MM월 DD일"),
			time: moment().format("h:mm:ss a"),
			timeType: "12hour",
			day: moment().format('dddd')
		},
		fadeAnim: new Animated.Value(0)
	}

	componentWillMount() {
		this.TimerFunc();
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	formatDayFunc = (day) => {
		let result = day;
		switch (day) {
			case 'Sunday': result = "일요일"; break;
			case 'Monday': result = "월요일"; break;
			case 'Tuesday': result = "화요일"; break;
			case 'Wednesday': result = "수요일"; break;
			case 'Thursday': result = "목요일"; break;
			case 'Friday': result = "금요일"; break;
			case 'Saturday': result = "토요일"; break;
			default: result = day;
		}
		return result
	}

	TimerFunc = async() => {

		this.timerID = setInterval(() => {
			const { timeType } = this.state;
			this.setState({
				times: {
					date: moment().format("YYYY년 MM월 DD일"),
					time: timeType === '24hour' ? moment().format("H:mm:ss") : moment().format("h:mm:ss a"),
					day: moment().format('dddd')
				}
			})
		}, 1000)
	}

	colorOpen = () => {
		const { isColorOpen } = this.state;
		if(!isColorOpen) {
			Animated.timing(
				this.state.fadeAnim,
				{
					toValue: 1,
					duration: 2500,
				}
			).start();
		}else {
			this.setState({ fadeAnim : new Animated.Value(0)})
		}
		this.setState({ isColorOpen: !isColorOpen });
	}

	changeColor = (color) => {
		// alert(color)
		this.setState({ fadeAnim : new Animated.Value(0)})
    if(color === '#fff' || color === '#e4d5a7') {
      this.setState({ color: '#000000'});
    }else {
      this.setState({ color: '#ffffff'});
    }
		this.setState({
			backroundColor: color,
			isColorOpen: false
		});
	}

	timeType = () => {
    this.setState({isColorOpen: false});
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

		const { backroundColor, color, nowtime, times, isColorOpen, fadeAnim } = this.state;
    const colors = [
			['#fff', '#434343', '#7d112c'],
			['#563a85', '#232c62', '#0e6f91'],
			['#28643f', '#e4d5a7', '#000000']
		]
		return(
			<View style={{flex: 1, marginTop: 65, backgroundColor: backroundColor}}>
				<View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 10, paddingRight: 10}}>
					<Icon style={{color: color, marginRight: 10}} name='ios-brush' onPress={this.colorOpen}/>
					<Icon style={{color: color}} name='ios-settings' onPress={this.timeType}/>
				</View>
				{
					isColorOpen
					? (
						<Animated.View style={{
							...this.props.style,
          					opacity: fadeAnim,
							flex: 1, flexDirection: 'column', width: '100%',
							alignItems: 'flex-end', marginTop: 55, paddingRight: 50,
							position: 'absolute', zIndex: 9}}>
							{
								colors.map((items, idx) => (
									<ColorList
										key={idx}
										color={items}
										selectedColor={backroundColor}
										changeColor={this.changeColor}
									/>
								))
							}
						</Animated.View>
					): null
				}
				<View style={{ 
					flex: 9,
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					marginBottom: 65 }}>
					<View>
						<Text style={{color: color, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
							{
								`${times.date} ${this.formatDayFunc(times.day)}`
							}
						</Text>
						<Text style={{color: color, textAlign: 'center', fontSize: 30, fontWeight: 'bold', marginTop: 10}}>
							{
								`${times.time}`
							}
						</Text>
					</View>
				</View>
				<Footer.Main />
			</View>
		);
	}
}

export default WatchProject;
