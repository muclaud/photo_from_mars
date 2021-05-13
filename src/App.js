import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.css';
import { Container } from 'semantic-ui-react';

import MenuBar from './components/MenuBar';
import PhotosPage from './pages/PhotosPage';
import InfoPage from './pages/InfoPage';

function App() {
  return (
    <Router>
      <MenuBar />
      <Container>
        <Switch>
          <Route exact path='/' component={PhotosPage} />
          <Route exact path='/info' component={InfoPage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
