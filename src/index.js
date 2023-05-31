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
// import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

// const client = ApolloClient({
//   uri:"https://graphqlzero.almansi.me/api",
//   catch:new InMemoryCache(),
// })



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ApolloProvider client={client} > */}
    <BrowserRouter>
      <AppProvider i18n={enTranslations}>
        <App />
      </AppProvider>
    </BrowserRouter>
    {/* </ApolloProvider> */}
  </React.StrictMode>
);