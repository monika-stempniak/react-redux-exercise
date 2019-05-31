const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

export const asyncReducerFactory = (name) => {
  return (state = initialState, action) => {
    switch (action.type) {
      case `FETCH_${name}_REQUEST`:
        return { data: null, isLoading: true, error: null };
      case `FETCH_${name}_SUCCESS`:
        return {
          data: action.payload,
          isLoading: false,
          error: null,
        };
      case `FETCH_${name}_FAILURE`:
        return {
          data: null,
          isLoading: false,
          error: action.payload,
        };
      case `ADD_${name}_REQUEST`:
        return { data: null, isLoading: true, error: null };
      case `ADD_${name}_SUCCESS`:
        return {
          data: action.payload,
          isLoading: false,
          error: null,
        };
      case `ADD_${name}_FAILURE`:
        return {
          data: null,
          isLoading: false,
          error: action.payload,
        };
      case `DELETE_${name}_REQUEST`:
        return { data: null, isLoading: true, error: null };
      case `DELETE_${name}_SUCCESS`:
        return {
          data: action.payload,
          isLoading: false,
          error: null,
        };
      case `DELETE_${name}_FAILURE`:
        return {
          data: null,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
};
