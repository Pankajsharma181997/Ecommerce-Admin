import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';

function App() {
  return (
    <>
      <Router>
      <Layout />
        <Switch>
          <Route path='/' exact component={Home} ></Route>
          <Route path='/signin'  component={Signin} ></Route>
          <Route path='/signup'  component={Signup} ></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
