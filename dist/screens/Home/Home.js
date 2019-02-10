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
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
      g
    );
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
import * as React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Body, Button, Container, Content, Header, Icon, Left, Right, Title } from 'native-base';
import { getAllPokemons, getPokemon } from '../../services';
import PokemonList from './components/PokemonList';
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerContainer: {
    backgroundColor: '#C1392B',
  },
  leftHeader: { paddingHorizontal: 5 },
  headerTitle: {
    color: '#F4F9F3',
    fontFamily: 'Oxygen-Regular',
    fontSize: 20,
    letterSpacing: 1,
    textTransform: 'capitalize',
  },
});
var App = (function(_super) {
  __extends(App, _super);
  function App() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.state = {
      error: null,
      loading: true,
      filteredPokemons: [],
      pokemonList: [],
    };
    _this.handleSearchBar = function(currentPokemon) {
      var filteredPokemons = _this.state.pokemonList.filter(function(pokemon) {
        return pokemon.name.includes(currentPokemon.toUpperCase());
      });
      _this.setState({ filteredPokemons: filteredPokemons });
    };
    _this.onPokemonSelect = function(id) {
      return __awaiter(_this, void 0, void 0, function() {
        var pokemon;
        return __generator(this, function(_a) {
          switch (_a.label) {
            case 0:
              this.setState({ loading: true });
              return [4, getPokemon(id)];
            case 1:
              pokemon = _a.sent();
              this.setState({ loading: false });
              this.props.navigation.navigate('Pokemon', { pokemon: pokemon });
              return [2];
          }
        });
      });
    };
    return _this;
  }
  App.prototype.componentDidMount = function() {
    return __awaiter(this, void 0, void 0, function() {
      var pokemons;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, getAllPokemons()];
          case 1:
            pokemons = _a.sent();
            if (pokemons.errorMessage)
              this.setState({ error: pokemons.errorMessage, loading: false });
            this.setState({ pokemonList: pokemons, loading: false });
            return [2];
        }
      });
    });
  };
  App.prototype.render = function() {
    var _this = this;
    var _a = this.state,
      error = _a.error,
      filteredPokemons = _a.filteredPokemons,
      loading = _a.loading,
      pokemonList = _a.pokemonList;
    var pokemons = filteredPokemons.length ? filteredPokemons : pokemonList;
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
      React.createElement(
        Header,
        { style: styles.headerContainer, noShadow: true, transparent: true },
        React.createElement(
          Left,
          { style: styles.leftHeader },
          React.createElement(
            Button,
            {
              transparent: true,
              onPress: function() {
                return _this.props.navigation.goBack();
              },
            },
            React.createElement(Icon, { name: 'arrow-back', style: { color: '#F4F9F3' } }),
          ),
        ),
        React.createElement(
          Body,
          null,
          React.createElement(Title, { style: styles.headerTitle }, 'Pokedex'),
        ),
        React.createElement(Right, null),
      ),
      React.createElement(
        Content,
        null,
        React.createElement(
          View,
          { style: styles.container },
          React.createElement(SearchBar, {
            containerStyle: {
              width: '100%',
              backgroundColor: 'white',
              borderTopWidth: 0,
            },
            lightTheme: true,
            noIcon: true,
            onChangeText: this.handleSearchBar,
            placeholder: 'Find a Pokemon...',
          }),
          React.createElement(PokemonList, {
            onPokemonSelect: this.onPokemonSelect,
            pokemons: pokemons,
          }),
        ),
      ),
    );
  };
  return App;
})(React.Component);
export default App;
//# sourceMappingURL=Home.js.map
