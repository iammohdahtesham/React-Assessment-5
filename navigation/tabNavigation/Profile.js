import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getData} from '../../redux/action/Action';
import {ColorFormat} from '../../Assests/colorFormat/color';

const Profile = () => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.dataApi);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: data.avatar}} />
        </View>
        <View style={styles.ratingAndPrice}>
          <Text style={styles.title}>
            <Text style={styles.title1}>Name :</Text>
            {data.first_name + ' ' + data.last_name}
          </Text>
          <Text style={styles.rating}>
            <Text style={styles.title1}>Phone Number : </Text>
            {data.phone_number}
          </Text>
          <Text style={styles.rating}>
            <Text style={styles.title1}>Email: </Text>
            {data.email}
          </Text>
          <Text style={styles.rating}>
            <Text style={styles.title1}>Gender: </Text> {data.gender}
          </Text>
          <Text style={styles.rating}>
            <Text style={styles.title1}>DOB :</Text>
            {data.date_of_birth}
          </Text>
        </View>
      </View>
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
  image: {
    height: '80%',
    width: '80%',
    alignSelf: 'center',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: ColorFormat.offgreen,
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
    color: ColorFormat.green,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Profile;
