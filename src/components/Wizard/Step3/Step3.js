import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateWizard } from "../../../ducks/reducer";

import './Step3.css';

class Step3 extends Component {
  constructor(props) {
    super(props);
    const { wizard } = this.props;
    this.state= { 
      image: wizard.image || ''
    };

    this.handleChange = this.handleChange.bind( this );
  }

  handleChange( prop, val ) {
    this.setState({ [prop]: val });
  }

  render() {
    const { image } = this.state;
    const { updateWizard } = this.props;

    return (
      <div className="Step__container">
        <div className="Step3__image_container dark_green_border grey_bgc">
          <img className="open-sans-bold Step3__image" src={ image } alt="Preview" />
        </div>

        <div className="Step3__url_container">
          <span className="open-sans-bold Step__input_header">Image URL</span>
        </div>
        <input className="Step__input dark_green_border open-sans" value={ image } onChange={ (e) => this.handleChange('image', e.target.value) } />

        <div className="Step__btn_container">
          <Link className="Step__btn_previous darkest_green_bgc" to="/wizard/2" onClick={ () => updateWizard({ image })}>
            Previous Step
          </Link>

          <Link className="Step__btn_next darkest_green_bgc" to="/wizard/4" onClick={ () => updateWizard({ image })}>
            Next Step
          </Link>
        </div>
      </div>
    )
  }
}

export default connect( state => ({ wizard: state.wizard }), { updateWizard } )( Step3 );