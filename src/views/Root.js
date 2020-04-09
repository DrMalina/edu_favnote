import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Tweets from 'views/Tweets';
import Articles from 'views/Articles';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/articles" component={Articles} />
        <Route path="/tweets" component={Tweets} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
