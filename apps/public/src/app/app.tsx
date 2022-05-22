import React from 'react';
import '../styles/app.less';
import '../styles/tailwind.css';
import AppRoutes from './app-routes';
import { AuthProvider } from './contexts/auth/context';

export function App() {
  return (
    <AuthProvider>
      <AppRoutes></AppRoutes>
    </AuthProvider>
  );
}

export default App;
