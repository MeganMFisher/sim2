import axios from "axios";

const initialState = {
  user: null,
  properties: [],
  wizard: {
    name: null,
    description: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    image: null,
    loan_amount: null,
    monthly_mortgage: null,
    desired_rent: null,
    recommended_rent: null
  }
};

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const LOGOUT = "LOGOUT";

const GET_PROPERTIES = "GET_PROPERTIES";
const CREATE_PROPERTY = "CREATE_PROPERTY";
const DELETE_PROPERTY = "DELETE_PROPERTY";


export default ( state = initialState, action ) => {
  const { payload } = action;

  switch( action.type ) {
    case LOGIN + '_FULFILLED':
      return Object.assign({}, state, { user: payload, properties: [] })

    case REGISTER + '_FULFILLED':
      return Object.assign({}, state, { user: payload, properties: [] })

    case LOGOUT + '_FULFILLED':
      return Object.assign({}, initialState);

    case GET_PROPERTIES + '_FULFILLED':
      return Object.assign({}, state, { properties: payload });

    case CREATE_PROPERTY + '_FULFILLED':
      return Object.assign({}, state, { properties: payload });

    case GET_PROPERTIES + '_REJECTED':
      return Object.assign({}, initialState);

    case DELETE_PROPERTY + '_FULFILLED':
      return Object.assign({}, state, { properties: payload });


    default: return state;
  }
}

export function login( obj, history ) {
  const promise = axios.post( '/api/auth/login', obj ).then( response => {
    history.push('/dashboard');
    return response.data;
  });

  return {
    type: LOGIN,
    payload: promise
  }
}

export function register( obj, history ) {
  const promise = axios.post( '/api/auth/register', obj ).then( response => {
    history.push('/dashboard');
    return response.data;
  });

  return {
    type: REGISTER,
    payload: promise
  }
}

export function logout( history ) {
  const promise = axios.post( '/api/auth/logout' ).then( () => {
    history.push('/');
  });

  return {
    type: LOGOUT,
    payload: promise
  }
}

export function getProperties( history ) {
  const promise = axios.get( '/api/properties' ).then( response => response.data )
    .catch( () => history.push('/') );

  return {
    type: GET_PROPERTIES,
    payload: promise
  };
}

export function createProperty( obj, history ) {
  const promise = axios.post( '/api/properties', obj ).then( response => {
    history.push('/dashboard');
    return response.data;
  });

  return {
    type: CREATE_PROPERTY,
    payload: promise
  };
}

export function deleteProperty( id ) {
  const promise = axios.delete( `/api/properties/${id}` ).then( response => response.data );

  return { 
    type: DELETE_PROPERTY,
    payload: promise
  };
}
