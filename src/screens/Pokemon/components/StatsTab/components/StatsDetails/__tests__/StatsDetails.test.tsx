import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import StatsDetails, { StatsDetailsProps } from '../StatsDetails';

describe('<StatsDetails /> Component', () => {
  let wrapper: ShallowWrapper<StatsDetailsProps>;

  const props: StatsDetailsProps = {
    averageStat: 80,
    baseStat: 40,
    color: { dark: '#aab', light: '#abb', primary: '#bbb' },
    colorStat: '#ccc',
    name: 'defense',
  };

  beforeEach(() => {
    wrapper = shallow(<StatsDetails {...props} />);
  });

  describe('rendering', () => {
    it('should render three View components', () => expect(wrapper.find('View')).toHaveLength(3));

    it('should render one Text component into the second View component', () => expect(
      wrapper
        .find('View')
        .at(1)
        .find('Text'),
    ).toHaveLength(1));

    it('should render "defense" as the name of the stat into the first Text component', () => expect(
      wrapper
        .find('Text')
        .at(0)
        .first()
        .prop('children'),
    ).toBe(props.name));

    it('should render one Text component into the the third View component', () => expect(
      wrapper
        .find('View')
        .at(2)
        .find('Text'),
    ).toHaveLength(1));

    it('should render 40 as the baseStat for the second Text component', () => expect(
      wrapper
        .find('Text')
        .at(1)
        .first()
        .prop('children'),
    ).toBe(props.baseStat));

    describe('<ProgressBar /> Component', () => {
      let progressElement: ShallowWrapper;

      beforeEach(() => {
        progressElement = wrapper
          .find('View')
          .at(0)
          .find('ProgressBar');
      });

      it('should render one Progress.Bar component into the first View component', () => expect(progressElement).toHaveLength(1));

      it('should have progress prop equal to averageStat prop', () => expect(progressElement.prop('progress')).toEqual(props.averageStat));

      it('should have borderColor prop equal to "transparent"', () => expect(progressElement.prop('borderColor')).toBe('transparent'));

      it('should have borderRadius prop equal to 50', () => expect(progressElement.prop('borderRadius')).toBe(50));

      it('should have color prop equal to colorStat prop', () => expect(progressElement.prop('color')).toEqual(props.colorStat));

      it('should have height prop equal to 10', () => expect(progressElement.prop('height')).toBe(10));

      it('should have width prop equal to 250', () => expect(progressElement.prop('width')).toBe(250));

      it('should have unfilledColor equal to "#F1F1F1"', () => expect(progressElement.prop('unfilledColor')).toBe('#F1F1F1'));
    });
  });
});
