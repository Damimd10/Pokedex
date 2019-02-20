import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import PokemonStats, { PokemonStatsProps } from '../PokemonStats';

describe('<PokemonStats />', () => {
  let wrapper: ShallowWrapper<PokemonStatsProps>;

  const props: PokemonStatsProps = {
    color: { dark: '#aab', light: '#abb', primary: '#bbb' },
    stats: [
      {
        name: 'hp',
        averageStat: 50,
        baseStat: 30,
        colorStat: 'blue',
      },
    ],
  };

  beforeEach(() => {
    wrapper = shallow(<PokemonStats {...props} />);
  });

  describe('rendering', () => {
    it('should render one View component', () => expect(wrapper.find('View')).toHaveLength(1));

    it('should render one StatsDetails component into View component', () => expect(wrapper.find('View').find('StatsDetails')).toHaveLength(1));
  });
});
