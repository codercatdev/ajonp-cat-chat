import React from 'react';
import './App.css';
import GridView from '../GridView';
import { withAuthenticator } from 'aws-amplify-react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GridView />
      </header>
    </div>
  );
}

export default withAuthenticator(App, true);
