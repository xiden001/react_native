/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {RkButton,RkCard,RkTheme,RkText} from 'react-native-ui-kitten';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
	  RkTheme.setType('RkCard', 'story', {
  img: {
    opacity: 0.7
  },
  header: {
    alignSelf: 'center'
  },
  content:{
    alignSelf:'center'
  }
});

    return (
   <RkCard rkType='story'>
  <Image rkCardImg source={require('./img/cave.jpg')}/>
  <View rkCardHeader>
    <RkText rkType='header'>Once upon a time</RkText>
  </View>
  <View rkCardContent>
    <RkText style={{textAlign:'center'}}>
      One morning, when Gregor Samsa woke from happy dreams,
      he found himself transformed in ...
    </RkText>
  </View>
  <View rkCardFooter>
    <RkButton rkType='small outline'>Learn More</RkButton>
    <RkButton rkType='small'>Read later</RkButton>
  </View>
</RkCard>
    );
  }
}
