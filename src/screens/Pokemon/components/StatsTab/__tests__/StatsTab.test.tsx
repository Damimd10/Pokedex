import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import StatsTab, { StatsTabProps } from '../StatsTab';

describe('<StatsTab /> Component', () => {
  let wrapper: ShallowWrapper<StatsTabProps>;

  const props: StatsTabProps = {
    color: { dark: '#aab', light: '#abb', primary: '#bbb' },
    stats: [
      {
        averageStat: 80,
        baseStat: 40,
        colorStat: '#eee',
        name: 'attack',
      },
    ],
    typesRelation: { damageFrom: [], damageTo: [] },
  };

  beforeEach(() => {
    wrapper = shallow(<StatsTab {...props} />);
  });

  describe('rendering', () => {
    it('should render one View component', () => expect(wrapper.find('View')).toHaveLength(1));

    it('should render one PokemonStats component into View component', () => expect(wrapper.find('View').find('PokemonStats')).toHaveLength(1));

    it('should render two Damage components into View component', () => expect(wrapper.find('View').find('Damage')).toHaveLength(2));

    it('should have a title prop equal to "Weaknesses" the first Damage component', () => expect(
      wrapper
        .find('Damage')
        .at(0)
        .prop('title'),
    ).toBe('Weaknesses'));

    it('should have a title prop equal to "Strengths" the second Damage component', () => expect(
      wrapper
        .find('Damage')
        .at(1)
        .prop('title'),
    ).toBe('Strengths'));
  });
});
