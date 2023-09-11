import React, {useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getaddressdata} from '../../redux/action/Action';
import {ColorFormat} from '../../Assests/colorFormat/color';

const AddressBook = () => {
  const dispatch = useDispatch();
  const {address} = useSelector(state => state.AddressApi);

  useEffect(() => {
    dispatch(getaddressdata());
  }, [dispatch]);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{margin: 20, flex: 1}}>
        <Text style={{fontSize: 30, marginBottom: 10}}>Address Detail</Text>
        <View style={styles.container1}>
          <Text>City:</Text>
          <Text style={styles.container}>{address.city}</Text>
          <View style={styles.gap} />
          <Text>state:</Text>
          <Text style={styles.container}>{address.state}</Text>
          <View style={styles.gap} />
          <Text>Zip Code:</Text>
          <Text style={styles.container}>{address.zip_code}</Text>
          <View style={styles.gap} />
          <Text>Street:</Text>
          <Text style={styles.container}>{address.street_address}</Text>
          <View style={styles.gap} />
          <Text>Street Name:</Text>
          <Text style={styles.container}>{address.street_name}</Text>
          <View style={styles.gap} />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: ColorFormat.white,
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
    color: ColorFormat.green,
    fontWeight: 'bold',
    fontSize: 25,
  },
  gap: {
    margin: 10,
    borderBottomColor: ColorFormat.black,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default AddressBook;
