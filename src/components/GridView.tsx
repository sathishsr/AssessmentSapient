import React, {FC} from 'react';

import {
  View,
  StyleSheet,
  Platform,
  FlatList,
  ListRenderItemInfo,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Result} from '../types/SearchResult';
import {withNavigation, NavigationInjectedProps} from 'react-navigation';
import {SCREENS} from '../constants/Strings';
import ErrorView from './ErrorView';

interface IProps extends NavigationInjectedProps {
  searchResults?: Array<Result>;
}

const GridView: FC<IProps> = ({searchResults, navigation}) => {
  if (!searchResults || searchResults.length <= 0) {
    console.log('erroroerere');
    return <ErrorView />;
  }

  const onAlbumClick = (item: Result) => {
    navigation.navigate(SCREENS.Detail, {item});
  };

  const renderItem = (listItem: ListRenderItemInfo<Result>) => {
    const {item} = listItem;
    return (
      <View style={styles.GridViewBlockStyle}>
        <TouchableOpacity
          onPress={() => {
            onAlbumClick(item);
          }}>
          <Image
            style={styles.GridViewInsideTextItemStyle}
            source={{uri: item.artworkUrl100}}
            resizeMode={'cover'}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}
      />
    </View>
  );
};

export default withNavigation(GridView);

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  GridViewBlockStyle: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    height: 100,
    width: 100,
    margin: 5,
  },
  GridViewInsideTextItemStyle: {
    width: 100,
    height: 100,
  },
});
