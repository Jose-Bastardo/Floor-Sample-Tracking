import * as React from 'react';
import {Button, Image, Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import {styles} from '../styles';
import {default as readcustomers} from '../../route.js';

readcustomers();

export default class Login extends React.Component{
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
                        <Image style={styles.logo} source={require('../assets/Logo.png')}/>
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
