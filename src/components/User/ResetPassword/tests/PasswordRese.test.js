import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ResetPassword from '../index';
import store from '../../../../redux/store';

describe('ResetPassword form', () => {
  let passwordkContainer;
  let reduxpassword;
  beforeEach(() => {
    passwordkContainer = shallow(<ResetPassword className="form_container" />);
    reduxpassword = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ResetPassword />
        </BrowserRouter>
      </Provider>,
    );
  });
  it('form renders successfully', () => {
    expect(passwordkContainer.exists()).toEqual(true);
  });
  it('Should match snapshots', () => {
    expect(passwordkContainer).toMatchSnapshot();
  });
  it('Reset link should render with redux store', () => {
    expect(reduxpassword.exists()).toEqual(true);
  });
  it('renders props correctly', () => {
    const Reset = shallow(<ResetPassword name="ResetPassword" />);
    expect(Reset.instance().props.name).toBe('ResetPassword');
  });
});
