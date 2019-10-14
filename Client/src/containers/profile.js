import React, { Component } from 'react'
import { connect } from 'react-redux';


class Profile extends Component {
  RenderProfile = (props) => (
    <div className="FlexColumn">
     <div className="FlexRow">
       <h1>Welcome:
       <br />
          {props.profile.profile.nickname}
       </h1>
     </div>
     <div className="FlexRow">
      <img src={props.profile.profile.picture} alt="" />
     </div>
     <div className="FlexRow">
      <h4> Email:
      <br />
        { props.profile.profile.email }
       </h4>
    </div>
    <div className="FlexRow">
      <h4> Name:
        <br />
        { props.profile.profile.name }
      </h4>
   </div>
   <div className="FlexRow">
    <h4> Email Verified: { props.profile.profile.email_verified ? <p>Yes</p> : <p> No</p> } </h4>
  </div>
</div>);

render() {
  return (
  <div className="FlexRow">
      <div className="FlexColumn">
        {  <this.RenderProfile profile={this.props.profile} /> }
      </div>
    </div>
    )}
}

function mapStateToProps(state) {
    return {
        profile: state.auth_reducer.UserProfile,
    };
}

export default connect(mapStateToProps)(Profile);
