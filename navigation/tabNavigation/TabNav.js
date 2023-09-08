import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddressBook from './AddressBook';
import Profile1 from '../svg/Profile1.svg';
import Profile from './Profile';
import HomeIcon from '../svg/HomeIcon.svg';

const Tab = createBottomTabNavigator();
const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarIcon: () => <Profile1 />}}
      />
      <Tab.Screen
        name="Address"
        component={AddressBook}
        options={{tabBarIcon: () => <HomeIcon />}}
      />
    </Tab.Navigator>
  );
};
export default TabNav;
