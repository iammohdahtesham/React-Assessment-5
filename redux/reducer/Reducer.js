const initialState = {
  data: [],
  member: [],
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GETDATA':
      return {...state, data: action.data};
    case 'getMember':
      return {...state, member: action.data};
    default:
      return state;
  }
};
