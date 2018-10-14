import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ActionButton, Badge, Button, Card, Icon } from 'react-native-material-ui';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Content extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello World!</Text>
        <Text style={styles.instructions}>
          I have no idea what I'm doing. Just editing App.js
        </Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button primary text="Primary" />
        <Button accent text="Accent" />
        <Button raised primary text="Primary" />
        <Button disabled text="Disabled" />
        <Card>
          <Text>This is a text in a card!</Text>
          <Badge text="5" >
            <Icon name="person" />
          </Badge>

        </Card>

        <ActionButton icon="share" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'white',
  },
  welcome: {
    // fontSize: 20,
    // textAlign: 'center',
    // margin: 10,
  },
  instructions: {
    // textAlign: 'center',
    // color: '#333333',
    // marginBottom: 5,
  },
});
