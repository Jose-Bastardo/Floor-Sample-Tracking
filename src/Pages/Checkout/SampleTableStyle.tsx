import {  Dimensions, Platform, PixelRatio, StyleSheet, Text, View, Button, Alert, ViewPropTypes, AppRegistry, TouchableOpacity} from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size: number) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

export const sampletablestyles = StyleSheet.create({

    body: {
        backgroundColor: '#29C785',
        height: "100vh",
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    theadsampleid: {
        color: '#777777',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        position: 'absolute',
        marginLeft: '10%'
    },
    theadname: {
        color: '#777777',
        fontWeight: 'bold',
        position: 'absolute',
        marginLeft: "30%",
        fontFamily: 'Arial',
    },
    theadstatus: {
        color: '#777777',
        fontWeight: 'bold',
        position: 'absolute',
        marginLeft: '51%',
        fontFamily: 'Arial',
    },
    theadborrow_date: {
        color: '#777777',
        fontWeight: 'bold',
        position: 'absolute',
        marginLeft: '62.5%',
        fontFamily: 'Arial',
    },
    theaddue_date: {
        color: '#777777',
        fontWeight: 'bold',
        position: 'absolute',
        marginLeft: '70.5%',
        fontFamily: 'Arial',
    },
    cellsampleid: {
        fontWeight: 'bold',
        fontFamily: 'Arial',
        width: normalize(40),
        position: 'absolute',
        marginLeft: '10%',
    },
    cellname: {
        fontWeight: 'bold',
        fontFamily: 'Arial',
        width: normalize(80),
        position: 'absolute',
        marginLeft: '30%'
    },
    celltype: {
        fontWeight: 'bold',
        paddingLeft: '10%',
        fontFamily: 'Arial',
        width: normalize(50),
        position: 'absolute',
        marginLeft: '41%'
    },
    cellborrow_date: {
        fontWeight: 'bold',
        paddingLeft: '10%',
        fontFamily: 'Arial',
        width: normalize(50),
        position: 'absolute',
        marginLeft: '53%'
    },
    celldue_date: {
        fontWeight: 'bold',
        paddingLeft: '10%',
        fontFamily: 'Arial',
        width: normalize(50),
        position: 'absolute',
        marginLeft: '61%'
    },
    checkbox: {
      position: 'absolute',
      marginLeft: '2%',
    }
});
