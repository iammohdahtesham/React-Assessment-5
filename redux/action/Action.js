import axios from 'axios';

export const getData = () => {
  //API hit
  return dispatch => {
    axios
      .get('https://random-data-api.com/api/v2/users')
      .then(response => {
        const users = response.data;
        dispatch({
          type: 'GETDATA',
          data: users,
        });
      })
      .catch(err => console.log(err));
  };
};

export const getaddressdata = () => {
  return dispatch => {
    axios
      .get('https://random-data-api.com/api/v2/addresses')
      .then(response => {
        const address = response.data;
        dispatch({type: 'FETCH_ADDRESS_SUCCESS', data: address});
      })
      .catch(error => {
        console.error('Error fetching address data:', error);
      });
  };
};
export const getMember = () => {
  return dispatch => {
    axios
      .get('https://random-data-api.com/api/v2/users?size=10')
      .then(response => {
        const member = response.data;
        dispatch({
          type: 'getMember',
          data: member,
        });
      })
      .catch(err => console.log(err));
  };
};
