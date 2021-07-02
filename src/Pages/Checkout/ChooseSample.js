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
        stateSamples: [],
    };
  }
  async componentDidMount() {

    var data = []
    var samples = []

    await fetch('http://192.168.1.195:3000/Samples', {
        mode: 'cors',
    })
        .then(response => response.json())
        .then(samplelist => {
          samplelist.forEach( sample => {
            const sampleid = sample["_id"]
            const samplename = sample["name"]
            const sampletype = sample["type"]
            const price = sample["price"]
            const stock = sample["stock"]
              data.push({Sam_ID: sampleid, Sam_Name: samplename, Sam_Type: sampletype, Sam_Price: price, Sam_Stock: stock})
              samples.push({id: sampleid, isChecked: false})
            })
          })
        .catch((error) => {
            console.error(error);
        });

        this.setState({
          tableData: data,
          stateSamples: samples
        })
    }

    handlecheckedbox = (id) => {
      let samples = this.state.stateSamples;

      samples.forEach(sample => {
        if(sample["id"] == id){
          sample["isChecked"] = !sample["isChecked"]
        }
      })

      this.setState({
        stateSamples: samples,
      })
    }

  render(){
    var table =[];
    var rowstyle;

    for (var i = 0; i < this.state.tableData.length; i++) {
        if (i % 2 == 0) {
            rowstyle = styles.rownostripe
        } else {
            rowstyle = styles.rowstripe;
        }

        let index = i

        table.push(
            <View key={this.state.tableData[i]["Sam_ID"]} style={rowstyle}>
              <View style={tablestyle.checkbox}>
                <CheckBox
                checked={this.state.stateSamples[index]["isChecked"]}
                onPress={() => this.handlecheckedbox(this.state.tableData[index]["Sam_ID"])}/>
              </View>
                <Text style={tablestyle.cellsampleid}>{this.state.tableData[i]["Sam_ID"]}</Text>
                <Text style={tablestyle.cellname}>{this.state.tableData[i]["Sam_Name"]}</Text>
                <Text style={tablestyle.celltype}>{this.state.tableData[i]["Sam_Type"]}</Text>
                <Text style={tablestyle.cellborrow_date}>${this.state.tableData[i]["Sam_Price"]}</Text>
                <Text style={tablestyle.celldue_date}>{this.state.tableData[i]["Sam_Stock"]}</Text>
            </View>
        )
    }

    return(
      <View style={styles.tableview}>
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
          <View style={styles.nextbutton}>
            <Button color="#245760" title="next"/>
          </View>
      </View>
    );
  };
};
