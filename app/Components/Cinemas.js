/**
 * Created By KonishiLee
 */
'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Area from './Area';
import styles from '../Styles/Main';
import Global from '../Styles/Global';

class Cinemas extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: '周边院线',
          component: Area
        }}
        shadowHidden={true}
        barTintColor={Global.barBgColor}
        titleTextColor="rgba(255, 255, 255, 0.8)"
        tintColor="rgba(255, 255, 255, 0.8)"
        translucent={true}
      />
    );
  }
}

export { Cinemas as default };
