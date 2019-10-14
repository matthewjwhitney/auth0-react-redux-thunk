import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as ACTIONS from '../store/actions/actions';




class ServerTest extends Component {
  componentDidMount() {
     axios.get('/api/test')
      .then(res => this.props.server_success(res.data))
      .catch(function (error) {
          console.log(error);
        });
     }

    render() {
      return (
      <div className="FlexColumn">
      <p> Server Status:</p>
      {  this.props.server_response
        ? <small> { this.props.server_response.title } </small>
        : <small> Express Server Offline </small> }
      </div>
      )}
}

function mapStateToProps(state) {
  return {
    server_response: state.reducer1.server_response
  };
}

function mapDispatchToProps (dispatch) {
  return {
    server_success: (res) => dispatch(ACTIONS.set_server_res(res))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerTest);
