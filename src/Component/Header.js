import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Icon, Text, Image, Badge } from "react-native-elements";
import Colors from "../../src/Utils/Colorss";
import styles from '../Component/Styles';
import Fonts from '../../src/Utils/CustomFonts';
import { HeaderIcons } from '../../src/Component/ImageJson';
import Styles from '../Component/Styles';
import Config from '../Utils/Config';

const { height, width } = Dimensions.get('window')
const aspectRatio = height / width;

export default Header = (props) => {
  return (
    <View style={Styles().HeaderMainView}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={props.onMenuPress}
          style={{ justifyContent: 'center' }}>
           <Icon
            name='menu'
            type='entypo'
            color={Colors.Black}
            size={height / 33}
            containerStyle={{
              justifyContent: 'center',
            }}
            underlayColor='transparent'
          />
        </TouchableOpacity>
      </View>


      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{ justifyContent: 'center' }}>
          <Icon
            name='filter'
            type='font-awesome'
            color={Colors.Black}
            size={height / 33}
            containerStyle={{
              justifyContent: 'center',
            }}
            underlayColor='transparent'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}


