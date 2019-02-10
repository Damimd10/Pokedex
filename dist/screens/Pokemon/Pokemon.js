var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import * as React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Container, Content, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import PokemonSprite from './components/PokemonSprite';
import EvolutionTab from './components/EvolutionTab';
import MovesTab from './components/MovesTab';
import StatsTab from './components/StatsTab';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import PokemonHeader from './components/PokemonHeader';
import PokemonFooter from './components/PokemonFooter';
var styles = StyleSheet.create({
  container: { alignItems: 'center' },
  tabTitle: { textTransform: 'uppercase' },
});
var ActiveTab = {
  stats: { component: StatsTab, props: ['color', 'stats', 'typesRelation'] },
  evolutions: { component: EvolutionTab, props: ['color', 'evolutionChain'] },
  moves: { component: MovesTab, props: ['moves'] },
};
var Pokemon = (function(_super) {
  __extends(Pokemon, _super);
  function Pokemon() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.state = {
      activeTab: 'stats',
      error: null,
      loading: false,
      pokemon: _this.props.navigation.getParam('pokemon'),
    };
    _this.isActive = function(value) {
      return value === _this.state.activeTab;
    };
    _this.getTabContent = function() {
      var _a = _this.state,
        activeTab = _a.activeTab,
        pokemon = _a.pokemon;
      var _b = ActiveTab[activeTab],
        CustomComponent = _b.component,
        props = _b.props;
      var customProps = props.reduce(function(accumulator, prop) {
        var _a;
        return __assign({}, accumulator, ((_a = {}), (_a[prop] = pokemon[prop]), _a));
      }, {});
      return React.createElement(CustomComponent, __assign({}, customProps));
    };
    _this.onTabPress = function(tab) {
      return _this.setState({ activeTab: tab });
    };
    return _this;
  }
  Pokemon.prototype.render = function() {
    var _a = this,
      _b = _a.state,
      error = _b.error,
      loading = _b.loading,
      _c = _b.pokemon,
      color = _c.color,
      description = _c.description,
      name = _c.name,
      types = _c.types,
      goBack = _a.props.navigation.goBack;
    var isActiveMoves = this.isActive('moves');
    var isActiveStats = this.isActive('stats');
    var isActiveEvolutions = this.isActive('evolutions');
    if (loading) {
      return React.createElement(
        View,
        { style: styles.container },
        React.createElement(ActivityIndicator, { size: 'large' }),
      );
    }
    if (error) {
      return React.createElement(
        View,
        { style: styles.container },
        React.createElement(Text, null, error),
      );
    }
    return React.createElement(
      Container,
      null,
      React.createElement(PokemonHeader, { color: color, goBack: goBack, name: name }),
      React.createElement(
        Content,
        null,
        React.createElement(
          LinearGradient,
          {
            start: { x: 0, y: 0 },
            end: { x: 1, y: 0 },
            colors: [color.dark, color.light],
            style: styles.container,
          },
          React.createElement(PokemonSprite, { name: name }),
          React.createElement(PokemonDetails, {
            description: description,
            name: name,
            types: types,
          }),
        ),
        this.getTabContent(),
      ),
      React.createElement(PokemonFooter, {
        isActiveEvolutions: isActiveEvolutions,
        isActiveMoves: isActiveMoves,
        isActiveStats: isActiveStats,
        color: color,
        onTabPress: this.onTabPress,
      }),
    );
  };
  return Pokemon;
})(React.Component);
export default Pokemon;
//# sourceMappingURL=Pokemon.js.map
