import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateWizard } from "../../../ducks/reducer";

import './Step2.css';

class Step2 extends Component {
  constructor(props) {
    super(props);
    const { wizard } = this.props;
    this.state={ 
      address: wizard.address || '',
      city: wizard.city || '',
      state: wizard.state || '',
      zip: wizard.zip || ''
    }

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( prop, val ) {
    this.setState({ [prop]: val });
  }

  render() {
    const { address, city, state, zip } = this.state;
    const { updateWizard } = this.props;

    return (
      <div className="Step__container">
        <div className="Step2__address_container">
          <span className="open-sans-bold Step__input_header">Address</span>
        </div>
        <input className="open-sans dark_green_border Step__input" value={ address } onChange={ (e) => this.handleChange('address', e.target.value) } />

        <div className="Step2__middle_container">
          <div className="Step2__city_container">
            <span className="open-sans-bold Step__input_header">City</span>
            <input className="open-sans dark_green_border Step__input" value={ city } onChange={ (e) => this.handleChange('city', e.target.value) } />
          </div>

          <div className="Step2__state_container">
            <span className="open-sans-bold Step__input_header">State</span>
            <input className="open-sans dark_green_border Step__input" value={ state } onChange={ (e) => this.handleChange('state', e.target.value) } />
          </div>
        </div>

        <div className="Step2__zip_container">
          <span className="open-sans-bold Step__input_header">Zip</span>
        </div>
        <div className="Step2__zipInput_container">
          <input className="open-sans dark_green_border Step__input Step2__zip_input" value={ zip } onChange={ (e) => this.handleChange('zip', e.target.value) } />
        </div>

        <div className="Step__btn_container">
          <Link className="Step__btn_previous darkest_green_bgc" to="/wizard/1" onClick={ () => updateWizard({ address, city, state, zip })}>
            Previous Step
          </Link>

          <Link className="Step__btn_next darkest_green_bgc" to="/wizard/3" onClick={ () => updateWizard({ address, city, state, zip })}>
            Next Step
          </Link>
        </div>
      </div>
    )
  }
}

export default connect( state => ({ wizard: state.wizard }), { updateWizard } )( Step2 );