const initialState = {
    data: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INPUTDATA':
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;