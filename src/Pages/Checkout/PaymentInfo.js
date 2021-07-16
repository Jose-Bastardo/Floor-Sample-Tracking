import * as React from 'react';
import {Button, Image, Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import {styles} from '../../styles';
import {SearchBar, CheckBox} from 'react-native-elements';
import {sampletablestyles as tablestyle} from './SampleTableStyle';

export default class PaymentInfo extends React.Component{
  constructor(props){
    super(props);
    //this.handlecheckedbox = this.handlecheckedbox.bind(this);

    this.state = {
        search: '',
        cardnumber: null,
        securitycode: null,
        cardname: null,
        cardzipcode: null,
        experationyear: null,
        experationmonth: null,
    };
  }

  render(){

    const { cardnumber } = this.state;
    const { securitycode } = this.state;
    const { cardname } = this.state;
    const { cardzipcode } = this.state;
    const { experationyear } = this.state;
    const { experationmonth } = this.state;

    return(
      <View>
          <TextInput
            onChangeText={() => this.setState({ cardnumber })}
            value={cardnumber}
            placeholder="Card Number"
          />
          <TextInput
            onChangeText={() => this.setState({ securitycode })}
            value={securitycode}
            placeholder="Security Code"
          />
          <TextInput
            onChangeText={() => this.setState({ cardname })}
            value={cardname}
            placeholder="Name on Card"
          />
          <TextInput
            onChangeText={() => this.setState({ experationmonth })}
            value={experationmonth}
            placeholder="MM"
          />
          <TextInput
            onChangeText={() => this.setState({ experationyear })}
            value={experationyear}
            placeholder="YY"
          />
          <TextInput
            onChangeText={() => this.setState({ cardzipcode })}
            value={cardzipcode}
            placeholder="Zip Code"
          />
      </View>
    );
  };
};
