import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import PokemonCard, { PokemonCardProps } from '../PokemonCard';

const onPokemonSelectSpy = jest.fn();

describe('<PokemonCard /> Component', () => {
  let wrapper: ShallowWrapper<PokemonCardProps>;
  let props: PokemonCardProps;

  beforeEach(() => {
    props = {
      id: 36,
      name: 'pikachu',
      sprite: 'pikachu-sprite',
      onPokemonSelect: onPokemonSelectSpy,
    };
    wrapper = shallow(<PokemonCard {...props} />);
  });

  afterEach(() => {
    onPokemonSelectSpy.mockClear();
  });

  describe('rendering', () => {
    it('should render one View component', () => expect(wrapper.find('View')).toHaveLength(1));

    describe('TouchableOpacity component', () => {
      let touchableElement: ShallowWrapper<any>;

      beforeEach(() => {
        touchableElement = wrapper.find('TouchableOpacity');
        touchableElement.prop('onPress')();
      });

      it('should render one TouchableOpacity component', () => expect(touchableElement).toHaveLength(1));

      it('should call onPokemonSelect once', () => expect(onPokemonSelectSpy).toHaveBeenCalledTimes(1));

      it('should clal onPokemonSelect with 36', () => expect(onPokemonSelectSpy).toHaveBeenCalledWith(36));
    });

    it('should render one Text component', () => expect(wrapper.find('TouchableOpacity').find('Text')).toHaveLength(1));

    it('should render "pikachu" as the name of the pokemon', () => expect(
      wrapper
        .find('Text')
        .first()
        .props().children,
    ).toBe('pikachu'));

    it('should have a source property that contains "pikachu-sprite"', () => expect(
      wrapper
        .find('TouchableOpacity')
        .childAt(1)
        .prop('source'),
    ).toEqual({ uri: 'pikachu-sprite' }));
  });
});
