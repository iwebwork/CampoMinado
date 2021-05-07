import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import params from './src/params'
import {createMinedBoard} from './src/functions'

import MineField from './src/components/MineField'


export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return {
      board: createMinedBoard(rows, cols, this.minesAmount())
    }

  }

  render() {
    return (
      <View style={[style.container]}>
        <Text style={style.title}> Iniciando o mines!!</Text>
        <Text style={style.title}>
          {params.getColumnsAmount()} X {params.getRowsAmount()}
        </Text>
        <View style={style.board}>
          <MineField board={this.state.board}></MineField>
        </View>
      </View>
    );
  }
};

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end',
  },
  board:{
    alignItems: 'center',
    backgroundColor:'#AAA'
  },
  title:{
    justifyContent:'flex-start',
    textAlign:'center',
  }
})

