import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Dashboard, Login, Error } from './containers';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
