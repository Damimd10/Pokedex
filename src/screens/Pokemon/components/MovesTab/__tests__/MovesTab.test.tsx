import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import MovesTab, { MovesTabProps } from '../MovesTab';
import { toCapitalizeText } from '../../../../../shared/utils';

jest.mock('../../../../../shared/utils', () => ({
  toCapitalizeText: jest.fn(),
}));

describe('<MovesTab /> Component', () => {
  let wrapper: ShallowWrapper<MovesTabProps>;

  const props: MovesTabProps = {
    moves: [{ level: 1, name: 'punch', typeIcon: 1 }],
  };

  beforeEach(() => {
    (toCapitalizeText as jest.Mock).mockReturnValue("Punch");
    wrapper = shallow(<MovesTab {...props} />);
  });

  afterEach(() => {
    (toCapitalizeText as jest.Mock).mockClear();
  });

  describe('rendering', () => {
    it('should render one View component', () => expect(wrapper.find('View')).toHaveLength(1));

    it('should render one Style(ListItem) component into View', () => expect(wrapper.find('View').find('Styled(ListItem)')).toHaveLength(1));

    it('should render one Styled(Body) component into ListItem', () => expect(
      wrapper.find('Styled(ListItem)').find('Styled(Body)'),
    ).toHaveLength(1));

    it('should render two Text components into Body', () => expect(wrapper.find('Styled(Body)').find('Styled(Text)')).toHaveLength(
      2,
    ));

    it('should render "Punch" for the first Text component', () => expect(
      wrapper
        .find('Styled(Text)')
        .first()
        .prop('children'),
    ).toBe('Punch'));

    it('should render "Level 1" for the second Text component', () => expect(
      wrapper
        .find('Styled(Text)')
        .at(1)
        .first()
        .prop('children'),
    ).toBe('Level 1'));
  });

  it('should call toCapitalizeText once', () => expect(toCapitalizeText).toHaveBeenCalledTimes(1));

  it('should call toCapitalizeText with the move name', () => expect(toCapitalizeText).toHaveBeenCalledWith('punch'))

  it('should render one Right component into ListItem', () => expect(wrapper.find('Styled(ListItem)').find('Styled(Right)')).toHaveLength(
    1,
  ));

  it('should render one Image Component into Right', () => expect(wrapper.find('Styled(Right)').find('Component')).toHaveLength(1));

  it('should have a source prop equal to typeIcon prop', () => expect(wrapper.find('Component').prop('source')).toBe(1));
});
