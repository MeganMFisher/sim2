import React, { Component } from "react";
import './Property.css';

import deleteIcon from '../../../assets/delete_icon.png';

export default class Property extends Component {
  render() {
    const { id, address, city, description, desired_rent, image, loan, monthly_mortgage, name, recommended_rent, state, zip, deleteProperty } = this.props;
    return (
      <div className="grey_bgc Property__container">
        <div className="Property__image_container">
          <img className="Property__image" src={ image } alt="home" />
        </div>

        <div className="Property__dd_container">
          <div className="Property__description_parent">
            <div className="Property__description_child">
              <span className="open-sans-bold Property__description_name">{ name }</span>
              <span className="open-sans Property__description_description">{ description }</span>
            </div>
          </div>

          <div className="Property__detail_parent">
            <div className="Property__detail_child">
              <span className="open-sans-bold">Loan: ${ loan }</span>
              <span className="open-sans-bold">Monthly Mortgage: ${ monthly_mortgage }</span>
              <span className="open-sans-bold">Recommended Rent: ${ recommended_rent }</span>
              <span className="open-sans-bold">Desired Rent: ${ desired_rent }</span>
              <span className="open-sans-bold">Address: { address }</span>
              <span className="open-sans-bold">City: { city }</span>
              <span className="open-sans-bold">State: { state }</span>
              <span className="open-sans-bold">Zip: { zip }</span>
              <img className="open-sans-bold Property__btn_delete" onClick={ () => deleteProperty( id ) } src={ deleteIcon } alt="delete" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}