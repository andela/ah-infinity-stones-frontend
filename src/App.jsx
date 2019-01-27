import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './redux/store';
import Navbar from './views/Navbar';
import Signup from './views/Signup';
import Login from './views/Login';
import ResetPassword from './components/User/ResetPassword';
import ResetLink from './components/User/ResetPassword/ResetLink';
import ArticleCreationForm from './components/Forms/articles/ArticleCreationForm';
import ArticleUpdateForm from './components/Forms/articles/ArticleUpdateForm';
import Article from './components/Article';
import ArticleByTags from './components/Articles/ArticleByTags';
import AllArticlesView from './views/articles/allArticles';
import Footer from './views/Footer';
import Profile from './views/Profile';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={AllArticlesView} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/user/ResetPassword" component={ResetPassword} />
            <Route path="/user/Resetlink" component={ResetLink} />
            <Route exact path="/articles" component={ArticleCreationForm} />
            <Route exact path="/articles/:art_slug" component={Article} />
            <Route path="/tags/:tag" component={ArticleByTags} />
            <Route exact path="/articles/:art_slug/edit" component={ArticleUpdateForm} />
            <Route path="/profile" component={Profile} />
           <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
