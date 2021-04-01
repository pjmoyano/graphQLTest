import crypto from 'crypto'

class Friend {
    constructor(id, { firstName, lastName, gender, age, email, contacts}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.email = email;
        this.contacts = contacts;
    }
}

const friendDataBase = {};

//resolver maps
export const resolvers = { 
    Query: {
        getFriend: ({ id }) => {
            return new Friend(id, friendDataBase[id]);
        },
    },
    Mutation: {
        createFriend: ({input}) => {
            let id = crypto.randomBytes(10).toString('hex');
            friendDataBase[id] = input;
            return new Friend(id, input);
            },
    },
};