import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import params from '../params'
import Mine from './Mine'
import Flag from './Flag'

const style = StyleSheet.create({
    field: {
        height:params.blockSize,
        width:params.blockSize,
        borderWidth:params.borderSize,
        fontSize:params.fontSize,
    },
    regular:{
        backgroundColor:'#808080',
        alignItems:'center',
        justifyContent:'center',
    },
    opened:{
        backgroundColor:'#C0C0C0',
        alignItems:'center',
        justifyContent:'center',
    },
    exploded:{
        backgroundColor:'red',
        borderColor:'black',
    }
})

export default (props) => {
    const { mined, opened, nearMines, exploded, flagged } = props
    const styleField = [style.field]

    // Outros styles do campo minado aqui
    if(opened) styleField.push(style.opened)
    if(exploded) styleField.push(style.exploded)
    if(flagged) styleField.push(style.flagged, style.regular)
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
            <View style={[styleField]} >
                <Text style={[{color:cor,fontWeight:'bold'}]}> {nearMines} </Text>
            </View>
        )
    }
    else if(mined && opened){
        return(
            <View style={[styleField]} >
                <Mine></Mine>
            </View>
        )
    }   
    else if(flagged && !opened){
        return(
            <View style={[styleField]} >
                <Flag></Flag>
            </View>
        )
    }
    else{
        return(
            <View style={[styleField]} >

            </View>
        )
    }
}
