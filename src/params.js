import { Dimensions } from 'react-native'


const params = {
    blockSize: 40,
    borderSize:3,
    fontSize:38,
    headerRatio:0.15, // Representa o tamanho do painel superior na tela
    difficultLevel:0.1, // Nivel de dificultade (0.1 = Facil, 0.2 = Medio, 0.3 = Dificil)
    getColumnsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },

    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        const boardHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }

}

export default params
