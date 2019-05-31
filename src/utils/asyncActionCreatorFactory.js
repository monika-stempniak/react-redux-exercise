export const asyncActionCreatorFactory = (name, thunk) => () => {
  return (dispatch) => {
    dispatch({ type: `FETCH_${name}_REQUEST` });

    return dispatch(thunk)
      .then((response) => response.data)
      .then((data) =>
        dispatch({ type: `FETCH_${name}_SUCCESS`, payload: data })
      )
      .catch((error) =>
        dispatch({ type: `FETCH_${name}_FAILURE`, payload: error })
      );
  };
};
