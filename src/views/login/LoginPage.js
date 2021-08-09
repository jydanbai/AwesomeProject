/*
 * @Author: your name
 * @Date: 2021-08-09 17:18:12
 * @LastEditTime: 2021-08-09 17:55:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AwesomeProject\src\views\login\LoginPage.js
 */
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, InputItem, List} from 'antd-mobile-rn';
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
});
export default class LoginPage extends Component {
  static navigationOptions = {
    headerTitle: '登陆',
    cardStack: {
      gesturesEnabled: false,
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={styles.containerStyle}>
        <List style={{marginTop: 20}}>
          <InputItem
            placeholder={'用户名'}
            onChange={value => {
              this.userName = value;
            }}></InputItem>
          <InputItem
            type={'password'}
            placeholder={'密码'}
            onChange={value => {
              this.password = value;
            }}></InputItem>
        </List>
        <Button
          type="primary"
          size={'large'}
          style={{margin: 16}}
          onClick={() => {
            this.toLogin();
          }}>
          登陆
        </Button>
      </View>
    );
  }
  toLogin() {}
}
