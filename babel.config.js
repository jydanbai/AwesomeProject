/*
 * @Author: your name
 * @Date: 2021-08-09 16:34:37
 * @LastEditTime: 2021-08-09 16:58:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \AwesomeProject\babel.config.js
 */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['import', {libraryName: '@ant-design/react-native'}],
  ],
};
