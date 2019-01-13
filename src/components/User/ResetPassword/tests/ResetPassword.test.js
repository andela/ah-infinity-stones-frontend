import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Resetlink from '../../../Forms/PasswordResetform/Resetlink';
import store from '../../../../redux/store';

describe('ResetPassword link component', () => {
  let resetLinkContainer;
  let reduxResetLink;
  beforeEach(() => {
    resetLinkContainer = shallow(<Resetlink className="form_container" />);
    reduxResetLink = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Resetlink />
        </BrowserRouter>
      </Provider>,
    );
  });
  it('form renders successfully', () => {
    expect(resetLinkContainer.exists()).toEqual(true);
  });
  it('Should match snapshots', () => {
    expect(resetLinkContainer).toMatchSnapshot();
  });
  it('Reset link should render with redux store', () => {
    expect(reduxResetLink.exists()).toEqual(true);
  });
  it('renders props correctly', () => {
    const Reset = shallow(<Resetlink name="Resetlink" />);
    expect(Reset.instance().props.name).toBe('Resetlink');
  });
});
