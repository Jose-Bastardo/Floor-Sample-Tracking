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
        backgroundColor: '#29C785',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        height: normalize(150),
        maxHeight: normalize(150),
        flexDirection: 'row',
    },

    mainbody: {
        height: '100%',
        width: '91%',
    },

    header: {
        height: '20% ',
        width: '100%',
        display: 'flex',
        alignContent: 'center',
    },

    monochromelogo: {
        marginTop: '1%',
        height: '100%',
        width: '35%',
    },

    homemain: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: '90%',
        paddingTop: '1%',
    },

    nav:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '8%',
        height: '95%',
        marginLeft: '1%',
        backgroundColor: '#245760',
        borderRadius: 20,
    },
    navbuttons:{
        display: 'flex',
        flexDirection: 'column',
        Width: '60%',
        height: '70%',
        justifyContent: 'space-evenly',
        justifyItems: 'space_between',
    },

    searchbarrow: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: '10%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
    },
    searchbarview: {
        width: '40%',
        marginLeft: '10%',
        borderWidth: 0,
        borderColor: 'black',
    },

    searchbarcontainer:{
        backgroundColor: 'white',
        borderWidth: 0,
        borderColor: 'blue',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    },
    searchbarinputcontainer:{
        backgroundColor: 'lightgrey',
        borderWidth: 0,
        borderColor: 'red',
    },
    searchbarinput: {
        color: 'grey',
        fontFamily: 'Arial',
        borderWidth: 0,
        borderColor: 'green',
    },

    tableview: {
        display: 'flex',
        width: '97%',
        alignContent: 'center',
        borderRadius: 20,
        paddingBottom: '4%',
        backgroundColor: 'white',
        height: '85%',
        paddingTop: '.4%',
    },

    checkouttable: {
        backgroundColor: 'white',
        maxHeight: normalize(50),
        width: '90%',
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

    title: {
        fontSize: normalize(10),
        fontFamily: 'Arial',
    },

    table: {
        borderColor: 'black',
        display: 'flex',
        flexDirection: 'column',
    },

    tabledata: {
      maxHeight: normalize(90),
    },

    thead:{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#F4F4FB',
        minHeight: normalize(10),
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
        paddingLeft: '16.8%',
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
    loginbody:{
        backgroundColor: '#245760',
        height: '100%'
    },
    loginarticle:{
        width: '35%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '2%',
        backgroundColor: '#29C785',
        display: 'flex',
        alignItems: 'center',
        height: '90%',
    },
    logo:{
        marginTop: '17%',
        width: '100%',
        height: '15%',
    },
    logintext:{
        fontSize: normalize(5),
        textAlign: 'center',
        marginTop: '8%',
        fontWeight: 'bold',
        color: 'white',
    },
    loginemailinput:{
        fontSize: normalize(5),
    },
    loginpasswordinput:{
        fontSize: normalize(5),
    },
    loginsubmit:{
        marginTop: '14%',
        width: '45%',
    },
    registerbutton:{
        marginTop: '6%',
        width: '45%',
    },
    emailinputcontainer:{
        marginTop: '15%',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        width: '55%'
    },
    passwordinputcontainer:{
        marginTop: '5%',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        width: '55%'
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
