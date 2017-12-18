import React, { Component } from "react";

import './Filter.css';

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      amount: ''
    };

    this.reset = this.reset.bind( this );
  }

  handleChange( val ) {
    this.setState({ amount: val });
  }

  reset() {
    const { getProperties } = this.props;

    this.setState({ amount: '' });
    getProperties();
  }

  render() {
    const { filterProperties } = this.props;
    const { amount } = this.state;
    return (
      <div className="Filter__container">
        <span className="open-sans Filter__description">List properties with "desired rent" greator than: $</span>
        <input className="open-sans dark_green_border Filter__input" onChange={ (e) => this.handleChange( e.target.value ) } placeholder="0" value={ amount } />
        <button className="open-sans lightest_green_bgc Filter__btn" onClick={ () => filterProperties( amount ) } > Filter </button>
        <button className="open-sans darkest_green_bgc Filter__btn Filter__btn_reset" onClick={ this.reset } > Reset </button>
      </div>
    )
  }
}