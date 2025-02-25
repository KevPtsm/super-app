// filepath: /c:/Users/kpiet/Desktop/Startup/super-app/App.tsx
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import StoreProvider from './src/redux/store';

const App = () => {
  return (
    <StoreProvider>
      <AppNavigator />
    </StoreProvider>
  );
};

export default App;