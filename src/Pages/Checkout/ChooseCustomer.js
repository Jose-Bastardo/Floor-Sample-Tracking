import * as React from 'react';
import {Button, Image, Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import {styles} from '../../styles';
import {SearchBar, CheckBox} from 'react-native-elements';
import {sampletablestyles as tablestyle} from './SampleTableStyle';

export default class ChooseSample extends React.Component{
  constructor(props){
    super(props);
    this.handlecheckedbox = this.handlecheckedbox.bind(this);
    this.state = {
        search: '',
        tableData: [],
        stateCustomers: [],
    };
  }
  async componentDidMount() {

    var data = []
    var customers = []

    await fetch('http://localhost:5000/api/customers', {
        mode: 'cors',
    })
        .then(response => response.json())
        .then(customerlist => {
          customerlist.forEach( customer => {
            const customerid = customer["_id"]
            const firstname = customer["first_name"]
            const lastname = customer["last_name"]
            const email = customer["email"]
            const phoneNumber = customer["Phone_Number"]
              data.push({Cus_ID: customerid, First_Name: firstname, Last_Name: lastname, Email: email, Phone_Number: phoneNumber})
              customers.push({id: customerid, isChecked: false})
            })
          })
        .catch((error) => {
            console.error(error);
        });

        this.setState({
          tableData: data,
          stateCustomers: customers
        })
    }

    handlecheckedbox = (id) => {
      let customers = this.state.stateCustomers;

      customers.forEach(customer => {
        if(customer["id"] == id){
          customer["isChecked"] = !customer["isChecked"]
        }
      })

      this.setState({
        stateCustomers: customers,
      })
    }

  render(){
    var table = [];
    var rowstyle;

    for (var i = 0; i < this.state.tableData.length; i++) {
        if (i % 2 == 0) {
            rowstyle = styles.rownostripe
        } else {
            rowstyle = styles.rowstripe;
        }

        let index = i

        table.push(
            <View key={this.state.tableData[i]["Cus_ID"]} style={rowstyle}>
              <View style={tablestyle.checkbox}>
                <CheckBox
                checked={this.state.stateCustomers[index]["isChecked"]}
                onPress={() => this.handlecheckedbox(this.state.tableData[index]["Cus_ID"])}/>
              </View>
                <Text style={tablestyle.cellsampleid}>{this.state.tableData[i]["Cus_ID"]}</Text>
                <Text style={tablestyle.cellname}>{this.state.tableData[i]["First_Name"]}</Text>
                <Text style={tablestyle.celltype}>{this.state.tableData[i]["Last_Name"]}</Text>
                <Text style={tablestyle.cellborrow_date}>${this.state.tableData[i]["Email"]}</Text>
                <Text style={tablestyle.celldue_date}>{this.state.tableData[i]["Phone_Number"]}</Text>
            </View>
        )
    }

    return(
      <View>
          <View style={styles.searchbarrow}>
              <View style={styles.searchbarview}>
                  <SearchBar
                      // @ts-ignore
                      placeholder="Type Here..."
                      //onChangeText={this.updateSearch}
                      //value={search}
                      inputContainerStyle={styles.searchbarinputcontainer}
                      containerStyle={styles.searchbarcontainer}
                      inputStyle={styles.searchbarinput}
                      round={'True'}
                  />
              </View>
          </View>
          <View style={styles.table}>
              <View style={styles.thead}>
                  <View style={tablestyle.theadsampleid}>
                      <TouchableOpacity onPress={() => this.Sort(0)}>
                          <Text style={styles.headertext}>Sample ID</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={tablestyle.theadname}>
                      <TouchableOpacity  onPress={() => this.Sort(1)}>
                          <Text style={styles.headertext}>Sample Name</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={tablestyle.theadstatus}>
                      <TouchableOpacity onPress={() => this.Sort(4)}>
                          <Text style={styles.headertext}>Type</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={tablestyle.theadborrow_date}>
                      <TouchableOpacity onPress={() => this.Sort(3)}>
                          <Text style={styles.headertext}>Price</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={tablestyle.theaddue_date}>
                      <TouchableOpacity onPress={() => this.Sort(4)}>
                          <Text style={styles.headertext}>Stock</Text>
                      </TouchableOpacity>
                  </View>
              </View>
              <ScrollView style={styles.tabledata}>
                {table}
              </ScrollView>
          </View>
      </View>
    );
  };
};
