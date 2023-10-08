const { gql } = require ('apollo-server-express'); 

const userTypeDefs = gql `
    type User { 
        _id: ID!
        username: String! 
        email: String!
    }

    extend type Query { 
        users: [User]
        user(id: ID!): User
    }

    extend type Mutation { 
        createUser(username: String!, email: String!): User

    }
`; 

module.exports = userTypeDefs; 
