import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';

import params from '../params'

const style = StyleSheet.create({
    field: {
        height:params.blockSize,
        width:params.blockSize,
        borderWidth:params.borderSize,
        fontSize:params.fontSize,
    },
    regular:{
        backgroundColor:'#778899',
        alignItems:'center',
        justifyContent:'center',
    },
    opened:{
        backgroundColor:'#90EE90',
        alignItems:'center',
        justifyContent:'center',
    },
    mined:{
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
    }
})

export default (props) => {
    const { mined, opened, nearMines  } = props
    const styleField = [style.field]

    // Outros styles do campo minado aqui
    if(opened) styleField.push(style.opened)
    if(mined) styleField.push(style.mined)
    if(styleField.length === 1) styleField.push(style.regular)

    let cor = ''

    if(nearMines > 0){
        if(nearMines == 1) {
            cor = '#000000' 
        }
        else if(nearMines == 2) {
            cor = '#000080'
        }
        else if(nearMines > 2 && nearMines < 6) {
            cor = '#8B008B'
        }
        else if(nearMines >= 6) {
            cor = '#FF0000'
        }
    }

    if(!mined && opened && nearMines > 0){
        return(
            <SafeAreaView style={[styleField]} >
                <Text style={[{color:cor}]}> {nearMines} </Text>
            </SafeAreaView>
        )
    }else{
        return(
            <SafeAreaView style={[styleField]} >
            </SafeAreaView>
        )
    }
}
