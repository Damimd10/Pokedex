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
import { StyleSheet, Text, View } from 'react-native';
import Tts from 'react-native-tts';
import PokemonType from '../../../../shared/components/PokemonType/PokemonType';
var styles = StyleSheet.create({
  detailsContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
  pokemonName: {
    margin: 10,
    fontSize: 30,
    textTransform: 'capitalize',
  },
  pokemonTypes: {
    flexDirection: 'row',
    margin: 10,
  },
  pokemonDescription: {
    fontFamily: 'Oxygen-Bold',
    color: '#868686',
    fontSize: 14,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
  },
});
var PokemonDetails = (function(_super) {
  __extends(PokemonDetails, _super);
  function PokemonDetails() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  PokemonDetails.prototype.componentDidMount = function() {
    var _a = this.props,
      description = _a.description,
      name = _a.name;
    Tts.getInitStatus().then(function() {
      Tts.setDefaultRate(0.4);
      Tts.speak(name);
      Tts.speak(description);
    });
  };
  PokemonDetails.prototype.componentWillUnmount = function() {
    Tts.stop();
  };
  PokemonDetails.prototype.render = function() {
    var _a = this.props,
      description = _a.description,
      types = _a.types;
    return React.createElement(
      View,
      { style: styles.detailsContainer },
      React.createElement(
        View,
        { style: styles.pokemonTypes },
        types.map(function(type) {
          return React.createElement(PokemonType, __assign({ key: type.name }, type));
        }),
      ),
      React.createElement(Text, { style: styles.pokemonDescription }, description),
    );
  };
  return PokemonDetails;
})(React.Component);
export default PokemonDetails;
//# sourceMappingURL=PokemonDetails.js.map
