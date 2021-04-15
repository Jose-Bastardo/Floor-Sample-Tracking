import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, Image, Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import {NavigationContainer,} from '@react-navigation/native';
import {createStackNavigator,} from '@react-navigation/stack';
// @ts-ignore
import {SearchBar,} from 'react-native-elements';
import {styles} from './styles';

const Stack = createStackNavigator();

var data = { Checkout_ID: '', Cus_First: '', Sam_RemoveDate: '', Cus_Last: '', Sam_ReturnDueDate: '', Sam_Type: '' }

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Log In"
                    component={login}
                />
                <Stack.Screen
                    name="Registration"
                    component={registration}
                />

                <Stack.Screen
                    name="Checkout"
                    component={Checkout}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};



export class login extends React.Component{
    state = {
        emailinput:"",
        passwordinput:"",
        notificationtext:"",
    }

    render(){
        const { emailinput, passwordinput, notificationtext } = this.state;

        // @ts-ignore
        const navigation = this.props.navigation;

        const loginsubmit = () => {
            var email = "admin@gmail.com"
            var password = "password"

            if(this.state.emailinput == email && this.state.passwordinput == password){
                navigation.navigate('Home')
            }
            else{
                this.setState({notificationtext: "Incorrect email/password"})
            }
        }



        return(
            <View style={styles.loginbody}>
                    <View style={styles.loginarticle}>
                        <Image style={styles.logo} source={require('./assets/Logo.png')}/>
                        <Text style={styles.loginnotificationtext}>{this.state.notificationtext}</Text>
                        <View style={styles.emailinputcontainer}>
                            <TextInput style={styles.loginemailinput} placeholder={"Email"} value={emailinput}
                                       onChangeText={(emailinput) => this.setState({emailinput})}/>
                        </View>
                        <View style={styles.passwordinputcontainer}>
                            <TextInput style={styles.loginpasswordinput} value={passwordinput} onChangeText={(passwordinput) => this.setState({passwordinput})}
                                       placeholder={"Password"} secureTextEntry={true}/>
                        </View>
                        <View style={styles.loginsubmit}>
                            <Button color='#245760' title="Log In" onPress={() => loginsubmit()}/>
                        </View>
                        <View style={styles.registerbutton}>
                            <Button color='#245760' title="Register" onPress={() => navigation.navigate('Registration')}/>
                        </View>
                    </View>
            </View>
        );
    };
};

export class registration extends React.Component{
    state = {
        emailinput:"",
        passwordinput:"",
        firstnameinput:"",
        lastnameinput:"",
        companyinput:"",

    }

    render(){
        const { emailinput, passwordinput, firstnameinput, lastnameinput, companyinput } = this.state;

        // @ts-ignore
        const navigation = this.props.navigation;

        const register = () => {

                navigation.navigate('Log In')
        }

        return(
            <View>
                <View style={styles.loginmain}>
                    <View style={styles.loginarticle}>
                        <Text style={styles.logintitle}>Floor Sample Tracking</Text>
                        <Text style={styles.registrationtext}>Registration</Text>
                        <View style={styles.regfirstnamecontainer}>
                            <TextInput style={styles.loginemailinput} placeholder={"First Name"} value={firstnameinput}
                                       onChangeText={(firstnameinput) => this.setState({firstnameinput})}/>
                        </View>
                        <View style={styles.reglastnamecontainer}>
                            <TextInput style={styles.loginemailinput} placeholder={"Last Name"} value={lastnameinput}
                                       onChangeText={(lastnameinput) => this.setState({lastnameinput})}/>
                        </View>
                        <View style={styles.regcompanycontainer}>
                            <TextInput style={styles.loginemailinput} placeholder={"Company"} value={companyinput}
                                       onChangeText={(companyinput) => this.setState({companyinput})}/>
                        </View>
                        <View style={styles.regemailcontainer}>
                            <TextInput style={styles.loginemailinput} placeholder={"Email"} value={emailinput}
                                       onChangeText={(emailinput) => this.setState({emailinput})}/>
                        </View>
                        <View style={styles.regpasswordcontainer}>
                            <TextInput style={styles.loginpasswordinput} value={passwordinput} onChangeText={(passwordinput) => this.setState({passwordinput})}
                                       placeholder={"Password"} secureTextEntry={true}/>
                        </View>
                        <View style={styles.registersubmit}>
                            <Button color='#221ECC' title="Submit" onPress={() => register()}/>
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
        search: '',
        tableData: [{Checkout_ID: '', Sam_Type: '', Sam_RemoveDate: '', Sam_ReturnDueDate: '', Cus_First: '', Cus_Last: ''}]
    };

    data = this.state.tableData;

    // @ts-ignore
    setdata = query => {
        this.setState({
            tableData: query
        });
    };

    test() {

        fetch('http://192.168.1.195:3000/samples', {
            mode: 'cors',
        })
            .then(response => response.json())
            .then(query => this.setState({
                tableData: query
            }))
            .catch((error) => {
                console.error(error);
            });
    }

    orderIDSort = 1
    NameSort = 0
    TypeSort = 0
    borrowdateSort = 0
    duedateSort = 0
    firstnameSort = 0
    lastnameSort = 0

    // @ts-ignore
    updateSearch = search => {
        this.setState({ search });
        this.data = [];
        // update tableview data
        for(var i = 0; i < this.state.tableData.length; i++) {
            var name = this.state.tableData[i].Cus_First + " " + this.state.tableData[i].Cus_Last
            if(search === '' || this.state.tableData[i].Checkout_ID == search.toLowerCase() || this.state.tableData[i].Sam_Type.toLowerCase().includes(search.toLowerCase()) ||
                this.state.tableData[i].Sam_RemoveDate.toLowerCase().includes(search.toLowerCase()) || this.state.tableData[i].Sam_ReturnDueDate.toLowerCase().includes(search.toLowerCase()) ||
                this.state.tableData[i].Cus_First.toLowerCase().includes(search.toLowerCase()) ||
                this.state.tableData[i].Cus_Last.toLowerCase().includes(search.toLowerCase()) || name.toLowerCase().includes(search.toLowerCase())){
                this.data.push(this.state.tableData[i])
                this.setState({
                    tableData: this.data,
                })
            };
        }
    }

    //Sort by Sample ID
    Sort = (sorttype: number) => {

        switch (sorttype) {
            case 0:
                this.NameSort = 0
                this.TypeSort = 0
                this.borrowdateSort = 0
                this.duedateSort = 0
                this.firstnameSort = 0
                this.lastnameSort = 0

                if (this.orderIDSort === 0) {
                    this.orderIDSort = 1;
                    this.state.tableData.sort(function (a, b) {
                        var x = a.Checkout_ID;
                        var y = b.Checkout_ID;
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    });
                } else if (this.orderIDSort === 1) {
                    this.orderIDSort = 2;
                    this.state.tableData.sort(function (a, b) {
                        var x = a.Checkout_ID;
                        var y = b.Checkout_ID;
                        if (x < y) {
                            return 1;
                        }
                        if (x > y) {
                            return -1;
                        }
                        return 0;
                    });
                } else if (this.orderIDSort === 2) {
                    this.orderIDSort = 1;
                    this.state.tableData.sort(function (a, b) {
                        var x = a.Checkout_ID;
                        var y = b.Checkout_ID;
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    });
                }
                this.updateSearch(this.state.search);
                break;
            case 1:
                this.orderIDSort = 0
                this.TypeSort = 0
                this.borrowdateSort = 0
                this.duedateSort = 0
                this.firstnameSort = 0
                this.lastnameSort = 0

                if (this.NameSort === 0) {
                    this.NameSort = 1;
                    this.state.tableData.sort(function (a, b) {
                        var x = a.Sam_Type.toLowerCase();
                        var y = b.Sam_Type.toLowerCase();
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    });
                } else if (this.NameSort === 1) {
                    this.NameSort = 2;
                    this.state.tableData.sort(function (a, b) {
                        var x = a.Sam_Type.toLowerCase();
                        var y = b.Sam_Type.toLowerCase();
                        if (x < y) {
                            return 1;
                        }
                        if (x > y) {
                            return -1;
                        }
                        return 0;
                    });

                } else if (this.NameSort === 2) {
                    this.NameSort = 1;
                    this.state.tableData.sort(function (a, b) {
                        var x = a.Sam_Type.toLowerCase();
                        var y = b.Sam_Type.toLowerCase();
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    });
                }
                this.updateSearch(this.state.search);
                break;
            case 2:
                this.orderIDSort = 0
                this.NameSort = 0
                this.borrowdateSort = 0
                this.duedateSort = 0
                this.firstnameSort = 0
                this.lastnameSort = 0
                if (this.TypeSort === 0) {
                    this.TypeSort = 1;
                    this.state.tableData.sort(function (a, b) {
                        var x = a[2].toLowerCase();
                        var y = b[2].toLowerCase();
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    });
                } else if (this.TypeSort === 1) {
                    this.TypeSort = 2;
                    this.state.tableData.sort(function (a, b) {
                        var x = a[2].toLowerCase();
                        var y = b[2].toLowerCase();
                        if (x < y) {
                            return 1;
                        }
                        if (x > y) {
                            return -1;
                        }
                        return 0;
                    });
                } else if (this.TypeSort === 2) {
                    this.TypeSort = 1;
                    this.state.tableData.sort(function (a, b) {
                        var x = a[2].toLowerCase();
                        var y = b[2].toLowerCase();
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    });
                }
                this.updateSearch(this.state.search);
                break;
            case 3:
                this.orderIDSort = 0
                this.NameSort = 0
                this.TypeSort = 0
                this.duedateSort = 0
                this.firstnameSort = 0
                this.lastnameSort = 0
                if (this.borrowdateSort === 0) {
                    this.borrowdateSort = 1;
                    this.state.tableData.sort(function (a, b) {
                        var x = a.Sam_RemoveDate.toLowerCase();
                        var y = b.Sam_RemoveDate.toLowerCase();
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    });
                } else if (this.borrowdateSort === 1) {
                    this.borrowdateSort = 2;
                    this.state.tableData.sort(function (a, b) {
                        var x = a.Sam_RemoveDate.toLowerCase();
                        var y = b.Sam_RemoveDate.toLowerCase();
                        if (x < y) {
                            return 1;
                        }
                        if (x > y) {
                            return -1;
                        }
                        return 0;
                    });
                } else if (this.borrowdateSort === 2) {
                    this.borrowdateSort = 1;
                    this.state.tableData.sort(function (a, b) {
                        var x = a.Sam_RemoveDate.toLowerCase();
                        var y = b.Sam_RemoveDate.toLowerCase();
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    });
                }
                this.updateSearch(this.state.search);
                break;
            case 4:
                this.orderIDSort = 0
                this.NameSort = 0
                this.TypeSort = 0
                this.borrowdateSort = 0
                this.firstnameSort = 0
                this.lastnameSort = 0
                if (this.duedateSort === 0) {
                    this.duedateSort = 1;
                    this.state.tableData.sort(function (a, b) {
                        var x = a.Sam_ReturnDueDate.toLowerCase();
                        var y = b.Sam_ReturnDueDate.toLowerCase();
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    });
                } else if (this.duedateSort === 1) {
                    this.duedateSort = 2;
                    this.state.tableData.sort(function (a, b) {
                        var x = a.Sam_ReturnDueDate.toLowerCase();
                        var y = b.Sam_ReturnDueDate.toLowerCase();
                        if (x < y) {
                            return 1;
                        }
                        if (x > y) {
                            return -1;
                        }
                        return 0;
                    });
                } else if (this.duedateSort === 2) {
                    this.duedateSort = 1;
                    this.state.tableData.sort(function (a, b) {
                        var x = a.Sam_ReturnDueDate.toLowerCase();
                        var y = b.Sam_ReturnDueDate.toLowerCase();
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    });
                }
                this.updateSearch(this.state.search);
                break;
            case 5:
                this.orderIDSort = 0
                this.NameSort = 0
                this.TypeSort = 0
                this.borrowdateSort = 0
                this.duedateSort = 0
                this.lastnameSort = 0
                if (this.firstnameSort === 0) {
                    this.firstnameSort = 1;
                    this.state.tableData.sort(function (a, b) {
                        var x = a.Cus_First.toLowerCase();
                        var y = b.Cus_First.toLowerCase();
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    });
                } else if (this.firstnameSort === 1) {
                    this.firstnameSort = 2;
                    this.state.tableData.sort(function (a, b) {
                        var x = a.Cus_First.toLowerCase();
                        var y = b.Cus_First.toLowerCase();
                        if (x < y) {
                            return 1;
                        }
                        if (x > y) {
                            return -1;
                        }
                        return 0;
                    });
                } else if (this.firstnameSort === 2) {
                    this.firstnameSort = 1;
                    this.state.tableData.sort(function (a, b) {
                        var x = a.Cus_First.toLowerCase();
                        var y = b.Cus_First.toLowerCase();
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    });
                }
                this.updateSearch(this.state.search);
                break;
            case 6:
                this.orderIDSort = 0
                this.NameSort = 0
                this.TypeSort = 0
                this.borrowdateSort = 0
                this.duedateSort = 0
                this.firstnameSort = 0
                if (this.lastnameSort === 0) {
                    this.lastnameSort = 1;
                    this.state.tableData.sort(function (a, b) {
                        var x = a.Cus_Last.toLowerCase();
                        var y = b.Cus_Last.toLowerCase();
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    });
                } else if (this.lastnameSort === 1) {
                    this.lastnameSort = 2;
                    this.state.tableData.sort(function (a, b) {
                        var x = a.Cus_Last.toLowerCase();
                        var y = b.Cus_Last.toLowerCase();
                        if (x < y) {
                            return 1;
                        }
                        if (x > y) {
                            return -1;
                        }
                        return 0;
                    });
                } else if (this.lastnameSort === 2) {
                    this.lastnameSort = 1;
                    this.state.tableData.sort(function (a, b) {
                        var x = a.Cus_Last.toLowerCase();
                        var y = b.Cus_Last.toLowerCase();
                        if (x < y) {
                            return -1;
                        }
                        if (x > y) {
                            return 1;
                        }
                        return 0;
                    });
                }
                this.updateSearch(this.state.search);
                break;
        }
    }

    render() {

        fetch('http://192.168.1.195:3000/samples', {
            mode: 'cors',
        })
            .then(response => response.json())
            .then(query => this.setState({
                tableData: query
            }))
            .catch((error) => {
                console.error(error);
            });
        for(let i = 0; i<this.state.tableData.length; i++){
            let a = this.state.tableData[i].Sam_RemoveDate.split('T')
            this.state.tableData[i].Sam_RemoveDate = a[0]
            a = this.state.tableData[i].Sam_ReturnDueDate.split('T')
            this.state.tableData[i].Sam_ReturnDueDate = a[0]
        }

        this.data = this.state.tableData

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
            var duedate = new Date(this.data[i].Sam_ReturnDueDate)

            if(curdate > duedate) {
                table.push(
                    <View key={this.data[i].Checkout_ID} style={rowstyle}>
                        <Text style={styles.cellsampleid}>{this.state.tableData[i].Checkout_ID}</Text>
                        <Text style={styles.cellname}>{this.data[i].Sam_Type}</Text>
                        <Text style={styles.overdue}>OVERDUE</Text>
                        <Text style={styles.cellborrow_date}>{this.data[i].Sam_RemoveDate}</Text>
                        <Text style={styles.celldue_date}>{this.data[i].Sam_ReturnDueDate}</Text>
                        <Text style={styles.cellfirstname}>{this.data[i].Cus_First}</Text>
                        <Text style={styles.celllastname}>{this.data[i].Cus_Last}</Text>
                        <View style={styles.chargebutton}>
                            <Button color='#245760' title="charge"/>
                        </View>
                    </View>
                )
            }
            else{
                table.push(
                    <View key={this.data[i].Checkout_ID} style={rowstyle}>
                        <Text style={styles.cellsampleid}>{this.state.tableData[i].Checkout_ID}</Text>
                        <Text style={styles.cellname}>{this.data[i].Sam_Type}</Text>
                        <Text style={styles.good_standing}>GOOD STANDING</Text>
                        <Text style={styles.cellborrow_date}>{this.data[i].Sam_RemoveDate}</Text>
                        <Text style={styles.celldue_date}>{this.data[i].Sam_ReturnDueDate}</Text>
                        <Text style={styles.cellfirstname}>{this.data[i].Cus_First}</Text>
                        <Text style={styles.celllastname}>{this.data[i].Cus_Last}</Text>
                        <View style={styles.chargebutton}>
                            <Button color='#245760' title="charge"/>
                        </View>
                    </View>
                )
            }
        }

        //-----------------------------------------------------------------------------------------------
        //Render App
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
                        <Image style={styles.monochromelogo} source={require('./assets/Logo.png')}/>
                    </View>
                    <View style={styles.homemain}>
                        <View style={styles.tableview}>
                            <View style={styles.searchbarrow}>
                                <View style={styles.searchbarview}>
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
                                {table}
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
        this.updateSearch('')
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
