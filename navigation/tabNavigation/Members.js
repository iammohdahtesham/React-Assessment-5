import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import TabNav from './TabNav';
import {useDispatch, useSelector} from 'react-redux';
import {getMember} from '../../redux/action/Action';

const Members = ({navigation}) => {
  const dispatch = useDispatch();
  const {member} = useSelector(state => state.MembersApi);

  useEffect(() => {
    dispatch(getMember());
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        numColumns={2}
        data={member}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: item.avatar}} />
            </View>
            <View style={{flex:1}}>
              <Text style={styles.rating}>Name : </Text>
              <Text style={styles.title}>
                {item.first_name + ' ' + item.last_name}
              </Text>
              <Text style={styles.rating}>Phone Number : </Text>
              <Text style={styles.title}>{item.phone_number}</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate(TabNav);
              }}>
              <Text style={{textAlign: 'center', color: 'white'}}>
                Know more
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    padding: 5,
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
    flex: 1,
    height: 90,
    width: 90,
    alignSelf: 'center',
  },
  imageContainer: {
    backgroundColor: '#c2efd4',
    borderWidth: 0.5,
    borderRadius: 12,
    marginVertical: 25,
  },
  textContainer: {
    flex: 1,
  },
  rating: {
    color: '#224F34',
    fontWeight: 'bold',
    fontSize: 17,
    paddingBottom: 1,
  },
  price: {
    fontWeight: '700',
  },
  unitsLeft: {
    paddingVertical: 10,
  },
  button: {
    backgroundColor: '#224F34',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});

export default Members;
