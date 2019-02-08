import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Pokemon from './screens/Pokemon';
var AppNavigator = createStackNavigator(
  {
    Home: Home,
    Pokemon: Pokemon,
  },
  {
    headerMode: 'none',
  },
);
export default createAppContainer(AppNavigator);
//# sourceMappingURL=App.js.map
