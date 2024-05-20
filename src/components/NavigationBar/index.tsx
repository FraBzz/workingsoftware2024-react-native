import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from './index.styles';

const NavigationBar = ({ onBack, onForward }) => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={onBack}>
        <Icon name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onForward}>
        <Icon name="arrow-forward" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default NavigationBar;