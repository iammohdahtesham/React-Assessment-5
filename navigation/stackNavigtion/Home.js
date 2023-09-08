/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
} from 'react-native';
import Members from '../tabNavigation/Members';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={styles.backImage}
        source={require('../../Assests/Rectangle.png')}>
        <Text style={{fontSize: 32, marginTop: 10}}>Welcome </Text>
        <Text style={{fontSize: 64, fontWeight: 'bold', color: 'black'}}>
          Users &<Text style={{color: 'white'}}> Profiles</Text>
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity style={styles.button1}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              navigation.navigate(Members);
            }}>
            <Text style={{color: 'white'}}>Lets get started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  backImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button1: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 45,
    paddingVertical: 20,
  },
  button2: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#224F34',
    borderRadius: 50,
    paddingHorizontal: 45,
    paddingVertical: 20,
  },
});
export default Home;
