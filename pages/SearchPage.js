import * as React from 'react';
import {SearchResult} from './searchResult';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';

export function Search() {
  const [search, setSearch] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://www.json-generator.com/api/json/get/bVJcyOaouq?indent=2')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);


  

const GetuserInput=()=>{
    if((val)=(items.street)){
        return (
            <Text> Street is: {items.street} and the price is {items.price}</Text>
        )}
    else {
        return <View></View>
    }
    

}

  const spinner = {isLoaded} ? <ActivityIndicator size="large" /> : null;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.description}>Search for houses to buy!</Text>
        <Text style={styles.description}>
          Search by place-name or postcode.
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.searchInput}
            placeholder="Search via name or postcode"
            id="search"
            onChangeText={(val) => setSearch(val)}
          />

          <Button onPress={() => {}} color="#000080" title="Go" />
        </View>

        

        {spinner}

        {/* listening to the user input */}
        <View>
          <Text> user entered : {search} </Text>
        </View>
        <Image
          style={{height: 100, width: 100}}
          source={require('E:/React-Native/PropertyFinder/Resources/house.png')}
        />


{/* getting the list of the location into this page be4 searchreuslt page */}
        {/* <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View>
              <Text style={styles.flatlistcontainer}>{item.street}</Text>
              <Text style={styles.flatlistcontainer1}>{item.price}</Text>
            </View>
          )}
        /> */}
      </View>
      
      <GetuserInput></GetuserInput>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#000080',
    borderRadius: 8,
    color: '#48BBEC',
  },
  flatlistcontainer: {
    marginTop: 5,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#000090',
    borderRadius: 2,
    padding: 5,
  },
  flatlistcontainer1: {
    fontSize: 10,
    borderWidth: 1,
    borderColor: '#000090',
    borderRadius: 2,
    padding: 5,
  },
});
