import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Tab, { TabProps } from '../Tab';

const onTabPress = jest.fn();

describe('<Tab /> Component', () => {
  let wrapper: ShallowWrapper<TabProps>;
  let onPressFn: any;

  const props: TabProps = {
    tabName: 'stats',
    isActive: false,
    onTabPress,
    color: '#aab',
  };

  beforeEach(() => {
    wrapper = shallow(<Tab {...props} />);
    onPressFn = wrapper.find('Styled(Button)').prop('onPress');
    onPressFn();
  });

  afterEach(() => {
    onTabPress.mockClear();
  });

  it('should render one Button component', () => expect(wrapper.find('Styled(Button)')).toHaveLength(1));

  it('should call once onTabPress when activate onPress prop', () => expect(onTabPress).toHaveBeenCalledTimes(1));

  it('should call onTabPress with "stats"', () => expect(onTabPress).toHaveBeenCalledWith('stats'));

  it('should have "transparent" color when the tab does not active', () => expect(wrapper.find('Styled(Button)').prop('style')).toEqual({
    backgroundColor: 'transparent',
  }));

  it('should have the color prop when the tab is active', () => {
    wrapper.setProps({ isActive: true });
    expect(wrapper.find('Styled(Button)').prop('style')).toEqual({
      backgroundColor: '#aab',
    });
  });

  it('should render one Text component', () => expect(wrapper.find('Styled(Text)')).toHaveLength(1));

  it('should have the color prop when the tab does not is active', () => expect(wrapper.find('Styled(Text)').prop('style')).toEqual(
    expect.arrayContaining([{ color: '#aab' }]),
  ));

  it('should have the color prop equal to white when the tab is active', () => {
    wrapper.setProps({ isActive: true });
    expect(wrapper.find('Styled(Text)').prop('style')).toEqual(
      expect.arrayContaining([{ color: 'white' }]),
    );
  });

  it('should render "STATS" as the tab name', () => expect(
    wrapper
      .find('Styled(Text)')
      .first()
      .prop('children'),
  ).toBe('STATS'));
});
