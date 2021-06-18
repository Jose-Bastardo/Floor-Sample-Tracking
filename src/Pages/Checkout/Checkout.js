import * as React from 'react';
import {Button, Image, Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import {styles} from '../../styles';
import {SearchBar,} from 'react-native-elements';
import ChooseSample from './ChooseSample.js';

// @ts-ignore
export default class Checkout extends React.Component{

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
                      <ChooseSample/>
                  </View>
              </View>
          </View>
        )
    }
};
