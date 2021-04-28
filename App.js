import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import params from './src/params'
import Field from './src/components/Field'

export default class App extends Component {
  
  render() {
    return (
      <View style={[style.container, style.textBig]}>
        <Text>App Campo minado Inciado</Text>
        <Text>{params.getRowsAmount()} x {params.getColumnsAmount()}</Text>
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={6} />
        <Field mined />
        <Field mined opened/>
        <Field mined opened exploded/>
        <Field flagged/>
        <Field flagged opened/>

      </View>
    );
  }
};

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textBig:{
    fontSize:52
  }
})

