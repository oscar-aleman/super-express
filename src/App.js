import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import logo from './logo.png';
import './App.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

const App = () => {
  return (
    <div>
      <p>Contáctanos al WhatsApp: +506 7060-8880</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo super express" />
        <h1>Super Express</h1>
      </header>
      <Authenticator>
        {({user}) => (
          <main>
            <h1>Bienvenido {user.username}</h1>
          </main>
        )}
      </Authenticator>
    </div>
  )
}

export default App;