const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const { graphqlUploadExpress } = require('graphql-upload');
const server = new ApolloServer({ typeDefs, resolvers, context: authMiddleware });
const express = require('express');
const db = require('./config/connection');
const path = require('path');
const PORT = process.env.PORT;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(graphqlUploadExpress());
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


async function startApolloServer(typeDefs, resolvers) {
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
        });
    });
}

startApolloServer(typeDefs, resolvers);