import React from 'react'
import { TouchableOpacity, View } from 'react-native';

const ColorList = ({color, changeColor, selectedColor}) => {
	return (
		<View style={{flexDirection: 'row', paddingVertical: 2 }}>
			{
				color.map((item, index) => {
					const style = { width: 45, height: 50, marginStart: 2, borderRadius:7}
					style['backgroundColor']= item
					if(selectedColor === item) {
						style['borderRadius'] = 4,
						style['borderWidth'] = 3,
						style['borderColor'] = '#d6d7da'
					}
					return (
						<TouchableOpacity onPress={() => changeColor(item)}
							 key={`color-${index}`}>
							<View style={style} />
						</TouchableOpacity>
					)
				})
			}
		</View>
	)
}

export default ColorList;
