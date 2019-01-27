import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './screens/Home';
import Pokemon from './screens/Pokemon';

const AppNavigator = createStackNavigator(
  {
    Home,
    Pokemon,
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);
