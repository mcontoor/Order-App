/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import OrdersNavigator from './navigation/OrdersNavigation';

import { AppRegistry } from 'react-native';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

// Create the client as outlined in the setup guide
const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors)
                graphQLErrors.forEach(({ message, locations, path }) =>
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                    ),
                );
            if (networkError) console.log(`[Network error]: ${networkError}`);
        }),
        new HttpLink({
            uri: 'http://127.0.0.1:5001/',
            credentials: 'same-origin'
        })
    ]),
    cache: new InMemoryCache()
});



const App = () => {
    return (
        <ApolloProvider client={client}>
            <OrdersNavigator />
        </ApolloProvider>
    );
};

export default App;

AppRegistry.registerComponent('MyApplication', () => App);
