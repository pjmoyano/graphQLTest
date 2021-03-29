import express from 'express';
import schema from './schema.js'
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get('/', (req,res) => {
    res.send('GraphQL is amazing!');
});

const root = { friend: () => {
    return {
        "id": 3546464,
        "firstName": "Pepe",
        "lastName": "Moyano",
        "gender": "Male",
        "email": "pp@pp.com"
    }
}};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, ()=>
    console.log('Running on server port localhost:8080/graphql')
);