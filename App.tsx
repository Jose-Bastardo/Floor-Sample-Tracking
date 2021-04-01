import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {CheckBox, Dimensions, Platform, PixelRatio,
    StyleSheet, Text, View, Button, Alert, ViewPropTypes,
    AppRegistry, TouchableOpacity, TextInput} from 'react-native';
import ReactDOM from 'react-dom';
// @ts-ignore
import DropdownMenu from 'react-native-dropdown-menu';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { NavigationContainer,} from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import { withNavigation, } from 'react-navigation';
// @ts-ignore
import { SearchBar,} from 'react-native-elements';
import {styles} from './styles';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen
                    name="Log In"
                    component={login}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Checkout"
                    component={Checkout}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const data = [
        ["21","Old Blue Seas Vynyl Plank", "Vinyl", "3/30/2021", "4/4/2021", "John", "Smith"],
        ["23","Ridgeway Oak Vinyl Plank", "Vinyl", "3/25/2021", "3/30/2021", "Bobby", "Brown"],
        ["45", "Akoya Vinyl Plank", "Vinyl", "3/26/2021", "4/5/2021","Edgar", "Allen Poe"],
        ["32", "Oak Wood Plank", "Wood", "3/20/2021", "3/25/2021","Edward", "Cunningham"],
    ]

export class login extends React.Component{
    state = {
        usernameinput:"",
        passwordinput:"",
    }

    render(){
        const { usernameinput, passwordinput } = this.state;

        // @ts-ignore
        const navigation = this.props.navigation;

        const loginsubmit = () => {
            var username = "admin"
            var password = "password"

            console.log("Function working")
            if(this.state.usernameinput == username && this.state.passwordinput == password){
                console.log("Check Passed")
                navigation.navigate('Home')
            }
        }

        return(
            <View>
                <View style={styles.loginmain}>
                    <View style={styles.loginarticle}>
                        <Text style={styles.logintitle}>Floor Sample Tracking</Text>
                        <Text style={styles.logintext}>Log-in to your account</Text>
                        <View style={styles.userinputcontainer}>
                            <TextInput style={styles.loginuserinput} placeholder={"Username"} value={usernameinput}
                                       onChangeText={(usernameinput) => this.setState({usernameinput})}/>
                        </View>
                        <View style={styles.passwordinputcontainer}>
                            <TextInput style={styles.loginpasswordinput} value={passwordinput} onChangeText={(passwordinput) => this.setState({passwordinput})}
                                       placeholder={"Password"} secureTextEntry={true}/>
                        </View>
                        <View style={styles.loginsubmit}>
                            <Button color='#660066' title="Log In" onPress={() => loginsubmit()}/>
                        </View>
                        <Text style={styles.ortext}>or</Text>
                        <View style={styles.registerbutton}>
                            <Button color='#660066' title="Register" onPress={() => loginsubmit()}/>
                        </View>
                    </View>
                </View>
            </View>
        );
    };
};
export class Home extends React.Component{
    //Render Table
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
            if(search === '' || this.state.tableData[i][0].toLowerCase().includes(search.toLowerCase()) || this.state.tableData[i][1].toLowerCase().includes(search.toLowerCase()) ||
                this.state.tableData[i][2].toLowerCase().includes(search.toLowerCase()) || this.state.tableData[i][5].toLowerCase().includes(search.toLowerCase()) ||
                this.state.tableData[i][6].toLowerCase().includes(search.toLowerCase())){
                this.data.push(this.state.tableData[i])
            }
        }
    }

    //Sort by Sample ID
    updateSampleIDsort = () => {

        this.NameSort = 0
        this.TypeSort = 0

        if(this.SampleIDSort === 0) {
            this.SampleIDSort = 1;
            this.state.tableData.sort(function(a, b){
                var x = a[0].toLowerCase();
                var y = b[0].toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
        else if(this.SampleIDSort === 1){
            this.SampleIDSort = 2;
            this.state.tableData.sort(function(a, b){
                var x = a[0].toLowerCase();
                var y = b[0].toLowerCase();
                if (x < y) {return 1;}
                if (x > y) {return -1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
        else if(this.SampleIDSort === 2){
            this.SampleIDSort = 1;
            this.state.tableData.sort(function(a, b){
                var x = a[0].toLowerCase();
                var y = b[0].toLowerCase();
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
                var x = a[1].toLowerCase();
                var y = b[1].toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
        else if(this.NameSort === 1){
            this.NameSort = 2;
            this.state.tableData.sort(function(a, b){
                var x = a[1].toLowerCase();
                var y = b[1].toLowerCase();
                if (x < y) {return 1;}
                if (x > y) {return -1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
        else if(this.NameSort === 2){
            this.NameSort = 1;
            this.state.tableData.sort(function(a, b){
                var x = a[1].toLowerCase();
                var y = b[1].toLowerCase();
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
                var x = a[2].toLowerCase();
                var y = b[2].toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
        else if(this.TypeSort === 1){
            this.TypeSort = 2;
            this.state.tableData.sort(function(a, b){
                var x = a[2].toLowerCase();
                var y = b[2].toLowerCase();
                if (x < y) {return 1;}
                if (x > y) {return -1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
        else if(this.TypeSort === 2){
            this.TypeSort = 1;
            this.state.tableData.sort(function(a, b){
                var x = a[2].toLowerCase();
                var y = b[2].toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            this.updateSearch(this.state.search);
        }
    }

    render() {
        const { search } = this.state;

        // @ts-ignore
        const navigation = this.props.navigation;

        var table = [];

        var rowstyle;

        var curdate = new Date()
        curdate.setHours(0,0,0,0)

        for (var i = 0; i < this.data.length; i++) {
            if (i % 2 == 0) {
                rowstyle = styles.rownostripe
            } else {
                rowstyle = styles.rowstripe;
            }
            var duedate = new Date(this.data[i][4])

            if(curdate > duedate) {
                table.push(
                    <View key={this.data[i][0]} style={rowstyle}>
                        <Text style={styles.cellsampleid}>{this.data[i][0]}</Text>
                        <Text style={styles.cellname}>{this.data[i][1]}</Text>
                        <Text style={styles.celltype}>{this.data[i][2]}</Text>
                        <Text style={styles.overdue}>OVERDUE</Text>
                        <Text style={styles.cellborrow_date}>{this.data[i][3]}</Text>
                        <Text style={styles.celldue_date}>{this.data[i][4]}</Text>
                        <Text style={styles.cellfirstname}>{this.data[i][5]}</Text>
                        <Text style={styles.celllastname}>{this.data[i][6]}</Text>
                        <View style={styles.chargebutton}>
                            <Button color='#221ECC' title="charge"/>
                        </View>
                    </View>
                )
            }
            else{
                table.push(
                    <View key={this.data[i][0]} style={rowstyle}>
                        <Text style={styles.cellsampleid}>{this.data[i][0]}</Text>
                        <Text style={styles.cellname}>{this.data[i][1]}</Text>
                        <Text style={styles.celltype}>{this.data[i][2]}</Text>
                        <Text style={styles.good_standing}>GOOD STANDING</Text>
                        <Text style={styles.cellborrow_date}>{this.data[i][3]}</Text>
                        <Text style={styles.celldue_date}>{this.data[i][4]}</Text>
                        <Text style={styles.cellfirstname}>{this.data[i][5]}</Text>
                        <Text style={styles.celllastname}>{this.data[i][6]}</Text>
                        <View style={styles.chargebutton}>
                            <Button color='#221ECC' title="charge"/>
                        </View>
                    </View>
                )
            }
        }

        //-----------------------------------------------------------------------------------------------
        //Render App
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
                        <Button color='#221ECC' title="Log Out" onPress={() =>
                            navigation.navigate('Log In')
                        }/>
                    </View>
                </View>
                <View style={styles.mainview}>
                    <View style={styles.filterrow}>
                        <View style={styles.filterbutton}>
                            <SearchBar
                                // @ts-ignore
                                placeholder="Type Here..."
                                onChangeText={this.updateSearch}
                                value={search}
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
                                <TouchableOpacity onPress={this.updateSampleIDsort}>
                                    <Text style={styles.headertext}>Sample ID</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.theadname}>
                                <TouchableOpacity  onPress={this.updateNameSort}>
                                    <Text style={styles.headertext}>Name</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.theadtype}>
                                <TouchableOpacity onPress={this.updateTypeSort}>
                                    <Text style={styles.headertext}>Type</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.theadstatus}>
                                <TouchableOpacity onPress={this.updatePriceSort}>
                                    <Text style={styles.headertext}>Status</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.theadborrow_date}>
                                <TouchableOpacity onPress={this.updateStockSort}>
                                    <Text style={styles.headertext}>Borrow Date</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.theaddue_date}>
                                <TouchableOpacity onPress={this.updateStockSort}>
                                    <Text style={styles.headertext}>Due Date</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.theadfirstname}>
                                <TouchableOpacity onPress={this.updateStockSort}>
                                    <Text style={styles.headertext}>First Name</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.theadlastname}>
                                <TouchableOpacity onPress={this.updateStockSort}>
                                    <Text style={styles.headertext}>Last Name</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {table}
                    </View>
                </View>
            </View>
        );
    };
};

//---------------------------------------------------------------------------------------------------------------------------------
// @ts-ignore
class Checkout extends React.Component{
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

export default MyStack
