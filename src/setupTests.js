/* eslint-disable */

import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { shallow, mount } from 'enzyme';

configure({ adapter: new Adapter() });
global.shallow = shallow;
global.mount = mount;
