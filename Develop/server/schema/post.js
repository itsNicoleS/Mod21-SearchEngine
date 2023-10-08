const User = require('..models/User');

const userResolvers = {
    Query: {
        users: async () => {
            return await User.find();
        }
        user: async (_, { id }) => {
            return wait User.findById(id);
        },

    },

    Mutation: {
        createUser: async (_, { username, email }) => {
            const user = new User({ username, email }):
                await user.save():
        return user;
    },
}, 

}; 