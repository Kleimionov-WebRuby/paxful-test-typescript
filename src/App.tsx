import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import TradesDialogs from 'pages/TradesDialogs';
import Loader from 'components/controls/Loader';
import SimpleToast from 'components/controls/ToastContainer';
import store from 'store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loader />}>
          <TradesDialogs />
          <SimpleToast />
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
