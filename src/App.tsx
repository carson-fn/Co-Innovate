import React from 'react';
import './App.css';
import LandingPage from './pages/landing/LandingPage';
import { BrowserRouter } from 'react-router-dom';
import { router } from './router';
import { RouterProvider } from 'react-router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
