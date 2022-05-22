import { AuthProvider } from '@eltnt/shared/auth';
import React from 'react';
import '../styles/app.less';
import '../styles/tailwind.css';
import AppRoutes from './app-routes';

export function App() {
  return (
    <AuthProvider>
      <AppRoutes></AppRoutes>
    </AuthProvider>
  );
}

export default App;
