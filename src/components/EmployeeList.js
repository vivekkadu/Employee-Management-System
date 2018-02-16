import React, { Component } from 'react';
import _ from 'lodash';
import { View, Text, ListView } from 'react-native';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';

class EmployeeList extends Component {

componentWillMount() {
    this.props.employeeFetch();
    this.createDataSource(this.props);
}

componentWillReceiveProps(nextProps) {
  //nextProps is next set props that this component
  //wiil be render with this.props is still old set of nextProps
  this.createDataSource(nextProps);
}

createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
     this.dataSource = ds.cloneWithRows(employees);
  }
 renderRow(employee) {
  return <ListItem employee={employee} />;
 }
render() {
  console.log(this.props);
  return (
    <ListView
     enableEmptySections
     dataSource={this.dataSource}
     renderRow={this.renderRow}
    />
  );
}
}
//in this we r converting an object to array to pass component as this.props
const mapStateToProps = state => {
  //val is name,phone and shift and uid is unqu id of in list of employees
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
    //{ name:'jane',phone:5555,shift:momao,uid:sdknksd}
  });
  return { employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
