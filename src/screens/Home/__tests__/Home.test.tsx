import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SplashScreen from 'react-native-splash-screen';

import { getAllPokemons, getPokemon } from '../../../services';
import Home from '../Home';

const goBackMock: jest.Mock = jest.fn();
const navigateMock: jest.Mock = jest.fn();
const pokemonList: { name: string }[] = [{ name: 'BULBASUR' }, { name: 'PIKACHU' }];

jest.mock('react-native-splash-screen', () => ({
  hide: jest.fn()
}));

jest.mock('../../../services', () => ({
  getAllPokemons: jest.fn(),
  getPokemon: jest.fn(),
}));

describe('<Home /> Component', () => {
  let wrapper: ShallowWrapper<any, any, any>;

  const props: any = { navigation: { goBack: goBackMock, navigate: navigateMock } };

  beforeEach(() => {
    wrapper = shallow(<Home {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    describe('when is loading', () => {
      beforeEach(() => {
        wrapper.setState({ loading: true });
      });

      it('should render one View component', () => expect(wrapper.find('View')).toHaveLength(1));

      it('should render an ActivityIndicator inside the View', () => expect(wrapper.find('View').find('ActivityIndicator')).toHaveLength(1));

      it('should have a size prop with large value for ActivityIndicator component', () => expect(wrapper.find('ActivityIndicator').prop('size')).toBe('large'));
    });

    describe('when has an error', () => {
      beforeEach(() => {
        wrapper.setState({ loading: false, error: 'Some Error' });
      });

      it('should render one View component', () => expect(wrapper.find('View')).toHaveLength(1));

      it('should render a Text component inside View', () => expect(wrapper.find('View').find('Text')).toHaveLength(1));

      it('should render "Some Error" as the text of the error inside Text component', () => expect(
        wrapper
          .find('Text')
          .first()
          .prop('children'),
      ).toBe('Some Error'));
    });

    describe('when does not have an error and is not loading', () => {
      beforeEach(() => {
        wrapper.setState({ loading: false });
      });

      it('should render one Container component', () => expect(wrapper.find('Styled(Container)')).toHaveLength(1));

      it('should render one Header component inside Container', () => expect(wrapper.find('Styled(Container)').find('HomeHeader')).toHaveLength(1));

      it('should render one Content component inside Container', () => expect(wrapper.find('Styled(Container)').find('Styled(Content)')).toHaveLength(1));

      it('should render one View component inside Content', () => expect(wrapper.find('Styled(Content)').find('View')).toHaveLength(1));

      it('should render one PokemonList component inside View', () => expect(wrapper.find('View').find('PokemonList')).toHaveLength(1));
    });
  });

  describe('inner functions', () => {
    describe('componentDidMount instance', () => {
      it('should call getAllPokemons twice with empty params', async () => {
        (getAllPokemons as jest.Mock).mockReturnValue({});

        await wrapper.instance().componentDidMount();

        expect(getAllPokemons).toHaveBeenCalledTimes(2);
        expect(getAllPokemons).toHaveBeenCalledWith();
      });

      it('should set state for pokemonList with the return of the service', async () => {
        (getAllPokemons as jest.Mock).mockReturnValue(pokemonList);
        await wrapper.instance().componentDidMount();
        expect(wrapper.state('pokemonList')).toEqual(pokemonList);
      });

      it('should set state for error with "Error" text', async () => {
        (getAllPokemons as jest.Mock).mockReturnValue({ errorMessage: 'Error' });
        await wrapper.instance().componentDidMount();
        expect(wrapper.state('error')).toEqual('Error');
      });

      it('should call SplashScreen.hide twice', async () => {
        await wrapper.instance().componentDidMount();
        expect(SplashScreen.hide).toHaveBeenCalledTimes(2);
      });

      it('should call SplashScreen.hide with empty params', async () => {
        await wrapper.instance().componentDidMount();
        expect(SplashScreen.hide).toHaveBeenCalledWith();
      });
    });

    describe('handleSearchBar instance', () => {
      beforeEach(() => {
        wrapper.setState({ pokemonList });
      });

      it('should have an empty array when does not match with any pokemon', () => {
        wrapper.instance().handleSearchBar('squir');
        expect(wrapper.state('filteredPokemons')).toEqual([]);
      });

      it('should have an array with Bulbasur as the only Pokemon that match with the array of pokemons', () => {
        wrapper.instance().handleSearchBar('bu');
        expect(wrapper.state('filteredPokemons')).toEqual([{ name: 'BULBASUR' }]);
      });
    });

    describe('onPokemonSelect instance', () => {
      const id = 4;
      const pokemonDetails = { name: 'Charmander' };

      beforeEach(async () => {
        (getPokemon as jest.Mock).mockReturnValue(pokemonDetails);

        await wrapper.instance().onPokemonSelect(id);
      });

      afterEach(() => {
        navigateMock.mockClear();
      });

      it('should call getPokemon service once', () => expect(getPokemon).toHaveBeenCalledTimes(1));

      it('should call getPokemon service with id parameter', () => expect(getPokemon).toHaveBeenCalledWith(id));

      it('should call navigate method of navigation once', () => expect(navigateMock).toHaveBeenCalledTimes(1));

      it('should call navigate method with "Pokemon" and pokemon details', () => expect(navigateMock).toHaveBeenCalledWith('Pokemon', { pokemon: pokemonDetails }));
    });
  });
});
