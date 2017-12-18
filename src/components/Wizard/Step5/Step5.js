import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateWizard, resetWizard, createProperty } from "../../../ducks/reducer";

import './Step5.css';

class Step5 extends Component {
  constructor(props) {
    super(props);
    const { wizard } = this.props;
    this.state={ 
      recommended_rent: wizard.recommended_rent || parseInt(wizard.monthly_mortgage, 10) * 1.25,
      desired_rent: wizard.desired_rent || ''
    }

    this.handleChange = this.handleChange.bind( this );
    this.finishWizard = this.finishWizard.bind( this );
  }

  handleChange( prop, val ) {
    this.setState({ [prop]: val });
  }
  
  finishWizard() {
    const { history, wizard, createProperty, resetWizard } = this.props;
    const { recommended_rent, desired_rent } = this.state;
    let wizardProps = Object.assign({}, wizard);
    wizardProps.recommended_rent = recommended_rent;
    wizardProps.desired_rent = desired_rent;

    resetWizard();
    createProperty( wizardProps, history );
  }

  render() {
    const { recommended_rent, desired_rent } = this.state;
    const { updateWizard } = this.props;

    return (
      <div className="Step__container">
        <span className="open-sans-bold">Recommended Rent ${ recommended_rent }</span>

        <div className="Step5__rent_container">
          <span className="open-sans-bold Step__input_header">Desired Rent</span>
        </div>
        <input className="open-sans Step__input dark_green_border" value={ desired_rent } onChange={ (e) => this.handleChange('desired_rent', e.target.value) } />

        <div className="Step__btn_container">
          <Link className="open-sans Step__btn_previous darkest_green_bgc" to="/wizard/4" onClick={ () => updateWizard({ desired_rent, recommended_rent })}>
            Previous Step
          </Link>

          <button className="open-sans lightest_green_bgc Step5__btn_complete" onClick={ this.finishWizard }>Complete</button>
        </div>
      </div>
    )
  }
}

export default connect( state => ({ wizard: state.wizard }), { updateWizard, createProperty, resetWizard } )( Step5 );