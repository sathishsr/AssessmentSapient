import React, {FC} from 'react';
import {View, Text, StyleSheet, ListRenderItemInfo, TouchableOpacity, FlatList} from 'react-native';
import {withNavigation, NavigationInjectedProps} from 'react-navigation';
import { Result } from '../types/SearchResult';


interface IProps extends NavigationInjectedProps {
}

const DetailView: FC<IProps> = ({navigation}) => {
  const resultProp:Result = navigation.state.params?.item;
  if(!resultProp){
    return null
  }

  return (
    <View style={styles.container}>
   <Text>{resultProp.artistName}</Text>
  </View>
  );
};

export default withNavigation(DetailView);

const styles = StyleSheet.create({
  container:{
    padding:16,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  
});
