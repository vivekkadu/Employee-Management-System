import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {

  onEmailChange(text) {
      this.props.emailChanged(text);
  }

  onPasswordChange(text) {
      this.props.passwordChanged(text);
  }

  onButtonPress() {
  const { email, password } = this.props;
  this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
    return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
         LogIn
      </Button>
    );
  }

  renderError() {
   if (this.props.error) {
    return (
      <CardSection>
    <View style={{ backgroundColor: 'white' }}>
       <Text style={styles.errorTextStyle}>
       {this.props.error}
       </Text>
    </View>
    </CardSection>
  );
  }
}

  render() {
    return (
      <View>

      <Card>
      <CardSection>
        <Image style={styles.imageStyle} source={require('../img/manager.png')} />
      </CardSection>
          <CardSection>
              <Input
               label="Email"
               onChangeText={this.onEmailChange.bind(this)}
               placeholder="user@mail.com" value={this.props.email} />
        </CardSection>

        <CardSection>
              <Input
              label="Password"
              onChangeText={this.onPasswordChange.bind(this)}
              placeholder="Password"
              secureTextEntry />
        </CardSection>
             {this.renderError()}
        <CardSection>
              {this.renderButton()}
         </CardSection>

      </Card>
      </View>
    );
  }
}
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    marginLeft: 45
  },
  imageStyle: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 90
  }
};
const mapStateToProps = state => {
  const { email, password, error, loading } = state.auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
   emailChanged, passwordChanged, loginUser })(LoginForm);
