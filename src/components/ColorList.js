import React from 'react'
import { TouchableOpacity, View } from 'react-native';
const ColorList = ({color, changeColor, selectedColor}) => {
	const style = { width: 45, height: 50, backgroundColor: color }
	if(selectedColor === color) {
		style['borderRadius'] = 4;
		style['borderWidth'] = 3;
		style['borderColor'] = '#d6d7da';
	}
	//1px solid transparent
	return (
		<TouchableOpacity onPress={() => changeColor(color)}>
			<View style={style} />
		</TouchableOpacity>
	)
}

export default ColorList;
