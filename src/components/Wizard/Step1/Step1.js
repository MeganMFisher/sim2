import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateWizard } from "../../../ducks/reducer";

import './Step1.css';

class Step1 extends Component {
  constructor(props) {
    super(props);
    const { wizard } = this.props;
    this.state={ 
      name: wizard.name || '',
      description: wizard.description || ''
    };

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( prop, val ) {
    this.setState({ [prop]: val });
  }

  render() {
    const { name, description } = this.state;
    const { updateWizard } = this.props;

    return (
      <div className="Step__container">
        <div className="Step1__name_container">
          <span className="open-sans-bold Step__input_header Step1__name_header">Property Name</span>
        </div>
        <input className="Step__input dark_green_border open-sans" value={ name } onChange={ (e) => this.handleChange('name', e.target.value) } />

        <div className="Step1__description_container">
          <span className="open-sans-bold Step__input_header Step1__description_header">Property Description</span>
        </div>
        <textarea className="Step__input dark_green_border open-sans Step1__description_input" value={ description } onChange={ (e) => this.handleChange('description', e.target.value) } />

        <div className="Step1__btn_container">
          <Link className="Step__btn_next darkest_green_bgc" to="/wizard/2" onClick={ () => updateWizard({ name, description })}>
            Next Step
          </Link>
        </div>
      </div>
    )
  }
}

export default connect( state => ({ wizard: state.wizard }), { updateWizard } )( Step1 );