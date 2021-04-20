import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import params from './../params'

export default props => {
    const styleField = [style.field]
    // Outros styles do campo minado aqui
    if(styleField.length === 1) styleField.push(style.regular)

    return (
        <View style={styleField} >

        </View>
    )
}

const style = StyleSheet.create({
    field: {
        height:params.blockSize,
        width:params.blockSize,
        borderWidth:params.blockSize
    },
    regular:{
        backgroundColor:'#999',
        borderLeftColor:'#CCC',
        borderTopColor:'#CCC',
        borderRightColor:'#333',
        borderBottomColor:'#333',
    }
})
