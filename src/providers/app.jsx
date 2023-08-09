import * as React from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import { Provider } from 'react-redux';
import {ErrorFallback} from 'components/shared';
import { store } from 'store/configureStore';

export const AppProvider = ({children}) => {
  return (
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
      </ErrorBoundary>
    </Provider>
  );
};