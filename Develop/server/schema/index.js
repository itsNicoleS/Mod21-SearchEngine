const { gql } = require ('apollo-server-express'); 
const { merge } = require ('lodash');
const userTypeDefs = require ('./user'); 
// const postTypeDefs = require ('./post'); 
const userResolvers = require ('./userResolvers'); 
// const postResolvers = require ('./postResolvers'); 

const baseTypeDefs = gql`
    type Query{ 
        _empty: String
    }
    type Mutation{ 
        _empty: String
    }
`; 

const typeDefs = [baseTypeDefs, userTypeDefs, postTypeDefs]; 

const resolvers = merge (userResolvers, postResolvers); 

module.exports = { 
    typeDefs, 
    resolvers,
}; 
