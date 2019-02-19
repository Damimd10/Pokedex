import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Damage, { DamageProps } from '../Damage';
import DamageDetails from '../../DamageDetails';

describe('<Damage /> Component', () => {
  let wrapper: ShallowWrapper<DamageProps>;

  const props: DamageProps = {
    color: { dark: '#aab', light: '#abb', primary: '#bbb' },
    damage: [{ name: 'Britney' }, { name: 'Michael' }],
    title: 'My Custom Title',
  };

  beforeEach(() => {
    wrapper = shallow(<Damage {...props} />);
  });

  describe('rendering', () => {
    it('should render one View component', () => expect(wrapper.find('View')).toHaveLength(1));

    it('should render one Text component into View component', () => expect(wrapper.find('View').find('Text')).toHaveLength(1));

    it('should render "My Custom Title"', () => expect(
      wrapper
        .find('Text')
        .first()
        .prop('children'),
    ).toBe(props.title));

    describe('<FlatList /> Component', () => {
      let flatElement: ShallowWrapper;
      let keyExtractor: Function;

      beforeEach(() => {
        flatElement = wrapper.find('View').find('FlatList');
        keyExtractor = flatElement.prop('keyExtractor');
      });

      it('should reder one FlatList component into View component', () => expect(flatElement).toHaveLength(1));

      it('should have a keyExtractor function that returns "Leo"', () => expect(keyExtractor({ name: 'Leo' })).toBe('Leo'));

      it('should have a data prop equal to damage prop', () => expect(flatElement.prop('data')).toEqual(props.damage));

      it('should have a numColumns prop equal to 3', () => expect(flatElement.prop('numColumns')).toBe(3));

      describe('', () => {
        let damageElement: any; let renderItem: Function; let items: any[];

        beforeEach(() => {
          renderItem = flatElement.dive().prop('renderItem');
          damageElement = renderItem({ item: props.damage });
          items = damageElement.props.children;
        });

        it('should have two element into the array', () => expect(items).toHaveLength(2));

        it('should be a DamageDetails component into the first item', () => expect(items[0].type).toEqual(DamageDetails));

        it('should be a DamageDetails component into the second item', () => expect(items[1].type).toEqual(DamageDetails));
      });

      it('should have a renderItem function that returns a DamageDetails component', () => {
        const fn: any = flatElement.dive().prop('renderItem');
        const a: any = fn({ item: props.damage })
        expect(a.props.children[0].type).toEqual(DamageDetails);
      });
    });
  });
});
