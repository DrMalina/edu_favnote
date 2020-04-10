import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Tweets from 'views/Tweets';
import Articles from 'views/Articles';
import { routes } from 'routes';
import DetailsPage from './DetailsPage';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
        <Route exact path={routes.notes} component={Notes} />
        <Route path={routes.note} component={DetailsPage} />
        <Route exact path={routes.articles} component={Articles} />
        <Route path={routes.article} component={DetailsPage} />
        <Route exact path={routes.tweets} component={Tweets} />
        <Route path={routes.tweet} component={DetailsPage} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
