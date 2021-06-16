import * as React from 'react';
import {Button, Image, Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import {styles} from '../styles';
import {SearchBar,} from 'react-native-elements';

// @ts-ignore
export default class Checkout extends React.Component{
/*
    state = {
        search:"",
        tableData: data,
    }

    data = this.state.tableData;

    SampleIDSort = 1
    NameSort = 0
    TypeSort = 0
    PriceSort = 0
    StockSort = 0

    // @ts-ignore
    updateSearch = search => {
        this.setState({ search });
        this.data = [];
        // update tableview data
        for(var i = 0; i < this.state.tableData.length; i++) {
            if(search === '' || this.state.tableData[i]["sampleid"].toLowerCase().includes(search.toLowerCase()) || this.state.tableData[i]["Name"].toLowerCase().includes(search.toLowerCase()) ||
                this.state.tableData[i]["Type"].toLowerCase().includes(search.toLowerCase()) || this.state.tableData[i]["Price"].toLowerCase().includes(search.toLowerCase()) ||
                this.state.tableData[i]["Stock"].toLowerCase().includes(search.toLowerCase())){
                this.data.push(this.state.tableData[i])
            }
        }
    }

    //Sort by Sample ID
    updateSampleIDsort = () => {

        this.NameSort = 0
        this.TypeSort = 0
        this.PriceSort = 0
        this.StockSort = 0

        if(this.SampleIDSort === 0) {
            this.SampleIDSort = 1;
            this.state.tableData.sort(function(a, b){
                var x = a.sampleid.toLowerCase();
                var y = b.sampleid.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
        else if(this.SampleIDSort === 1){
            this.SampleIDSort = 2;
            this.state.tableData.sort(function(a, b){
                var x = a.sampleid.toLowerCase();
                var y = b.sampleid.toLowerCase();
                if (x < y) {return 1;}
                if (x > y) {return -1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
        else if(this.SampleIDSort === 2){
            this.SampleIDSort = 1;
            this.state.tableData.sort(function(a, b){
                var x = a.sampleid.toLowerCase();
                var y = b.sampleid.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
    }

    updateNameSort = () => {

        this.SampleIDSort = 0
        this.TypeSort = 0
        this.PriceSort = 0
        this.StockSort = 0

        if(this.NameSort === 0) {
            this.NameSort = 1;
            this.state.tableData.sort(function(a, b){
                var x = a.Name.toLowerCase();
                var y = b.Name.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
        else if(this.NameSort === 1){
            this.NameSort = 2;
            this.state.tableData.sort(function(a, b){
                var x = a.Name.toLowerCase();
                var y = b.Name.toLowerCase();
                if (x < y) {return 1;}
                if (x > y) {return -1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
        else if(this.NameSort === 2){
            this.NameSort = 1;
            this.state.tableData.sort(function(a, b){
                var x = a.Name.toLowerCase();
                var y = b.Name.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
    }

    updateTypeSort = () => {

        this.SampleIDSort = 0
        this.NameSort = 0
        this.PriceSort = 0
        this.StockSort = 0

        if(this.TypeSort === 0) {
            this.TypeSort = 1;
            this.state.tableData.sort(function(a, b){
                var x = a.Type.toLowerCase();
                var y = b.Type.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
        else if(this.TypeSort === 1){
            this.TypeSort = 2;
            this.state.tableData.sort(function(a, b){
                var x = a.Type.toLowerCase();
                var y = b.Type.toLowerCase();
                if (x < y) {return 1;}
                if (x > y) {return -1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
        else if(this.TypeSort === 2){
            this.TypeSort = 1;
            this.state.tableData.sort(function(a, b){
                var x = a.Type.toLowerCase();
                var y = b.Type.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
    }

    updatePriceSort = () => {

        this.SampleIDSort = 0
        this.NameSort = 0
        this.TypeSort = 0
        this.StockSort = 0

        if(this.PriceSort === 0) {
            this.PriceSort = 1;
            this.state.tableData.sort(function(a, b){
                var x = a.Price.toLowerCase();
                var y = b.Price.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
        else if(this.PriceSort === 1){
            this.PriceSort = 2;
            this.state.tableData.sort(function(a, b){
                var x = a.Price.toLowerCase();
                var y = b.Price.toLowerCase();
                if (x < y) {return 1;}
                if (x > y) {return -1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
        else if(this.PriceSort === 2){
            this.PriceSort = 1;
            this.state.tableData.sort(function(a, b){
                var x = a.Price.toLowerCase();
                var y = b.Price.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
    }

    updateStockSort = () => {

        this.SampleIDSort = 0
        this.NameSort = 0
        this.TypeSort = 0
        this.PriceSort = 0

        if(this.StockSort === 0) {
            this.StockSort = 1;
            this.state.tableData.sort(function(a, b){
                var x = a.Stock.toLowerCase();
                var y = b.Stock.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
        else if(this.StockSort === 1){
            this.StockSort = 2;
            this.state.tableData.sort(function(a, b){
                var x = a.Stock.toLowerCase();
                var y = b.Stock.toLowerCase();
                if (x < y) {return 1;}
                if (x > y) {return -1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
        else if(this.StockSort === 2){
            this.StockSort = 1;
            this.state.tableData.sort(function(a, b){
                var x = a.Stock.toLowerCase();
                var y = b.Stock.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            checkedItems: new Map(),
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    }*/

    render() {
        /*const { search } = this.state;



        // @ts-ignore
        const navigation = this.props.navigation;

        var table = [];

        var rowstyle;

        for (var i = 0; i < this.data.length; i++) {
            if (i % 2 == 0) {
                rowstyle = styles.rownostripe
            } else {
                rowstyle = styles.rowstripe;
            }
            table.push(
                <View key={this.data[i]["sampleid"]} style={rowstyle}>
                    {/*checkboxes.map(item => (
                    <label key={item.key}>
                        {item.name}
                        <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                    </label>
                    ))}
                    <CheckBox style={styles.CheckBox}/>
                    <Text style={styles.cellsampleid}>{this.data[i]["sampleid"]}</Text>
                    <Text style={styles.cellname}>{this.data[i]["Name"]}</Text>
                    <Text style={styles.celltype}>{this.data[i]["Type"]}</Text>
                    <Text style={styles.cellprice}>{this.data[i]["Price"]}</Text>
                    <Text style={styles.cellstock}>{this.data[i]["Stock"]}</Text>
                </View>
            )
        }*/



        //-------------------------------------------------------------------------------------------------
        return (
            <View style={styles.body}>
                <View style={styles.header}>
                    <Text style={styles.title}>Floor Sample Tracking</Text>
                </View>
                <View style={styles.nav}>
                    <View style={styles.navbuttons}>
                        <Button color='#221ECC' title="Samples" onPress={() =>
                            navigation.navigate('Home')
                        }/>
                        <Button color='#221ECC' title="Checkout" onPress={() =>
                            navigation.navigate('Checkout')
                        }/>
                    </View>
                </View>
                <View style={styles.checkouttable}>
                    <View style={styles.filterrow}>
                        <View style={styles.filterbutton}>
                            <SearchBar
                                // @ts-ignore
                                placeholder="Type Here..."
                                onChangeText={this.updateSearch}
                                inputContainerStyle={styles.searchbarinputcontainer}
                                value={search}
                                containerStyle={styles.searchbarcontainer}
                                inputStyle={styles.searchbarinput}
                                round={'True'}
                            />
                        </View>
                    </View>
                    <View style={styles.table}>
                        <View style={styles.thead}>
                            <TouchableOpacity style={styles.theadsampleidcheckout} onPress={this.updateSampleIDsort}>
                                <Text>Sample ID</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.theadname} onPress={this.updateNameSort}>
                                <Text>Name</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.theadtype} onPress={this.updateTypeSort}>
                                <Text>Type</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.theadstatus} onPress={this.updatePriceSort}>
                                <Text>Status</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.theadborrow_date} onPress={this.updateStockSort}>
                                <Text>Borrow Date</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.theaddue_date} onPress={this.updateStockSort}>
                                <Text>Due Date</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.theadfirstname} onPress={this.updateStockSort}>
                                <Text>First Name</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.theadlastname} onPress={this.updateStockSort}>
                                <Text>Last Name</Text>
                            </TouchableOpacity>
                        </View>
                        {table}
                    </View>
                    <View style={styles.checkoutform}>
                        <TextInput placeholder={'First Name'}/>
                        <TextInput placeholder={'Last Name'}/>
                    </View>
                </View>
            </View>
        )
    }
};
