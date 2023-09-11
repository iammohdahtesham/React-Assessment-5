const initialState = {
  data: [],
  member: [],
  address: [],
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GETDATA':
      return {...state, data: action.data};
    case 'getMember':
      return {...state, member: action.data};
    case 'FETCH_ADDRESS_SUCCESS':
      return {...state, address: action.data};

    default:
      return state;
  }
};
