import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import EvolutionTab, { EvolutionTabProps } from '../EvolutionTab';

const onPokemonEvolutionSelect = jest.fn();

describe('<EvolutionTab /> Component', () => {
  let wrapper: ShallowWrapper<EvolutionTabProps>;

  const props: EvolutionTabProps = {
    color: { dark: 'red', light: 'white', primary: 'blue' },
    evolutionChain: [
      { name: 'pikachu', level: 0, sprite: 'pikachu-ev' },
      { name: 'raichu', level: 16, sprite: 'raichu-ev' },
    ],
    onPokemonEvolutionSelect
  };

  beforeEach(() => {
    wrapper = shallow(<EvolutionTab {...props} />);
  });

  describe('rendering', () => {
    it('should return three View component', () => expect(wrapper.find('View')).toHaveLength(3));

    it('should render one View comnponent into the first View component', () => expect(
      wrapper
        .find('View')
        .at(0)
        .find('View')
        .at(0),
    ).toHaveLength(1));

    it('should render two PokemonEvolution component into the second View component', () => expect(
      wrapper
        .find('View')
        .at(1)
        .find('PokemonEvolution'),
    ).toHaveLength(2));

    it('should render one View component into the second View component', () => expect(
      wrapper
        .find('View')
        .at(2)
        .find('View'),
    ).toHaveLength(1));

    it('shoyld render two Text components into the last View component', () => expect(
      wrapper
        .find('View')
        .at(2)
        .find('Text'),
    ).toHaveLength(2));

    it('should render "Lv.16" for the first Text component', () => expect(
      wrapper
        .find('Text')
        .at(0)
        .first()
        .prop('children'),
    ).toBe('Lv.16'));

    it('should have a dynamic color that match with the primary color prop', () => expect(
      wrapper
        .find('Text')
        .at(0)
        .first()
        .prop('style'),
    ).toEqual([
      {
        fontFamily: 'Oxygen-Bold',
        fontSize: 14,
        letterSpacing: 1,
        marginBottom: -20,
      },
      { color: props.color.primary },
    ]));

    it('should have an arrow (⟶) as icon text for the second Text component', () => expect(
      wrapper
        .find('Text')
        .at(1)
        .first()
        .prop('children'),
    ).toBe('⟶'));
  });
});
