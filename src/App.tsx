import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import store from './store';

import TradesDialogs from 'pages/TradesDialogs';
import Loader from 'components/controls/Loader';
import SimpleToast from 'components/controls/ToastContainer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loader />}>
          <div className="main-content">
            <TradesDialogs />
            <SimpleToast />
          </div>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
