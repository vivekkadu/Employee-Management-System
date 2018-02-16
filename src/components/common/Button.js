import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//getting whenPress props from parent component in AlbumDetail
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

return (
//passing whenPress to onPress prop of TouchableOpacity

<TouchableOpacity onPress={onPress} style={buttonStyle}>
<Text style={textStyle}>
{children}
</Text>
</TouchableOpacity>

);
};

const styles = {

buttonStyle: {
flex: 1,
alignSelf: 'stretch',
backgroundColor: '#1B65B1',
borderRadius: 5,

borderWidth: 1,
borderColor: '#1B65B1',
marginLeft: 5,
marginRight: 5
},

textStyle: {

  alignSelf: 'center',
  color: 'white',
  fontSize: 16,
  fontWeight: '600',
  paddingTop: 10,
  paddingBottom: 10
}

};

export { Button };
