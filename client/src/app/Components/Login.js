import React, { Component } from 'react';

import { connect } from "react-redux";
import { doLogin } from "../js/actions/index";

import { LoginAccount } from "../config";
import { validate } from '../js/helpers/validate';

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      email:LoginAccount.email,
      password:LoginAccount.password
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.props.getMessages(this.socket_name)
  }
  
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { email,password } = this.state;

    const validateEmail= validate(email, 'email', 'Email Address')
    if(true != validateEmail)
    {
      await this.setState({ message: validateEmail})
      return false
    }

    const validatePassword= validate(password, '','Password')
    if(true != validatePassword)
    {
      await this.setState({ message: validatePassword})
      return false
    }
    this.setState({ disabled: true })
    this.props.doLogin( email, password );
  }
  
  async componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate prevProps',prevProps)
    if(this.props.loggedIn){
      console.log('You have logged in')
    }
  }
  //
  render() {
    return (
      <div className="container">
        <div className="my-auto">
          <div class="card align-middle">
            <div class="card-header">
              Login Please 
            </div>
            <div class="card-body">
              <form onSubmit={this.handleSubmit}>

                {this.state.message?(
                  <p className="alert alert-danger">
                      <code>{this.state.message}</code>.
                  </p>
                ):null}

                {this.props.message?(
                  <p className="alert alert-danger">
                      <code>{this.props.message}</code>.
                  </p>
                ):null}

                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    disabled={ this.state.disabled }
                    type="text"
                    className="form-control"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    disabled={ this.state.disabled }
                    type="password"
                    className="form-control"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>

                <button type="submit" disabled={ this.state.disabled } className="btn btn-success btn-lg">
                  SAVE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return {
    doLogin: (email,password) => dispatch(doLogin( email, password ) ),
  };
}
const mapStateToProps = ( { loggedIn, message  } ) => {
  return { 
    message,
    loggedIn
  };
};
const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
export default Login;
