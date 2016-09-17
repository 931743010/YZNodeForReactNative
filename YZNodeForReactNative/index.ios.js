/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS
} from 'react-native';

import HomeView from './Home/HomeView';

class CNode extends Component {
  render() {
    return (
      <NavigatorIOS
          style={styles.container}
          tintColor='#FF6600'
          initialRoute={{
            title: 'YZMobileTalks',
            component: HomeView
          }} />
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7C00'
  }
});


AppRegistry.registerComponent('YZNodeForReactNative', () => CNode);
