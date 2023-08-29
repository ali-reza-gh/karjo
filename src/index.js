import React from 'react';
import ReactDOM from 'react-dom/client';

//Components
import App from './App';

//Styles
import './index.css';

//React-Router-Dom
import { BrowserRouter } from 'react-router-dom';

//Polaris-Shopify
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from "@shopify/polaris";

//GQL
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client =new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client} >
      <BrowserRouter>
        <AppProvider i18n={enTranslations}>
          <App />
        </AppProvider>
      </BrowserRouter>
    </ApolloProvider>
);