import React from 'react';
import { BookMark } from './bookmark';


describe('Bookmark Component', () => {
  const preventDefault = jest.fn();
  const props = {
    bookmarkRequest: jest.fn(),
  };

  const wrapper = shallow(<BookMark {...props} />);

  it('Should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should find bookmark button', () => {
    expect(wrapper.find('.fav-btn').exists()).toBeTruthy();
  });

  it('Should find bookmark button', () => {
    wrapper.find('.fav-btn').simulate('click', { preventDefault });
    expect(props.bookmarkRequest).toHaveBeenCalled();
  });
});
