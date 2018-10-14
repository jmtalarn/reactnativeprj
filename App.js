import React, { Component } from 'react';
import { Navigator, NativeModules } from 'react-native';

import Content from './src/Content'
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';

// you can set your style right here, it'll be propagated to application
const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

export default class App extends Component<Props> {
  render() {
    return (
      <ThemeContext.Provider value={getTheme(uiTheme)}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}
