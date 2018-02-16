import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


class RouterComponent extends Component {
  render() {
return (
<Router sceneStyle={{ paddingTop: 45 }}>
<Scene key="auth">
   <Scene
    key="login"
    titleStyle={{ color: 'white', fontSize: 20 }}
    navigationBarStyle={styles.navbarStyle}
   component={LoginForm}
   title=" MANAGER LOG IN"
   />
</Scene>
<Scene key="main">
   <Scene
   titleStyle={{ color: 'white', fontSize: 20 }}
   navigationBarStyle={styles.navbarStyle}
   rightButtonIconStyle={styles.addStyle}
   rightButtonImage={require('../src/img/add.png')}
   onRight={() => Actions.employeeCreate()}
   key="employeeList"
   component={EmployeeList}
   title="Employee List"
   />
</Scene>
  <Scene
        navBarButtonColor='white'
        titleStyle={{ color: 'white', fontSize: 20 }}
        navigationBarStyle={styles.navbarStyle}
        key="employeeCreate"
        title="Add New Employee"
        component={EmployeeCreate}
   />
   <Scene
         navBarButtonColor='white'
         titleStyle={{ color: 'white', fontSize: 20 }}
         navigationBarStyle={styles.navbarStyle}
         key="employeeEdit"
         title="Edit Employee"
         component={EmployeeEdit}
    />
</Router>
);
}
}

const styles = {
  navbarStyle: {
    backgroundColor: '#1B65B1'
  },
  addStyle: {
     height: 40,
     width: 40,
    marginLeft: 10
  }
};
export default RouterComponent;
