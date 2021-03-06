/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import Main from './src/Main';

// eslint-disable-next-line
console.ignoredYellowBox = [
  'Warning: BackAndroid', 
  'Remote debugger', 
  'Warning: Each',
  'Warning: isMounted(...) is deprecated',
]

function CaseBase() {
  return (
    <Main />
  );
}

AppRegistry.registerComponent('CaseBase', () => CaseBase);
