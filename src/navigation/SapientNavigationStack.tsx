import {createStackNavigator} from 'react-navigation-stack';
import {SCREENS} from '../constants/Strings';
import GridView from '../components/GridView';
import SearchBar from '../components/SearchBar';
import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {withSearchInteractions} from '../hoc/withSearchInteractions';
import DetailView from '../components/DetailView';
const StackNavigator = createStackNavigator(
  {
    [SCREENS.ListScreen]: {
      screen: withSearchInteractions(GridView),
      navigationOptions: {
        headerShown: false,
      },
    },
    [SCREENS.Detail]: {
      screen: DetailView,
    },
  },
  {initialRouteName: SCREENS.ListScreen},
);

export class SapientNavigationStack extends Component<any, any> {
  private readonly AppContainer = createAppContainer(StackNavigator);

  public render() {
    return <this.AppContainer />;
  }
}

export default SapientNavigationStack;
