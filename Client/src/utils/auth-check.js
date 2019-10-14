import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as ACTIONS from '../store/actions/actions';
import history from './history';


class AuthCheck extends Component {
  componentDidMount() {
    if(this.props.auth.isAuthenticated()) {
      this.props.login_success()
      this.props.profile_success(this.props.auth.userProfile)
      history.replace('/')
    } else {
      this.props.login_failure()
      this.props.profile_failure()
      history.replace('/')
    }
  }

   render() {
    return (
        <div>
       </div>
    )
  }
}


function mapStateToProps(state) {
  return {
      Authenticated: state.auth_reducer.isAuthenticated
  }
}


function mapDispatchToProps (dispatch) {
  return {
    login_success: () => dispatch(ACTIONS.login_success()),
    login_failure: () => dispatch(ACTIONS.login_failure()),
    profile_success: (profile) => dispatch(ACTIONS.get_profile(profile)),
    profile_failure: () => dispatch(ACTIONS.remove_profile())
  }
}


export default connect(null, mapDispatchToProps)(AuthCheck);
