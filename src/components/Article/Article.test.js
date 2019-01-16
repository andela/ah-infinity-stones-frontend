import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import store from '../../redux/store';
import Article from './index';


describe('Single Article Component', () => {
  let articleContainer;
  let reduxArticle;
  beforeEach(() => {
    articleContainer = shallow(<Article />);
    reduxArticle = shallow(
      <Provider store={store}>
        <BrowserRouter>
          <Article />
        </BrowserRouter>
      </Provider>,
    );
  });
  it('Article renders successfully', () => {
    // let article_div = articleContainer.find('div')
    expect(articleContainer.exists()).toEqual(true);
  });
  it('render 1 Article component', () => {
    expect(articleContainer).toHaveLength(1);
  });
  it('article component should match snapshot', () => {
    expect(articleContainer.getElements()).toMatchSnapshot();
  });
});

describe('single article mount', () => {
  let reduxArticle;
  const match = {
    params: {
      art_slug: 'js-testing',
    },
  };
  const article = { art_slug: "smileys", title: "smileys", description: "emoji are working", body: "<p>there…y are that's awespome</p>", read_time: 1};
  it('Article renders successfully', () => {
    // let article_div = articleContainer.find('div')
    reduxArticle = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Article match={match} article={article} />
        </BrowserRouter>
      </Provider>,
    );
    expect(reduxArticle.exists()).toEqual(true);
  });
});
