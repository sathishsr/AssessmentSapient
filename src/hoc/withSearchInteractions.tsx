import React from 'react';
import {View, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import {SearchResult, Result} from '../types/SearchResult';

export const withSearchInteractions = <T extends object>(
  Component: React.ComponentType<T & any>,
): React.FC<any> => {
  return props => {
    const [searchResult, setSearchResult] = React.useState<Array<Result>>();

    const onSubmitCallBack = (searchResult: SearchResult) => {
      console.log('called', searchResult.results.length);
      setSearchResult(searchResult.results);
    };

    return (
      <View>
        <Component searchResults={searchResult} />
        <SearchBar onSubmitCallBack={onSubmitCallBack} />
      </View>
    );
  };
};
