import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import DamageDetails, { DamageDetailsProps } from '../DamageDetails';

describe('<DamageDetails /> Component', () => {
  let wrapper: ShallowWrapper<DamageDetailsProps>;

  const props: DamageDetailsProps = {
    damage: 'Damage',
    icon: 5,
  };

  beforeEach(() => {
    wrapper = shallow(<DamageDetails {...props} />);
  });

  describe('rendering', () => {
    it('should render three View component', () => expect(wrapper.find('View')).toHaveLength(3));

    it('should render one Image component (as Component) into the second View component', () => expect(
      wrapper
        .find('View')
        .at(1)
        .find('Component'),
    ).toHaveLength(1));

    it('should have a source prop equal to icon prop', () => expect(wrapper.find('Component').prop('source')).toBe(props.icon));

    it('should render one Text component into the last View component', () => expect(
      wrapper
        .find('View')
        .at(2)
        .find('Text'),
    ).toHaveLength(1));

    it('should render "Damage" string into the Text component', () => expect(
      wrapper
        .find('Text')
        .first()
        .prop('children'),
    ).toBe(props.damage));
  });
});
