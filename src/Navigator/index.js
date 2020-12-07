import React from 'react';
import { View, Dimensions, Platform, StatusBar, Alert, BackHandler, ToastAndroid, Animated, LogBox } from 'react-native';
import { Text, Button, Image, Badge } from "react-native-elements";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home/Home';
import Config from '../Utils/Config';
import Fonts from '../Utils/CustomFonts';
import SideMenu from '../SideMenu';
import Colors from '../Utils/Colorss';
import Contest from '../screens/Contest';

const { height, width } = Dimensions.get('window')
StatusBar.setBarStyle('light-content');
if (Platform.OS != 'ios') { StatusBar.setBackgroundColor('black'); }
LogBox.ignoreLogs(['Warning: componentWillReceiveProps has been renamed,', 'VirtualizedLists should never be nested', "Require cycle:", "YellowBox has been replaced with LogBox. Please call LogBox.ignoreLogs() instead.", "Animated: `useNativeDriver` was not specified"])


let val = 'relative';
const showDrawer = false;


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



//Home
function HomeStackScreen() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home}
        headerMode="none"
        options={{
          headerShown: false,
        }} />
      <Stack.Screen name="Contest" component={Contest}
        headerMode="none"
        options={{
          headerShown: false,
        }} />
    </Stack.Navigator>
  )
};




//Drawer
function DrawerApp() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: !showDrawer ? null : width / 1.4,
      }}
      headerLayoutPreset='center'
      drawerContent={props => <SideMenu {...props} />}>

      <Drawer.Screen name="Home" component={HomeStackScreen}
        headerMode="none"
        options={{
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  );
}

//Main 
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Drawer" component={DrawerApp}
          headerMode="none"
          options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
