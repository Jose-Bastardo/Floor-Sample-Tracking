import * as React from 'react';
import {Button, Image, Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import {styles} from '../styles';

export default class Registration extends React.Component{
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
