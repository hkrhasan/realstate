import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// hocs
import Layout from './hocs/Layout'
// component
import NotFound from './components/NotFound'
// containers
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import Listing from './containers/Listing'
import ListingDetail from './containers/ListingDetail'
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';

// style 
import './sass/main.scss';

// redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/listings' component={Listing} />
            <Route exact path='/listings/:id' component={ListingDetail} />
            <Route exact path='/login' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route component={NotFound} />
          </Switch>
      </Layout>
    </Router>
  </Provider>
)

export default App
