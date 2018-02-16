import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  onRowPress() {
  //passing employee which is selected as props to EmployeeEdit
    Actions.employeeEdit({ employee: this.props.employee });
  }
  render() {
    const { name, phone } = this.props.employee;
    return (
      <TouchableOpacity onPress={this.onRowPress.bind(this)} >
      <View>
      <CardSection>
       <Image style={styles.imageStyle} source={require('../img/accounticon.png')} />
       <View style={styles.viewStyle}>
          <Text style={styles.titleStyle}> {name}</Text>
          <View style={styles.phoneViewStyle}>
          <Image style={styles.phoneStyle} source={require('../img/phone.png')} />
          <Text style={styles.phoneNoStyle}>{phone}</Text>
          </View>
        </View>
      </CardSection>
      </View>
      </TouchableOpacity >
    );
  }
}
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    color: 'black'
  },
  phoneNoStyle: {
    fontSize: 18,
    paddingLeft: 5,
    marginTop: 5,
    color: 'black'
  },
  imageStyle: {
    height: 45,
    width: 45,
    marginLeft: 20,
    marginTop: 10
  },
  viewStyle: {
    flexDirection: 'column',
    marginTop: 10
  },
  phoneStyle: {
    height: 25,
    width: 25,
    marginLeft: 20,
    marginTop: 5
  },
  phoneViewStyle: {
    flexDirection: 'row'
  }
};

export default ListItem;
