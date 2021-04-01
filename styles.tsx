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
        marginLeft: '20%',
        marginTop: '5%',
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
        width: '90%',
        alignContent: 'center',
    },

    checkouttable: {
        backgroundColor: 'white',
        maxHeight: normalize(50),
        width: '90%',
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
        width: '90%'
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
    headertext:{
        fontWeight: 'bold',
        fontFamily: 'Arial',
        color: '#808080',
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
        position: 'absolute',
        marginLeft: '2%'
    },
    theadname: {
        color: '#777777',
        fontWeight: 'bold',
        position: 'absolute',
        marginLeft: '11%',
        fontFamily: 'Arial',
    },
    theadtype: {
        color: '#777777',
        fontWeight: 'bold',
        position: 'absolute',
        marginLeft: '31%',
        fontFamily: 'Arial',
    },
    theadstatus: {
        color: '#777777',
        fontWeight: 'bold',
        position: 'absolute',
        marginLeft: '43%',
        fontFamily: 'Arial',
    },
    theadborrow_date: {
        color: '#777777',
        fontWeight: 'bold',
        position: 'absolute',
        marginLeft: '54.5%',
        fontFamily: 'Arial',
    },
    theaddue_date: {
        color: '#777777',
        fontWeight: 'bold',
        position: 'absolute',
        marginLeft: '62.5%',
        fontFamily: 'Arial',
    },
    theadfirstname: {
        color: '#777777',
        fontWeight: 'bold',
        position: 'absolute',
        marginLeft: '70%',
        fontFamily: 'Arial',
    },
    theadlastname: {
        color: '#777777',
        fontWeight: 'bold',
        position: 'absolute',
        marginLeft: '80.5%',
        fontFamily: 'Arial',
    },
    cellsampleid: {
        fontWeight: 'bold',
        fontFamily: 'Arial',
        width: normalize(40),
        position: 'absolute',
        marginLeft: '3%',
    },
    cellname: {
        fontWeight: 'bold',
        fontFamily: 'Arial',
        width: normalize(80),
        position: 'absolute',
        marginLeft: normalize(30)
    },
    celltype: {
        fontWeight: 'bold',
        paddingLeft: '3%',
        fontFamily: 'Arial',
        width: normalize(20),
        position: 'absolute',
        marginLeft: '28%'
    },
    cellborrow_date: {
        fontWeight: 'bold',
        paddingLeft: '10%',
        fontFamily: 'Arial',
        width: normalize(50),
        position: 'absolute',
        marginLeft: '45%'
    },
    celldue_date: {
        fontWeight: 'bold',
        paddingLeft: '10%',
        fontFamily: 'Arial',
        width: normalize(50),
        position: 'absolute',
        marginLeft: '53%'
    },
    cellfirstname: {
        fontWeight: 'bold',
        paddingLeft: '10%',
        fontFamily: 'Arial',
        width: normalize(50),
        position: 'absolute',
        marginLeft: '61%'
    },
    celllastname: {
        fontWeight: 'bold',
        paddingLeft: '10%',
        fontFamily: 'Arial',
        width: normalize(50),
        position: 'absolute',
        marginLeft: '71%'
    },
    rowstripe:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FAFAFC',
        minHeight: normalize(10),
        alignItems: 'center',
    },
    rownostripe:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        minHeight: normalize(10),
        alignItems: 'center',
    },
    overdue:{
        display: 'flex',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        width: normalize(20),
        height: normalize(5),
        backgroundColor: 'indianred',
        borderRadius: 10,
        color: 'maroon',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginLeft: '41%'
    },
    good_standing:{
        display: 'flex',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        width: normalize(25),
        height: normalize(5),
        backgroundColor: 'lightgreen',
        borderRadius: 10,
        color: 'darkgreen',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginLeft: '40%'
    },
    chargebutton:{
        position: 'absolute',
        marginLeft: '93%'
    },
    loginmain:{
      width: '55%',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#1d1bb1',
        marginTop: '3%',
        height: normalize(140),
        borderRadius: normalize(10),
    },
    loginarticle:{
        width: '65%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '3%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        height: '90%',
        borderRadius: normalize(10),
    },
    logintitle:{
        fontSize: normalize(10),
        textAlign: 'center',
        marginTop: '12%',
        color: 'black',
    },
    logintext:{
        fontSize: normalize(6),
        textAlign: 'center',
        marginTop: '5%',
        fontWeight: 'bold',
        color: '#777777',
    },
    loginemailinput:{
        fontSize: normalize(6),
    },
    loginpasswordinput:{
        fontSize: normalize(6),
    },
    loginsubmit:{
        marginTop: '8%',
        width: '55%',
    },
    registerbutton:{
        marginTop: '4%',
        width: '55%',
    },
    emailinputcontainer:{
        marginTop: '7%',
        borderWidth: 1,
        borderColor: 'black',
    },
    passwordinputcontainer:{
        marginTop: '3%',
        borderWidth: 1,
        borderColor: 'black',
    },
    ortext:{
      marginTop: '4%',
        fontSize: normalize(4),
        color: '#777777'
    },
    registrationtext:{
        fontSize: normalize(6),
        textAlign: 'center',
        marginTop: '8%',
        fontWeight: 'bold',
        color: '#777777',
    },
    regfirstnamecontainer:{
        marginTop: '7%',
        borderWidth: 1,
        borderColor: 'black',
    },
    reglastnamecontainer:{
        marginTop: '3%',
        borderWidth: 1,
        borderColor: 'black',
    },
    regcompanycontainer:{
        marginTop: '3%',
        borderWidth: 1,
        borderColor: 'black',
    },
    regemailcontainer:{
        marginTop: '3%',
        borderWidth: 1,
        borderColor: 'black',
    },
    regpasswordcontainer:{
        marginTop: '3%',
        borderWidth: 1,
        borderColor: 'black',
    },
    registersubmit:{
        marginTop: '6%',
        width: '55%',
    },
    loginnotificationtext:{
        marginTop: '5%',
        fontSize: normalize(6),
        backgroundColor: 'red',
    },
});

export {styles}
