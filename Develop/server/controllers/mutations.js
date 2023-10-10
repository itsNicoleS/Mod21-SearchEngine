import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation LoginUser($email: String!, $password: String!){ 
        login(email: $email, paswword: $password){ 
            token 
            user { 
                _id
                username
                password
                email
                bookCount
                savedBooks { 
                    bookId
                    authors
                    title
                    description
                    image
                    link
                }
            }
        }
    }
`;

export const ADD_USER = gql`
mutation AddUser ($username: String!, $email: String!, $password:String!) { 
    addUser (username: $username, email: $email, password: $password){
        token 
        user { 
            _id
            username
            password
            email
            bookCount
            savedBooks { 
                bookId
                authors
                title
                description
                image
                link
            }
        }
    }
}
`;

export const SAVE_BOOK = gql`
mutation SaveBook($book: BookInput!){ 
    saveBook(book: $book){ 
        _id
        username
        password
        email
        bookCount
        savedBooks { 
            bookId
            authors
            title
            description
            image
            link
        }
    }
}
`;

export const REMOVE_BOOK = gql`
mutation RemoveBook($bookId: ID!) { 
    removeBook(bookId: $bookId) { 
        _id
        username
        password
        email
        bookCount
        savedBooks { 
            bookId
            authors
            title
            description
            image
            link
        }
    }
}
`; 