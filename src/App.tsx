import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Dashboard,
  Login,
  Error,
  PrivateRoute,
  AuthWrapper,
} from './containers';

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
};

export default App;
