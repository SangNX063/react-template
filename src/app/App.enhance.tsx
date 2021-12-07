import ErrorBoundary from '@components/ErrorBoundary';
import { configStore, IConfigStore } from '@src/redux';
import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import styled from 'styled-components';

const { store, persistor }: IConfigStore = configStore();

const Styled = styled.div``;

const enhance = (WrappedComponent: FunctionComponent) => (props: any) => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={<div>...</div>} persistor={persistor}>
          <Styled>{!!store && <WrappedComponent {...props} />}</Styled>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default enhance;
