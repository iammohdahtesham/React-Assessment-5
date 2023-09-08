import React, {useEffect} from 'react';
import {Text, View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../../redux/action/Action';

const AddressBook = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.dataApi);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <ScrollView style={{flex: 1}}>
      {[data].map((item, index) => (
        <View key={index} style={{margin: 20, flex: 1}}>
          <Text style={{fontSize: 30, marginBottom: 10}}>Address Detail</Text>
          <View style={styles.container1}>
            <Text>Name:</Text>
            <Text style={styles.container}>
              {item.first_name + ' ' + item.last_name}
            </Text>
            <View style={styles.gap} />
            <Text>City:</Text>
            <Text style={styles.container}>{item.address.city}</Text>
            <View style={styles.gap} />
            <Text>state:</Text>
            <Text style={styles.container}>{item.address.state}</Text>
            <View style={styles.gap} />
            <Text>Zip Code:</Text>
            <Text style={styles.container}>{item.address.zip_code}</Text>
            <View style={styles.gap} />
            <Text>Street:</Text>
            <Text style={styles.container}>{item.address.street_address}</Text>
            <View style={styles.gap} />
            <Text>Street Name:</Text>
            <Text style={styles.container}>{item.address.street_name}</Text>
            <View style={styles.gap} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#222',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 10,
  },
  container: {
    margin: 10,
    color: '#224F34',
    fontWeight: 'bold',
    fontSize: 25,
  },
  gap: {
    margin: 10,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default AddressBook;
