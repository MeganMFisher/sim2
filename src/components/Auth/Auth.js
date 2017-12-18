import React, { Component } from "react";

import { login, register } from '../../ducks/reducer';
import { connect } from "react-redux";

import './Auth.css';
import logo from '../../assets/auth_logo.png';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
    
    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( prop, val ) {
    this.setState({ [prop]: val });
  }

  render() {
    console.log('PROPS', this.props);
    const { username, password } = this.state;
    const { history, login } = this.props;

    return (
      <div className="Auth__container white_bgc">
        <img src={ logo } alt="logo" className="Auth__logo" />
        <span className="open-sans-bold Auth__input_header">Username</span>
        <input className="Auth__input dark_green_border" value={ username } onChange={ (e) => this.handleChange('username', e.target.value) } />

        <span className="open-sans-bold Auth__input_header">Password</span>
        <input className="Auth__input dark_green_border" value={ password } type="password" onChange={ (e) => this.handleChange('password', e.target.value) } />

        <div className="Auth__buttons_container">
          <button className="Auth__button_login lightest_green_bgc open-sans-bold" onClick={ () => login( { username, password }, history ) }>Login</button>
          <button className="Auth__button_register darkest_green_bgc open-sans-bold" onClick={ () => register( { username, password }, history ) }>Register</button>
        </div>
      </div>
    )
  }
}

export default connect( state => state, { login } )( Login );