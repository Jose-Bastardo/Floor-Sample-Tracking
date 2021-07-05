import {createStackNavigator,} from '@react-navigation/stack';
import * as React from 'react';
import ChooseSample from './ChooseSample.js';
import ChooseCustomer from './ChooseCustomer.js';

const Checkout = createStackNavigator();

export default function CheckoutNavigator() {
    return (
          <Checkout.Navigator screenOptions={{
              headerShown: false
          }}>
            <Checkout.Screen
                name="ChooseSample"
                component={ChooseSample}
            />
              <Checkout.Screen
                  name="ChooseCustomer"
                  component={ChooseCustomer}
              />
          </Checkout.Navigator>
    );
};
