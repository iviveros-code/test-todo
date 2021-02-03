import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
// import cactus from '@assets/cactus.jpg';

const TodosList = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <SafeAreaView>
        <Image
          source={require('./assets/cactus.jpg')}
          style={{width: 400, height: 400}}
        />
      </SafeAreaView>
    </View>
  );
};
export default TodosList;
