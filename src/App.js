import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import {store} from './components/Redux/store';

function App() {
  return (
    <Provider store={store} >
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Dashboard />
      </main>
    </div>
    </Provider>
  );
}

export default App;