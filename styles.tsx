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

const styles = StyleSheet.create({

    body: {
        backgroundColor: 'white',
    },

    searchbarcontainer:{
        backgroundColor: 'white',
        borderWidth: 0,
    },
    searchbarinputcontainer:{
        backgroundColor: 'white',
        borderWidth: normalize(.5),
    },
    searchbarinput: {
        color: 'grey',
    },

    mainview: {
        backgroundColor: 'white',
        marginLeft: normalize(30),
        marginRight: normalize(30),
    },

    checkouttable: {
        backgroundColor: 'white',
        maxWidth: normalize(50),
        marginLeft: normalize(30),
        marginRight: normalize(30),
    },


    header: {
        display: 'flex',
        height: normalize(15),
        alignContent: 'center',
        backgroundColor: 'white',
        marginLeft: normalize(30),
        marginRight: normalize(30),
    },
    title: {
        fontSize: normalize(10),
    },
    samplesbutton:{
        backgroundColor: '#868686',
    },
    checkoutbutton:{
        backgroundColor: '#B8B8B8',
    },
    nav:{
        display: 'flex',
        minHeight: normalize(12),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#F4F5FC',
        marginLeft: normalize(30),
        marginRight: normalize(30),
    },
    navbuttons:{
        minHeight: normalize(8),
        display: 'flex',
        flexDirection: 'row',
        minWidth: '100%',
        justifyContent: 'space-evenly',
    },
    filterrow: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: normalize(12),
        alignItems: 'center',
    },
    filterbutton: {
        width: normalize(100),
        marginLeft: normalize(25),
        minHeight: normalize(5),
    },
    table: {
        borderColor: 'black',

    },
    thead:{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#F4F4FB',
        minHeight: normalize(8),
        alignItems: 'center',
    },
    theadsampleid: {
        color: '#777777',
        fontWeight: 'bold',
        //marginLeft: normalize(28),
    },
    theadname: {
        color: '#9295AB',
        fontWeight: 'bold',
        paddingLeft: normalize(20),
    },
    theadtype: {
        color: '#777777',
        fontWeight: 'bold',
        //marginLeft: normalize(147),
    },
    theadprice: {
        color: '#777777',
        fontWeight: 'bold',
        marginLeft: normalize(187),
    },
    theadstock: {
        color: '#777777',
        fontWeight: 'bold',
        marginLeft: normalize(226),
    },
    cellsampleid: {
        //fontWeight: 'bold',
        marginLeft: normalize(10),
        minWidth: normalize(5),
    },
    cellname: {
        fontWeight: 'bold',
        marginLeft: normalize(40),
        minWidth: normalize(40),
    },
    celltype: {
        fontWeight: 'bold',
        marginLeft: normalize(40),
    },
    cellprice: {
        fontWeight: 'bold',
        marginLeft: normalize(40),
    },
    cellstock: {
        fontWeight: 'bold',
        marginLeft: normalize(40),
    },
    rowstripe:{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#FAFAFC',
        minHeight: normalize(10),
        alignItems: 'center',
    },
    rownostripe:{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#FFFFFF',
        minHeight: normalize(10),
        alignItems: 'center',
    },
});

export {styles}
