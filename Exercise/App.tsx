import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/screens/Home/Home';
import {Product} from './src/screens/Product/Product';
import {CartProvider} from './src/context/CartContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <CartProvider>
      <GestureHandlerRootView style={{flex:1}}>
        <NavigationContainer>
          <Stack.Navigator
          
          screenOptions={{headerShown:false,orientation:'portrait'}}>
            <Stack.Screen
              name="Home"
              component={Home}
             
            />
            <Stack.Screen
              name="Product"
              component={Product}
      
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </CartProvider>
  );
};

export default App;
