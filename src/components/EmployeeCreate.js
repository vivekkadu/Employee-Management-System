import React, { Component } from 'react';
import { connect } from 'react-redux';
//employeeUpdate is actioncreator not actions
// it is importing from actions index file
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

onButtonPress() {
  const { name, phone, shift } = this.props;

  this.props.employeeCreate({ name, phone, shift });
}
render() {
  return (
     <Card>
       <EmployeeForm {...this.props} />
       <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
             Save
          </Button>
       </CardSection>
    </Card>

  );
}
}

const mapStateToProps = (state) => {
  //employeeForm is key in reducer for EmployeeFormReducer
  //it will take state value of namephone and shift from EmployeeFormReducer
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
