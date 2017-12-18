import React, { Component } from "react";
import Filter from "./Filter/Filter";

import { Link } from "react-router-dom";
import { logout, getProperties, deleteProperty, filterProperties } from "../../ducks/reducer";
import { connect } from "react-redux";

import Header from '../Header/Header';
import Property from './Property/Property';

import './Dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    const { getProperties, history } = this.props;
    getProperties( history );
  }

  render() {
    const { history, logout, properties, deleteProperty, getProperties, filterProperties } = this.props;

    const propertyComponents = properties.map( prop => (
      <Property
        key={ prop.propertyid }
        id={ prop.propertyid }
        address={ prop.address }
        city={ prop.city }
        description={ prop.description }
        desired_rent={ prop.desiredrent }
        image={ prop.image }
        loan={ prop.loan }
        monthly_mortgage={ prop.monthlymortgage }
        name={ prop.name }
        recommended_rent={ prop.recommendedrent }
        state={ prop.state }
        zip={ prop.zip }
        deleteProperty={ deleteProperty }
      />
    ));

    return (
      <div className="Dashboard__container white_bgc">
        <Header history={ history } logout={ logout } />

        <Link to="/wizard/1">
          <button className="Dashboard__button_new lightest_green_bgc open-sans-bold">Add new property</button>
        </Link>

        <Filter getProperties={ getProperties } filterProperties={ filterProperties } />

        <div className="Dashboard__homeSpan_container">
          <span className="open-sans-bold"> Home Listings </span>
        </div>

        <div className="Dashboard__properties_container">
          { propertyComponents }
        </div>
      </div>
    )
  }
}

export default connect( state => ({ user: state.user, properties: state.properties }), { logout, getProperties, deleteProperty, filterProperties } )( Dashboard );