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
var _this = this;
import React from 'react';
import { shallow } from 'enzyme';
import { getAllPokemons, getPokemon } from '../../../services';
import Home from '../Home';
var goBackMock = jest.fn();
var navigateMock = jest.fn();
var pokemonList = [{ name: 'BULBASUR' }, { name: 'PIKACHU' }];
jest.mock('../../../services', function() {
  return {
    getAllPokemons: jest.fn(),
    getPokemon: jest.fn(),
  };
});
describe('<Home /> Component', function() {
  var wrapper;
  var props = { navigation: { goBack: goBackMock, navigate: navigateMock } };
  beforeEach(function() {
    wrapper = shallow(React.createElement(Home, __assign({}, props)));
  });
  afterEach(function() {
    getAllPokemons.mockClear();
    getPokemon.mockClear();
  });
  describe('rendering', function() {
    describe('when is loading', function() {
      beforeEach(function() {
        wrapper.setState({ loading: true });
      });
      it('should render one View component', function() {
        return expect(wrapper.find('View')).toHaveLength(1);
      });
      it('should render an ActivityIndicator inside the View', function() {
        return expect(wrapper.find('View').find('ActivityIndicator')).toHaveLength(1);
      });
      it('should have a size prop with large value for ActivityIndicator component', function() {
        return expect(wrapper.find('ActivityIndicator').prop('size')).toBe('large');
      });
    });
    describe('when has an error', function() {
      beforeEach(function() {
        wrapper.setState({ loading: false, error: 'Some Error' });
      });
      it('should render one View component', function() {
        return expect(wrapper.find('View')).toHaveLength(1);
      });
      it('should render a Text component inside View', function() {
        return expect(wrapper.find('View').find('Text')).toHaveLength(1);
      });
      it('should render "Some Error" as the text of the error inside Text component', function() {
        return expect(
          wrapper
            .find('Text')
            .first()
            .prop('children'),
        ).toBe('Some Error');
      });
    });
    describe('when does not have an error and is not loading', function() {
      beforeEach(function() {
        wrapper.setState({ loading: false });
      });
      it('should render one Container component', function() {
        return expect(wrapper.find('Styled(Container)')).toHaveLength(1);
      });
      it('should render one Header component inside Container', function() {
        return expect(wrapper.find('Styled(Container)').find('HomeHeader')).toHaveLength(1);
      });
      it('should render one Content component inside Container', function() {
        return expect(wrapper.find('Styled(Container)').find('Styled(Content)')).toHaveLength(1);
      });
      it('should render one View component inside Content', function() {
        return expect(wrapper.find('Styled(Content)').find('View')).toHaveLength(1);
      });
      describe('<SearchBar /> Component', function() {
        var searchBar;
        beforeEach(function() {
          searchBar = wrapper.find('View').find('Search');
        });
        it('should render one Search component inside View', function() {
          return expect(searchBar).toHaveLength(1);
        });
        it('should have a lightTheme prop as true', function() {
          return expect(searchBar.prop('lightTheme')).toBe(true);
        });
        it('should have a noIcon prop as true', function() {
          return expect(searchBar.prop('noIcon')).toBe(true);
        });
        it('should have a onChangeText prop as an instance of the Home component', function() {
          return expect(searchBar.prop('onChangeText')).toEqual(wrapper.instance().handleSearchBar);
        });
        it('should have a placeHolder prop as "Find a Pokemon..."', function() {
          return expect(searchBar.prop('placeholder')).toBe('Find a Pokemon...');
        });
      });
      it('should render one PokemonList component inside View', function() {
        return expect(wrapper.find('View').find('PokemonList')).toHaveLength(1);
      });
    });
  });
  describe('inner functions', function() {
    describe('componentDidMount instance', function() {
      it('should call getAllPokemons twice with empty params', function() {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                getAllPokemons.mockReturnValue({});
                return [4, wrapper.instance().componentDidMount()];
              case 1:
                _a.sent();
                expect(getAllPokemons).toHaveBeenCalledTimes(2);
                expect(getAllPokemons).toHaveBeenCalledWith();
                return [2];
            }
          });
        });
      });
      it('should set state for pokemonList with the return of the service', function() {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                getAllPokemons.mockReturnValue(pokemonList);
                return [4, wrapper.instance().componentDidMount()];
              case 1:
                _a.sent();
                expect(wrapper.state('pokemonList')).toEqual(pokemonList);
                return [2];
            }
          });
        });
      });
      it('should set state for error with "Error" text', function() {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                getAllPokemons.mockReturnValue({ errorMessage: 'Error' });
                return [4, wrapper.instance().componentDidMount()];
              case 1:
                _a.sent();
                expect(wrapper.state('error')).toEqual('Error');
                return [2];
            }
          });
        });
      });
    });
    describe('handleSearchBar instance', function() {
      beforeEach(function() {
        wrapper.setState({ pokemonList: pokemonList });
      });
      it('should have an empty array when does not match with any pokemon', function() {
        wrapper.instance().handleSearchBar('squir');
        expect(wrapper.state('filteredPokemons')).toEqual([]);
      });
      it('should have an array with Bulbasur as the only Pokemon that match with the array of pokemons', function() {
        wrapper.instance().handleSearchBar('bu');
        expect(wrapper.state('filteredPokemons')).toEqual([{ name: 'BULBASUR' }]);
      });
    });
    describe('onPokemonSelect instance', function() {
      var id = 4;
      var pokemonDetails = { name: 'Charmander' };
      beforeEach(function() {
        return __awaiter(_this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                getPokemon.mockReturnValue(pokemonDetails);
                return [4, wrapper.instance().onPokemonSelect(id)];
              case 1:
                _a.sent();
                return [2];
            }
          });
        });
      });
      afterEach(function() {
        navigateMock.mockClear();
      });
      it('should call getPokemon service once', function() {
        return expect(getPokemon).toHaveBeenCalledTimes(1);
      });
      it('should call getPokemon service with id parameter', function() {
        return expect(getPokemon).toHaveBeenCalledWith(id);
      });
      it('should call navigate method of navigation once', function() {
        return expect(navigateMock).toHaveBeenCalledTimes(1);
      });
      it('should call navigate method with "Pokemon" and pokemon details', function() {
        return expect(navigateMock).toHaveBeenCalledWith('Pokemon', { pokemon: pokemonDetails });
      });
    });
  });
});
//# sourceMappingURL=Home.test.js.map