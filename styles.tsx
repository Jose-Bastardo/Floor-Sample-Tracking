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
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },

    checkoutform:{
        width: '50%',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
    },

    CheckBox:{
        marginLeft: '5%',
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
        fontFamily: 'Arial',
    },

    mainview: {
        display: 'flex',
        width: '70%',
        alignContent: 'center',
    },

    checkouttable: {
        backgroundColor: 'white',
        maxHeight: normalize(50),
        width: '70%',
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
        fontFamily: 'Arial',
    },
    samplesbutton:{
        backgroundColor: '#868686',
        width: '20%',
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
        width: '70%'
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
    theadsampleidcheckout: {
        color: '#777777',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        marginLeft: '16.8%',
    },

    theadsampleid: {
        color: '#777777',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        marginLeft: '11%',
    },
    theadname: {
        color: '#9295AB',
        fontWeight: 'bold',
        marginLeft: '13%',
        fontFamily: 'Arial',
    },
    theadtype: {
        color: '#777777',
        fontWeight: 'bold',
        marginLeft: '25%',
        fontFamily: 'Arial',
    },
    theadprice: {
        color: '#777777',
        fontWeight: 'bold',
        marginLeft: '11.5%',
        fontFamily: 'Arial',
    },
    theadstock: {
        color: '#777777',
        fontWeight: 'bold',
        marginLeft: '11.5%',
        fontFamily: 'Arial',
    },
    cellsampleid: {
        fontWeight: 'bold',
        marginLeft: '12%',
        fontFamily: 'Arial',
        width: normalize(10),
    },
    cellname: {
        fontWeight: 'bold',
        marginLeft: '12%',
        fontFamily: 'Arial',
        width: normalize(40),
    },
    celltype: {
        fontWeight: 'bold',
        marginLeft: '10%',
        fontFamily: 'Arial',
        width: normalize(10),
    },
    cellprice: {
        fontWeight: 'bold',
        marginLeft: '10%',
        fontFamily: 'Arial',
        width: normalize(10),
    },
    cellstock: {
        fontWeight: 'bold',
        marginLeft: '10%',
        fontFamily: 'Arial',
        width: normalize(10),
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
