import * as React from 'react';
import {Button, Image, Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import {styles} from '../../styles';
import {SearchBar,} from 'react-native-elements';

export default class ChooseSample extends React.Component{

  render(){
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
                  <View style={styles.theadsampleid}>
                      <TouchableOpacity onPress={() => this.Sort(0)}>
                          <Text style={styles.headertext}>Order ID</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.theadname}>
                      <TouchableOpacity  onPress={() => this.Sort(1)}>
                          <Text style={styles.headertext}>Name</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.theadstatus}>
                      <TouchableOpacity onPress={() => this.Sort(4)}>
                          <Text style={styles.headertext}>Status</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.theadborrow_date}>
                      <TouchableOpacity onPress={() => this.Sort(3)}>
                          <Text style={styles.headertext}>Borrow Date</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.theaddue_date}>
                      <TouchableOpacity onPress={() => this.Sort(4)}>
                          <Text style={styles.headertext}>Due Date</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.theadfirstname}>
                      <TouchableOpacity onPress={() => this.Sort(5)}>
                          <Text style={styles.headertext}>First Name</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.theadlastname}>
                      <TouchableOpacity onPress={() => this.Sort(6)}>
                          <Text style={styles.headertext}>Last Name</Text>
                      </TouchableOpacity>
                  </View>
              </View>
              <ScrollView style={styles.tabledata}>
              
              </ScrollView>
          </View>
      </View>
    );
  };
};
