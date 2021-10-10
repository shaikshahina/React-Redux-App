import React, { Component } from 'react';

import {connect} from 'react-redux'
import { updateUser,apiRequest} from "./actions/userAction";

class App extends Component {
  // onUpdateUser = () => dispatch(updateUser('sunny'))
  componentDidMount() {
    setTimeout(() => {
      this.props.apiRequest()

    },1500)
  }
  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <div onClick = {this.props.updateUser}>Update User</div>
        {this.props.user}
      </div>
    );
  }
}

const mapStateToProps = (state,props) => {
  // console.log(props)
  return {
    products: state.products,
    user: state.user,
    userPlusProp : `${state.user} ${props.aRandomProps}`
  }
};
const mapDispatchToProps = (dispatch,props) => {
  // console.log(props)
  return {
    updateUser: () => dispatch(updateUser('sunny')),
    apiRequest: () => dispatch(apiRequest())

  }
}

// const mergeProps = (propsFromState,propsFromDispatch,ownProps) => {
//   console.log(propsFromState,propsFromDispatch,ownProps);

// return {}

// }

export default connect(mapStateToProps,mapDispatchToProps)(App);