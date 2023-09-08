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
