import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateWizard } from "../../../ducks/reducer";

import './Step4.css';

class Step4 extends Component {
  constructor(props) {
    super(props);
    const { wizard } = this.props;
    this.state={ 
      loan_amount: wizard.loan_amount || '',
      monthly_mortgage: wizard.monthly_mortgage || ''
    }

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( prop, val ) {
    this.setState({ [prop]: val });
  }

  render() {
    const { loan_amount, monthly_mortgage } = this.state;
    const { updateWizard } = this.props;

    return (
      <div className="Step__container">
        <div className="Step4__loan_container">
          <span className="open-sans-bold Step__input_header">Loan Amount</span>
        </div>
        <input className="Step__input dark_green_border open-sans" value={ loan_amount } onChange={ (e) => this.handleChange('loan_amount', e.target.value) } />

        <div className="Step4__mortgage_container">
          <span className="open-sans-bold Step__input_header">Monthly Mortgage</span>
        </div>
        <input className="open-sans Step__input dark_green_border" value={ monthly_mortgage } onChange={ (e) => this.handleChange('monthly_mortgage', e.target.value) } />

        <div className="Step__btn_container">
          <Link className="Step__btn_previous darkest_green_bgc" to="/wizard/3" onClick={ () => updateWizard({ loan_amount, monthly_mortgage })}>
            Previous Step
          </Link>

          <Link className="Step__btn_next darkest_green_bgc" to="/wizard/5" onClick={ () => updateWizard({ loan_amount, monthly_mortgage })}>
            Next Step
          </Link>
        </div>
      </div>
    )
  }
}

export default connect( state => ({ wizard: state.wizard }), { updateWizard } )( Step4 );