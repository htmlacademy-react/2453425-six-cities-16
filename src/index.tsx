import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { mockOffers } from './mocks/offers';
import { store } from './store';
import { setOffers } from './store/action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(setOffers());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App mockOffers={mockOffers} />
    </Provider>
  </React.StrictMode>
);
