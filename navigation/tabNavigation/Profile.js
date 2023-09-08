import React, {useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../../redux/action/Action';

const Profile = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.dataApi);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <SafeAreaView style={{flex: 1}}>
      {[data].map((item, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: item.avatar}} />
          </View>
          <View style={styles.ratingAndPrice}>
            <Text style={styles.title}>
              <Text style={styles.title1}>Name :</Text>
              {item.first_name + ' ' + item.last_name}
            </Text>
            <Text style={styles.rating}>
              <Text style={styles.title1}>Phone Number : </Text>
              {item.phone_number}
            </Text>
            <Text style={styles.rating}>
              <Text style={styles.title1}>Email: </Text>
              {item.email}
            </Text>
            <Text style={styles.rating}>
              <Text style={styles.title1}>Gender: </Text> {item.gender}
            </Text>
            <Text style={styles.rating}>
              <Text style={styles.title1}>DOB :</Text>
              {item.date_of_birth}
            </Text>
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
  },
  card: {
    flex: 1,
    margin: 10,
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
  image: {
    height: '80%',
    width: '80%',
    alignSelf: 'center',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#c2efd4',
    borderWidth: 0.5,
    borderRadius: 12,
    marginVertical: 15,
    marginHorizontal: 5,
  },
  textContainer: {
    flex: 1,
  },
  rating: {
    fontWeight: '500',
  },
  price: {
    fontWeight: '700',
  },
  ratingAndPrice: {
    margin: 10,
    padding: 10,
  },
  unitsLeft: {
    paddingVertical: 10,
  },
  title1: {
    color: '#224F34',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Profile;
