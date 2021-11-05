const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID!
    title: String!
  }

  type Order {
    _id: ID!
    userId: User
    products: [Product]
    purchaseDate: String!
    amount: Int
    postageAddress: String!
  }

  type Product {
    _id: ID!
    title: String!
    description: String!
    image: String!
    category: Category
    price: Float
    inStock: Boolean
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    addProduct(_id: ID!, title: String!, description: String!, image: String!, category: String!, price: Float, inStock: Boolean): Product
    updateUser(username: String, email: String, password: String): User
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;