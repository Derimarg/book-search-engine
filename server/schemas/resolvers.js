// const { User, Book } = require('../models')
// const { signToken } = require('../utils/auth')
// const { AuthenticationError } = require('apollo-server-express');
const resolvers = {
    Query: {
      helloWorld: () => {
        return 'Hello world!';
      }
    }
  };
  
  module.exports = resolvers;