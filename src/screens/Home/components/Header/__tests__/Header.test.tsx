import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Header, { HomeHeaderProps } from '../Header';

const handleSearchBar = jest.fn();

describe('<Header /> Component', () => {
  let wrapper: ShallowWrapper<HomeHeaderProps>;

  const props: HomeHeaderProps = { handleSearchBar };

  beforeEach(() => {
    wrapper = shallow(<Header {...props} />);
  });

  describe('rendering', () => {
    describe('<Header /> Component', () => {
      let header: ShallowWrapper;

      beforeEach(() => {
        header = wrapper.find('Styled(Header)');
      });

      it('should render one Styled(Header) component', () => expect(header).toHaveLength(1));

      it('should have a noShadow prop as true', () => expect(header.prop('noShadow')).toBe(true));

      it('should have a transparent prop as true', () => expect(header.prop('transparent')).toBe(true));

      it('should have a searchBar prop as true', () => expect(header.prop('searchBar')).toBe(true));

      it('should have a rounded prop as true', () => expect(header.prop('rounded')).toBe(true));
    });

    it('should render one Item component into Header component', () => expect(wrapper.find('Styled(Header)').find('Styled(Item)')).toHaveLength(
      1,
    ));

    it('should render two Icons component into Item component', () => expect(wrapper.find('Styled(Item)').find('Styled(Icon)')).toHaveLength(
      2,
    ));

    it('should have prop name equal to "ios-search" into the first Icon component', () => expect(
      wrapper
        .find('Styled(Icon)')
        .at(0)
        .prop('name'),
    ).toBe('ios-search'));

    it('should have prop name equal to "ios-bug" into the second Icon component', () => expect(
      wrapper
        .find('Styled(Icon)')
        .at(1)
        .prop('name'),
    ).toBe('ios-bug'));

    it('should render one Input component into Item component', () => expect(wrapper.find('Styled(Item)').find('Styled(Input)')).toHaveLength(
      1,
    ));

    it('should have placeholder prop equal to "Search"', () => expect(wrapper.find('Styled(Input)').prop('placeholder')).toBe('Search'));

    it('should have onChangeText prop equal to handleSearch prop', () => expect(wrapper.find('Styled(Input)').prop('onChangeText')).toEqual(
      props.handleSearchBar,
    ));
  });
});
