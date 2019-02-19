import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import PokemonHeader, { PokemonHeaderProps } from '../PokemonHeader';

const goBack = jest.fn();

describe('<PokemonHeader /> Component', () => {
  let wrapper: ShallowWrapper<PokemonHeaderProps>;

  const props: PokemonHeaderProps = {
    color: { dark: '#aab', light: '#aaa', primary: '#bbb' },
    goBack,
    name: 'bulbasur',
  };

  beforeEach(() => {
    wrapper = shallow(<PokemonHeader {...props} />);
  });

  describe('rendering', () => {
    describe('<LinearGradient /> Component', () => {
      let gradientElement: ShallowWrapper;

      beforeEach(() => {
        gradientElement = wrapper.find('LinearGradient');
      });

      it('should render one LinearGradient component', () => expect(gradientElement).toHaveLength(1));

      it('should have a start prop equals to an object with x: 0 and y: 0 as coordinates', () => expect(gradientElement.prop('start')).toEqual({ x: 0, y: 0 }));

      it('should have an end prop equal an object with x: 1 and y: 0 as coordinates', () => expect(gradientElement.prop('end')).toEqual({ x: 1, y: 0 }));

      it('should have a colors prop equal to an array with the dark and light colors from props', () => expect(gradientElement.prop('colors')).toEqual([
        props.color.dark,
        props.color.light,
      ]));
    });

    describe('<Header /> Component', () => {
      let headerElement: ShallowWrapper;

      beforeEach(() => {
        headerElement = wrapper.find('LinearGradient').find('Styled(Header)');
      });

      it('should render one Header component into LinearGradient component', () => expect(
        wrapper.find('LinearGradient').find('Styled(Header)'),
      ).toHaveLength(1));

      it('should have a noShadow prop equal to true', () => expect(headerElement.prop('noShadow')).toBe(true));

      it('should have a transparent prop equal to true', () => expect(headerElement.prop('transparent')).toBe(true));
    });

    it('should render one Left component into Header component', () => expect(wrapper.find('Styled(Header)').find('Styled(Left)')).toHaveLength(
      1,
    ));

    describe('<Button /> Component', () => {
      let buttonElement: ShallowWrapper;
      let onPress: Function;

      beforeEach(() => {
        buttonElement = wrapper.find('Styled(Left)').find('Styled(Button)');
        onPress = buttonElement.prop('onPress');
        onPress();
      });

      afterEach(() => {
        goBack.mockClear();
      });

      it('should render one Button component into Left component', () => expect(buttonElement).toHaveLength(1));

      it('should have a transparent prop equal to true', () => expect(buttonElement.prop('transparent')).toBe(true));

      it('should call goBack once', () => expect(goBack).toHaveBeenCalledTimes(1));

      it('should call goBack with empty params', () => expect(goBack).toHaveBeenCalledWith());
    });

    it('should render one Body component into Header component', () => expect(wrapper.find('Styled(Header)').find('Styled(Body)')).toHaveLength(
      1,
    ));

    it('should render one Title component into Body component', () => expect(wrapper.find('Styled(Body)').find('Styled(Title)')).toHaveLength(
      1,
    ));

    it('should render "BULBASUR" relate tod uppercase pokemon name', () => expect(wrapper.find('Styled(Title)').prop('children')).toBe('BULBASUR'));

    it('should render one Right component into Header component', () => expect(wrapper.find('Styled(Header)').find('Styled(Right)')).toHaveLength(
      1,
    ));
  });
});
