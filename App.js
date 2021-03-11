/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Search} from './pages/SearchPage.js';
import {SearchResult} from './pages/searchResult.js';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';



const Stack = createStackNavigator();

export default function App() {
  return (
 
      <NavigationContainer>
        <Stack.Navigator>
         
          <Stack.Screen name="Property Finder" component={Search} />
          <Stack.Screen name="Search Result" component={SearchResult} />
        </Stack.Navigator>
      </NavigationContainer>
 
  );
}
