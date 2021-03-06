import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router';
import { connect } from 'react-redux';

import * as ACTIONS from '../store/actions/actions';

import '../App.css';

import history from '../utils/history';
import Auth from '../utils/auth';
import AuthCheck from '../utils/auth-check';

import Profile from './profile';
import Header from './header';
import ServerTest from './server_test';

import Home from '../functional/home';
import PrivateComponent from '../functional/privatecomponent';
import Callback from '../functional/callback';



export const auth = new Auth();


const handleAuthentication = (props) => {
  if(props.location.hash) {
    auth.handleAuth()
  }
}


//Higher Order Component for route protection. Requires authentication to render component.
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route {...rest}
   render={props => auth.isAuthenticated() === true
     ? <Component auth={auth} {...props} />
     : <Redirect to={{pathname: "/"}} />
    }
  />
);



class Routes extends Component {
  componentDidMount() {
    if(auth.isAuthenticated()) {
      this.props.login_success()
    } else if (!auth.isAuthenticated()) {
      this.props.login_failure()
      }
    }

render() {
  return(
    <Router history={history}>
      <div className="FlexColumn">
          <Header auth={auth} authed={this.props.isAuthenticated}/>
          <div className="FlexRowMain">
                <Switch>
                  {/* Public unprotected routes*/ }
                  <Route exact path='/' component={ Home }  />
                  <Route path='/servertest' component={ ServerTest }  />
                  <Route path="/authcheck" render={(props) => <AuthCheck auth={auth} {...props} />} />

                  {/* Route for automatically handling authentication and callback */}
                  <Route path="/callback" render={(props) => {handleAuthentication(props); return <Callback {...props} /> }}/>

                  {/* Pattern for non-public routes. Use in exact same way for more components requiring isAuthenticated */}
                  <PrivateRoute path="/profile"  auth={auth} component={Profile} />
                  <PrivateRoute path="/component1"  auth={auth} component={ PrivateComponent } />
                </Switch>
            </div>
        </div>
      </Router>
   )}
}


function mapStateToProps(state) {
  return {
      isAuthenticated: state.auth_reducer.isAuthenticated
  }
}

function mapDispatchToProps (dispatch) {
  return {
    login_success: () => dispatch(ACTIONS.login_success()),
    login_failure:  () => dispatch(ACTIONS.login_failure())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Routes);
