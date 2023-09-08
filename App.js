import React from 'react';
import StackNavigation from './navigation/stackNavigtion/GetStarted';
import {Provider} from 'react-redux';
import Store from './redux/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <StackNavigation />
    </Provider>
  );
};

export default App;
