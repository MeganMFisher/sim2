import React, { Component } from "react";
import router from '../../routes/wizard';
import Header from '../Header/Header';
import './Wizard.css';

import StepHighlight from './StepHighlight/StepHighlight';

import { connect } from 'react-redux';
import { logout } from '../../ducks/reducer';

class Wizard extends Component {
  render() {
    const step = this.props.location.pathname[ this.props.location.pathname.length - 1 ];
    const { history, logout } = this.props;

    return (
      <div className="Wizard__router_container">
        <Header history={ history } logout={ logout } />
  
        <div className="Wizard__step_container">
          <div className="Wizard__stepHeader_container">
            <span className="open-sans-bold Wizard__stepHeader_span"> Add new listing </span>
            <button className="open-sans-bold Wizard__stepHeader_btn pink_bgc"
                    onClick={ () => history.push('/dashboard') }> Cancel </button>
          </div>
  
          <div className="Wizard__stepHighlight_container">
            <span className="open-sans Wizard__stepHighlight_span"> Step { step } </span>
            <StepHighlight step={ parseInt(step, 10) } />
          </div>
  
          { router }
        </div>
      </div>
    )
  }
}

export default connect( state => state, { logout } )( Wizard );