import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';
import params from './src/params'
import Field from './src/components/Field'


export default class App extends Component {
  
  render() {
    return (
      <SafeAreaView style={[style.container, style.textBig]}>
        <Text>App Campo minado Inciado</Text>
        <Text>{params.getRowsAmount()} x {params.getColumnsAmount()}</Text>
        <Field />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={6} />
        <Field mined />
      </SafeAreaView>
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

