import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import {RadioButton, List} from 'react-native-paper';
import TodosList from './TodosList';

const App = () => {
  return (
    <>
    <View style={{flex:1, justifyContent:'center'}}>

      <TodosList />
    </View>
    </>
  );
};

export default App;
