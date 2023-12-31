import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutContextProvider } from './contexts/WorkoutContext';
import { AuthContextProvider } from './contexts/AuthContext';
import {SnackbarProvider} from 'notistack';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SnackbarProvider>
    <AuthContextProvider>
      <WorkoutContextProvider>
          <App />
      </WorkoutContextProvider>
    </AuthContextProvider>
  </SnackbarProvider>
);


