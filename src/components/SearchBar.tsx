import React, {FC} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {SearchUrl} from '../constants/Constants';
import {SearchResult} from '../types/SearchResult';
import {api} from '../rest-client/ServiceApi';
import {Strings} from '../constants/Strings';

interface IProps {
  onSubmitCallBack(searchResult: SearchResult | null): void;
}

const SearchBar: FC<IProps> = ({onSubmitCallBack}) => {
  const [text, onChangeText] = React.useState<string>('');

  const onSubmitCallback = async () => {
    try {
      const searchResponse = await getSearchResult(text);
      onSubmitCallBack(searchResponse);
    } catch (e) {
      onSubmitCallBack(null);
    }
  };

  async function getSearchResult(searchParam: string) {
    try {
      const searchUrl = `${SearchUrl.URL_Search}${searchParam}`;
      return await api<SearchResult>(searchUrl);
    } catch (e) {
      return null;
    }
  }

  return (
    <TextInput
      style={styles.search}
      placeholder={Strings.placeHolder}
      placeholderTextColor={'#fff'}
      onChangeText={text => onChangeText(text)}
      value={text}
      onSubmitEditing={value => {
        onSubmitCallback();
      }}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#ed6f26',
    height: 60,
    width: '100%',
    color: '#fff',
    fontSize: 16,
    paddingLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    borderColor: 'white',
    borderWidth: 1,
  },
});
