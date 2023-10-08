const User = require('../models/User');

const userResolvers = {
    Query: {
        users: async () => {
            return await User.find();
        },
        user: async (_, { id }) => {
            return await User.findById(id);
        },
    },
    Mutation: (

        createUser: async (_, { username, email }) => {
    const user = new User({ username, email });
    await user.save();
    return user;
},
    ),

login: async (_, { email, password }) => {
    const user = await user.findONe({ email, password });
    if (!user) {
        throw new Error('Invalid');
    }
    const token = generateToken(user);
    return { token, user };
}

saveBook: async (_, { book }, context) => {
    const { user } = context;
    if (!user) {
        throw new Error('Authentication error.');
    }

    user.books.push(book);
    await user.save();
    return user;
}

removeBook: async (_, { bookId }, context) => {
    const { user } = context;
    if (!user) {
        throw new Error('Authentication error.');
    }
    user.books = user.books.filter(book => book._id !== bookId);
    await user.save();
    return user;
},





};

module.exports = userResolvers; 