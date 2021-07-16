import * as React from 'react';
import {Button, Image, Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import {styles} from '../../styles';
import {SearchBar,} from 'react-native-elements';
import ChooseSample from './ChooseSample.js';
import ChooseCustomer from './ChooseCustomer.js';
import PaymentInfo from './PaymentInfo.js';

// @ts-ignore
export default class Checkout extends React.Component{
  constructor(props){
    super(props);
    this.nextbutton = this.nextbutton.bind(this);
    this.state = {
      table: <ChooseSample/>,
      tableid: 0,
      chosensamples: [],
      customer: [],
    }
  }

  nextbutton = () =>{
    switch (this.state.tableid) {
      case 0:
        this.setState({
          table: <ChooseCustomer/>,
          tableid: 1
        })
        break;
      case 1:
        this.setState({
          table: <PaymentInfo/>,
          tableid: 2,
        })
        break;
      case 2:
        this.setState({
          table: <ChooseSample/>,
          tableid: 0,
        })
        break;
      default:

    }
  }
    render() {
      // @ts-ignore
      const navigation = this.props.navigation;
        return (
          <View style={styles.body}>
              <View style={styles.nav}>
                  <View style={styles.navbuttons}>
                      <Button color='#245760' title="Samples" onPress={() =>
                          navigation.navigate('Home')
                      }/>
                      <Button color='#245760' title="Checkout" onPress={() =>
                          navigation.navigate('Checkout')
                      }/>
                      <Button color='#245760' title="Log Out" onPress={() =>
                          navigation.navigate('Log In')
                      }/>
                  </View>
              </View>
              <View style={styles.mainbody}>
                  <View style={styles.header}>
                      <Image style={styles.monochromelogo} source={require('../../assets/Logo.png')}/>
                  </View>
                  <View style={styles.homemain}>
                    <View style={styles.tableview}>
                      {this.state.table}
                      <View style={styles.nextbutton}>
                        <Button color="#245760" title="next" onPress={this.nextbutton}/>
                      </View>
                    </View>
                  </View>
              </View>
          </View>
        )
    }
};
