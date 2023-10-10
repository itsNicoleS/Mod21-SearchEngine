import { ApolloClient, inMemoryCache, createHttpLink } from '@apollo/client'; 

const httpLink = createHttpLink({
    uri: 'graphql', 
}); 

const client = new ApolloClient({
    link: httpLink, 
    cache: new inMemoryCache(), 
}); 

export default client; 