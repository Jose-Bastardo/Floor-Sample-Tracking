import {createStackNavigator,} from '@react-navigation/stack';
import * as React from 'react';
import {NavigationContainer,} from '@react-navigation/native';
import Login from './Login.js';
import Registration from './Registration.js';
import Home from './Home/Home.js';
import Checkout from './Checkout/Checkout.js';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
              <Stack.Screen
                  name="Checkout"
                  component={Checkout}
              />
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="Log In"
                    component={Login}
                />

                <Stack.Screen
                    name="Registration"
                    component={Registration}
                />


            </Stack.Navigator>
        </NavigationContainer>
    );
};
