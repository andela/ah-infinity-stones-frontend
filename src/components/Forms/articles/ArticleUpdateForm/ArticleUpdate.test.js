import React from 'react';
import { shallow, mount } from 'enzyme';
import ArticleUpdateForm from './index';


describe('Article Update Component', () => {
  let articleUpdateContainer;
  beforeEach(() => {
    articleUpdateContainer = shallow(<ArticleUpdateForm />);
  });
  it('ArticleUpdateForm renders successfully', () => {
    expect(articleUpdateContainer.exists()).toEqual(true);
  });
  it('render 1 Article Update compoment', () => {
    expect(articleUpdateContainer).toHaveLength(1);
  });
  it('article update component should match snapshot', () => {
    expect(articleUpdateContainer.getElements()).toMatchSnapshot();
  });
});
